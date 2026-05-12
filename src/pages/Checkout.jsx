import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { useCart } from '../contexts/CartContext'

const STRIPE_PK = 'pk_live_51TCQACGjRXXBgdmTzfQQWRX5vOnTGmGwxUeQQeDonmx848L6wTsvMOEDIulNdlsEQlzVc2uF4HhruOoSDhNDEmRf00fclFRvIZ'

let stripePromise
function getStripe() {
  if (!stripePromise) stripePromise = loadStripe(STRIPE_PK)
  return stripePromise
}

// ─── Inner payment form (only rendered after Elements has clientSecret) ───
function PaymentForm({ form, totalPrice, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState('')
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setProcessing(true)
    setError('')

    const { error: submitError } = await elements.submit()
    if (submitError) { setError(submitError.message); setProcessing(false); return }

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/checkout/success',
        payment_method_data: {
          billing_details: {
            name: form.name,
            email: form.email,
            phone: form.phone,
          },
        },
      },
      redirect: 'if_required',
    })

    if (confirmError) {
      setError(confirmError.message)
      setProcessing(false)
    } else {
      onSuccess()
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-playfair text-luna-charcoal mb-6">Contact Information</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-luna-gray mb-1.5">Full Name *</label>
            <input type="text" name="name" value={form.name} onChange={form.handleChange} required
              className="w-full px-4 py-3 rounded-xl border border-luna-gold/20 bg-luna-cream text-luna-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-luna-gold/40" />
          </div>
          <div>
            <label className="block text-sm text-luna-gray mb-1.5">Email *</label>
            <input type="email" name="email" value={form.email} onChange={form.handleChange} required
              className="w-full px-4 py-3 rounded-xl border border-luna-gold/20 bg-luna-cream text-luna-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-luna-gold/40" />
          </div>
          <div>
            <label className="block text-sm text-luna-gray mb-1.5">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={form.handleChange}
              className="w-full px-4 py-3 rounded-xl border border-luna-gold/20 bg-luna-cream text-luna-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-luna-gold/40" />
          </div>
          <div>
            <label className="block text-sm text-luna-gray mb-1.5">Special Requests or Notes</label>
            <textarea name="notes" value={form.notes} onChange={form.handleChange} rows={3}
              className="w-full px-4 py-3 rounded-xl border border-luna-gold/20 bg-luna-cream text-luna-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-luna-gold/40 resize-none" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-6 sm:p-8">
        <h2 className="text-xl font-playfair text-luna-charcoal mb-6">Payment</h2>
        <div className="p-4 rounded-xl border border-luna-gold/20 bg-luna-cream">
          <PaymentElement />
        </div>
        {error && <p className="mt-3 text-sm text-red-500">{error}</p>}
      </div>

      <button type="submit" disabled={!stripe || processing}
        className="w-full bg-luna-midnight text-white font-semibold text-base py-3.5 rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed">
        {processing ? 'Processing…' : `Pay $${totalPrice.toFixed(2)}`}
      </button>

      <Link to="/cart" className="block text-center text-sm text-luna-gold hover:text-luna-gold-light transition-colors">
        ← Back to Cart
      </Link>
    </form>
  )
}

// ─── Main Checkout page ───
export default function Checkout() {
  const { items, totalItems, totalPrice, clearCart } = useCart()
  const [form, setForm] = useState({ name: '', email: '', phone: '', notes: '' })
  const [submitted, setSubmitted] = useState(false)
  const [clientSecret, setClientSecret] = useState(null)
  const [loadingPayment, setLoadingPayment] = useState(false)
  const [paymentError, setPaymentError] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSuccess = () => {
    setSubmitted(true)
    clearCart()
  }

  // Create PaymentIntent when items are present
  useEffect(() => {
    if (items.length === 0 || submitted) return
    let cancelled = false

    async function createIntent() {
      setLoadingPayment(true)
      setPaymentError('')
      try {
        const res = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items: items.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty })) }),
        })
        const data = await res.json()
        if (!res.ok) throw new Error(data.error || 'Failed to initialize payment')
        if (!cancelled) setClientSecret(data.clientSecret)
      } catch (err) {
        if (!cancelled) setPaymentError(err.message)
      } finally {
        if (!cancelled) setLoadingPayment(false)
      }
    }

    createIntent()
    return () => { cancelled = true }
  }, [items, submitted])

  // Empty cart
  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-luna-cream px-4">
        <div className="text-center max-w-md">
          <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto text-luna-gold/40 mb-6" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <h1 className="text-3xl font-playfair text-luna-charcoal mb-3">Nothing to Checkout</h1>
          <p className="text-luna-gray mb-8">Your cart is empty. Add some items first.</p>
          <Link to="/packages" className="inline-block bg-luna-midnight text-white px-7 py-3.5 font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Browse Packages
          </Link>
        </div>
      </div>
    )
  }

  // Success
  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-luna-cream px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 bg-luna-midnight/10 rounded-full flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10 text-luna-midnight" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h1 className="text-3xl font-playfair text-luna-charcoal mb-3">Payment Successful!</h1>
          <p className="text-luna-gray mb-2">Your order has been confirmed.</p>
          <p className="text-luna-gray mb-8">We'll be in touch within 24 hours.</p>
          <Link to="/" className="inline-block bg-luna-midnight text-white px-7 py-3.5 font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-luna-cream min-h-screen">
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Secure</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Checkout</h1>
          <p className="mt-4 text-luna-cream/60">{totalItems} item{totalItems !== 1 ? 's' : ''}</p>
        </div>
      </section>

      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Form */}
          <div className="lg:col-span-3">
            {loadingPayment && (
              <div className="bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-8 text-center">
                <div className="animate-spin w-8 h-8 border-2 border-luna-midnight border-t-transparent rounded-full mx-auto mb-4" />
                <p className="text-sm text-luna-gray">Preparing payment…</p>
              </div>
            )}
            {paymentError && (
              <div className="bg-white rounded-2xl border border-red-200 shadow-sm p-8 text-center">
                <p className="text-sm text-red-500 mb-2">{paymentError}</p>
                <p className="text-xs text-luna-gray">Try refreshing or adding items to your cart again.</p>
              </div>
            )}
            {clientSecret && (
              <Elements stripe={getStripe()} options={{ clientSecret }}>
                <PaymentForm form={{ ...form, handleChange }} totalPrice={totalPrice} onSuccess={handleSuccess} />
              </Elements>
            )}
          </div>

          {/* Right: Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-6 sm:p-8 sticky top-28">
              <h2 className="text-lg font-playfair text-luna-charcoal mb-6">Order Summary</h2>
              <div className="space-y-4">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-luna-charcoal truncate">{item.name}</p>
                      <p className="text-xs text-luna-gray">Qty: {item.qty}</p>
                    </div>
                    <span className="text-sm text-luna-charcoal font-medium ml-4">${(item.price * item.qty).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-luna-gold/10 mt-6 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-luna-gray">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-playfair text-luna-charcoal pt-2 border-t border-luna-gold/10">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-luna-gray">
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
                <span>Secured by Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
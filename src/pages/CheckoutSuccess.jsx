import { Link } from 'react-router-dom'

export default function CheckoutSuccess() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-luna-cream px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 mx-auto mb-6 bg-luna-midnight/10 rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-10 h-10 text-luna-midnight" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h1 className="text-3xl font-playfair text-luna-charcoal mb-3">Order Placed!</h1>
        <p className="text-luna-gray mb-2">Your order has been confirmed.</p>
        <p className="text-luna-gray mb-8">We'll be in touch within 24 hours.</p>
        <Link to="/"
          className="inline-block bg-luna-midnight text-white px-7 py-3.5 font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
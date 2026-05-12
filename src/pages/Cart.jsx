import { Link } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'

export default function Cart() {
  const { items, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-luna-cream px-4">
        <div className="text-center max-w-md">
          <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto text-luna-gold/40 mb-6" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M6.5 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3.5-4H6.5zM3 6h18" />
            <path d="M16 10a4 4 0 01-8 0" />
          </svg>
          <h1 className="text-3xl font-playfair text-luna-charcoal mb-3">Your Cart is Empty</h1>
          <p className="text-luna-gray mb-8">Looks like you haven't added any products yet.</p>
          <Link to="/packages"
            className="inline-block bg-luna-gold text-luna-dark px-8 py-3 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-luna-gold-light transition-colors">
            Browse Packages
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-luna-cream min-h-screen">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-luna-dark via-luna-midnight to-luna-dark">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Review</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Your Cart</h1>
          <p className="mt-4 text-luna-cream/60">{totalItems} item{totalItems !== 1 ? 's' : ''} · ${totalPrice.toFixed(2)} total</p>
        </div>
      </section>

      {/* Cart items */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {items.map(item => (
            <div key={item.id}
              className="bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-playfair text-luna-charcoal">{item.name}</h3>
                <p className="text-sm text-luna-gray mt-1">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-luna-gold/20 rounded-full overflow-hidden">
                  <button onClick={() => updateQty(item.id, item.qty - 1)}
                    className="px-3 py-1.5 text-luna-gray hover:text-luna-charcoal hover:bg-luna-gold/5 transition-colors text-sm">
                    −
                  </button>
                  <span className="px-3 text-sm font-medium text-luna-charcoal min-w-[2rem] text-center">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)}
                    className="px-3 py-1.5 text-luna-gray hover:text-luna-charcoal hover:bg-luna-gold/5 transition-colors text-sm">
                    +
                  </button>
                </div>
                <span className="text-luna-charcoal font-medium min-w-[5rem] text-right">${(item.price * item.qty).toFixed(2)}</span>
                <button onClick={() => removeItem(item.id)}
                  className="p-2 text-luna-gray hover:text-red-500 transition-colors" aria-label="Remove">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-10 bg-white rounded-2xl border border-luna-gold/5 shadow-sm p-6 sm:p-8">
          <div className="space-y-3">
            <div className="flex justify-between text-luna-gray text-sm">
              <span>Subtotal ({totalItems} item{totalItems !== 1 ? 's' : ''})</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-luna-gray text-sm">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t border-luna-gold/10 pt-3 flex justify-between text-lg font-playfair text-luna-charcoal">
              <span>Estimated Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/checkout"
              className="flex-1 text-center bg-luna-gold text-luna-dark py-3.5 rounded-full text-sm tracking-wider uppercase font-medium hover:bg-luna-gold-light transition-colors">
              Proceed to Checkout
            </Link>
            <button onClick={clearCart}
              className="px-6 py-3.5 border border-luna-gold/30 text-luna-gray rounded-full text-sm tracking-wider uppercase hover:bg-luna-gold/5 transition-colors">
              Clear Cart
            </button>
          </div>
          <Link to="/packages"
            className="block mt-4 text-center text-sm text-luna-gold hover:text-luna-gold-light transition-colors">
            ← Continue Shopping
          </Link>
        </div>
      </section>
    </div>
  )
}
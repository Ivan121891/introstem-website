import { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const packages = [
  {
    id: 'chicago-glow',
    name: 'The Chicago Glow',
    price: '399',
    original: '499',
    desc: 'The ultimate introduction. HydraFacial MD combined with LED therapy for luminous, even-toned skin.',
    items: ['HydraFacial MD', 'LED Light Therapy (Red + Blue)', 'Custom Enzyme Mask'],
    popular: true,
    image: 'facial-1.jpg',
  },
  {
    id: 'magnificent-mile',
    name: 'The Magnificent Mile',
    price: '549',
    original: '690',
    desc: 'Advanced resurfacing for dramatic results. Micro-needling paired with a medical-grade peel for deep collagen renewal.',
    items: ['Signature Micro-Needling', 'Medical-Grade Chemical Peel', 'Soothing Recovery Mask'],
    popular: false,
    image: 'facial-2.jpg',
  },
  {
    id: 'laser-renewal',
    name: 'Laser Renewal Course',
    price: '899',
    original: '1095',
    desc: 'A three-session Laser Genesis series for lasting texture and tone improvement.',
    items: ['3x Laser Genesis Sessions', 'Custom Home-Care Regimen', 'Progress Photos & Analysis'],
    popular: false,
    image: 'facial-4.jpg',
  },
  {
    id: 'monthly-membership',
    name: 'Monthly Membership',
    price: '129',
    original: null,
    desc: 'One advanced treatment per month plus exclusive member perks. Pause or cancel anytime.',
    items: ['1 Treatment / Month (up to $169 value)', '20% off add-on services', '15% off retail products', 'Free birthday treatment'],
    popular: false,
    monthly: true,
    image: 'spa-1.jpg',
  },
  {
    id: 'clear-skin',
    name: 'Clear Skin Protocol',
    price: '399',
    original: '499',
    desc: 'Targeted clinical approach for acne-prone and congested skin. Calms inflammation and prevents future breakouts.',
    items: ['Medical-Grade Salicylic Peel', 'LED Blue Light Therapy', 'Soothing Clay Mask', 'Home-Care Starter Kit'],
    popular: false,
    image: 'facial-5.jpg',
  },
  {
    id: 'age-defy',
    name: 'Age-Defy Ritual',
    price: '399',
    original: '500',
    desc: 'Advanced collagen induction with PRP micro-needling plus radiofrequency eye treatment.',
    items: ['PRP Micro-Needling', 'Radiofrequency Eye Tightening', 'Collagen Sheet Mask'],
    popular: false,
    image: 'facial-6.jpg',
  },
  {
    id: 'couples-retreat',
    name: 'Couples Spa Retreat',
    price: '699',
    original: '895',
    desc: 'A shared experience on the Magnificent Mile. Choose any two treatments for a side-by-side session in our couples suite.',
    items: ['2 Customized Treatments', 'Champagne or Sparkling Water', '20% off retail take-home'],
    popular: false,
    image: 'facial-3.jpg',
  },
]

export default function Packages() {
  const { addItem } = useCart()
  const [added, setAdded] = useState({})

  const handleAdd = (pkg) => {
    addItem({
      id: pkg.id,
      name: pkg.name,
      price: Number(pkg.price),
    })
    setAdded(prev => ({ ...prev, [pkg.id]: true }))
    setTimeout(() => setAdded(prev => ({ ...prev, [pkg.id]: false })), 2000)
  }
  return (
    <div>
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Value</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Packages and Memberships</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">
            Save more when you bundle. Our curated packages pair perfectly together, and our membership makes monthly self-care effortless.
          </p>
        </div>
      </section>

      <section className="py-24 bg-luna-cream">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {packages.map(pkg => (
              <div key={pkg.name} className={`relative rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                pkg.popular
                  ? 'bg-luna-dark text-luna-cream border-luna-gold/30 shadow-xl scale-105 lg:scale-105'
                  : 'bg-white text-luna-charcoal border-luna-gold/5 shadow-sm hover:shadow-md'
              }`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={'/images/' + pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  {pkg.popular && (
                    <div className="bg-luna-gold text-luna-dark text-xs tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full inline-block mb-2">Most Popular</div>
                  )}
                  {pkg.monthly && (
                    <div className="bg-luna-mauve text-white text-xs tracking-widest uppercase font-semibold px-3 py-0.5 rounded-full inline-block mb-2">Membership</div>
                  )}
                  <h3 className={`text-base font-playfair ${pkg.popular ? 'text-luna-cream' : 'text-luna-charcoal'}`}>{pkg.name}</h3>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className={`text-2xl font-playfair ${pkg.popular ? 'text-luna-gold' : 'text-luna-charcoal'}`}>${pkg.price}</span>
                    {pkg.original && <span className="text-xs line-through text-luna-gray">${pkg.original}</span>}
                    {!pkg.monthly && <span className="text-xs text-luna-gray">/ total</span>}
                    {pkg.monthly && <span className="text-xs text-luna-gray">/ month</span>}
                  </div>
                  <p className={`mt-2 text-xs leading-relaxed ${pkg.popular ? 'text-luna-cream/60' : 'text-luna-gray'}`}>{pkg.desc}</p>
                  <ul className="mt-3 space-y-1.5">
                    {pkg.items.map(item => (
                      <li key={item} className="flex items-start gap-1.5 text-xs">
                        <svg viewBox="0 0 24 24" className={`w-3 h-3 mt-0.5 shrink-0 ${pkg.popular ? 'text-luna-gold' : 'text-luna-mauve'}`} fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        <span className={pkg.popular ? 'text-luna-cream/70' : 'text-luna-gray'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleAdd(pkg)}
                    className={`block w-full text-center py-2.5 mt-4 rounded-[8px] text-sm font-semibold transition-all duration-200 hover:brightness-110 ${
                      added[pkg.id]
                        ? 'bg-green-600 text-white'
                        : 'bg-luna-midnight text-white shadow-[0_4px_12px_rgba(13,82,82,0.25)]'
                    }`}>
                    {added[pkg.id] ? 'Added ✓' : pkg.monthly ? 'Add to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-luna-gold/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs text-luna-gray leading-relaxed">
            * Package prices are pre-tax. Packages must be used within 6 months of purchase and are non-refundable but transferable.
            Membership auto-renews monthly and can be canceled anytime with 30 days notice.
            Gift cards also available — contact us for details.
          </p>
        </div>
      </section>
    </div>
  )
}
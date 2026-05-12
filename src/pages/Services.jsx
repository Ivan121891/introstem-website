import { Link } from 'react-router-dom'

const allServices = [
  {
    name: '24K Nano Gold Recovery Facial',
    desc: 'Indulge in the luxury of 24K gold as it deeply nourishes and revitalizes your skin. Let your complexion soak up the radiance, leaving it soft, smooth, and beautifully illuminated.',
    price: '$175',
    duration: '60 min',
    tag: 'Luxury',
    image: 'facial-1.jpg',
  },
  {
    name: 'Oxygen Jet Facial',
    desc: 'Give your skin a breath of fresh air with this ultra-hydrating facial that instantly refreshes and soothes. An oxygen boost leaves your skin looking plump, youthful, and luminous.',
    price: '$145',
    duration: '50 min',
    tag: 'Hydrating',
    image: 'facial-2.jpg',
  },
  {
    name: 'Collagen Regeneration Facial',
    desc: 'Awaken your skin\'s natural vibrancy with this collagen-enhancing treatment. Feel the difference as your skin regains its smooth, supple, and youthful bounce.',
    price: '$155',
    duration: '55 min',
    tag: 'Anti-Aging',
    image: 'facial-3.jpg',
  },
  {
    name: 'Cryogenic Correction',
    desc: 'A cooling wave of freshness tightens, brightens, and revitalizes your complexion in an instant. Say goodbye to dullness and hello to a firmer, more radiant look.',
    price: '$165',
    duration: '50 min',
    tag: 'Firming',
    image: 'facial-4.jpg',
  },
  {
    name: 'Therapeutic Heat Facial',
    desc: 'Let soothing warmth melt away stress while nourishing your skin from within. This deeply relaxing facial boosts hydration, leaving your complexion silky-smooth and radiant.',
    price: '$135',
    duration: '60 min',
    tag: 'Relaxing',
    image: 'facial-5.jpg',
  },
  {
    name: 'Lymphatic Facial Lift',
    desc: 'Detoxify, de-puff, and enhance circulation for a naturally sculpted look. This gentle yet effective facial helps release tension, leaving your skin lifted and refreshed.',
    price: '$175',
    duration: '65 min',
    tag: 'Sculpting',
    image: 'facial-6.jpg',
  },
  {
    name: 'LED Light Therapy',
    desc: 'Recharge your skin with the power of light to brighten, balance, and restore your glow. This non-invasive treatment helps refresh your complexion, leaving it smooth and luminous.',
    price: '$85',
    duration: '30 min',
    tag: 'Therapeutic',
    image: 'spa-1.jpg',
  },
  {
    name: 'Brightening Facial for Hyper-Pigmented Skin',
    desc: 'Say goodbye to dullness and uneven skin tone with this radiance-boosting facial. Carefully crafted to brighten, balance, and refresh, it helps bring out your skin\'s natural glow.',
    price: '$145',
    duration: '55 min',
    tag: 'Brightening',
    image: 'facial-2.jpg',
  },
]

export default function Services() {
  return (
    <div>
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Treatments</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Facial Services</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">
            From 24K gold recovery facials to advanced LED light therapy — every service is customized to your skin's unique needs.
          </p>
        </div>
      </section>

      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allServices.map(s => (
              <div key={s.name} className="group bg-white rounded-2xl overflow-hidden border border-luna-gold/5 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={'/images/' + s.image}
                    alt={s.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-playfair text-luna-charcoal">{s.name}</h3>
                      <span className="inline-block mt-2 text-xs tracking-wider uppercase px-3 py-1 rounded-full bg-luna-blush text-luna-mauve">{s.tag}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-playfair text-luna-gold">{s.price}</p>
                      <p className="text-xs text-luna-gray">{s.duration}</p>
                    </div>
                  </div>
                  <p className="text-sm text-luna-gray leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-luna-cream">Not Sure Which Treatment Is Right for You?</h2>
          <p className="mt-3 text-luna-cream/60">We offer complimentary skin consultations. Let our estheticians recommend the perfect service for your skin goals.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Schedule a Consultation
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

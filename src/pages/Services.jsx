import { Link } from 'react-router-dom'

const allServices = [
  {
    name: 'Signature Micro-Needling',
    desc: 'Stimulate your skin\'s natural collagen production with precision micro-needling. Reduces fine lines, scars, and enlarged pores for a smoother, firmer complexion.',
    price: '$199',
    duration: '60 min',
    tag: 'Collagen',
    image: 'facial-1.jpg',
  },
  {
    name: 'HydraFacial MD',
    desc: 'The gold standard in medical-grade facials. Deep cleanse, exfoliate, extract, and infuse with antioxidants and hyaluronic acid for instant, visible radiance.',
    price: '$169',
    duration: '45 min',
    tag: 'Hydrating',
    image: 'facial-2.jpg',
  },
  {
    name: 'Laser Genesis',
    desc: 'Non-ablative laser therapy that gently targets redness, uneven texture, and enlarged pores. Warm and relaxing — with zero downtime.',
    price: '$249',
    duration: '45 min',
    tag: 'Laser',
    image: 'facial-3.jpg',
  },
  {
    name: 'Medical-Grade Chemical Peel',
    desc: 'Customized peeling solutions to address hyperpigmentation, acne scarring, and dullness. Visible improvement in as little as one session.',
    price: '$179',
    duration: '45 min',
    tag: 'Resurfacing',
    image: 'facial-4.jpg',
  },
  {
    name: 'LED Light Therapy',
    desc: 'Recharge your skin with clinical-grade LED wavelengths. Red light for anti-aging, blue light for acne — or both for a comprehensive boost.',
    price: '$89',
    duration: '25 min',
    tag: 'Therapeutic',
    image: 'facial-5.jpg',
  },
  {
    name: 'PRP Microneedling (Vampire Facial)',
    desc: 'Harness your body\'s own growth factors with platelet-rich plasma combined with micro-needling. Dramatic collagen induction for advanced rejuvenation.',
    price: '$399',
    duration: '75 min',
    tag: 'Advanced',
    image: 'facial-6.jpg',
  },
  {
    name: 'HydraFacial + LED Boost',
    desc: 'Our most popular combination. Start with the HydraFacial MD for deep cleansing and hydration, then follow with LED therapy to lock in the glow.',
    price: '$229',
    duration: '60 min',
    tag: 'Combination',
    image: 'spa-1.jpg',
  },
  {
    name: 'Dermaplaning + Brightening Mask',
    desc: 'Gentle exfoliation that removes peach fuzz and dead skin cells, followed by a radiance-boosting enzyme mask. Smooth, luminous, photo-ready skin.',
    price: '$129',
    duration: '40 min',
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
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Medical Aesthetic Services</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">
            From advanced laser therapy to clinical-grade peels — every treatment is customized to your unique skin goals.
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
          <p className="mt-3 text-luna-cream/60">Schedule a complimentary consultation and let our team recommend the perfect service for your skin goals.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Schedule a Consultation
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
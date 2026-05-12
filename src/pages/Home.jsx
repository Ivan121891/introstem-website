import { Link } from 'react-router-dom'

const services = [
  { name: '24K Nano Gold Recovery Facial', desc: 'Deeply nourish and revitalize your skin with 24K gold. Soft, smooth, beautifully illuminated.', price: '$175' },
  { name: 'Oxygen Jet Facial', desc: 'Ultra-hydrating facial that instantly refreshes and soothes. Plump, youthful, luminous.', price: '$145' },
  { name: 'Collagen Regeneration Facial', desc: 'Restore smooth, supple, and youthful bounce with collagen-enhancing treatment.', price: '$155' },
  { name: 'Cryogenic Correction', desc: 'Cooling wave tightens, brightens, and revitalizes your complexion in an instant.', price: '$165' },
]

const testimonials = [
  { quote: 'My skin has never looked this radiant. The facial changed everything -- I am a client for life.', name: 'Sarah M.', title: 'Regular since 2022' },
  { quote: 'Studio Luna is pure magic. The atmosphere is so calming, and my complexion is glowing after every visit.', name: 'Jessica K.', title: 'Monthly member' },
  { quote: 'I was nervous about my first facial, but the estheticians made me feel so comfortable. The results were incredible.', name: 'Amanda R.', title: 'New client' },
]

const featuredPackages = [
  { name: 'The Radiance Routine', price: '$375', original: '$470', desc: 'Resurfacing + hydration for dramatic results. Our most popular bundle.', image: 'facial-2.jpg' },
  { name: 'The Full Moon Ritual', price: '$550', original: '$690', desc: 'Complete skin transformation with advanced treatments.', image: 'facial-4.jpg' },
  { name: 'Monthly Membership', price: '$99/mo', desc: 'One facial per month plus 15% off add-ons and retail. Cancel anytime.', image: 'spa-1.jpg' },
  { name: 'Couples Moonlight Retreat', price: '$750', original: '$950', desc: 'Romantic spa experience for two in a private suite.', image: 'spa-2.jpg' },
]

const stats = [
  { number: '12+', label: 'Years Experience' },
  { number: '5,000+', label: 'Happy Clients' },
  { number: '15+', label: 'Advanced Treatments' },
  { number: '98%', label: 'Satisfaction Rate' },
]

const benefits = [
  { title: 'Licensed Estheticians', desc: 'Every treatment is performed by certified professionals with years of advanced training.', icon: 'shield' },
  { title: 'Medical-Grade Products', desc: 'We use only the highest-quality, clinical-grade skincare products for visible results.', icon: 'droplet' },
  { title: 'Personalized Plans', desc: 'No two faces are alike. Every facial is customized to your unique skin concerns.', icon: 'heart' },
  { title: 'Relaxing Atmosphere', desc: 'From candle-lit rooms to soothing music, every detail is designed for your comfort.', icon: 'sparkles' },
]

const gallery = [
  '/images/facial-1.jpg', '/images/facial-2.jpg', '/images/facial-3.jpg',
  '/images/facial-4.jpg', '/images/facial-5.jpg', '/images/facial-6.jpg',
]

export default function Home() {
  return (
    <div>
      {/* ─────── HERO ─────── */}
      <section className="relative overflow-hidden bg-luna-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
            {/* Left: Copy */}
            <div className="flex items-center px-4 sm:px-8 lg:px-12 py-20">
              <div className="w-full max-w-xl">
                <div className="inline-flex items-center px-4 py-1.5 bg-luna-gold/10 border border-luna-gold/20 rounded-full text-luna-mauve text-xs tracking-wider uppercase font-medium mb-6">
                  Daly City's Premier Facial Spa
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair text-luna-charcoal leading-[1.1]">
                  Your Skin Deserves<br /><span className="text-gradient-gold">the Moon</span>
                </h1>
                <p className="mt-6 text-base text-luna-gray leading-relaxed max-w-lg">
                  At Studio Luna, we craft personalized facial experiences that restore, renew, and reveal your natural radiance. Advanced aesthetic treatments in a warm, tranquil setting.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
                    Explore Services
                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                  <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#e8e1d5] text-luna-dark font-semibold text-base rounded-[8px] bg-transparent hover:bg-luna-blush transition-all duration-200">
                    Book Now
                  </Link>
                </div>
                {/* Stats row */}
                <div className="mt-12 grid grid-cols-4 gap-6">
                  {stats.slice(0, 4).map(s => (
                    <div key={s.label}>
                      <p className="text-2xl sm:text-3xl font-playfair text-gradient-gold-light">{s.number}</p>
                      <p className="mt-1 text-xs text-luna-gray leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative min-h-[50vh] lg:min-h-full overflow-hidden">
              <img src="/images/hero-portrait.jpg" alt="Luxury facial spa experience at Studio Luna"
                className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-luna-cream/20" />
              {/* Consultation card overlay */}
              <div className="absolute bottom-8 left-8 right-8 lg:left-auto lg:w-72">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl border border-[#e8e1d5] shadow-lg p-6">
                  <p className="text-sm font-semibold text-luna-charcoal">Start Your <span className="text-gradient-gold">Glow Journey</span></p>
                  <p className="mt-1 text-xs text-luna-gray">Complimentary 15-min skin analysis.</p>
                  <Link to="/contact"
                    className="mt-3 block w-full text-center py-2.5 bg-luna-midnight text-white font-semibold text-sm rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
                    Book Free Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── WHY CHOOSE US ─────── */}
      <section className="py-24 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.08)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.06)_0%,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Why Choose Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-cream">Built for Your <span className="text-gradient-gold">Glow</span></h2>
            <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">Every detail is designed with your comfort and results in mind.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map(b => (
              <div key={b.title} className="text-center p-6 rounded-2xl border border-luna-gold/10 bg-luna-midnight/50">
                <div className="w-12 h-12 rounded-full bg-luna-gold/10 mx-auto flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-luna-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {b.icon === 'shield' ? <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /> :
                     b.icon === 'droplet' ? <><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></> :
                     b.icon === 'heart' ? <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /> :
                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />}
                  </svg>
                </div>
                <h3 className="text-base font-playfair text-luna-cream">{b.title}</h3>
                <p className="mt-2 text-xs text-luna-cream/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── SERVICES PREVIEW ─────── */}
      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Treatments</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-dark">Signature Facial Services</h2>
            <p className="mt-4 text-luna-gray max-w-xl mx-auto">Each treatment is tailored to your unique skin concerns, combining clinical techniques with holistic care.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <div key={s.name} className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-luna-gold/5">
                <div className="w-12 h-12 rounded-full bg-luna-blush flex items-center justify-center mb-5 group-hover:bg-luna-gold/20 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 text-luna-mauve" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-playfair text-luna-charcoal">{s.name}</h3>
                <p className="mt-2 text-sm text-luna-gray leading-relaxed">{s.desc}</p>
                <p className="mt-4 text-luna-gold font-semibold">{s.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 text-luna-mauve hover:text-luna-dark transition-colors text-sm tracking-wider uppercase">
              View All Treatments
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────── FEATURED PACKAGES ─────── */}
      <section className="py-24 bg-luna-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Save More</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-dark">Featured Packages</h2>
            <p className="mt-4 text-luna-gray max-w-xl mx-auto">Bundle and save on curated combinations of our most beloved treatments.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPackages.map(pkg => (
              <div key={pkg.name} className="group bg-luna-cream rounded-2xl overflow-hidden border border-luna-gold/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={'/images/' + pkg.image} alt={pkg.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-playfair text-luna-charcoal">{pkg.name}</h3>
                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-2xl font-playfair text-luna-gold">{pkg.price}</span>
                    {pkg.original && <span className="text-xs line-through text-luna-gray">{pkg.original}</span>}
                  </div>
                  <p className="mt-2 text-xs text-luna-gray leading-relaxed">{pkg.desc}</p>
                  <Link to="/packages" className="mt-4 block w-full text-center py-2.5 rounded-[8px] text-sm font-semibold bg-luna-midnight text-white shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── ABOUT PREVIEW ─────── */}
      <section className="py-24 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Our Story</span>
              <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-cream">Where Light Meets Skin</h2>
              <p className="mt-6 text-luna-cream/60 leading-relaxed">
                Studio Luna Body Sculpting was born from a simple belief -- that skincare is self-care. Our team of licensed estheticians brings years of experience and a deep passion for helping you feel beautiful in your own skin.
              </p>
              <p className="mt-4 text-luna-cream/60 leading-relaxed">
                We use only the highest-quality products and cutting-edge technology, all wrapped in a warm, tranquil atmosphere designed to melt your stress away.
              </p>
              <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-luna-gold hover:text-luna-gold-light transition-colors text-sm tracking-wider uppercase">
                Learn More About Us
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-luna-midnight to-luna-dark border border-luna-gold/10 p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-luna-cream/40 text-sm italic max-w-xs mx-auto">&ldquo;Skincare is not just about appearance -- it's a ritual of self-love and renewal.&rdquo;</p>
                  <p className="mt-3 text-luna-gold text-sm font-playfair">-- Studio Luna Philosophy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────── TESTIMONIALS ─────── */}
      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-dark">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white rounded-xl p-8 border border-luna-gold/5 shadow-sm">
                <svg className="w-8 h-8 text-luna-gold/30 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-luna-charcoal/80 text-sm leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-4 border-t border-luna-gold/10">
                  <p className="text-sm font-semibold text-luna-charcoal">{t.name}</p>
                  <p className="text-xs text-luna-gray">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── INSTAGRAM / GALLERY ─────── */}
      <section className="py-24 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">Follow Us</span>
            <h2 className="mt-3 text-4xl sm:text-5xl font-playfair text-luna-cream">Behind the Glow</h2>
            <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">Follow @studioluna on Instagram for behind-the-scenes, treatment highlights, and glowing transformations.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {gallery.map((src, i) => (
              <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-xl">
                <img src={src} alt={`Studio Luna treatment ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-luna-dark/0 group-hover:bg-luna-dark/40 transition-all duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                    <path d="M17.5 6.5h.01" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─────── FINAL CTA ─────── */}
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair text-luna-cream">Ready to <span className="text-gradient-gold">Glow</span>?</h2>
          <p className="mt-4 text-luna-cream/60">Your journey to radiant skin begins with a single appointment. Let us take care of the rest.</p>
          <Link to="/contact" className="mt-10 inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Book Your Appointment
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
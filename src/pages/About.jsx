import { Link } from 'react-router-dom'

const team = [
  { name: 'Elena Vasquez', role: 'Founder and Lead Esthetician',
    bio: 'With over 12 years of experience in luxury skincare, Elena founded Studio Luna to create a space where self-care meets clinical excellence. She specializes in advanced facials and skin transformation.' },
  { name: 'Maya Chen', role: 'Senior Esthetician',
    bio: 'Maya brings 8 years of expertise in holistic skincare and facial massage techniques. Her gentle touch and intuitive understanding of skin make every treatment feel like a ritual.' },
  { name: 'Sophie Laurent', role: 'Licensed Esthetician',
    bio: 'Sophie specializes in corrective treatments including 24K gold facials and cryogenic correction. Her keen eye for detail helps clients achieve lasting results.' },
]

const values = [
  { title: 'Advanced Technology', desc: 'We use cutting-edge aesthetic technology to provide our clients with fast, visible results requiring little to no downtime.' },
  { title: 'Customized Programs', desc: 'No two faces are the same. Every treatment is customized to your skin type, concerns, and personal goals.' },
  { title: 'Natural Results', desc: 'We believe in enhancing your natural beauty. Our treatments deliver subtle, natural-looking results that make you feel like the best version of yourself.' },
  { title: 'Beauty Concierge', desc: 'From the moment you step in, a personal beauty specialist is dedicated to making your experience with us unparalleled.' },
]

export default function About() {
  return (
    <div>
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">About Us</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Our Story</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">Behind every glowing complexion is a space of trust, expertise, and genuine care.</p>
        </div>
      </section>

      <section className="py-24 bg-luna-blush">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair text-luna-charcoal leading-tight">A Sanctuary for <span className="text-luna-gold">Radiant Skin</span></h2>
              <div className="mt-6 space-y-4 text-luna-gray leading-relaxed">
                <p>Studio Luna Body Sculpting was founded with a vision that went beyond skincare. Founder Elena Vasquez wanted to create a place where people could escape the noise of everyday life and reconnect with themselves.</p>
                <p>Located at 6371 Mission St in Daly City, our studio combines clinical precision with a spa-like serenity. We believe skincare is self-care, and every treatment should feel as good as it looks.</p>
                <p>Our estheticians are not just technicians -- they are artists who listen. Whether you are looking for deep cleansing, anti-aging support, or a moment of peace, we tailor each session to your unique needs.</p>
                <p>At Studio Luna, we do not just treat skin. We nurture confidence, one glow at a time.</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-luna-midnight to-luna-dark border border-luna-gold/10 flex items-center justify-center p-12">
                <div className="text-center">
                  <img src="/images/logo.webp" alt="Studio Luna" className="h-20 mx-auto mb-6 opacity-70" />
                  <div className="w-full h-px bg-luna-gold/20 my-6" />
                  <p className="text-luna-cream/30 text-sm italic max-w-xs mx-auto">"In the middle of difficulty lies opportunity for radiant transformation."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-luna-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Our Philosophy</span>
            <h2 className="mt-3 text-4xl font-playfair text-luna-charcoal">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(v => (
              <div key={v.title} className="text-center p-6">
                <div className="w-14 h-14 rounded-full bg-luna-blush mx-auto flex items-center justify-center mb-5">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 text-luna-mauve" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-lg font-playfair text-luna-charcoal">{v.title}</h3>
                <p className="mt-2 text-sm text-luna-gray">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-luna-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-luna-mauve text-sm tracking-[0.2em] uppercase">Team</span>
            <h2 className="mt-3 text-4xl font-playfair text-luna-charcoal">Meet Our Estheticians</h2>
            <p className="mt-3 text-luna-gray max-w-xl mx-auto">Passionate, experienced, and dedicated to your skincare journey.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map(member => (
              <div key={member.name} className="bg-white rounded-2xl p-8 border border-luna-gold/5 shadow-sm text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-luna-gold/20 to-luna-mauve/20 flex items-center justify-center mb-5">
                  <span className="text-2xl font-playfair text-luna-mauve">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-lg font-playfair text-luna-charcoal">{member.name}</h3>
                <p className="text-sm text-luna-mauve mt-1">{member.role}</p>
                <p className="mt-4 text-sm text-luna-gray leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair text-luna-cream">Experience the Studio Luna Difference</h2>
          <p className="mt-3 text-luna-cream/60">Come in for a complimentary consultation and see why our clients trust us with their skin.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Book Your Visit
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}

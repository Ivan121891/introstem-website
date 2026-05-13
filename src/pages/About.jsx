import { Link } from 'react-router-dom'

const team = [
  { name: 'Dr. Sarah Chen', role: 'Medical Director',
    bio: 'Board-certified with 15+ years in aesthetic medicine, Dr. Chen brings clinical rigor and an artist\'s eye. She oversees all treatment protocols and customizes every plan to each client\'s unique needs.' },
  { name: 'Maya Williams', role: 'Lead Aesthetician',
    bio: 'Maya has spent a decade perfecting advanced facial techniques — from micro-needling to chemical peels. Her gentle touch and deep knowledge of skin biology put every client at ease.' },
  { name: 'James Park', role: 'Clinical Specialist',
    bio: 'James specializes in laser therapies and non-invasive body contouring. He is known for his thorough consultations and ability to explain complex treatments in plain, reassuring terms.' },
]

const values = [
  { title: 'Evidence-Based Care', desc: 'Every treatment we offer is backed by clinical research and performed with FDA-cleared technology. No gimmicks — just results.' },
  { title: 'Customized Programs', desc: 'Your skin is unique, and your treatment plan should be too. We take the time to understand your goals before recommending a single procedure.' },
  { title: 'Natural Results', desc: 'We believe in enhancing what is already there. Our treatments deliver subtle, natural-looking results that make you feel like the best version of yourself.' },
  { title: 'Comfort & Confidence', desc: 'From the moment you step into our Michigan Avenue studio, our goal is to make you feel informed, comfortable, and excited about your journey.' },
]

export default function About() {
  return (
    <div>
      <section className="py-20 bg-gradient-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(212,162,84,0.06)_0%,transparent_45%),radial-gradient(circle_at_15%_85%,rgba(13,82,82,0.04)_0%,transparent_45%)]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="text-luna-gold-light text-sm tracking-[0.2em] uppercase">About Us</span>
          <h1 className="mt-3 text-5xl sm:text-6xl font-playfair text-luna-cream">Our Story</h1>
          <p className="mt-4 text-luna-cream/60 max-w-xl mx-auto">Where clinical excellence meets genuine, personalized care on Chicago's Magnificent Mile.</p>
        </div>
      </section>

      <section className="py-24 bg-luna-blush">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-playfair text-luna-charcoal leading-tight">Advanced Aesthetics, <span className="text-luna-gold">Personal Touch</span></h2>
              <div className="mt-6 space-y-4 text-luna-gray leading-relaxed">
                <p>Introstem was founded with a clear vision: to bring Chicago a new standard of medical-grade aesthetic care — one that combines cutting-edge technology with genuine warmth and personal attention.</p>
                <p>Located at 520 N. Michigan Ave. in the heart of the Magnificent Mile, our studio was designed to feel like a sanctuary from the energy of city life. Every detail, from our treatment rooms to our consultation process, is built around your comfort and confidence.</p>
                <p>Our practitioners are not just skilled clinicians — they are educators who take the time to understand your goals and explain your options. Whether you are exploring your first treatment or adding a new service to your routine, we are here to guide you with honesty and expertise.</p>
                <p>At Introstem, we measure success one confident smile at a time.</p>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="aspect-square rounded-2xl overflow-hidden border border-luna-gold/10">
                <img src="/spa-room.jpg" alt="Introstem spa interior, Chicago" className="w-full h-full object-cover" />
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
            <h2 className="mt-3 text-4xl font-playfair text-luna-charcoal">Meet Our Practitioners</h2>
            <p className="mt-3 text-luna-gray max-w-xl mx-auto">Experienced, passionate, and dedicated to your results.</p>
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
          <h2 className="text-3xl font-playfair text-luna-cream">Experience the Introstem Difference</h2>
          <p className="mt-3 text-luna-cream/60">Come in for a complimentary skin consultation and discover what medical-grade aesthetics can do for you.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3.5 bg-luna-midnight text-white font-semibold text-base rounded-[8px] shadow-[0_4px_12px_rgba(13,82,82,0.25)] hover:brightness-110 transition-all duration-200">
            Book Your Visit
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </div>
  )
}
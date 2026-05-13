import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-luna-dark text-luna-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link to="/" className="text-xl font-playfair text-luna-gold tracking-wide">introstem</Link>
            <p className="mt-3 text-sm text-luna-cream/60 leading-relaxed max-w-xs">
              Our mission is to promote health and well-being. We offer advanced aesthetic treatments with the latest technology to provide fast, visible results with little to no downtime.
            </p>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-luna-gold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/services', label: 'Facial Services' },
                { to: '/packages', label: 'Packages' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm hover:text-luna-gold-light transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm tracking-widest uppercase text-luna-gold mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0 text-luna-gold" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span>520 N. Michigan Ave., Unit 122<br />Chicago, IL 60611</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-luna-gold" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>(773) 900-5559</span>
              </li>
              <li className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-luna-gold" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>support@organicbsi.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-luna-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-luna-cream/40">&copy; {new Date().getFullYear()} introstem. All rights reserved.</p>
          <div className="flex gap-4">
            {['Instagram', 'Facebook', 'Yelp'].map(s => (
              <a key={s} href="#" className="text-xs tracking-widest uppercase text-luna-cream/40 hover:text-luna-gold transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

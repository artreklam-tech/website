import './App.css'

const BUSINESS_NAME = 'Art Reklam'
const CONTACT = {
  email: 'botankocher281@gmail.com',
  phone: '+964 750 759 0957',
}

const SERVICES = [
  {
    title: 'Business cards & stationery',
    icon: 'card',
    description: 'Premium matte or gloss stocks with crisp typography and tailored layouts.',
  },
  {
    title: 'Posters & banners',
    icon: 'poster',
    description: 'High-impact visuals for events, retail, and product launches.',
  },
  {
    title: 'Large-format billboards',
    icon: 'billboard',
    description: 'Oversized messaging with bold legibility for outdoor reach.',
  },
  {
    title: 'Flex printing',
    icon: 'printer',
    description: 'Small to large-format flex prints with accurate color and finish.',
  },
]

const HERO_POINTS = ['Design', 'Print', 'Deliver']

function ServiceIcon({ name }) {
  switch (name) {
    case 'card':
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="7" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="7" y="10" width="6" height="2.5" rx="0.9" fill="currentColor" opacity="0.35" />
          <path d="M7 15.5h5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'web':
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="6" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 11h18" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="8" cy="9" r="0.8" fill="currentColor" />
          <circle cx="11" cy="9" r="0.8" fill="currentColor" />
          <rect x="9" y="14" width="9" height="2.4" rx="0.9" fill="currentColor" opacity="0.35" />
        </svg>
      )
    case 'poster':
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="5" width="12" height="16" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="9" y="8" width="8" height="3" rx="0.9" fill="currentColor" opacity="0.35" />
          <path d="M9 13.5h5.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M9 16.5h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'billboard':
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4.5" y="6.5" width="17" height="9.5" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="7" y="9" width="6" height="2.5" rx="0.9" fill="currentColor" opacity="0.35" />
          <path d="M10.5 16v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M15.5 16v4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      )
    case 'printer':
    default:
      return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="4.5" width="12" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
          <rect x="5.5" y="9.5" width="15" height="8" rx="1.8" stroke="currentColor" strokeWidth="1.6" />
          <rect x="9.5" y="13.5" width="7" height="5.5" rx="0.9" fill="currentColor" opacity="0.35" />
          <circle cx="9" cy="12" r="0.8" fill="currentColor" />
        </svg>
      )
  }
}

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <div className="logo" aria-label={`${BUSINESS_NAME} logo`}>
            {BUSINESS_NAME}
          </div>
          <a href="#contact" className="btn btn-primary">
            Help
          </a>
        </div>
      </header>

      <main>
        <section className="hero container">
          <div className="hero-copy">
            <h1>
              <span className="highlight">Professional</span> printing & design,{' '}
              <span className="highlight">done fast.</span>
            </h1>
            <div className="hero-art-inline" aria-hidden="true">
              <div className="art-blob" />
              <img src="/herosvg.svg" alt="Design and print illustration" />
            </div>
            <ul className="hero-checklist">
              {HERO_POINTS.map((point) => (
                <li key={point}>
                  <span className="check-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.16" />
                      <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <p className="lead">
              High-quality business cards, prints, posters, online marketing posts, and campaign web
              pages—everything you need, done right. Contact us for free consulting and a custom
              quote with fast turnaround.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">
                Explore services
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact us
              </a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-blob" />
            <img src="/herosvg.svg" alt="Design and print illustration" />
            <ul className="hero-checklist">
              {HERO_POINTS.map((point) => (
                <li key={point}>
                  <span className="check-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.16" />
                      <path d="M7 12.5l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="services" className="services container">
          <div className="services-layout">
            <div className="services-art" aria-hidden="true">
              <div className="art-blob soft" />
              <img src="/envolopeitems.svg" alt="Print samples illustration" />
            </div>
            <div>
              <div className="section-header">
                <p className="eyebrow">Services</p>
                <h2>Everything you need to stand out.</h2>
                <p className="section-lead">
                  We handle every step from concept to press, keeping colors bold and details sharp.
                </p>
              </div>
              <div className="service-grid">
                {SERVICES.map((service) => (
                  <article className="service-card" key={service.title}>
                    <span className="icon-badge" aria-hidden="true">
                      <ServiceIcon name={service.icon} />
                    </span>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact container">
          <div className="contact-copy">
            <p className="eyebrow">Let&apos;s talk</p>
            <h2>Contact us</h2>
            <p className="section-lead">
              Have any questions, want a free quote, or need to discuss a project? Contact us by email
              or phone and we&apos;ll be happy to help.
            </p>
            <div className="contact-items">
              <a className="contact-chip" href={`mailto:${CONTACT.email}`}>
                <span className="chip-label">Email</span>
                <span className="chip-value">{CONTACT.email}</span>
              </a>
              <a className="contact-chip" href={`tel:${CONTACT.phone.replace(/[^+\\d]/g, '')}`}>
                <span className="chip-label">Phone</span>
                <span className="chip-value">{CONTACT.phone}</span>
              </a>
            </div>
          </div>
          <div className="contact-art" aria-hidden="true">
            <div className="art-blob soft" />
            <img src="/contactus.svg" alt="Contact illustration" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default App

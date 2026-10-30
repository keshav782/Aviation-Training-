import { useState } from 'react'
import { Link } from 'react-router-dom'
import { contact } from '../data/site'
import { partners } from '../images'

export function SectionHead({ eyebrow, title, children, center = false }) {
  return (
    <header className={`section-head reveal${center ? ' center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="lead">{children}</p>}
    </header>
  )
}

export function PageHero({ eyebrow, title, children, image, actions }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <div className="reveal">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1>{title}</h1>
          {children && <p className="lead">{children}</p>}
          {actions && <div className="btn-row">{actions}</div>}
        </div>
        {image && (
          <div className="page-hero-img reveal">
            <img src={image} alt="" />
          </div>
        )}
      </div>
    </section>
  )
}

export function CheckList({ items, columns = false }) {
  return (
    <ul className={`checks${columns ? ' cols' : ''}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function Faq({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      {items.map((item, i) => (
        <div key={item.q} className={`faq-item${open === i ? ' open' : ''}`}>
          <button
            type="button"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span className="faq-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="faq-q">{item.q}</span>
            <span className="faq-icon" aria-hidden="true" />
          </button>
          <div className="faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function FaqSection({
  items,
  eyebrow = 'FAQ',
  title = 'Frequently Asked Questions',
  tint = false,
  children,
}) {
  return (
    <section className={`section${tint ? ' tint' : ''}`}>
      <div className="wrap faq-layout">
        <div className="reveal">
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
          {children}
        </div>
        <Faq items={items} />
      </div>
    </section>
  )
}

export function PartnerStrip() {
  const loop = [...partners, ...partners]
  return (
    <section className="partners-section">
      <p className="partners-label">Trusted world-class brands and organizations of all sizes.</p>
      <div className="partners">
        <div className="partners-track">
          {loop.map((p, i) => (
            <img
              key={i}
              src={p.src}
              alt={i < partners.length ? p.name : ''}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonial() {
  return (
    <>
      <blockquote className="big-quote reveal">
        India’s Most Advanced Aviation Training Centre, Best in the Industry – Mock Interview
        Session for getting Job/Placement – Professional Assistance for the CV/Resume Customization
        – Personality Development Enhancement Session – Extensive Practical Training – Industry
        Relevant Course Curriculum – Training Infrastructure – Certified Faculty for Quality Based
        Industrial Training – Holistic Approach for overall Skills Development – 100% Placement
        Assistance with all well known Airlines
      </blockquote>
      <ul className="pills reveal">
        <li>Experience and Expertise</li>
        <li>Official Certifications</li>
        <li>Modern Facilities</li>
        <li>Commitment to Safety</li>
      </ul>
    </>
  )
}

export function EnquiryForm({ title = 'Speak with our advisor', compact = false }) {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const body = [
      `Name: ${f.get('name')}`,
      `Email: ${f.get('email')}`,
      `Phone: ${f.get('phone')}`,
      `City: ${f.get('city')}`,
      f.get('message') ? `Message: ${f.get('message')}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.location.href = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(
      'Admission enquiry',
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <form className="ticket" onSubmit={submit}>
      <div className="ticket-top">
        <span>Boarding enquiry</span>
        <span>FWSTC</span>
      </div>
      <h3>{title}</h3>
      <p className="ticket-sub">
        Clear your doubts, check eligibility &amp; enroll today. New batch starting soon, only a few
        seats left!
      </p>
      <label>
        Name
        <input name="name" required autoComplete="name" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <div className="two">
        <label>
          Phone No.
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
        <label>
          City
          <input name="city" required autoComplete="address-level2" />
        </label>
      </div>
      {!compact && (
        <label>
          Message (optional)
          <textarea name="message" rows="3" />
        </label>
      )}
      <button className="btn btn-primary" type="submit">
        Send Message
      </button>
      {sent && (
        <p className="form-note" role="status">
          Your email app should open with the enquiry filled in. You can also call{' '}
          <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>.
        </p>
      )}
    </form>
  )
}

export function CtaBand({ title, text, to = '/contact-us', label = 'Send Message' }) {
  return (
    <section className="cta-band">
      <div className="wrap cta-inner reveal">
        <div>
          <h2>{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <Link className="btn btn-primary" to={to}>
          {label}
        </Link>
      </div>
    </section>
  )
}

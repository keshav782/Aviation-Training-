import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { campuses, contact, courses } from '../data/site'
import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  TwitterIcon,
  WhatsAppIcon,
} from './Icons'
import Logo from './Logo'

const socials = [
  { label: 'Instagram', href: contact.instagram, Icon: InstagramIcon },
  { label: 'Twitter', href: contact.twitter, Icon: TwitterIcon },
  { label: 'Facebook', href: contact.facebook, Icon: FacebookIcon },
  { label: 'WhatsApp', href: contact.whatsapp, Icon: WhatsAppIcon },
  { label: 'Email', href: `mailto:${contact.emails[0]}`, Icon: MailIcon },
]

const navLink = ({ isActive }) => (isActive ? 'active' : undefined)

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap nav-row">
        <Link to="/" className="brand" aria-label="Flywings home">
          <Logo />
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav${open ? ' open' : ''}`} onClick={(e) => e.target.closest('a') && setOpen(false)}>
          <NavLink to="/" end className={navLink}>
            Home
          </NavLink>
          <NavLink to="/about-us" className={navLink}>
            About Us
          </NavLink>
          <div className="has-sub">
            <NavLink to="/campus" className={navLink}>
              Our Campus
            </NavLink>
            <div className="sub">
              {Object.values(campuses).map((c) => (
                <NavLink key={c.slug} to={`/campus/${c.slug}`}>
                  {c.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="has-sub">
            <NavLink to="/courses" className={navLink}>
              Our Courses
            </NavLink>
            <div className="sub">
              {courses.map((c) => (
                <NavLink key={c.slug} to={`/courses/${c.slug}`}>
                  {c.name.replace(' Training', '')}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/gallery" className={navLink}>
            Gallery
          </NavLink>
          <NavLink to="/investors" className={navLink}>
            Investors
          </NavLink>
          <NavLink to="/testimonials" className={navLink}>
            Testimonials
          </NavLink>
          <Link to="/contact-us" className="btn btn-primary nav-cta">
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Logo />
            <p>{contact.mission}</p>
          </div>
          <div className="footer-call">
            <span>Ready for take-off?</span>
            <a href={`tel:${contact.phoneRaw}`}>{contact.phone}</a>
            <Link to="/contact-us" className="btn btn-primary">
              Apply For Admission
            </Link>
          </div>
        </div>

        <div className="footer-grid">
          <div>
            <h4>Explore</h4>
            <Link to="/about-us">About Us</Link>
            <Link to="/leadership">Leadership</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact-us">Contact Us</Link>
          </div>
          <div>
            <h4>Programs</h4>
            {courses.map((c) => (
              <Link key={c.slug} to={`/courses/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
          <div>
            <h4>Campuses</h4>
            {contact.offices.map((o) => (
              <p key={o.city} className="office">
                <strong>{o.city}</strong>
                {o.address}
              </p>
            ))}
          </div>
          <div>
            <h4>Connect</h4>
            <a href={`mailto:${contact.emails[0]}`}>{contact.emails[0]}</a>
            <a href={`mailto:${contact.emails[1]}`}>{contact.emails[1]}</a>
            <div className="social">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>All Rights Reserved @2026 {contact.company}</span>
          <span>
            <Link to="/terms-and-conditions">Terms and Conditions</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }),
      { threshold: 0.12 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

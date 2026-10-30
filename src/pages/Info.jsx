import { Link } from 'react-router-dom'
import { CtaBand, PageHero, SectionHead, Testimonial } from '../components/ui'
import { blogPosts, courses, investorLinks, investorTopics, leadership } from '../data/site'
import { media } from '../images'

export function Gallery() {
  const shots = [
    media.heroGirl,
    ...courses.map((c) => c.image),
    media.attendant,
    media.banner,
  ]
  return (
    <>
      <PageHero eyebrow="Featured Gallery" title="Your Flight, Your Journey, Expert Guidance.">
        Best choice for all the aviation enthusiasts out there. FWSTC is associated with Flying
        Schools at New Zealand and also is in business relationship with a range of Aviation
        Training Institutes in India.
      </PageHero>
      <section className="section">
        <div className="wrap masonry">
          {shots.map((src, i) => (
            <figure key={src} className="reveal">
              <img src={src} alt={`Flywings training gallery ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
      <CtaBand title="Want to see it in person?" text="Get a free quote and visit our campus." label="Get Free quote" />
    </>
  )
}

export function Testimonials() {
  return (
    <>
      <PageHero eyebrow="Testimonials" title="What our students say about their training experience" />
      <section className="section">
        <div className="wrap">
          <Testimonial />
        </div>
      </section>
      <CtaBand title="Write your own success story" text="Join the next batch at FWSTC." />
    </>
  )
}

export function Investors() {
  return (
    <>
      <PageHero eyebrow="Investors Info" title="Disclosures, governance & corporate information" />
      <section className="section">
        <div className="wrap tiles">
          {investorTopics.map((t, i) => {
            const href = investorLinks[t]
            const inner = (
              <>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {t}
              </>
            )
            if (!href) return <div key={t} className="tile reveal">{inner}</div>
            return href.startsWith('/') ? (
              <Link key={t} to={href} className="tile link reveal">
                {inner}
              </Link>
            ) : (
              <a key={t} href={href} target="_blank" rel="noreferrer" className="tile link reveal">
                {inner}
              </a>
            )
          })}
        </div>
      </section>
    </>
  )
}

export function Leadership() {
  return (
    <>
      <PageHero eyebrow="Management & Leadership Team" title="Visionary Leadership" />
      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <h2>{leadership.heading}</h2>
            {leadership.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <figure className="reveal founder-card">
            <p className="eyebrow">Message from Chairperson &amp; Managing Director</p>
            <blockquote>{leadership.message}</blockquote>
            <figcaption>
              <strong>{leadership.signature}</strong>
              <span>{leadership.signatureRole}</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <SectionHead title="Board of Directors and Key Managerial Persons" />
          <div className="table-wrap reveal">
            <table>
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                </tr>
              </thead>
              <tbody>
                {leadership.board.map(([no, name, role]) => (
                  <tr key={no}>
                    <td>{no}</td>
                    <td>{name}</td>
                    <td>{role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}

export function Blog() {
  return (
    <>
      <PageHero eyebrow="Blogs" title="Insights for aspiring aviation professionals" />
      <section className="section">
        <div className="wrap posts">
          {blogPosts.map((p) => (
            <a key={p.url} href={p.url} target="_blank" rel="noreferrer" className="post reveal">
              <time>{p.date}</time>
              <h3>{p.title}</h3>
              <span>Read more →</span>
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export function Legal({ doc }) {
  return (
    <>
      <PageHero title={doc.title} />
      <section className="section">
        <div className="wrap legal">
          <p className="lead">{doc.intro}</p>
          {doc.sections.map((s) => (
            <section key={s.title}>
              <h2>{s.title}</h2>
              {s.items.map((t) => (
                <p key={t}>{t}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  )
}

export function NotFound() {
  return (
    <section className="section not-found">
      <div className="wrap">
        <p className="eyebrow">Error 404</p>
        <h1>This flight path doesn’t exist.</h1>
        <p className="lead">The page you’re looking for has moved or never took off.</p>
        <Link className="btn btn-primary" to="/">
          Back to home
        </Link>
      </div>
    </section>
  )
}

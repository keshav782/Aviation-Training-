import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckList, CtaBand, EnquiryForm, FaqSection, PageHero } from '../components/ui'
import { campuses } from '../data/site'
import { media } from '../images'

export function CampusIndex() {
  return (
    <>
      <PageHero eyebrow="Our Campus" title="Two centres across Delhi NCR" image={media.banner}>
        Flywings operates two training centres in the Delhi NCR region, close to Indira Gandhi
        International Airport.
      </PageHero>
      <section className="section">
        <div className="wrap cards-2">
          <article className="card reveal">
            <h3>Air Hostess Training Institute in Dwarka Sector, Delhi</h3>
            <p>
              Our Delhi-based Dwarka Sector Air Hostess Training Institute is well located near IGI
              Airport, which gives students the best environment to achieve their final profession
              in aviation. The institute has computer labs, grooming salons, airplane cabin
              mock-ups, and modern classrooms. The proximity of the institute to the airport exposes
              the students to the real world of aviation, thereby making learning more practical and
              enhancing it.
            </p>
            <h4>Why choose our Dwarka campus?</h4>
            <CheckList
              items={[
                'Prime location near Indira Gandhi International Airport',
                'State-of-the-art infrastructure with aviation labs',
                'Experienced trainers from the airline industry',
                'Easy connectivity through Delhi Metro & public transport',
              ]}
            />
            <Link className="btn btn-dark" to="/campus/delhi">
              Explore the Delhi campus
            </Link>
          </article>
          <article className="card reveal">
            <h3>Air Hostess Training Institute in Gurgaon</h3>
            <p>
              Our Gurgaon Air Hostess Training Institute offers state-of-the-art training facilities
              to future cabin crew and ground staff professionals. Our Gurgaon campus is
              international standard compliant, offering state-of-the-art training modules,
              personality development classes, and industry-specific grooming courses.
            </p>
            <h4>Why choose our Gurgaon campus?</h4>
            <CheckList
              items={[
                'Modern training facilities with industry-standard equipment',
                'Professional instructors with global airline experience',
                'Special focus on communication & soft skills development',
                'Well-connected location in the heart of Gurgaon',
              ]}
            />
            <Link className="btn btn-dark" to="/campus/gurgaon">
              Explore the Gurugram campus
            </Link>
          </article>
        </div>
      </section>
    </>
  )
}

export function CampusDetail() {
  const { slug } = useParams()
  const campus = campuses[slug]
  if (!campus) return <Navigate to="/campus" replace />

  return (
    <>
      <PageHero
        eyebrow={campus.eyebrow}
        title={campus.headline}
        image={slug === 'gurgaon' ? media.banner : media.attendant}
        actions={
          <Link className="btn btn-primary" to="/contact-us">
            Send Message
          </Link>
        }
      >
        {campus.intro}
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="lead">{campus.note}</p>
            <div className="stack">
              {campus.blocks.map((b) => (
                <article key={b.title} className="block">
                  <h3>{b.title}</h3>
                  <p>{b.text}</p>
                  <CheckList items={b.list} />
                </article>
              ))}
              <article className="block">
                <h3>{campus.audienceTitle}</h3>
                <CheckList items={campus.audience} />
                {campus.audienceNote && <p>{campus.audienceNote}</p>}
              </article>
            </div>
          </div>
          <aside className="reveal sticky">
            <EnquiryForm title="Start your cabin crew training journey" compact />
          </aside>
        </div>
      </section>

      {campus.faqs.length > 0 && <FaqSection tint items={campus.faqs} />}

      <CtaBand title={campus.ctaTitle} text={campus.ctaText} />
    </>
  )
}

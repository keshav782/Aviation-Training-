import { CtaBand, PageHero, PartnerStrip, SectionHead } from '../components/ui'
import { media } from '../images'

const pillars = [
  {
    title: 'Our Mission',
    text: 'To provide our customers with cost effective, world class training that consistently meets our customer expectations in the airline and service industry. To achieve this we will continue in developing our people and establish lasting relationships with our customers and suppliers.',
  },
  {
    title: 'Our Vision',
    text: [
      'FWSTC was established with a vision of imparting viable Aviation Training Solution to Aviation Industry in general and Indian Aviation, in specific.',
      'To be responsive to our client’s needs in a world that demands more every day.',
      'The increase in the demand of air travel, leads to more and more employment in the aviation industry.',
    ],
  },
  {
    title: 'Our Objective',
    text: 'With the increasing demand of the cabin crew by the airlines, our objective is to provide skilled and efficient individuals to the airlines. To enhance the skills, and help them in achieving the market standards by motivating and building their self confidence. We guarantee 100% job assistance to the individuals aspiring to join the aviation industry.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About us · Make your dream come true & grow with us"
        title="India’s Most Advanced Aviation Training Institute"
        image={media.heroGirl}
      >
        We are engaged in providing Safety and Emergency Procedures (SEP) infrastructure facilities
        for aviation training, with a core focus on safety and emergency procedure (SEP) training for
        cabin and cockpit crew.
      </PageHero>

      <section className="section">
        <div className="wrap prose-grid">
          <div className="reveal">
            <p>
              Headquartered in Gurgaon, we offer a comprehensive portfolio of training modules
              designed to align with industry standards and regulatory expectations for airline
              personnel. Our business model is primarily Business-to-Business (B2B), catering to a
              distinguished clientele comprising A-rated domestic scheduled airlines, select Indian
              non-scheduled operators, and regional international carriers.
            </p>
            <p>
              In addition, we operate a limited Business-to-Customer (B2C) vertical under which we
              offer training programs aimed at enhancing operational and interpersonal skills
              relevant to the aviation and hospitality industries. Our core competency lies in the
              delivery of Safety and Emergency Procedures (SEP) training, covering critical areas
              such as door operations, emergency evacuation, in-flight firefighting, and ditching
              drills. In addition to our core SEP training, we also offer a broader portfolio of
              operational and service-oriented training modules primarily under our B2C vertical.
            </p>
          </div>
          <div className="reveal">
            <p>
              These include in generic aviation knowledge, in-flight services, basic first aid,
              inter-departmental coordination, passenger handling, grooming and personal
              presentation standards, personality development, as well as voice and accent
              refinement.
            </p>
            <p>
              Our training programs are designed to assist client airlines in maintaining high
              standards of safety, service delivery, and operational preparedness. We believe that
              the efficacy of aviation training depends significantly on robust infrastructure,
              experienced faculty, and continuous engagement with domain professionals from the
              aviation sector.
            </p>
          </div>
        </div>
      </section>

      <PartnerStrip />

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="India’s Most Advanced Aviation Training Centre" title="Why Train With Us" />
          <div className="cards-3">
            {pillars.map((p) => (
              <article key={p.title} className="card reveal">
                <h3>{p.title}</h3>
                {(Array.isArray(p.text) ? p.text : [p.text]).map((t) => (
                  <p key={t}>{t}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap founder reveal">
          <p className="eyebrow">Message from Founder</p>
          <h2>Why trained with FWSTC?</h2>
          <p className="lead">
            The aviation industry is on the precipice of an exponential growth surge, with estimates
            that India will need 400 airports and 300 aircraft in the next decade.
          </p>
          <p>
            With such high growth rates expected in the country, it’s no surprise that the
            hospitality and travel industries are also generating massive demands for quality
            personnel.
          </p>
          <p>
            This 3-month training, which is designed by the industry experts, provides FWSTC
            students a comprehensive, all-inclusive training, enabling the students to write their
            own success stories.
          </p>
        </div>
      </section>

      <CtaBand
        title="Ready to start your aviation career?"
        text="Speak with our advisors to check eligibility and upcoming batches."
      />
    </>
  )
}

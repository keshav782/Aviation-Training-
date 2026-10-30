import { Link } from 'react-router-dom'
import LazyVideo from '../components/LazyVideo'
import { EnquiryForm, FaqSection, PartnerStrip, SectionHead, Testimonial } from '../components/ui'
import { courses, homeFaqs } from '../data/site'
import { media } from '../images'

const whyUs = [
  {
    title: 'Industry-Focused Learning',
    text: 'Training designed around the practical skills and professional standards relevant to aviation and service roles.',
  },
  {
    title: 'Practical Training Environment',
    text: 'Gain hands-on exposure through structured exercises and aviation-focused training facilities.',
  },
  {
    title: 'Experienced Training Team',
    text: 'Learn communication, operational and professional skills under structured instructor-led training.',
  },
  {
    title: 'Career Guidance',
    text: 'Get guidance on course selection, eligibility and potential career pathways.',
  },
]

const checkpoints = ['Eligibility', 'Training Duration', 'Practical Exposure', 'Career Pathway']

export default function Home() {
  return (
    <>
      <section className="hero">
        <LazyVideo className="hero-video" src={media.intro} poster={media.heroGirl} />
        <div className="hero-shade" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Wings of Excellence</p>
            <h1>
              Aviation Training <em>Institute</em> in India
            </h1>
            <p className="lead">
              Build career-ready skills for the aviation industry with practical training in cabin
              crew, ground staff, customer service and aviation hospitality.
            </p>
            <div className="btn-row">
              <Link className="btn btn-primary" to="/contact-us">
                Send Message
              </Link>
              <Link className="btn btn-ghost" to="/courses">
                Explore courses
              </Link>
            </div>
            <ul className="hero-stats">
              <li>
                <strong>16+</strong>
                <span>Years of Experience</span>
              </li>
              <li>
                <strong>100%</strong>
                <span>Placement assistance</span>
              </li>
              <li>
                <strong>2</strong>
                <span>Campuses in NCR</span>
              </li>
            </ul>
          </div>
          <EnquiryForm title="Find the right aviation career course" compact />
        </div>
      </section>

      <PartnerStrip />

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Our Programs</p>
            <h2>Aviation Training Courses for Career-Focused Students</h2>
            <p className="lead">
              Explore practical aviation training courses designed for students and freshers who
              want to build skills for airline, airport, hospitality and customer-facing roles.
              Flywings combines classroom learning with practical training to help students understand
              the professional standards, communication skills and workplace responsibilities
              required across the aviation industry.
            </p>
            <Link className="btn btn-dark" to="/contact-us">
              Get Free quote
            </Link>
          </div>
          <div className="reveal photo-card">
            <img
              src={media.heroGirl} loading="lazy"
              alt="Aviation Training Institute in India providing practical aviation training in Gurgaon"
            />
            <div className="photo-badge">
              <strong>16+</strong>
              <span>Years of Experience</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap split flip">
          <div className="reveal photo-card">
            <img src={media.attendant} loading="lazy" alt="Flight attendant with plane tickets and passport" />
          </div>
          <div className="reveal">
            <h2>Aviation Training Built Around Real Industry Skills</h2>
            <p className="lead">
              Flywings is an Aviation Training Institute in India focused on practical,
              career-oriented learning for students and aspiring aviation professionals. Our
              training approach combines professional communication, customer service, operational
              awareness, grooming and role-specific skills to help learners prepare for aviation and
              service-sector careers.
            </p>
            <p>
              From cabin crew and ground staff training to customer service and aviation
              hospitality, our programs are designed to give students a clearer understanding of
              real workplace responsibilities—not just interview preparation.
            </p>
            <Link className="btn btn-dark" to="/about-us">
              Learn more about Flywings
            </Link>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <SectionHead eyebrow="Practical Aviation Training with Modern Facilities" title="Explore Our Aviation Career Courses">
            Choose from career-focused training programs designed around different roles across
            aviation, airport operations, hospitality and customer service.
          </SectionHead>
          <div className="gates">
            {courses.map((c, i) => (
              <Link key={c.slug} to={`/courses/${c.slug}`} className="gate reveal">
                <img src={c.image} alt="" loading="lazy" />
                <div className="gate-body">
                  <span className="gate-no">Gate {String(i + 1).padStart(2, '0')}</span>
                  <h3>{c.name}</h3>
                  <p>{c.short}</p>
                  <span className="gate-go">Get Started →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Aviation Career Guide</p>
            <h2>Aviation Courses After 12th: Choose the Right Career Path</h2>
            <p className="lead">
              If you have completed Class 12 and are interested in an aviation career, the right
              training program depends on the role you want to pursue. Cabin crew training can
              prepare you for in-flight service and safety responsibilities, while ground staff
              programs focus on airport operations and passenger services. Students interested in
              service-oriented careers can also explore customer service and hospitality training.
            </p>
            <p>
              Before choosing a course, consider the eligibility requirements, training duration,
              practical exposure, career pathway and the skills you will develop during the program.
            </p>
          </div>
          <div className="reveal route-card">
            <ol>
              {checkpoints.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
            <h3>Plan Your Aviation Career</h3>
            <p>Explore the path that matches your goals.</p>
            <Link className="btn btn-primary" to="/courses">
              Explore programs
            </Link>
          </div>
        </div>
      </section>

      <section className="section tint">
        <div className="wrap">
          <SectionHead
            eyebrow="Our Service – Air Hostess Academy in Gurgaon"
            title="Why Choose Flywings for Aviation Training?"
          >
            At Flywings, quality aviation training combines experienced faculty, practical training
            facilities and a structured curriculum. Our approach focuses on helping students develop
            the communication, professional and operational skills needed for aviation and
            service-oriented careers.
          </SectionHead>
          <div className="bento">
            {whyUs.map((w, i) => (
              <article key={w.title} className={`bento-item reveal b${i + 1}`}>
                <span className="bento-no">{String(i + 1).padStart(2, '0')}</span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="wrap quote-grid">
          <img className="reveal" src={media.banner} loading="lazy" alt="Flywings Simulators – Learn. Train. Fly High." />
          <div className="reveal">
            <p className="eyebrow">India’s Most Advanced Aviation Training Centre</p>
            <h2>Get trained the right way</h2>
            <p className="lead">
              The Perfect Opportunity to Kick Start Your Flying Career. Learn the Skills. Build the
              Confidence. Start Your Aviation Career.
            </p>
            <p>
              Build practical skills and professional confidence through industry-focused aviation
              training designed to prepare you for real-world career opportunities.
            </p>
            <Link className="btn btn-primary" to="/about-us">
              About Flywings
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Testimonials"
            title="What Our Students Say About Their Training Experience"
            center
          />
          <Testimonial />
        </div>
      </section>

      <FaqSection
        tint
        eyebrow="Frequently Asked Questions"
        title="Everything You Need To Know"
        items={homeFaqs}
      >
        <p className="lead">
          Find answers to common questions about aviation courses, eligibility and career training.
        </p>
        <p>
          <strong>Have more questions?</strong> Our team is ready to help.
        </p>
        <Link className="btn btn-dark" to="/contact-us">
          Apply for admission
        </Link>
      </FaqSection>

      <section className="section join">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">Join us</p>
            <h2>Why Train With FWSTC?</h2>
            <p className="lead">
              The aviation industry is on the precipice of an exponential growth surge, with
              estimates that India will need 400 airports and 300 aircraft in the next decade. With
              such high growth rates expected in the country, it’s no surprise that the hospitality
              and travel industries are also generating massive demands for quality personnel.
            </p>
            <p>
              This 3-month training, which is designed by the industry experts, provides FWSTC
              students a comprehensive, all-inclusive training, enabling the students to write their
              own success stories.
            </p>
            <Link className="btn btn-ghost" to="/about-us">
              Click here
            </Link>
          </div>
          <EnquiryForm title="India’s Premier & Certified Air Hostess & Cabin Crew Program" />
        </div>
      </section>
    </>
  )
}

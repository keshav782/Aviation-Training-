import { EnquiryForm, PageHero } from '../components/ui'
import { contact } from '../data/site'

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Enroll in India’s most advanced air hostess training centre"
      >
        {contact.company} — the best air hostess training centre in India. Providing world class
        training to all aspiring aviation enthusiasts that consistently meets the expectations in
        the airline and service industry.
      </PageHero>
      <section className="section">
        <div className="wrap split">
          <div className="reveal contact-cards">
            <div className="card">
              <h3>Head Office</h3>
              <p>{contact.offices[0].address}</p>
            </div>
            <div className="card">
              <h3>Email Us</h3>
              {contact.emails.map((e) => (
                <p key={e}>
                  <a href={`mailto:${e}`}>{e}</a>
                </p>
              ))}
            </div>
            <div className="card">
              <h3>Phone No.</h3>
              <p>
                <a href={`tel:${contact.phoneRaw}`}>{contact.phoneRaw}</a>
              </p>
            </div>
            <div className="card">
              <h3>Delhi (Dwarka) Centre</h3>
              <p>{contact.offices[1].address}</p>
            </div>
          </div>
          <div className="reveal">
            <EnquiryForm title="India’s Premier & Certified Air Hostess & Cabin Crew Program" />
          </div>
        </div>
      </section>
    </>
  )
}

import { Link, Navigate, useParams } from 'react-router-dom'
import { CheckList, CtaBand, EnquiryForm, FaqSection, PageHero, SectionHead } from '../components/ui'
import { courseBySlug, courses } from '../data/site'

export function CoursesIndex() {
  return (
    <>
      <PageHero eyebrow="Our Courses" title="Explore Our Aviation Career Courses">
        Choose from career-focused training programs designed around different roles across
        aviation, airport operations, hospitality and customer service.
      </PageHero>
      <section className="section">
        <div className="wrap course-list">
          {courses.map((c, i) => (
            <Link key={c.slug} to={`/courses/${c.slug}`} className="course-row reveal">
              <span className="course-row-no">{String(i + 1).padStart(2, '0')}</span>
              <img src={c.image} alt="" loading="lazy" />
              <div>
                <h3>{c.name}</h3>
                <p>{c.short}</p>
              </div>
              <span className="course-row-go">Get Started →</span>
            </Link>
          ))}
        </div>
      </section>
      <CtaBand title="Not sure which course fits you?" text="Our advisors will help you choose." />
    </>
  )
}

export function CourseDetail() {
  const { slug } = useParams()
  const course = courseBySlug[slug]
  if (!course) return <Navigate to="/courses" replace />

  const others = courses.filter((c) => c.slug !== slug)

  return (
    <>
      <PageHero
        eyebrow={course.eyebrow}
        title={course.headline}
        image={course.image}
        actions={
          <Link className="btn btn-primary" to="/contact-us">
            Start your journey
          </Link>
        }
      >
        {course.intro}
      </PageHero>

      {course.highlights.length > 0 && (
        <section className="highlight-strip">
          <ul className="wrap">
            {course.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="section">
        <div className="wrap split">
          <div className="reveal">
            <p className="eyebrow">About the course</p>
            <h2>{course.name}</h2>
            <p className="lead">{course.about}</p>
            {course.eligibility && (
              <>
                <h3>Eligibility criteria</h3>
                <CheckList items={course.eligibility} />
              </>
            )}
          </div>
          <div className="reveal">
            <EnquiryForm title={`Enroll in ${course.name}`} compact />
          </div>
        </div>
      </section>

      {course.modules.length > 0 && (
        <section className="section tint">
          <div className="wrap">
            <SectionHead eyebrow="Courses" title={course.modulesTitle} />
            <CheckList items={course.modules} columns />
          </div>
        </section>
      )}

      {course.audience.length > 0 && (
        <section className="section">
          <div className="wrap split">
            <div className="reveal">
              <p className="eyebrow">Who this course is for</p>
              <h2>Is this right for you?</h2>
              <CheckList items={course.audience} />
            </div>
            {course.features.length > 0 && (
              <div className="reveal feature-stack">
                {course.features.map((f) => (
                  <div key={f.title} className="feature">
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {course.careers.length > 0 && (
        <section className="section dark">
          <div className="wrap">
            <SectionHead eyebrow="Career pathways" title="Where this training can take you" />
            <CheckList items={course.careers} columns />
            {course.careerNote && <p className="note">{course.careerNote}</p>}
          </div>
        </section>
      )}

      {course.faqs.length > 0 && <FaqSection items={course.faqs} />}

      <section className="section tint">
        <div className="wrap">
          <SectionHead eyebrow="Keep exploring" title="Other programs" />
          <div className="chips">
            {others.map((c) => (
              <Link key={c.slug} to={`/courses/${c.slug}`}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Begin your ${course.name.toLowerCase()}`}
        text="Speak with our advisors to check eligibility, explore training locations, and plan your next step into the aviation industry."
      />
    </>
  )
}

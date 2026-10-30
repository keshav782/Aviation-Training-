import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import { CampusDetail, CampusIndex } from './pages/Campus'
import Contact from './pages/Contact'
import { CourseDetail, CoursesIndex } from './pages/Courses'
import Home from './pages/Home'
import {
  Blog,
  Gallery,
  Investors,
  Leadership,
  Legal,
  NotFound,
  Testimonials,
} from './pages/Info'
import { privacy, terms } from './data/legal'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="campus" element={<CampusIndex />} />
        <Route path="campus/:slug" element={<CampusDetail />} />
        <Route path="courses" element={<CoursesIndex />} />
        <Route path="courses/:slug" element={<CourseDetail />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="investors" element={<Investors />} />
        <Route path="leadership" element={<Leadership />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact-us" element={<Contact />} />
        <Route path="privacy-policy" element={<Legal doc={privacy} />} />
        <Route path="terms-and-conditions" element={<Legal doc={terms} />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

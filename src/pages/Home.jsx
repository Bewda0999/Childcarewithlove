import Hero from '../components/Hero.jsx'
import ServiceCards from '../components/ServiceCards.jsx'
import AboutPreview from '../components/AboutPreview.jsx'
import Testimonials from '../components/Testimonials.jsx'
import ContactSection from '../components/ContactSection.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutPreview />
      <Testimonials />
      <ContactSection />
    </>
  )
}

import { NavLink } from 'react-router-dom'
import { clinic } from '../data/content.js'
import FloatingShapes from './FloatingShapes.jsx'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-36 sm:pt-44">
      <FloatingShapes variant="hero" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[1.1fr,0.9fr] md:items-center">
        <div className="animate-riseIn" style={{ animationDelay: '0.05s' }}>
          <p className="font-display text-sm italic text-gold">{clinic.brandName}</p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] text-navy sm:text-5xl lg:text-6xl">
            {clinic.clinicianName}
          </h1>

          <p className="mt-4 text-base font-medium text-navy-soft sm:text-lg">
            {clinic.qualifications.join(' · ')}
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-navy-soft sm:text-lg">
            Compassionate, child-focused occupational therapy — built around your family’s
            everyday life, and delivered with care, patience and clear communication at every step.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <NavLink
              to="/contact"
              className="rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-cream shadow-card transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-light"
            >
              Enquire Now
            </NavLink>
            <NavLink
              to="/services"
              className="rounded-full border border-navy/15 px-7 py-3.5 text-sm font-medium text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-blush-50"
            >
              Explore Services
            </NavLink>
          </div>
        </div>

        {/* Asymmetric visual composition */}
        <div
          className="relative mx-auto aspect-[4/5] w-full max-w-sm animate-riseIn"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-blush-100 via-blush-50 to-white shadow-soft" />
          <div className="absolute -bottom-6 -left-6 h-28 w-28 rounded-[2rem] border border-gold/40 bg-white/70 backdrop-blur-sm" />
          <div className="absolute -top-5 right-6 h-16 w-16 rounded-full bg-gold-soft shadow-card" />
          <div className="absolute inset-6 flex flex-col justify-end rounded-[2.4rem] border border-white/60 p-6">
            <p className="font-display text-lg italic text-navy">
              &ldquo;Care that grows with every child.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

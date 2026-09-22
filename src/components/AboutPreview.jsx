import { NavLink } from 'react-router-dom'
import { clinic } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

export default function AboutPreview() {
  const ref = useReveal()

  return (
    <section className="relative overflow-hidden py-24">
      <div
        ref={ref}
        className="reveal mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-10 md:grid-cols-[0.9fr,1.1fr]"
      >
        <div className="relative mx-auto aspect-square w-full max-w-md">
          <div className="absolute -left-6 -top-6 h-full w-full rounded-[2.5rem] bg-blush-100" />
          <div className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] border border-navy/5 bg-gradient-to-br from-white to-blush-50 shadow-soft">
            <div className="text-center">
              <p className="font-display text-2xl font-semibold text-navy">
                {clinic.clinicianName}
              </p>
              <p className="mt-1 text-sm text-navy-soft">{clinic.qualificationsShort}</p>
            </div>
          </div>
          <div className="absolute -bottom-5 right-6 h-16 w-16 rounded-full bg-gold-soft shadow-card" />
        </div>

        <div>
          <p className="font-display text-sm italic text-gold">About the clinician</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
            {clinic.clinicianName}
          </h2>
          <p className="mt-2 text-sm font-medium text-navy-soft">
            {clinic.qualifications.join(' · ')}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-navy-soft">
            {clinic.clinicianName} brings a patient, individualized approach to occupational
            therapy, working closely with children and their families to support development
            through everyday activities. Every family is met with care, clear communication and
            respect for their child’s own pace.
          </p>
          <NavLink
            to="/about"
            className="mt-7 inline-flex rounded-full border border-navy/15 px-6 py-3 text-sm font-medium text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-blush-50"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </section>
  )
}

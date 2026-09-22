import { NavLink } from 'react-router-dom'
import { HeartHandshake, GraduationCap, Compass } from 'lucide-react'
import { clinic } from '../data/content.js'
import FloatingShapes from '../components/FloatingShapes.jsx'
import useReveal from '../hooks/useReveal.js'

function Section({ children, className = '' }) {
  const ref = useReveal()
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  )
}

export default function About() {
  return (
    <div>
      {/* Intro hero */}
      <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <FloatingShapes variant="section" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-display text-sm italic text-gold">About</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            {clinic.clinicianName}
          </h1>
          <p className="mt-3 text-sm font-medium text-navy-soft">
            {clinic.qualifications.join(' · ')}
          </p>
        </div>
      </section>

      {/* Professional profile */}
      <Section className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        <h2 className="font-display text-2xl font-semibold text-navy">Professional profile</h2>
        <p className="mt-4 text-base leading-relaxed text-navy-soft">
          {clinic.clinicianName} is an occupational therapist practising under {clinic.brandName},
          working with children and families to support everyday development through
          individualized, compassionate care. Every session is planned around the child in front of
          them — their routines, their pace, and what matters most to their family.
        </p>
      </Section>

      {/* Qualifications */}
      <Section className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-navy">
            <GraduationCap size={18} />
          </span>
          <h2 className="font-display text-2xl font-semibold text-navy">Qualifications</h2>
        </div>
        <ul className="mt-5 flex flex-col gap-3">
          {clinic.qualifications.map((q) => (
            <li
              key={q}
              className="rounded-2xl border border-navy/5 bg-blush-50/70 px-5 py-4 text-sm font-medium text-navy"
            >
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* Philosophy */}
      <Section className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-navy">
            <Compass size={18} />
          </span>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Professional philosophy &amp; approach
          </h2>
        </div>
        <p className="mt-5 text-base leading-relaxed text-navy-soft">
          Care is built around the individual child, not a fixed program. Sessions are calm,
          structured and responsive, with steady, honest communication so families always know what
          to expect and why. Parents and caregivers are treated as partners throughout, not
          bystanders.
        </p>
      </Section>

      {/* Why families connect */}
      <Section className="mx-auto max-w-3xl px-6 py-10 sm:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100 text-navy">
            <HeartHandshake size={18} />
          </span>
          <h2 className="font-display text-2xl font-semibold text-navy">
            Why families connect with {clinic.brandName}
          </h2>
        </div>
        <p className="mt-5 text-base leading-relaxed text-navy-soft">
          Families come to {clinic.brandName} looking for a calm, trustworthy space to talk through
          their child’s development — without pressure or jargon. The aim, always, is to
          listen carefully first, and to build a plan that fits into real family life.
        </p>
      </Section>

      {/* CTA */}
      <Section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Have a question, or ready to enquire?
        </h2>
        <NavLink
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-cream shadow-card transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-light"
        >
          Enquire Now
        </NavLink>
      </Section>
    </div>
  )
}

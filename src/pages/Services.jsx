import { NavLink } from 'react-router-dom'
import { Hand, Puzzle, Users } from 'lucide-react'
import { services } from '../data/content.js'
import FloatingShapes from '../components/FloatingShapes.jsx'
import useReveal from '../hooks/useReveal.js'

const icons = { Hand, Puzzle, Users }

function ServiceBlock({ service, index }) {
  const ref = useReveal()
  const Icon = icons[service.icon] ?? Hand
  const reversed = index % 2 === 1

  return (
    <div
      ref={ref}
      className={`reveal mx-auto grid max-w-5xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 ${
        reversed ? 'md:[&>*:first-child]:order-2' : ''
      }`}
    >
      <div className="relative aspect-[4/3] w-full rounded-[2rem] bg-gradient-to-br from-blush-100 via-blush-50 to-white shadow-soft">
        <span className="absolute left-8 top-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy shadow-card">
          <Icon size={26} strokeWidth={1.75} />
        </span>
      </div>

      <div>
        <h2 className="font-display text-2xl font-semibold text-navy sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-navy-soft">{service.long}</p>

        <ul className="mt-6 flex flex-col gap-3">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-navy-soft">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              {b}
            </li>
          ))}
        </ul>

        <NavLink
          to="/contact"
          className="mt-7 inline-flex rounded-full border border-navy/15 px-6 py-3 text-sm font-medium text-navy transition-colors duration-200 hover:border-navy/30 hover:bg-blush-50"
        >
          Enquire about this service
        </NavLink>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <div>
      <section className="relative overflow-hidden pb-8 pt-36 sm:pt-44">
        <FloatingShapes variant="section" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-display text-sm italic text-gold">Services</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Support built around your child
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-soft">
            Each area of support is individualized to the child and family. Details below are a
            general guide — the specifics of any plan are discussed directly with you.
          </p>
        </div>
      </section>

      {services.map((s, i) => (
        <ServiceBlock key={s.id} service={s} index={i} />
      ))}

      <section className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-10">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Not sure which support fits your child?
        </h2>
        <p className="mt-3 text-sm text-navy-soft">
          Send an enquiry and we’ll help you figure out the right next step.
        </p>
        <NavLink
          to="/contact"
          className="mt-6 inline-flex rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-cream shadow-card transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-light"
        >
          Enquire Now
        </NavLink>
      </section>
    </div>
  )
}

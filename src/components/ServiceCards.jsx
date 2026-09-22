import { Hand, Puzzle, Users } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { services } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

const icons = { Hand, Puzzle, Users }

function ServiceCard({ service, index }) {
  const ref = useReveal()
  const Icon = icons[service.icon] ?? Hand

  // Slightly stagger vertical offset for an editorial, non-identical feel
  const liftClass = index === 1 ? 'md:-mt-6' : ''

  return (
    <article
      ref={ref}
      className={`reveal group flex flex-col rounded-[2rem] border border-navy/5 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft ${liftClass}`}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush-100 text-navy transition-colors duration-300 group-hover:bg-gold-soft">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <h3 className="mt-6 font-display text-xl font-semibold text-navy">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-navy-soft">{service.short}</p>
      <NavLink
        to="/services"
        className="mt-6 text-sm font-medium text-gold underline-offset-4 hover:underline"
      >
        Learn more
      </NavLink>
    </article>
  )
}

export default function ServiceCards() {
  return (
    <section className="relative bg-blush-50/60 py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            Ways we support your family
          </h2>
          <div className="hairline mt-4 w-24" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

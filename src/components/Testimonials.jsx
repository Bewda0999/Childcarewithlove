import { useState } from 'react'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data/content.js'
import useReveal from '../hooks/useReveal.js'

function Card({ item }) {
  return (
    <div className="flex h-full flex-col rounded-[1.75rem] border border-navy/5 bg-white p-7 shadow-card">
      <Quote size={22} className="text-gold" strokeWidth={1.5} />
      <p className="mt-4 flex-1 text-sm italic leading-relaxed text-navy-soft">{item.quote}</p>
      <div className="mt-5 border-t border-navy/5 pt-4">
        <p className="text-xs font-medium uppercase tracking-wide text-navy/40">Sample only</p>
        <p className="mt-1 text-sm font-medium text-navy">{item.label}</p>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const ref = useReveal()
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section className="bg-blush-50/60 py-24">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6 sm:px-10">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy sm:text-4xl">
            What families are saying
          </h2>
          <p className="mt-3 text-sm text-navy-soft">
            Placeholder testimonials shown below — these will be replaced with genuine,
            consented client feedback.
          </p>
        </div>

        {/* Desktop / tablet grid */}
        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} item={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="mt-10 sm:hidden">
          <Card item={testimonials[index]} />
          <div className="mt-5 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-1.5" role="tablist" aria-label="Testimonial pagination">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  role="tab"
                  aria-selected={i === index}
                  className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-gold' : 'bg-navy/15'}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

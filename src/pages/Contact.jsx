import { useState } from 'react'
import { Phone, MapPin, ChevronDown } from 'lucide-react'
import { clinic, faqs } from '../data/content.js'
import ContactForm from '../components/ContactForm.jsx'
import FloatingShapes from '../components/FloatingShapes.jsx'
import useReveal from '../hooks/useReveal.js'

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-navy/10 py-4">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-sm font-medium text-navy sm:text-base">{item.q}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-navy-soft transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <p className="mt-3 text-sm leading-relaxed text-navy-soft">{item.a}</p>}
    </div>
  )
}

export default function Contact() {
  const ref = useReveal()

  return (
    <div>
      <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
        <FloatingShapes variant="section" />
        <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-10">
          <p className="font-display text-sm italic text-gold">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy sm:text-5xl">
            Let’s Connect
          </h1>
          <p className="mt-4 text-base leading-relaxed text-navy-soft">
            Parents, caregivers and healthcare professionals are all welcome to reach out with
            questions or enquiries.
          </p>
        </div>
      </section>

      <section ref={ref} className="reveal mx-auto grid max-w-5xl gap-10 px-6 py-10 sm:px-10 md:grid-cols-[0.85fr,1.15fr]">
        <div className="flex flex-col gap-6">
          <div className="rounded-[2rem] border border-navy/5 bg-blush-50/70 p-7">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-3 text-sm font-medium text-navy hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
                <Phone size={16} />
              </span>
              {clinic.phone}
            </a>
            <div className="mt-4 flex items-start gap-3 text-sm text-navy-soft">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                <MapPin size={16} />
              </span>
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
              </span>
            </div>
          </div>

          {/* Google Maps embed placeholder — replace src with the real
              embed URL for this address once generated in Google Maps. */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-[2rem] border border-navy/5 bg-blush-100">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-center text-navy-soft">
              <MapPin size={26} />
              <p className="max-w-[220px] text-xs">
                Map placeholder — embed the clinic location here
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-navy/5 bg-white p-7 shadow-soft sm:p-9">
          <ContactForm />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16 sm:px-10">
        <h2 className="font-display text-2xl font-semibold text-navy">
          Frequently asked questions
        </h2>
        <div className="mt-6">
          {faqs.map((f) => (
            <FaqItem key={f.q} item={f} />
          ))}
        </div>
      </section>
    </div>
  )
}

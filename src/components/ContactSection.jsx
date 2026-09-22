import { Phone, MapPin } from 'lucide-react'
import { clinic } from '../data/content.js'
import ContactForm from './ContactForm.jsx'
import useReveal from '../hooks/useReveal.js'

export default function ContactSection() {
  const ref = useReveal()

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div ref={ref} className="reveal mx-auto grid max-w-6xl gap-12 px-6 sm:px-10 md:grid-cols-[0.9fr,1.1fr]">
        <div>
          <p className="font-display text-sm italic text-gold">Get in touch</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-navy sm:text-4xl">
            Let’s Connect
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-navy-soft">
            Whether you’re a parent, caregiver or healthcare professional, we welcome your
            enquiry. Share a little about what you’re looking for, and we’ll be in touch.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-3 text-sm font-medium text-navy hover:text-gold"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush-100">
                <Phone size={16} />
              </span>
              {clinic.phone}
            </a>
            <div className="flex items-start gap-3 text-sm text-navy-soft">
              <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush-100">
                <MapPin size={16} />
              </span>
              <span>
                {clinic.address.line1}
                <br />
                {clinic.address.line2}
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-navy/5 bg-white p-7 shadow-soft sm:p-9">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

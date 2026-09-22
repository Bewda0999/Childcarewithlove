import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const initialValues = { name: '', contact: '', message: '' }

function validate(values) {
  const errors = {}

  if (!values.name.trim()) {
    errors.name = 'Please enter your full name.'
  }

  if (!values.contact.trim()) {
    errors.contact = 'Please enter a phone number or email address.'
  } else {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact.trim())
    const isPhone = /^[+\d][\d\s-]{7,}$/.test(values.contact.trim())
    if (!isEmail && !isPhone) {
      errors.contact = 'Enter a valid phone number or email address.'
    }
  }

  if (!values.message.trim()) {
    errors.message = 'Please add a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'Please share a few more details (at least 10 characters).'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setSubmitting(true)
    try {
      // ---------------------------------------------------------------
      // EDIT ME: connect this to a real email / form service, e.g.
      // await fetch('https://formspree.io/f/your-id', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values),
      // })
      // For now this simulates a submission so the flow can be tested.
      await new Promise((resolve) => setTimeout(resolve, 600))
      setSubmitted(true)
      setValues(initialValues)
    } catch (err) {
      setErrors({ form: 'Something went wrong sending your enquiry. Please try again, or call us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-3 rounded-[1.75rem] border border-navy/5 bg-white p-10 text-center shadow-card"
      >
        <CheckCircle2 size={36} className="text-gold" />
        <p className="font-display text-xl font-semibold text-navy">Thank you — message sent</p>
        <p className="max-w-sm text-sm text-navy-soft">
          Your enquiry has been received. We’ll get back to you as soon as possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-2 text-sm font-medium text-gold hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors ${
            errors.name ? 'border-red-400' : 'border-navy/15 focus:border-gold'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-red-500">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="text-sm font-medium text-navy">
          Phone Number or Email
        </label>
        <input
          id="contact"
          type="text"
          autoComplete="tel email"
          value={values.contact}
          onChange={handleChange('contact')}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? 'contact-error' : undefined}
          className={`mt-2 w-full rounded-2xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors ${
            errors.contact ? 'border-red-400' : 'border-navy/15 focus:border-gold'
          }`}
        />
        {errors.contact && (
          <p id="contact-error" className="mt-1.5 text-xs text-red-500">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={handleChange('message')}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`mt-2 w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm text-navy outline-none transition-colors ${
            errors.message ? 'border-red-400' : 'border-navy/15 focus:border-gold'
          }`}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      {errors.form && <p className="text-xs text-red-500">{errors.form}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 rounded-full bg-navy px-7 py-3.5 text-sm font-medium text-cream shadow-card transition-transform duration-200 hover:scale-[1.02] hover:bg-navy-light disabled:opacity-60"
      >
        {submitting ? 'Sending…' : 'Send Enquiry'}
      </button>
    </form>
  )
}

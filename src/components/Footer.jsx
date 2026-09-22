import { NavLink } from 'react-router-dom'
import { Phone, MapPin } from 'lucide-react'
import { clinic, socialLinks } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="border-t border-navy/10 bg-navy text-blush-50">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-semibold text-white">{clinic.brandName}</p>
            <p className="mt-2 text-sm text-blush-100">{clinic.clinicianName}</p>
            <p className="text-sm text-blush-100/80">{clinic.qualifications.join(' · ')}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Quick links</p>
            <nav className="mt-3 flex flex-col gap-2 text-sm text-blush-100" aria-label="Footer">
              <NavLink to="/" className="hover:text-white">Home</NavLink>
              <NavLink to="/about" className="hover:text-white">About</NavLink>
              <NavLink to="/services" className="hover:text-white">Services</NavLink>
              <NavLink to="/contact" className="hover:text-white">Contact</NavLink>
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium text-white">Get in touch</p>
            <div className="mt-3 flex flex-col gap-3 text-sm text-blush-100">
              <a href={clinic.phoneHref} className="flex items-start gap-2 hover:text-white">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <span>{clinic.phone}</span>
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.line2}
                </span>
              </span>
            </div>
          </div>
        </div>

        {socialLinks.length > 0 && (
          <div className="mt-10 flex gap-4 text-sm text-blush-100">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} className="hover:text-white">
                {s.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-blush-100/70">
          <p>
            &copy; {new Date().getFullYear()} {clinic.brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

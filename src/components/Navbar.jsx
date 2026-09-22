import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { clinic } from '../data/content.js'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on route change / resize back to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-full border border-navy/5 bg-white/80 px-4 py-2.5 shadow-soft backdrop-blur-md sm:px-6">
        <NavLink
          to="/"
          className="font-display text-lg font-semibold tracking-tight text-navy"
          onClick={() => setOpen(false)}
        >
          {clinic.brandName}
        </NavLink>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-navy' : 'text-navy-soft hover:text-navy'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-blush-100" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-cream shadow-card transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-light"
          >
            Enquire Now
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-navy/5 bg-white/95 shadow-soft backdrop-blur-md transition-all duration-300 md:hidden ${
          open ? 'max-h-80 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-1 p-3" aria-label="Mobile">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-3 text-sm font-medium ${
                  isActive ? 'bg-blush-100 text-navy' : 'text-navy-soft'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-2xl bg-navy px-4 py-3 text-center text-sm font-medium text-cream"
          >
            Enquire Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

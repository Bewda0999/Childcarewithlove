// Lightweight CSS-only decorative shapes. No WebGL/3D library needed —
// layered blurred circles + a thin gold ring give a soft, dimensional feel.
export default function FloatingShapes({ variant = 'hero' }) {
  if (variant === 'hero') {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -right-16 top-8 h-72 w-72 rounded-full bg-blush-200/70 blur-2xl animate-floatSlow" />
        <div className="absolute right-24 top-40 h-40 w-40 rounded-full border border-gold/40 animate-floatSlower" />
        <div className="absolute right-52 bottom-10 h-24 w-24 rounded-full bg-gold-soft/80 blur-md animate-floatSlow" />
        <div className="absolute left-[-4rem] bottom-[-3rem] h-56 w-56 rounded-full bg-blush-100 blur-3xl" />
      </div>
    )
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-blush-100 blur-2xl animate-floatSlower" />
      <div className="absolute right-0 bottom-0 h-32 w-32 rounded-full border border-gold/30" />
    </div>
  )
}

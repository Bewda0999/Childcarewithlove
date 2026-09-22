import { useEffect, useRef } from 'react'

// Adds the `is-visible` class (see index.css `.reveal`) the first time
// an element scrolls into view. Attach the returned ref to any element
// that already has the `reveal` class in its className.
export default function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible')
        observer.unobserve(node)
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

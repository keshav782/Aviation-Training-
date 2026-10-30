import { useEffect, useRef, useState } from 'react'

/**
 * Background video that never blocks the page.
 * - The poster image shows immediately.
 * - The video file is only requested once the box is (almost) on screen.
 * - It fades in when it can actually play; on error / slow loads the poster simply stays.
 * - Skipped entirely for "reduce motion" and "data saver" users.
 */
export default function LazyVideo({ src, poster, className = '' }) {
  const box = useRef(null)
  const [load, setLoad] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const saveData = navigator.connection?.saveData
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (saveData || reduceMotion || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    io.observe(box.current)
    return () => io.disconnect()
  }, [])

  return (
    <div className={`lazy-video ${className}`} ref={box} aria-hidden="true">
      {poster && <img src={poster} alt="" decoding="async" />}
      {load && (
        <video
          src={src}
          className={ready ? 'ready' : undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setReady(true)}
          onError={() => setLoad(false)}
        />
      )}
    </div>
  )
}

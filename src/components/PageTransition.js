import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function PageTransition({ children }) {
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleStart = () => {
      setIsTransitioning(true)
    }
    const handleComplete = () => {
      setTimeout(() => {
        setIsTransitioning(false)
      }, 100)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : ''}`}>
      {children}
      <style jsx global>{`
        .page-transition {
          transition: opacity 0.3s ease-in-out;
        }
        .page-transition.transitioning {
          opacity: 0.5;
        }
      `}</style>
    </div>
  )
}
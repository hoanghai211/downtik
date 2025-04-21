import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children, title, description, canonicalUrl }) {
  const router = useRouter()
  const [isPageLoading, setIsPageLoading] = useState(false)

  // Handle page transition states
  useEffect(() => {
    const handleStart = () => setIsPageLoading(true)
    const handleComplete = () => setTimeout(() => setIsPageLoading(false), 300)

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleComplete)
      router.events.off('routeChangeError', handleComplete)
    }
  }, [router])

  const pageTitle = title 
    ? `${title} | TikSave Pro - TikTok Video Downloader`
    : 'TikSave Pro | Premium TikTok Video Downloader Without Watermark'
  
  const pageDescription = description || 
    'Download TikTok videos without watermark in HD quality. The fastest and most reliable tool to save TikTok videos with original quality.'
  
  // Base URL for canonical links
  const baseUrl = 'https://tiksavepro.com'
  const canonical = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl
  
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={canonical} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={`${baseUrl}/og-image.jpg`} />
        
        {/* Font Awesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* Page Transition Styles */}
        <style jsx global>{`
          .page-content {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
          }
          .page-loading .page-content {
            opacity: 0.6;
            transform: scale(0.98);
          }
          
          /* Loading indicator */
          .loading-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(to right, #4f46e5, #7c3aed);
            z-index: 9999;
            transition: width 0.3s ease-out;
          }
        `}</style>
      </Head>
      
      {/* Loading indicator */}
      {isPageLoading && (
        <div className="loading-bar" style={{ width: '100%' }} />
      )}
      
      <div className={`min-h-screen flex flex-col ${isPageLoading ? 'page-loading' : ''}`}>
        <Navbar />
        <main className="flex-grow page-content">{children}</main>
        <Footer />
      </div>
    </>
  )
}
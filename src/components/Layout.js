import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Layout({ children, title, description, canonicalUrl }) {
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
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}
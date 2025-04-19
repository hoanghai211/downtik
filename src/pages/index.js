import { useState } from 'react'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import DownloaderForm from '@/components/DownloaderForm'
import ResultsCard from '@/components/ResultsCard'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  const [videoData, setVideoData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (url) => {
    setIsLoading(true)
    setError('')
    
    try {
      const response = await fetch('/api/download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to process video. The service might be temporarily unavailable.')
      }
      
      const data = await response.json()
      setVideoData(data)
      
      // Scroll to results
      setTimeout(() => {
        document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>TikSave Pro | Premium TikTok Video Downloader</title>
        <meta name="description" content="Download TikTok videos without watermark in HD quality" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          
          <section className="py-16 bg-dark-950">
            <div className="container mx-auto px-4">
              <DownloaderForm 
                onSubmit={handleSubmit} 
                isLoading={isLoading} 
                error={error}
              />
            </div>
          </section>
          
          <section id="results-section" className="py-16">
            <div className="container mx-auto px-4">
              {videoData && (
                <ResultsCard videoData={videoData} />
              )}
            </div>
          </section>
          
          <Features />
        </main>
        
        <Footer />
      </div>
    </>
  )
}
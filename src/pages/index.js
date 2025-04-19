import { useState } from 'react'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import DownloaderForm from '@/components/DownloaderForm'
import ResultsCard from '@/components/ResultsCard'
import Features from '@/components/Features'

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
    <Layout>
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
    </Layout>
  )
}
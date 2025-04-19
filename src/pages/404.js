import Layout from '@/components/Layout'
import Link from 'next/link'
import { ExclamationTriangleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function Custom404() {
  return (
    <Layout 
      title="Page Not Found - TikSave Pro" 
      description="The page you're looking for cannot be found. Return to TikSave Pro's homepage to download TikTok videos without watermark."
    >
      <section className="py-24 flex items-center min-h-[70vh]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-red-900/30 flex items-center justify-center text-red-400">
                <ExclamationTriangleIcon className="h-12 w-12" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              404
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Page Not Found
            </h2>
            
            <p className="text-lg text-slate-400 mb-8">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/" 
                className="btn btn-primary rounded-full px-6 py-3 flex items-center gap-2"
              >
                <ArrowLeftIcon className="h-5 w-5" />
                Return to Homepage
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-dark-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Download TikTok Videos</h3>
                <p className="text-sm text-slate-400 mb-3">Get TikTok videos without watermark in high quality.</p>
                <Link href="/" className="text-primary-400 text-sm hover:text-primary-300">
                  Go to Downloader →
                </Link>
              </div>
              
              <div className="p-4 bg-dark-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">View Features</h3>
                <p className="text-sm text-slate-400 mb-3">Explore all premium features of our video downloader.</p>
                <Link href="/features" className="text-primary-400 text-sm hover:text-primary-300">
                  See Features →
                </Link>
              </div>
              
              <div className="p-4 bg-dark-800 rounded-lg">
                <h3 className="font-semibold text-white mb-2">Get Help</h3>
                <p className="text-sm text-slate-400 mb-3">Have questions? Check our FAQ or contact support.</p>
                <Link href="/faq" className="text-primary-400 text-sm hover:text-primary-300">
                  Visit FAQ →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
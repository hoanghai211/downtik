import { useState } from 'react'
import { 
  LinkIcon, 
  BoltIcon, 
  CheckCircleIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid'

export default function DownloaderForm({ onSubmit, isLoading, error }) {
  const [url, setUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (url.trim() && !isLoading) {
      onSubmit(url.trim())
    }
  }

  return (
    <div id="downloader" className="max-w-3xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-primary-600 to-primary-800 p-0.5 shadow-xl">
        <div className="bg-dark-900 rounded-[calc(1rem-1px)] p-6 md:p-8">
          {/* Header */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <LinkIcon className="h-5 w-5 text-primary-500" />
              Enter TikTok URL
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Paste the TikTok video link and we'll convert it for you without any watermarks
            </p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fab fa-tiktok text-slate-500"></i>
                </div>
                <input
                  type="text"
                  className="input pl-10 pr-4 py-3 h-12 w-full text-white"
                  placeholder="Paste TikTok video link here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary h-12 px-6 min-w-[140px] font-semibold"
                disabled={isLoading || !url.trim()}
              >
                {isLoading ? (
                  <>
                    <ArrowPathIcon className="h-5 w-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <BoltIcon className="h-5 w-5" />
                    Download
                  </>
                )}
              </button>
            </div>
            
            {/* Error Message */}
            {error && (
              <div className="mt-4 rounded-md bg-red-900/20 border border-red-900/50 px-4 py-3 text-sm text-red-400 flex items-start gap-2">
                <ExclamationTriangleIcon className="h-5 w-5 flex-shrink-0 text-red-500 mt-0.5" />
                <p>{error}</p>
              </div>
            )}
          </form>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
              <span>No Watermark</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
              <span>HD Quality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
              <span>MP3 Audio</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircleIcon className="h-4 w-4 text-green-500" />
              <span>Unlimited Downloads</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
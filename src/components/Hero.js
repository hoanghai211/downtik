import { WandSparklesIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-dark-950 to-dark-900">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-secondary-600/5 blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-900/30 border border-accent-800/50 text-accent-400 text-xs font-semibold mb-6">
            <WandSparklesIcon className="h-3.5 w-3.5" />
            <span>No Watermark TikTok Downloader</span>
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Download TikTok Videos{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
              Without Watermark
            </span>{' '}
            in HD Quality
          </h1>
          
          {/* Description */}
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            The fastest and most reliable tool to download high-quality TikTok videos without watermarks. 
            Save your favorite TikTok content in seconds.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#downloader" 
              className="btn btn-primary rounded-full px-8 py-3 text-base font-semibold shadow-xl hover:-translate-y-1"
            >
              Start Downloading
            </a>
            <a 
              href="#how-it-works"
              className="btn bg-dark-800/50 text-white border border-slate-700 rounded-full px-8 py-3 text-base font-semibold hover:bg-dark-800"
            >
              How It Works
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
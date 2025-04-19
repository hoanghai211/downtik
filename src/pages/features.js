import Layout from '@/components/Layout'
import {
  BoltIcon,
  BanIcon,
  MusicalNoteIcon,
  ShieldCheckIcon,
  PhotoIcon,
  InfinityIcon,
  DevicePhoneMobileIcon,
  ClockIcon,
  CheckBadgeIcon,
  CloudArrowDownIcon,
  LockClosedIcon,
  CameraIcon
} from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function FeaturesPage() {
  // Main features
  const mainFeatures = [
    {
      icon: <BoltIcon className="h-6 w-6" />,
      title: 'Lightning Fast Downloads',
      description: 'Our servers process your TikTok videos at lightning speed, allowing you to download content within seconds, not minutes.',
      color: 'bg-primary-900/40 text-primary-400'
    },
    {
      icon: <BanIcon className="h-6 w-6" />,
      title: 'No Watermark',
      description: 'Download TikTok videos without the annoying watermark, preserving the original quality for your personal use.',
      color: 'bg-secondary-900/40 text-secondary-400'
    },
    {
      icon: <MusicalNoteIcon className="h-6 w-6" />,
      title: 'Audio Extraction',
      description: 'Extract MP3 audio from any TikTok video to save your favorite sounds, music, and voice clips.',
      color: 'bg-purple-900/40 text-purple-400'
    },
    {
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      title: 'Safe & Secure',
      description: 'We don\'t store your videos or personal information. Your data remains private and secure at all times.',
      color: 'bg-primary-900/40 text-primary-400'
    },
    {
      icon: <PhotoIcon className="h-6 w-6" />,
      title: 'HD Quality',
      description: 'Download videos in the highest quality available, preserving the original resolution and clarity.',
      color: 'bg-secondary-900/40 text-secondary-400'
    },
    {
      icon: <InfinityIcon className="h-6 w-6" />,
      title: 'Unlimited Downloads',
      description: 'No daily limits or restrictions. Download as many TikTok videos as you want, whenever you want.',
      color: 'bg-purple-900/40 text-purple-400'
    }
  ]
  
  // Additional features
  const additionalFeatures = [
    {
      icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
      title: 'Mobile Compatible',
      description: 'Our downloader works perfectly on all devices, including smartphones, tablets, and desktops.',
      color: 'bg-primary-900/40 text-primary-400'
    },
    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: 'Batch Processing',
      description: 'Save time by downloading multiple TikTok videos simultaneously.',
      color: 'bg-secondary-900/40 text-secondary-400',
      pro: true
    },
    {
      icon: <CheckBadgeIcon className="h-6 w-6" />,
      title: 'Original Quality',
      description: 'We maintain the original video quality without any compression or degradation.',
      color: 'bg-purple-900/40 text-purple-400'
    },
    {
      icon: <CloudArrowDownIcon className="h-6 w-6" />,
      title: 'Cloud Storage Integration',
      description: 'Download directly to Google Drive, Dropbox, or other cloud storage services.',
      color: 'bg-primary-900/40 text-primary-400',
      pro: true
    },
    {
      icon: <LockClosedIcon className="h-6 w-6" />,
      title: 'Private Account Videos',
      description: 'Access to download videos from private TikTok accounts you follow.',
      color: 'bg-secondary-900/40 text-secondary-400',
      pro: true
    },
    {
      icon: <CameraIcon className="h-6 w-6" />,
      title: 'Slideshow Creation',
      description: 'Combine multiple TikTok videos into a single slideshow with custom transitions.',
      color: 'bg-purple-900/40 text-purple-400',
      pro: true
    }
  ]

  return (
    <Layout 
      title="Features - TikTok Video Downloader Without Watermark" 
      description="Explore the premium features of TikSave Pro - the ultimate TikTok video downloader. Download videos without watermark, extract audio, and more!"
      canonicalUrl="/features"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-secondary-600/5 blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Features</span> for TikTok Video Download
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Discover the powerful features that make TikSave Pro the ultimate TikTok video downloader. 
              Save videos without watermarks, convert to MP3, and much more.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Core Features</h2>
            <p className="text-slate-400">
              Our powerful TikTok video downloader comes packed with essential features designed for the best experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-dark-800 border border-slate-700/20 rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-slate-700/50"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Features Section */}
      <section className="py-16 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Advanced Features</h2>
            <p className="text-slate-400">
              Unlock even more powerful capabilities with our premium features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-dark-800 border border-slate-700/20 rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-slate-700/50 relative overflow-hidden"
              >
                {feature.pro && (
                  <div className="absolute top-4 right-4">
                    <span className="badge badge-primary flex items-center gap-1 text-xs">
                      <CrownIcon className="h-3 w-3" /> PRO
                    </span>
                  </div>
                )}
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Feature Comparison</h2>
            <p className="text-slate-400">
              See how our free and premium plans compare
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto bg-dark-800 rounded-xl overflow-hidden border border-slate-700/30">
            <div className="grid grid-cols-3 p-6 border-b border-slate-700/30">
              <div className="col-span-1">
                <h3 className="font-semibold text-lg text-white">Features</h3>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="font-semibold text-lg text-white">Free</h3>
              </div>
              <div className="col-span-1 text-center">
                <h3 className="font-semibold text-lg text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Premium</h3>
              </div>
            </div>
            
            {/* Feature rows */}
            {[
              { name: 'Download Without Watermark', free: true, premium: true },
              { name: 'MP3 Audio Extraction', free: true, premium: true },
              { name: 'HD Quality Downloads', free: true, premium: true },
              { name: 'Maximum Downloads per Day', free: '5', premium: 'Unlimited' },
              { name: 'Batch Processing', free: false, premium: true },
              { name: 'Cloud Storage Integration', free: false, premium: true },
              { name: 'Private Account Videos', free: false, premium: true },
              { name: 'Priority Processing', free: false, premium: true },
              { name: 'Ad-Free Experience', free: false, premium: true },
              { name: 'Customer Support', free: 'Basic', premium: '24/7 Priority' },
            ].map((row, index) => (
              <div key={index} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-dark-900/50' : ''}`}>
                <div className="col-span-1 flex items-center">
                  <span className="text-slate-300">{row.name}</span>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  {typeof row.free === 'boolean' ? (
                    row.free ? (
                      <CheckBadgeIcon className="h-5 w-5 text-green-500" />
                    ) : (
                      <BanIcon className="h-5 w-5 text-slate-600" />
                    )
                  ) : (
                    <span className="text-slate-300">{row.free}</span>
                  )}
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  {typeof row.premium === 'boolean' ? (
                    row.premium ? (
                      <CheckBadgeIcon className="h-5 w-5 text-primary-500" />
                    ) : (
                      <BanIcon className="h-5 w-5 text-slate-600" />
                    )
                  ) : (
                    <span className="text-primary-400 font-medium">{row.premium}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Experience Premium Features?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Unlock unlimited downloads, batch processing, and more with TikSave Pro Premium
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/pricing" className="btn btn-primary rounded-md px-8 py-3 text-base font-semibold">
                View Pricing
              </Link>
              <Link href="/" className="btn bg-dark-800 text-white border border-slate-700 rounded-md px-8 py-3 text-base font-semibold hover:bg-dark-700">
                Try For Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
import {
  BoltIcon,
  BanIcon,
  MusicalNoteIcon,
  ShieldCheckIcon,
  PhotoIcon,
  InfinityIcon
} from '@heroicons/react/24/solid'

export default function Features() {
  const features = [
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

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-dark-900 to-dark-950">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-primary-500 font-semibold text-sm uppercase tracking-wider mb-2">Why Choose Us</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Premium Features for TikTok Video Download</h2>
          <p className="text-slate-400">Experience the best TikTok downloader with premium features designed for performance and quality</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-dark-800 border border-slate-700/20 rounded-xl p-6 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-slate-700/50"
            >
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-5`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
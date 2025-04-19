import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ClipboardDocumentIcon, 
  MagnifyingGlassIcon, 
  ArrowDownTrayIcon,
  ArrowPathIcon,
  CheckIcon,
  QuestionMarkCircleIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

export default function HowItWorksPage() {
  const steps = [
    {
      icon: <ClipboardDocumentIcon className="h-8 w-8" />,
      title: "Copy the TikTok URL",
      description: "Find a TikTok video you want to download and copy its URL from the share button in the TikTok app or website.",
      color: "bg-primary-900/20 border-primary-800/50 text-primary-400"
    },
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8" />,
      title: "Paste the URL on our site",
      description: "Paste the TikTok URL into the input field on our homepage and click the Download button.",
      color: "bg-secondary-900/20 border-secondary-800/50 text-secondary-400"
    },
    {
      icon: <ArrowPathIcon className="h-8 w-8" />,
      title: "Wait for processing",
      description: "Our system will fetch the video details and process it to remove watermarks while maintaining original quality.",
      color: "bg-purple-900/20 border-purple-800/50 text-purple-400"
    },
    {
      icon: <ArrowDownTrayIcon className="h-8 w-8" />,
      title: "Download your content",
      description: "Once processing is complete, you'll see download options for the video without watermark and audio in MP3 format.",
      color: "bg-primary-900/20 border-primary-800/50 text-primary-400"
    }
  ];

  const faqs = [
    {
      question: "Is it legal to download TikTok videos?",
      answer: "Downloading TikTok videos for personal use is generally acceptable. However, redistributing or using them commercially without permission may violate copyright laws. Always respect creators' rights and TikTok's terms of service."
    },
    {
      question: "Why can't I download from private accounts?",
      answer: "Private TikTok accounts have restricted content access to protect user privacy. Our free service can only download from public TikTok videos. Premium users can download from private accounts they follow."
    },
    {
      question: "How is the watermark removed?",
      answer: "Our sophisticated algorithm processes the video to identify and remove the TikTok watermark while preserving the original video quality. This is done by analyzing the video frames and applying appropriate transforms."
    },
    {
      question: "Are there download limits?",
      answer: "Free users can download up to 5 videos per day. Premium users enjoy unlimited downloads and additional features like batch processing and higher priority."
    },
    {
      question: "Do you store the downloaded videos?",
      answer: "No, we don't store any of the videos processed by our service. Videos are temporarily processed on our servers and immediately deleted after you download them, ensuring your privacy."
    }
  ];

  return (
    <Layout 
      title="How It Works - TikTok Video Downloader Process" 
      description="Learn how to download TikTok videos without watermark in 4 simple steps. Copy URL, paste, process, and download - it's that easy!"
      canonicalUrl="/how-it-works"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-secondary-600/5 blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              How to Download TikTok Videos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Without Watermark</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Our simple 4-step process makes downloading TikTok videos without watermark quick and easy. 
              No registration required!
            </p>
          </div>
        </div>
      </section>
      
      {/* Process Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-xl border ${step.color} relative`}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-dark-900 flex items-center justify-center border-2 border-slate-700">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${step.color.split(' ')[0]}`}>
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-400">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary-900/30 to-secondary-900/30 rounded-xl p-6 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to try it yourself?</h3>
                <p className="text-slate-300">It's completely free for up to 5 downloads per day!</p>
              </div>
              <Link href="/" className="btn btn-primary whitespace-nowrap">
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Video Demonstration */}
      <section className="py-16 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">See How Easy It Is</h2>
            <p className="text-slate-400">
              Watch our quick demonstration of downloading a TikTok video without watermark
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video rounded-xl overflow-hidden border border-slate-800 bg-dark-900 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-slate-400 mb-4">Video demonstration coming soon!</p>
                <div className="inline-flex items-center gap-2 bg-dark-800 px-4 py-2 rounded-md border border-slate-700 text-sm text-slate-300">
                  <ArrowPathIcon className="h-4 w-4 animate-spin text-primary-500" />
                  Video being prepared
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose TikSave Pro?</h2>
            <p className="text-slate-400">
              Here's what makes our TikTok video downloader stand out from the rest
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "User-Friendly Interface",
                description: "Simple and intuitive design that makes downloading TikTok videos a breeze, even for beginners."
              },
              {
                title: "High-Quality Downloads",
                description: "We preserve the original video quality without compression, ensuring crystal-clear videos."
              },
              {
                title: "Lightning Fast Processing",
                description: "Our advanced servers process videos in seconds, giving you the fastest download experience."
              },
              {
                title: "No Registration Required",
                description: "Get started immediately without creating an account or sharing any personal information."
              },
              {
                title: "Multi-Platform Support",
                description: "Works on any device with a web browser, including smartphones, tablets, and computers."
              },
              {
                title: "Regular Updates",
                description: "We constantly update our system to ensure compatibility with TikTok's latest changes."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex gap-3 p-4 bg-dark-800 rounded-lg border border-slate-700/30">
                <div className="flex-shrink-0 mt-1">
                  <CheckIcon className="h-5 w-5 text-primary-500" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{benefit.title}</h3>
                  <p className="text-slate-400 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">
              Get answers to common questions about downloading TikTok videos
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-dark-800 rounded-lg overflow-hidden border border-slate-700/30">
                  <div className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <QuestionMarkCircleIcon className="h-5 w-5 text-primary-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg mb-3">{faq.question}</h3>
                        <p className="text-slate-400">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/faq" className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium">
                View all FAQs <ChevronRightIcon className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Download TikTok Videos?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Try our tool now and download TikTok videos without watermark in seconds!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/" className="btn btn-primary rounded-md px-8 py-3 text-base font-semibold">
                Get Started Now
              </Link>
              <Link href="/features" className="btn bg-dark-800 text-white border border-slate-700 rounded-md px-8 py-3 text-base font-semibold hover:bg-dark-700">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
import Layout from '@/components/Layout'
import Link from 'next/link'
import { 
  QuestionMarkCircleIcon, 
  ChevronDownIcon,
  ClipboardDocumentCheckIcon
} from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function FAQPage() {
  // State for tracking expanded FAQ items
  const [expandedItem, setExpandedItem] = useState(null)

  const toggleItem = (index) => {
    if (expandedItem === index) {
      setExpandedItem(null)
    } else {
      setExpandedItem(index)
    }
  }

  // FAQ categories with questions and answers
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is TikSave Pro?",
          answer: "TikSave Pro is a powerful online tool designed to download TikTok videos without watermarks. Our service allows you to save high-quality TikTok videos directly to your device, extract audio, and access various other features to enhance your TikTok content experience."
        },
        {
          question: "Is it legal to download TikTok videos?",
          answer: "Downloading TikTok videos for personal use is generally acceptable. However, redistributing or using them commercially without permission may violate copyright laws. Always respect creators' rights and TikTok's terms of service. We recommend using downloaded content for personal viewing only."
        },
        {
          question: "Do I need to create an account to use TikSave Pro?",
          answer: "No, you don't need to create an account to use our basic services. You can download up to 5 videos per day without registration. However, signing up for a premium account gives you access to unlimited downloads and additional features."
        },
        {
          question: "How much does TikSave Pro cost?",
          answer: "TikSave Pro offers both free and premium options. The free version allows up to 5 downloads per day with basic features. Our premium plans start at $4.99/month with various subscription options offering unlimited downloads and advanced features. Visit our Pricing page for more details."
        },
        {
          question: "Which devices and browsers are supported?",
          answer: "TikSave Pro works on any device with an internet connection, including smartphones, tablets, and computers. We support all major browsers like Chrome, Firefox, Safari, and Edge. No additional software or apps are required."
        }
      ]
    },
    {
      title: "Technical Questions",
      faqs: [
        {
          question: "How do I download a TikTok video without watermark?",
          answer: "To download a TikTok video without watermark: 1) Open TikTok and find the video you want to download. 2) Tap the Share button and select 'Copy Link'. 3) Come to TikSave Pro and paste the URL in the input field. 4) Click the Download button and wait for processing. 5) Select your preferred format (MP4 without watermark or MP3 audio) and download."
        },
        {
          question: "Why can't I download from private accounts?",
          answer: "Private TikTok accounts have restricted content access to protect user privacy. Our free service can only download from public TikTok videos. Premium users can download from private accounts they follow by connecting their TikTok account to our service securely."
        },
        {
          question: "How is the watermark removed?",
          answer: "Our sophisticated algorithm processes the video to identify and remove the TikTok watermark while preserving the original video quality. This is done by analyzing the video frames and applying appropriate transforms. The process is entirely automated and takes only seconds to complete."
        },
        {
          question: "What video quality do you provide?",
          answer: "We provide the highest available quality of the original TikTok video. Typically, this means 1080p resolution for most videos, though the actual quality depends on the original upload. We don't compress or degrade the video quality during the watermark removal process."
        },
        {
          question: "Why is the download failing?",
          answer: "Download failures can occur for several reasons: 1) The TikTok URL might be invalid or expired. 2) The video might be from a private account. 3) TikTok may have updated their system. 4) Your internet connection might be unstable. Try copying the URL again, ensure you're using a public video, and check your internet connection. If problems persist, contact our support team."
        }
      ]
    },
    {
      title: "Premium Features",
      faqs: [
        {
          question: "What extra features do premium users get?",
          answer: "Premium users enjoy: 1) Unlimited downloads with no daily limits. 2) Batch processing to download multiple videos simultaneously. 3) Cloud storage integration with Google Drive, Dropbox, etc. 4) Access to download from private accounts you follow. 5) Priority processing with faster servers. 6) Ad-free experience. 7) 24/7 priority customer support."
        },
        {
          question: "How do I upgrade to premium?",
          answer: "To upgrade to premium: 1) Click the 'Upgrade to Pro' button in the navigation bar. 2) Select your preferred subscription plan. 3) Complete the payment process using our secure payment gateway. 4) Your account will be instantly upgraded, and you'll have immediate access to all premium features."
        },
        {
          question: "Can I cancel my premium subscription?",
          answer: "Yes, you can cancel your premium subscription at any time. Simply go to your account settings, navigate to the subscriptions section, and click 'Cancel Subscription'. Your premium access will remain active until the end of your current billing period, after which you'll revert to the free plan."
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 7-day money-back guarantee for all new premium subscriptions. If you're not satisfied with our premium service for any reason, contact our support team within 7 days of your purchase for a full refund. After this period, refunds are considered on a case-by-case basis."
        }
      ]
    },
    {
      title: "Privacy & Security",
      faqs: [
        {
          question: "Do you store the downloaded videos?",
          answer: "No, we don't store any of the videos processed by our service. Videos are temporarily processed on our servers and immediately deleted after you download them, ensuring your privacy and minimizing storage usage. We have no access to your downloaded content."
        },
        {
          question: "Is my data safe?",
          answer: "Yes, we take data security very seriously. We use industry-standard SSL encryption for all data transmissions, don't store your videos or personal information beyond what's necessary for account functionality, and never share your information with third parties. Our privacy policy details our data practices."
        },
        {
          question: "Do you track my downloads?",
          answer: "We only track the number of downloads for free users to enforce the daily limit. For premium users, we maintain basic usage statistics to ensure service quality. We don't track which specific videos you download or your browsing habits beyond what's necessary for service operations."
        },
        {
          question: "Can TikTok know I downloaded their videos?",
          answer: "No, TikTok cannot know if you downloaded videos using our service. Our system uses anonymous requests that cannot be traced back to individual users. Your TikTok account and identity remain completely separate from our service."
        }
      ]
    }
  ];

  return (
    <Layout 
      title="Frequently Asked Questions - TikTok Video Downloader" 
      description="Find answers to common questions about downloading TikTok videos without watermark, our premium features, privacy concerns, and technical support."
      canonicalUrl="/faq"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 rounded-full bg-secondary-600/5 blur-3xl pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Questions</span>
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Find answers to common questions about our TikTok video downloader
            </p>
          </div>
        </div>
      </section>
      
      {/* Quick Links Section */}
      <section className="py-8 border-b border-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((category, index) => (
              <a 
                key={index}
                href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="px-4 py-2 bg-dark-800 rounded-full text-sm text-slate-300 hover:bg-dark-700 hover:text-white transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                id={category.title.toLowerCase().replace(/\s+/g, '-')}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-900/40 text-primary-400">
                    <QuestionMarkCircleIcon className="h-5 w-5" />
                  </span>
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemIndex = `${categoryIndex}-${faqIndex}`;
                    const isExpanded = expandedItem === itemIndex;
                    
                    return (
                      <div 
                        key={faqIndex} 
                        className="border border-slate-800 rounded-lg overflow-hidden bg-dark-800"
                      >
                        <button 
                          className="w-full px-6 py-4 flex justify-between items-center text-left"
                          onClick={() => toggleItem(itemIndex)}
                          aria-expanded={isExpanded}
                        >
                          <h3 className="font-semibold text-white">{faq.question}</h3>
                          <ChevronDownIcon 
                            className={`h-5 w-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                          />
                        </button>
                        
                        {isExpanded && (
                          <div className="px-6 pb-5 text-slate-400">
                            <p>{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Still Have Questions Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900/20 to-secondary-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still Have Questions?</h2>
            <p className="text-lg text-slate-300 mb-8">
              Can't find the answer you're looking for? Contact our support team for assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact-us" className="btn btn-primary rounded-md px-8 py-3 text-base font-semibold">
                Contact Support
              </Link>
              <Link href="/how-it-works" className="btn bg-dark-800 text-white border border-slate-700 rounded-md px-8 py-3 text-base font-semibold hover:bg-dark-700">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
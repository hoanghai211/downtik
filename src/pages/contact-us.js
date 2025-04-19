import Layout from '@/components/Layout'
import { useState } from 'react'
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      setIsSubmitting(true)
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false)
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      }, 1500)
    }
  }

  return (
    <Layout 
      title="Contact Us - TikSave Pro" 
      description="Have questions or feedback about our TikTok video downloader? Contact the TikSave Pro team for assistance with downloading videos without watermark."
      canonicalUrl="/contact-us"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Us</span>
            </h1>
            
            <p className="text-lg text-slate-400 mb-8">
              Have questions, feedback, or need assistance? We're here to help! Reach out to our team using the contact form or through our support channels.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-dark-800 rounded-xl p-6 text-center border border-slate-700/20 hover:border-slate-700/50 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400">
                  <EnvelopeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-400 mb-4">Our support team is ready to assist you</p>
                <a 
                  href="mailto:support@tiksavepro.com" 
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  support@tiksavepro.com
                </a>
              </div>
              
              <div className="bg-dark-800 rounded-xl p-6 text-center border border-slate-700/20 hover:border-slate-700/50 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
                <p className="text-slate-400 mb-4">Mon-Fri from 9am to 5pm (EST)</p>
                <a 
                  href="tel:+1234567890" 
                  className="text-primary-400 hover:text-primary-300 font-medium"
                >
                  +1 (234) 567-890
                </a>
              </div>
              
              <div className="bg-dark-800 rounded-xl p-6 text-center border border-slate-700/20 hover:border-slate-700/50 transition-all">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-900/30 flex items-center justify-center text-primary-400">
                  <MapPinIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Office</h3>
                <p className="text-slate-400 mb-4">Visit our headquarters</p>
                <span className="text-primary-400 font-medium">
                  123 Privacy Street, Tech City<br />
                  TC 12345, USA
                </span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-dark-800 rounded-xl overflow-hidden border border-slate-700/30">
              <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-primary-900/50 to-primary-800/30 p-8 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                  <p className="text-primary-100 mb-6">
                    Send us a message and we'll get back to you as soon as possible. We value your feedback and are committed to providing excellent support.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-primary-300" />
                      </div>
                      <span className="text-primary-100">Technical support for our services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-primary-300" />
                      </div>
                      <span className="text-primary-100">Feedback and feature suggestions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-primary-300" />
                      </div>
                      <span className="text-primary-100">Partnership and business inquiries</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-primary-300" />
                      </div>
                      <span className="text-primary-100">Legal and DMCA notices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="md:col-span-3 p-8">
                  {isSubmitted ? (
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-green-900/30 flex items-center justify-center text-green-400 mb-4">
                        <CheckCircleIcon className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                      <p className="text-slate-400 mb-6">
                        Thank you for contacting us. We'll get back to you as soon as possible, typically within 24-48 hours.
                      </p>
                      <button 
                        onClick={() => setIsSubmitted(false)}
                        className="btn btn-primary"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`w-full bg-dark-900 border ${errors.name ? 'border-red-600' : 'border-slate-700'} rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                            placeholder="John Doe"
                          />
                          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full bg-dark-900 border ${errors.email ? 'border-red-600' : 'border-slate-700'} rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                            placeholder="john@example.com"
                          />
                          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-slate-400 mb-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className={`w-full bg-dark-900 border ${errors.subject ? 'border-red-600' : 'border-slate-700'} rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                          placeholder="How can we help you?"
                        />
                        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                      </div>
                      
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          className={`w-full bg-dark-900 border ${errors.message ? 'border-red-600' : 'border-slate-700'} rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                          placeholder="Please describe your question or issue in detail..."
                        ></textarea>
                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                      </div>
                      
                      <div className="text-right">
                        <button
                          type="submit"
                          className={`btn btn-primary px-6 py-2 ${isSubmitting ? 'opacity-70 pointer-events-none' : ''}`}
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-12 bg-dark-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400">
              Find quick answers to common questions before contacting us
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2">How long does it take to get a response?</h3>
                <p className="text-slate-400">We typically respond to all inquiries within 24-48 hours during business days.</p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2">Do you offer phone support?</h3>
                <p className="text-slate-400">Yes, phone support is available for premium users during business hours (Mon-Fri, 9am-5pm EST).</p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2">How do I report a technical issue?</h3>
                <p className="text-slate-400">Use this contact form and select "Technical Issue" as the subject for fastest resolution.</p>
              </div>
              
              <div className="bg-dark-800 p-6 rounded-lg">
                <h3 className="font-bold text-white mb-2">How do I submit a DMCA notice?</h3>
                <p className="text-slate-400">Please visit our DMCA page for specific instructions on submitting copyright notices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
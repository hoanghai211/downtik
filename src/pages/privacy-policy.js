import Layout from '@/components/Layout'
import Link from 'next/link'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function PrivacyPolicyPage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Layout 
      title="Privacy Policy - TikSave Pro" 
      description="Learn how TikSave Pro protects your data and privacy when downloading TikTok videos without watermark. Our comprehensive privacy policy explains what data we collect and how we use it."
      canonicalUrl="/privacy-policy"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-800/50 text-primary-400 text-xs font-semibold mb-6">
              <ShieldCheckIcon className="h-4 w-4" />
              <span>Last Updated: {currentDate}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Privacy Policy
            </h1>
            
            <p className="text-lg text-slate-400">
              This Privacy Policy explains how TikSave Pro ("we", "us", or "our") collects, uses, and shares your information when you use our TikTok video downloader service. Your privacy is important to us, and we are committed to protecting your personal data.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-slate prose-headings:text-white prose-headings:font-bold prose-p:text-slate-400 prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-strong:text-white prose-li:text-slate-400">
            <h2>Information We Collect</h2>
            
            <h3>Information You Provide</h3>
            <p>When you use our service, we may collect the following information:</p>
            <ul>
              <li>TikTok video URLs you submit for downloading</li>
              <li>Email address and account information (if you create a premium account)</li>
              <li>Payment information (for premium subscriptions, processed securely through our payment providers)</li>
              <li>Information you provide when contacting our support team</li>
            </ul>
            
            <h3>Information Collected Automatically</h3>
            <p>When you use our service, we automatically collect certain information about your device and usage:</p>
            <ul>
              <li>IP address and approximate location (country/region only)</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Time and date of your visits</li>
              <li>Pages you view and features you use</li>
              <li>Number of downloads (to enforce usage limits for free users)</li>
            </ul>
            
            <h2>How We Use Your Information</h2>
            <p>We use your information for the following purposes:</p>
            <ul>
              <li><strong>To provide our service:</strong> Processing your TikTok video downloads and delivering the content to you</li>
              <li><strong>Account management:</strong> Creating and maintaining your account, processing payments, and tracking usage limits</li>
              <li><strong>Service improvement:</strong> Analyzing usage patterns to improve our website's functionality and user experience</li>
              <li><strong>Communication:</strong> Responding to your inquiries and providing customer support</li>
              <li><strong>Security:</strong> Detecting and preventing fraudulent activity and ensuring the security of our service</li>
              <li><strong>Legal compliance:</strong> Complying with applicable laws and regulations</li>
            </ul>
            
            <h2>Data Storage and Security</h2>
            <p>We take data security seriously and implement appropriate technical and organizational measures to protect your information:</p>
            <ul>
              <li><strong>Video content:</strong> We do not store downloaded videos on our servers. Videos are temporarily processed and immediately deleted after the download process is complete.</li>
              <li><strong>SSL encryption:</strong> All data transmissions between your device and our servers are encrypted using industry-standard SSL technology.</li>
              <li><strong>Account data:</strong> If you create an account, your information is stored securely with access controls and encryption.</li>
              <li><strong>Payment information:</strong> Payment details are processed securely by our payment providers and are not stored on our servers.</li>
            </ul>
            
            <h2>Data Sharing and Third Parties</h2>
            <p>We do not sell your personal information to third parties. We may share your information in the following circumstances:</p>
            <ul>
              <li><strong>Service providers:</strong> We work with third-party service providers who help us operate our business and provide our services (e.g., hosting providers, payment processors)</li>
              <li><strong>Legal requirements:</strong> We may disclose your information if required by law, court order, or governmental authority</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of all or part of our assets, user information may be transferred as part of the transaction</li>
            </ul>
            
            <h2>Cookies and Tracking Technologies</h2>
            <p>We use cookies and similar tracking technologies to enhance your experience on our website:</p>
            <ul>
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytical cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Preference cookies:</strong> Remember your settings and preferences</li>
            </ul>
            <p>You can manage cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
            
            <h2>Your Rights and Choices</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request information about what data we have about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Restriction:</strong> Limit how we use your information</li>
              <li><strong>Data portability:</strong> Receive your information in a structured, commonly used format</li>
              <li><strong>Objection:</strong> Object to certain processing of your information</li>
            </ul>
            <p>To exercise these rights, please contact us at <a href="mailto:privacy@tiksavepro.com">privacy@tiksavepro.com</a>.</p>
            
            <h2>Children's Privacy</h2>
            <p>Our service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>
            
            <h2>International Data Transfers</h2>
            <p>We may process and store your information in countries outside your own country, where data protection laws may differ. By using our service, you consent to the transfer of your information to these countries.</p>
            
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices or for legal reasons. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.</p>
            
            <h2>Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
            <p>
              Email: <a href="mailto:privacy@tiksavepro.com">privacy@tiksavepro.com</a><br />
              Address: 123 Privacy Street, Tech City, TC 12345, USA
            </p>
            
            <div className="bg-dark-800 p-6 rounded-lg border border-slate-700/30 my-8">
              <h3 className="text-lg font-bold mb-4">Your Consent</h3>
              <p>By using our service, you consent to the collection, use, and sharing of your information as described in this Privacy Policy. If you do not agree with our practices, please do not use our service.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Links */}
      <section className="py-12 bg-dark-950 border-t border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-white mb-6">Related Legal Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/terms-of-service" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <h3 className="font-semibold text-white mb-2">Terms of Service</h3>
                <p className="text-sm text-slate-400">Read our terms and conditions for using TikSave Pro.</p>
              </Link>
              
              <Link href="/dmca" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <h3 className="font-semibold text-white mb-2">DMCA Policy</h3>
                <p className="text-sm text-slate-400">Learn about our copyright infringement reporting procedure.</p>
              </Link>
              
              <Link href="/contact-us" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <h3 className="font-semibold text-white mb-2">Contact Us</h3>
                <p className="text-sm text-slate-400">Get in touch with our team for any questions or concerns.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
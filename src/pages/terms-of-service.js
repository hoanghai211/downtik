import Layout from '@/components/Layout'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

export default function TermsOfServicePage() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <Layout 
      title="Terms of Service - TikSave Pro" 
      description="Read the Terms of Service for using TikSave Pro's TikTok video downloader. Learn about acceptable use, intellectual property rights, and subscription terms."
      canonicalUrl="/terms-of-service"
    >
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-dark-950 to-dark-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-800/50 text-primary-400 text-xs font-semibold mb-6">
              <DocumentTextIcon className="h-4 w-4" />
              <span>Last Updated: {currentDate}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Terms of Service
            </h1>
            
            <p className="text-lg text-slate-400">
              Please read these Terms of Service ("Terms") carefully before using TikSave Pro ("the Service"). These Terms constitute a legally binding agreement between you and TikSave Pro governing your use of our TikTok video downloader service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-slate prose-headings:text-white prose-headings:font-bold prose-p:text-slate-400 prose-a:text-primary-400 hover:prose-a:text-primary-300 prose-strong:text-white prose-li:text-slate-400">
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing or using TikSave Pro, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, please do not use the Service. We reserve the right to modify these Terms at any time without prior notice. Your continued use of the Service after any modifications indicates your acceptance of the updated Terms.</p>
            
            <h2>2. Service Description</h2>
            <p>TikSave Pro is a web-based service that allows users to download TikTok videos without watermarks for personal use. We provide both free and premium subscription options with varying features and usage limits.</p>
            
            <h2>3. Account Registration</h2>
            <p>While basic functionality is available without registration, premium features require creating an account. When registering, you agree to provide accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. We reserve the right to terminate accounts that violate these Terms.</p>
            
            <h2>4. Acceptable Use</h2>
            <p>When using TikSave Pro, you agree not to:</p>
            <ul>
              <li>Use the Service for any illegal purpose or in violation of any laws or regulations</li>
              <li>Infringe upon the intellectual property rights of TikTok or content creators</li>
              <li>Use downloaded content for commercial purposes without proper authorization</li>
              <li>Attempt to circumvent any technical measures or usage limits of the Service</li>
              <li>Use automated scripts, bots, or other methods to access the Service</li>
              <li>Interfere with or disrupt the Service or servers connected to the Service</li>
              <li>Collect or harvest any information from the Service</li>
              <li>Redistribute, sell, or provide the Service to third parties</li>
            </ul>
            
            <h2>5. Intellectual Property</h2>
            <p>TikSave Pro respects intellectual property rights and expects our users to do the same. The Service should be used to download content for personal, non-commercial use only. We do not claim ownership of the content downloaded through our Service.</p>
            
            <p>The TikSave Pro name, logo, website, and all related content and materials are protected by intellectual property laws. You may not use, reproduce, distribute, or create derivative works based on our content without our explicit permission.</p>
            
            <h2>6. Subscription and Payments</h2>
            <p>TikSave Pro offers free and premium subscription options. By subscribing to our premium service:</p>
            <ul>
              <li>You agree to pay all fees associated with your selected subscription plan</li>
              <li>Subscriptions auto-renew at the end of each billing period unless cancelled</li>
              <li>You can cancel at any time through your account settings</li>
              <li>We offer a 7-day money-back guarantee for new premium subscriptions</li>
              <li>We reserve the right to change our pricing with reasonable notice</li>
            </ul>
            
            <h2>7. Disclaimer of Warranties</h2>
            <p>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
            
            <p>We do not guarantee that:</p>
            <ul>
              <li>The Service will always be available, uninterrupted, or error-free</li>
              <li>All videos can be downloaded successfully</li>
              <li>The Service will be compatible with all devices or browsers</li>
              <li>Any errors or defects will be corrected</li>
            </ul>
            
            <h2>8. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL TIKSAVE PRO, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR GOODWILL, RESULTING FROM:</p>
            <ul>
              <li>Your access to or use of or inability to access or use the Service</li>
              <li>Any conduct or content of any third party on the Service</li>
              <li>Any content obtained from the Service</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
            <p>Our total liability for any claims arising from these Terms or your use of the Service shall not exceed the amount you paid to us in the past six months.</p>
            
            <h2>9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless TikSave Pro and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Service or your violation of these Terms.</p>
            
            <h2>10. Third-Party Links and Content</h2>
            <p>The Service may contain links to third-party websites or services that are not owned or controlled by TikSave Pro. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the terms and privacy policy of any third-party website you visit.</p>
            
            <h2>11. Termination</h2>
            <p>We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Service will immediately cease.</p>
            
            <h2>12. Governing Law and Dispute Resolution</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of the United States. Any dispute arising from these Terms shall be resolved through good-faith negotiations. If a resolution cannot be reached, the dispute shall be submitted to binding arbitration in accordance with the rules of the American Arbitration Association.</p>
            
            <h2>13. Severability</h2>
            <p>If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law, and the remaining provisions will continue in full force and effect.</p>
            
            <h2>14. Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at:</p>
            <p>
              Email: <a href="mailto:support@tiksavepro.com">support@tiksavepro.com</a><br />
              Address: 123 Privacy Street, Tech City, TC 12345, USA
            </p>
            
            <div className="bg-dark-800 p-6 rounded-lg border border-slate-700/30 my-8">
              <h3 className="text-lg font-bold mb-4">Your Consent</h3>
              <p>By using TikSave Pro, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these Terms, please do not use the Service.</p>
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
              <Link href="/privacy-policy" className="p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors">
                <h3 className="font-semibold text-white mb-2">Privacy Policy</h3>
                <p className="text-sm text-slate-400">Learn how we protect your data and privacy.</p>
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
import React from 'react';
import { Lock, Shield, Eye, Database, Users } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <Lock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
            <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                1. Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Personal Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Name and contact information (email, phone, address)</li>
                <li>Company and industry information</li>
                <li>Account credentials (username, password)</li>
                <li>Payment information (processed securely by third parties)</li>
                <li>Purchase history and preferences</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent, features used)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Communicate about products, services, and promotional offers</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except as described below:
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Service Providers</h3>
              <p className="text-gray-700 mb-4">
                We may share your information with third-party service providers who perform services on our behalf:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Payment processors (Stripe, PayPal) for transaction processing</li>
                <li>Cloud hosting providers for data storage and processing</li>
                <li>Analytics providers for usage analysis</li>
                <li>Email service providers for communications</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Legal Requirements</h3>
              <p className="text-gray-700 mb-4">
                We may disclose your information if required by law or in response to valid requests by public authorities.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Database className="w-5 h-5 mr-2" />
                4. Data Security
              </h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Secure payment processing through certified providers</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response procedures</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Payment Information</h2>
              <p className="text-gray-700 mb-4">
                We prioritize the security of your payment information:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>No Card Storage:</strong> We never store credit card information on our servers</li>
                <li><strong>PCI Compliance:</strong> All payment processing is handled by PCI-compliant providers</li>
                <li><strong>Secure Transmission:</strong> Payment data is encrypted during transmission</li>
                <li><strong>Tokenization:</strong> Card details are replaced with secure tokens</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. Below is detailed information about the types of cookies we use:
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Types of Cookies We Use</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-blue-900 mb-2">Essential Cookies (Required)</h4>
                <p className="text-blue-800 text-sm mb-2">These cookies are necessary for the website to function and cannot be switched off.</p>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                  <li>Authentication and session management</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                  <li>Shopping cart functionality</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-green-900 mb-2">Performance & Analytics Cookies (Optional)</h4>
                <p className="text-green-800 text-sm mb-2">Help us understand how visitors interact with our website.</p>
                <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                  <li>Google Analytics for usage statistics</li>
                  <li>Page load times and performance metrics</li>
                  <li>Error tracking and debugging</li>
                  <li>A/B testing and optimization</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-purple-900 mb-2">Functional Cookies (Optional)</h4>
                <p className="text-purple-800 text-sm mb-2">Enable enhanced functionality and personalization.</p>
                <ul className="list-disc list-inside text-purple-800 text-sm space-y-1">
                  <li>User preferences and settings</li>
                  <li>Language and region preferences</li>
                  <li>Customized content and recommendations</li>
                  <li>Social media integration</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-medium text-orange-900 mb-2">Marketing & Advertising Cookies (Optional)</h4>
                <p className="text-orange-800 text-sm mb-2">Used to deliver relevant advertisements and track campaign effectiveness.</p>
                <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                  <li>Targeted advertising based on interests</li>
                  <li>Retargeting and remarketing campaigns</li>
                  <li>Conversion tracking and attribution</li>
                  <li>Cross-device and cross-platform tracking</li>
                </ul>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">Your Cookie Choices</h3>
              <p className="text-gray-700 mb-4">
                You have full control over cookies on our website:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Cookie Consent Banner:</strong> Manage your preferences when you first visit our site</li>
                <li><strong>Cookie Settings:</strong> Update your choices anytime via our cookie preference center</li>
                <li><strong>Browser Controls:</strong> Configure cookie settings directly in your browser</li>
                <li><strong>Opt-Out Links:</strong> Use third-party opt-out tools for advertising cookies</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Note:</strong> Disabling certain cookies may affect website functionality. Essential cookies cannot be disabled as they are required for basic site operations.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Third-Party Cookies</h3>
              <p className="text-gray-700 mb-4">
                We also use third-party services that may set their own cookies:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google Analytics/Google Tag Manager:</strong> Web analytics and tracking</li>
                <li><strong>Stripe/PayPal:</strong> Payment processing and fraud detection</li>
                <li><strong>Social Media Platforms:</strong> Social sharing and login functionality</li>
                <li><strong>Customer Support Tools:</strong> Live chat and help desk services</li>
              </ul>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Manage Your Cookie Preferences:</strong>
                  <button className="ml-2 text-blue-600 hover:text-blue-500 underline">
                    Cookie Settings
                  </button>
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                <p className="text-blue-800 text-sm">
                  <strong>🔗 Related Sections:</strong> For information about withdrawing cookie consent, see Section 7:
                  <button className="text-blue-600 hover:text-blue-500 underline">
                    Consent and Withdrawal of Consent
                  </button>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Consent and Withdrawal of Consent</h2>
              <p className="text-gray-700 mb-4">
                Some of our processing activities are based on your consent, particularly when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Sign up to receive marketing emails and promotional communications</li>
                <li>Agree to non-essential cookies and tracking technologies</li>
                <li>Participate in surveys, contests, or promotional activities</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Opt-in to receive personalized recommendations</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">How to Withdraw Your Consent</h3>
              <p className="text-gray-700 mb-4">
                You may withdraw your consent at any time through the following methods:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">📧 Marketing Communications</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Click "Unsubscribe" in any email</li>
                    <li>• Update preferences in your account</li>
                    <li>• Email us at marketing@otsecuritypolicy.com</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-900 mb-2">🍪 Cookie Preferences</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Use our Cookie Settings Center</li>
                    <li>• Adjust browser cookie settings</li>
                    <li>• Contact privacy@otsecuritypolicy.com</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-amber-800 text-sm">
                  <strong>Important:</strong> Withdrawing consent does not affect the lawfulness of processing based on consent before its withdrawal. Some services may become unavailable if you withdraw essential consents.
                </p>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Quick Actions:</strong>
                  <button className="ml-2 text-blue-600 hover:text-blue-500 underline">
                    Manage Consent Preferences
                  </button>
                  <span className="mx-2">•</span>
                  <button className="text-green-600 hover:text-green-500 underline">
                    Cookie Settings
                  </button>
                  <span className="mx-2">•</span>
                  <button className="text-purple-600 hover:text-purple-500 underline">
                    Unsubscribe from All
                  </button>
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Your Rights Under GDPR</h2>
              <p className="text-gray-700 mb-4">
                If you are located in the European Union or European Economic Area, you have the following rights regarding your personal information under GDPR:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Right of Access (Article 15):</strong> Request access to your personal information and information about our processing</li>
                <li><strong>Right to Rectification (Article 16):</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Right to Erasure (Article 17):</strong> Request deletion of your personal information ("right to be forgotten")</li>
                <li><strong>Right to Data Portability (Article 20):</strong> Request transfer of your data in a machine-readable format</li>
                <li><strong>Right to Object (Article 21):</strong> Object to processing of your information for direct marketing or legitimate interests</li>
                <li><strong>Right to Restrict Processing (Article 18):</strong> Request limitation of processing under certain circumstances</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent for processing based on consent at any time</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise these rights, please visit our <a href="/data-protection" className="text-blue-600 hover:text-blue-500 underline">Data Protection Center</a> or contact us using the information provided below. We will respond within 30 days as required by GDPR.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2 mt-6">User Rights Request Portal</h3>
              <p className="text-gray-700 mb-4">
                To make exercising your rights easier, we provide multiple ways to submit requests:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="text-blue-600 text-2xl mb-2">🌐</div>
                  <h4 className="font-medium text-blue-900 mb-2">Online Portal</h4>
                  <p className="text-blue-800 text-sm mb-2">Secure self-service portal</p>
                  <button className="text-blue-600 hover:text-blue-500 underline text-sm">
                    Access Portal
                  </button>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <div className="text-green-600 text-2xl mb-2">📧</div>
                  <h4 className="font-medium text-green-900 mb-2">Email Request</h4>
                  <p className="text-green-800 text-sm mb-2">privacy@otsecuritypolicy.com</p>
                  <button className="text-green-600 hover:text-green-500 underline text-sm">
                    Send Email
                  </button>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <div className="text-purple-600 text-2xl mb-2">📞</div>
                  <h4 className="font-medium text-purple-900 mb-2">Phone Support</h4>
                  <p className="text-purple-800 text-sm mb-2">1-800-XXX-XXXX</p>
                  <button className="text-purple-600 hover:text-purple-500 underline text-sm">
                    Call Now
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Automated Decision-Making and Profiling</h2>
              <p className="text-gray-700 mb-4">
                We want to be transparent about any automated processing that may affect you:
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Current Automated Processing</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                <p className="text-green-800">
                  <strong>✅ Good News:</strong> We do not use your personal data to make automated decisions that have legal or similarly significant effects on you.
                </p>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Limited Automated Processing We Do Use</h3>
              <div className="space-y-3 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">🔍 Analytics & Usage Patterns</h4>
                  <p className="text-blue-800 text-sm mb-2">We use analytics to understand how users interact with our platform.</p>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Page views, click patterns, and navigation flows</li>
                    <li>• Performance metrics and error tracking</li>
                    <li>• User experience optimization</li>
                  </ul>
                  <p className="text-blue-700 text-xs mt-2"><strong>Impact:</strong> No individual decisions made</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-900 mb-2">🛡️ Security & Fraud Detection</h4>
                  <p className="text-orange-800 text-sm mb-2">Automated systems help protect your account and our platform.</p>
                  <ul className="text-orange-800 text-sm space-y-1">
                    <li>• Suspicious login detection</li>
                    <li>• Payment fraud prevention</li>
                    <li>• Spam and abuse prevention</li>
                  </ul>
                  <p className="text-orange-700 text-xs mt-2"><strong>Impact:</strong> May trigger additional verification steps</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-900 mb-2">📊 Content Recommendations</h4>
                  <p className="text-purple-800 text-sm mb-2">Basic content suggestions based on your interests and usage.</p>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Relevant policy templates</li>
                    <li>• Industry-specific resources</li>
                    <li>• Educational content suggestions</li>
                  </ul>
                  <p className="text-purple-700 text-xs mt-2"><strong>Impact:</strong> Personalized content display only</p>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Your Rights Regarding Automated Processing</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Right to Object:</strong> You can object to profiling for direct marketing purposes</li>
                <li><strong>Right to Explanation:</strong> Request information about the logic behind automated decisions</li>
                <li><strong>Right to Human Review:</strong> Contest any automated decision that significantly affects you</li>
                <li><strong>Right to Opt-Out:</strong> Disable non-essential automated processing features</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-yellow-800 text-sm">
                  <strong>Future Changes:</strong> If we implement automated decision-making that has legal or similarly significant effects, we will update this notice and provide meaningful information about the logic involved, the significance, and the envisaged consequences of such processing.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. California Privacy Rights (CCPA/CPRA)</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Your California Rights</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Right to Know:</strong> Request information about the personal information we collect, use, disclose, and sell</li>
                <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to certain exceptions)</li>
                <li><strong>Right to Correct:</strong> Request correction of inaccurate personal information</li>
                <li><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information</li>
                <li><strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information</li>
                <li><strong>Right to Non-Discrimination:</strong> Not be discriminated against for exercising your privacy rights</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Categories of Personal Information We Collect</h3>
              <div className="overflow-x-auto mb-4">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                      <th className="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Collected</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Identifiers</td>
                      <td className="px-6 py-4 text-gray-700">Name, email, IP address, device ID</td>
                      <td className="px-6 py-4 text-green-600">✓ Yes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Commercial Information</td>
                      <td className="px-6 py-4 text-gray-700">Purchase history, preferences</td>
                      <td className="px-6 py-4 text-green-600">✓ Yes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Internet Activity</td>
                      <td className="px-6 py-4 text-gray-700">Browsing history, search history</td>
                      <td className="px-6 py-4 text-green-600">✓ Yes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Professional Information</td>
                      <td className="px-6 py-4 text-gray-700">Company, job title, industry</td>
                      <td className="px-6 py-4 text-green-600">✓ Yes</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Biometric Information</td>
                      <td className="px-6 py-4 text-gray-700">Fingerprints, facial recognition</td>
                      <td className="px-6 py-4 text-red-600">✗ No</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Sale and Sharing of Personal Information</h3>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <p className="text-blue-800">
                  <strong>We do not sell your personal information for monetary consideration.</strong> However, we may share certain information with advertising partners, which may be considered a "sale" under CCPA. You can opt out of this sharing at any time.
                </p>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">How to Exercise Your Rights</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Online Request</h4>
                  <p className="text-gray-700 mb-2">Submit a request through our privacy portal:</p>
                  <button className="text-blue-600 hover:text-blue-500 underline">
                    California Privacy Request Form
                  </button>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                  <p className="text-gray-700 mb-1">Email: privacy@otsecuritypolicy.com</p>
                  <p className="text-gray-700 mb-1">Phone: 1-800-XXX-XXXX</p>
                  <p className="text-gray-700">Reference: "California Privacy Request"</p>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-4">
                <p className="text-amber-800 text-sm">
                  <strong>Verification Required:</strong> To protect your privacy, we will verify your identity before processing requests. You may be asked to provide additional information or documentation.
                </p>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Response Timeframes</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li><strong>Acknowledgment:</strong> Within 10 business days</li>
                <li><strong>Response:</strong> Within 45 days (may extend up to 90 days for complex requests)</li>
                <li><strong>Opt-Out Requests:</strong> Within 15 business days</li>
              </ul>

              <div className="mt-4 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-red-700">
                  <strong>Do Not Sell My Personal Information:</strong>
                  <button className="ml-2 text-red-600 hover:text-red-500 underline font-medium">
                    Opt Out Here
                  </button>
                </p>
              </div>

            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We retain your personal information for as long as necessary to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide our services to you</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Maintain business records</li>
              </ul>
              <p className="text-gray-700 mt-4">
                When information is no longer needed, we securely delete or anonymize it.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Legal Basis for Processing (GDPR)</h2>
              <p className="text-gray-700 mb-4">
                Under GDPR, we process your personal data based on the following legal grounds:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Contract Performance:</strong> Processing necessary for account management, service delivery, and payment processing</li>
                <li><strong>Legitimate Interest:</strong> Analytics, security monitoring, and service improvement (where not overridden by your interests)</li>
                <li><strong>Legal Obligation:</strong> Tax records, regulatory compliance, and legal requirements</li>
                <li><strong>Consent:</strong> Marketing communications and optional features (you can withdraw consent at any time)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your personal information may be transferred to, processed, and stored in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your data:
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Safeguards for International Transfers</h3>
              <div className="space-y-4 mb-4">
                <div className="border-l-4 border-green-400 bg-green-50 p-4">
                  <h4 className="font-medium text-green-900 mb-2">European Economic Area (EEA) Transfers</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li><strong>Standard Contractual Clauses (SCCs):</strong> EU Commission-approved data transfer agreements</li>
                    <li><strong>Adequacy Decisions:</strong> Transfers to countries with equivalent data protection laws</li>
                    <li><strong>Binding Corporate Rules:</strong> Internal data protection rules for multinational companies</li>
                    <li><strong>Certification Schemes:</strong> Privacy certification programs and codes of conduct</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-400 bg-blue-50 p-4">
                  <h4 className="font-medium text-blue-900 mb-2">Additional Security Measures</h4>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li><strong>Encryption:</strong> End-to-end encryption during transit and at rest</li>
                    <li><strong>Pseudonymization:</strong> Data minimization and anonymization techniques</li>
                    <li><strong>Access Controls:</strong> Strict limitations on who can access transferred data</li>
                    <li><strong>Data Localization:</strong> Certain sensitive data remains within specific regions</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Transfer Impact Assessment</h3>
              <p className="text-gray-700 mb-4">
                We conduct Transfer Impact Assessments (TIAs) to evaluate the level of protection in destination countries and implement additional safeguards where necessary, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Legal analysis of destination country privacy laws</li>
                <li>Assessment of government surveillance programs</li>
                <li>Evaluation of data subject rights and remedies</li>
                <li>Implementation of supplementary measures when needed</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Your Rights Regarding International Transfers</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><strong>Information Rights:</strong> Request details about specific transfers of your data</li>
                  <li><strong>Objection Rights:</strong> Object to transfers in certain circumstances</li>
                  <li><strong>Complaint Rights:</strong> File complaints with supervisory authorities</li>
                  <li><strong>Documentation:</strong> Access copies of safeguards and transfer agreements</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                We are committed to protecting the privacy of children and complying with applicable laws regarding minors' data.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Age Requirements by Jurisdiction</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h4 className="font-medium text-blue-900 mb-2">🇺🇸 United States (COPPA)</h4>
                  <p className="text-blue-800 text-sm mb-2">
                    <strong>Minimum Age:</strong> 13 years
                  </p>
                  <p className="text-blue-800 text-sm">
                    We do not knowingly collect personal information from children under 13 without verifiable parental consent.
                  </p>
                </div>
                <div className="bg-purple-50 border-l-4 border-purple-400 p-4">
                  <h4 className="font-medium text-purple-900 mb-2">🇪🇺 European Union (GDPR)</h4>
                  <p className="text-purple-800 text-sm mb-2">
                    <strong>Minimum Age:</strong> 16 years (or 13-15 per member state law)
                  </p>
                  <p className="text-purple-800 text-sm">
                    We do not knowingly collect personal data from children under the applicable minimum age without parental consent.
                  </p>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Parental Rights and Controls</h3>
              <p className="text-gray-700 mb-4">
                If you are a parent or guardian and believe your child has provided us with personal information, you have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li><strong>Access:</strong> Request information about data we may have collected from your child</li>
                <li><strong>Delete:</strong> Request deletion of your child's personal information</li>
                <li><strong>Restrict:</strong> Refuse to allow further collection or use of your child's information</li>
                <li><strong>Object:</strong> Withdraw consent for any processing based on consent</li>
              </ul>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Age Verification Process</h3>
              <p className="text-gray-700 mb-4">
                We implement the following measures to prevent collection of children's data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Age verification during account registration</li>
                <li>Terms of service requiring users to confirm they meet minimum age requirements</li>
                <li>Regular auditing of user accounts for compliance</li>
                <li>Immediate suspension and data deletion upon discovery of underage accounts</li>
              </ul>

              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                <p className="text-red-800">
                  <strong>⚠️ Report Underage Account:</strong> If you believe an account belongs to someone under the minimum age, please contact us immediately at privacy@otsecuritypolicy.com or use our reporting form.
                </p>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mb-2">Contact Information for Child Privacy Issues</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2">
                  <strong>Dedicated Child Privacy Contact:</strong>
                </p>
                <ul className="text-gray-700 space-y-1">
                  <li>📧 Email: childprivacy@otsecuritypolicy.com</li>
                  <li>📞 Phone: 1-800-XXX-XXXX (mention "Child Privacy")</li>
                  <li>📋 Online Form: <button className="text-blue-600 hover:text-blue-500 underline">Child Privacy Report</button></li>
                  <li>⏱️ Response Time: Within 24 hours for child privacy matters</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Changes to Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                14. Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@otsecuritypolicy.com<br />
                  <strong>Address:</strong> [Your Business Address]<br />
                  <strong>Phone:</strong> [Your Phone Number]<br />
                  <strong>Data Protection Officer:</strong> dpo@otsecuritypolicy.com
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
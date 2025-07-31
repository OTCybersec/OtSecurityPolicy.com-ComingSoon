import React from 'react';
import { Shield } from 'lucide-react';

const PrivacyPolicy: React.FC = () => (
    <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-center mb-8">
                    <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
                    <p className="text-gray-600 mt-2">Last updated: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="prose max-w-none">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">1. What Information We Collect</h2>
                    <p className="text-gray-700 mb-4">
                        We only collect your email address when you sign up to be notified about our launch. No other personal information is collected.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        Your email address will only be used to send you updates about our website launch and related progress. We do not use your email for marketing, analytics, or share it with third parties.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Store Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        Your email is stored securely and is only accessible to the site owner. We take reasonable steps to protect your data from unauthorized access.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Your Rights</h2>
                    <p className="text-gray-700 mb-4">
                        You may request to have your email removed from our list at any time. To do so, contact us at <a href="mailto:privacy@otsecuritypolicy.com" className="text-blue-600 underline">privacy@otsecuritypolicy.com</a>.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">5. GDPR Notice</h2>
                    <p className="text-gray-700 mb-4">
                        If you are located in the EU/EEA, you have the right to access, correct, or delete your personal data, and to withdraw consent at any time. We process your data only with your explicit consent for the purpose of providing launch updates.
                    </p>
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contact</h2>
                    <p className="text-gray-700 mb-4">
                        For any privacy-related questions or requests, please contact us at <a href="mailto:privacy@otsecuritypolicy.com" className="text-blue-600 underline">privacy@otsecuritypolicy.com</a>.
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default PrivacyPolicy;

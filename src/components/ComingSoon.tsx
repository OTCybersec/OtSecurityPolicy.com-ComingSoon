import React, { useState } from 'react';
// Use public directory for wordmark
import { Shield, Mail, CheckCircle, Clock, Users, FileText, Factory, Flame, Droplets, Syringe, Fuel, Bus, Waves, FlaskConical } from 'lucide-react';
import Button from './UI/Button';
import Card from './UI/Card';

const ComingSoon: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Replace with your deployed Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxSOI1y0y530Q4tgEesP4oTETjOKNXj0e4Lht5AhDn95gUdKN6gFMWgtRC3WIalRXLJ/exec';

  // Use Netlify Function endpoint
  const NETLIFY_FUNCTION_URL = '/.netlify/functions/subscribe';

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const response = await fetch(NETLIFY_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, token: 'b7e2f8c1-4a6d-4e2a-9c3a-2e7b8d5f1a9c' }),
        mode: 'cors',
      });
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('There was a problem subscribing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-600">OT</span>SecurityPolicy
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-blue-100 inline-flex items-center px-8 py-4 rounded-full text-blue-800 text-2xl font-bold mb-10 shadow-lg border-2 border-blue-200">
            <Clock className="w-7 h-7 mr-3" />
            Coming Soon
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            OT Security Policy Templates
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expertly crafted, industry-specific security policy templates and bundles designed to help you secure your operational technology infrastructure with clarity and confidence.
          </p>
          <Card className="max-w-md mx-auto p-6 mb-12">
            {isSubscribed ? (
              <div className="text-green-600 text-lg font-medium text-center">Thank you for subscribing! We'll notify you when we launch.</div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubscribe}>
                <label htmlFor="email" className="block text-gray-700 font-medium text-left">Get notified when we launch:</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Your email address"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={loading}
                  />
                  <Button type="submit" variant="primary" size="md" disabled={loading || !email}>
                    <Mail className="w-5 h-5 mr-2" />
                    {loading ? 'Subscribing...' : 'Notify Me'}
                  </Button>
                </div>
                <div className="flex items-start gap-2">
                  <input
                    id="consent"
                    type="checkbox"
                    required
                    className="mt-1"
                  />
                  <label htmlFor="consent" className="text-sm text-gray-700">
                    I agree to receive updates and have my email stored for this purpose. I have read and agree to the <a href="/privacy-policy" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
                  </label>
                </div>
                {error && <div className="text-red-600 text-sm">{error}</div>}
              </form>
            )}
          </Card>
        </div>

        {/* Value Proposition Section (screenshot style) */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our OT Security Templates?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center shadow-lg rounded-2xl border border-gray-100 bg-white">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Policy Templates</h4>
              <p className="text-gray-700 text-base">Comprehensive, ready-to-customize OT security policy templates for a variety of industries.</p>
            </Card>
            <Card className="p-8 text-center shadow-lg rounded-2xl border border-gray-100 bg-white">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Enterprise Ready</h4>
              <p className="text-gray-700 text-base">Designed for organizations across manufacturing, energy, and utilities.</p>
            </Card>
            <Card className="p-8 text-center shadow-lg rounded-2xl border border-gray-100 bg-white">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold mb-2">Instant Access</h4>
              <p className="text-gray-700 text-base">Download immediately after purchase with lifetime access.</p>
            </Card>
          </div>
        </div>

        {/* Mission section removed as requested */}

        {/* Why Choose Us Section removed as per request */}

        {/* Removed duplicate Mission and value cards section as requested */}

        {/* Our Mission Section (screenshot style) */}
        <div className="mb-16 bg-gray-50 py-12 rounded-xl shadow-sm">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-4">
            {/* Mission Text */}
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 mb-4">
                In an increasingly connected world, operational technology security has never been more critical. Our mission is to make professional-grade OT security policies accessible to organizations of all sizes, helping them protect their critical infrastructure and maintain operational continuity.
              </p>
              <p className="text-lg text-gray-700">
                We believe that security should be proactive, not reactive. Our templates provide the foundation for robust security programs that can adapt to evolving threats while maintaining compliance with industry standards.
              </p>
            </div>
            {/* Security First Card */}
            <div className="flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md flex flex-col gap-4 border border-gray-100">
                <div className="flex items-center mb-2">
                  <Shield className="w-8 h-8 text-blue-600 mr-3" />
                  <span className="text-xl font-semibold text-gray-900">Security First</span>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Industry-specific security frameworks</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Compliance with major standards</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Expert-reviewed content</li>
                  <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Regular updates and improvements</li>
                </ul>
              </div>
            </div>
          </div>
        </div>



        {/* Industries */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <Factory className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              Manufacturing
            </Card>
            <Card className="p-6 text-center">
              <Flame className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              Energy
            </Card>
            <Card className="p-6 text-center">
              <Droplets className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
              Utilities
            </Card>
            <Card className="p-6 text-center">
              <Syringe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              Pharmaceutical
            </Card>
            <Card className="p-6 text-center">
              <Fuel className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
              Oil & Gas
            </Card>
            <Card className="p-6 text-center">
              <Bus className="w-8 h-8 text-green-600 mx-auto mb-2" />
              Transportation
            </Card>
            <Card className="p-6 text-center">
              <Waves className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              Water Treatment
            </Card>
            <Card className="p-6 text-center">
              <FlaskConical className="w-8 h-8 text-pink-500 mx-auto mb-2" />
              Chemical
            </Card>
          </div>
        </div>

        {/* About Section */}
        <Card className="p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            About <span className="text-blue-600">OT</span>SecurityPolicy
          </h3>
          <div className="max-w-3xl mx-auto text-gray-700 text-lg">
            <p className="mb-4">
              In today's interconnected industrial landscape, operational technology (OT) security has become more critical than ever. Cyber threats targeting industrial control systems, SCADA networks, and critical infrastructure are increasing in both frequency and sophistication.
            </p>
            <p className="mb-4">
              OTSecurityPolicy.com was created to bridge the gap between complex security requirements and practical implementation. We provide professionally crafted, industry-specific security policy templates that help organizations establish robust security frameworks without starting from scratch.
            </p>
            <p className="mb-4">
              Our templates are developed by certified security professionals with extensive experience in operational technology environments. Each template is carefully designed to address the unique challenges and regulatory requirements of specific industries while remaining flexible enough to adapt to your organization's specific needs.
            </p>
            <p>
              Whether you're a small manufacturing facility looking to establish your first security policies or a large utility company seeking to enhance your existing security framework, our templates provide the foundation you need to protect your critical operations.
            </p>
          </div>
        </Card>


        {/* Contact */}
        <div className="text-center">
          <p className="text-gray-500">Questions? <a href="mailto:info@otsecuritypolicy.com" className="text-blue-600 underline">Contact us</a></p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-gray-400">&copy; {new Date().getFullYear()} OTSecurityPolicy. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
};

export default ComingSoon;
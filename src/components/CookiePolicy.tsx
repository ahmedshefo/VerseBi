import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

interface CookiePolicyProps {
  onBack: () => void;
}

const CookiePolicy: React.FC<CookiePolicyProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-green-400 hover:text-green-300 mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Website
        </button>

        {/* Cookie Policy Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2">Cookie Policy</h1>
          <p className="text-gray-300 mb-8">Last updated: 7-9-2025</p>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              This Cookie Policy explains how <span className="text-white">Verse</span><span className="text-green-400">Bi</span> ("we", "us", or "our") uses cookies and similar technologies on our website.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you visit a website.<br/>
                They help websites remember your preferences and improve your browsing experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Cookies</h2>
              <p>Our website uses cookies <strong>only for the following purposes</strong>:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Essential cookies</strong>: to ensure the website functions correctly.</li>
                <li><strong>Analytics cookies</strong>: to collect anonymous, aggregated data about how visitors use the site, helping us understand and improve its performance.</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> use cookies to collect personal information, track your browsing across other websites, or serve targeted ads.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Managing Cookies</h2>
              <p>Most browsers accept cookies automatically, but you can:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Delete existing cookies.</li>
                <li>Block some or all cookies through your browser settings.</li>
              </ul>
              <p className="mt-3">
                Please note that disabling essential cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Changes to This Policy</h2>
              <p>
                We may update this Cookie Policy occasionally. All updates will be posted here with a new "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="flex items-center text-green-400">
                <Mail size={20} className="mr-2" />
                <a 
                  href="mailto:a.shefoo3333@gmail.com" 
                  className="hover:text-green-300 transition-colors duration-200"
                >
                  a.shefoo3333@gmail.com
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 
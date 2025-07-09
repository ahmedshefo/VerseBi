import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
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

        {/* Privacy Policy Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-300 mb-8">Last updated: 7-9-2025</p>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              Welcome to <span className="text-white">Verse</span><span className="text-green-400">Bi</span>. We respect and protect your privacy. 
              This Privacy Policy explains how we handle information on our website.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. No Personal Data Collection</h2>
              <p className="mb-3">
                Our website serves purely as a portfolio to showcase our data analysis and business intelligence services.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We do not collect or request personal data such as your name, email address, or phone number.</li>
                <li>We do not use contact forms, user accounts, or any features that require you to provide personal information.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Cookies & Analytics</h2>
              <p className="mb-3">
                To improve website performance and understand how visitors use our site, we may use basic, privacy-friendly analytics tools or cookies.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>These tools collect information in an anonymous and aggregated form.</li>
                <li>No personally identifiable information is stored or tracked.</li>
                <li>You can disable cookies anytime in your browser settings without affecting your access to our site.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Data Sharing & Selling</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We do not sell, trade, or share visitor information with third parties.</li>
                <li>Since we do not collect personal data, there is nothing to share beyond anonymous analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. External Links</h2>
              <p>
                Our website may include links to third-party platforms or services (e.g., Power BI reports, Tableau dashboards, ERP integrations). 
                We are not responsible for the privacy practices or content of these external websites.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Data Security</h2>
              <p>
                Even though we do not collect personal data, we maintain strong security practices and hosting standards to protect the website 
                and any potential anonymous data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy if we add new features or services. Changes will be posted here with an updated "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Contact Us</h2>
              <p className="mb-3">
                If you have any questions or concerns about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy; 
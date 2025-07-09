import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

        {/* Terms of Service Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
          <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-300 mb-8">Last updated: 7-9-2025</p>

          <div className="text-gray-300 space-y-6">
            <p className="text-lg">
              Welcome to the website of <span className="text-white">Verse</span><span className="text-green-400">Bi</span> ("we", "us", or "our"). By accessing or using our site, you agree to the following terms and conditions. Please read them carefully.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Purpose of the Website</h2>
              <p>
                Our website is intended to present our business intelligence, data analysis services, and portfolio to potential clients and partners.<br/>
                We do <strong>not</strong> provide direct online services, user accounts, or e-commerce features through this website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Use of Content</h2>
              <p>
                All text, graphics, logos, and other content on this website are owned by or licensed to <span className="text-green-400 font-semibold">Verse BI</span> and are protected by copyright and other intellectual property laws.
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>You may view, download, or print content <strong>for personal and non-commercial use only</strong>.</li>
                <li>You must <strong>not</strong> reproduce, distribute, modify, or create derivative works without our written consent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. No Warranties</h2>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>We make <strong>no guarantees</strong> regarding completeness, accuracy, or suitability.</li>
                <li>The content is provided <strong>“as is”</strong> without warranties of any kind.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
              <p>
                <span className="text-green-400 font-semibold">Verse BI</span> is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. External Links</h2>
              <p>
                Our website may include links to third-party tools, dashboards, or external sites (e.g., Power BI, Tableau, ERP systems).<br/>
                We do <strong>not</strong> control these sites and are <strong>not responsible</strong> for their content or practices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service occasionally. All updates will be posted on this page with a new "Last updated" date. Continued use of the site implies acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Governing Law</h2>
              <p>
                These Terms are governed by and construed in accordance with the laws of Egypt.<br/>
                Any disputes shall be subject to the exclusive jurisdiction of the courts of Cairo, EG.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
              <p className="mb-3">
                If you have any questions about these Terms, please contact us at:
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

export default TermsOfService; 
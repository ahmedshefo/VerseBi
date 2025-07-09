import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface FooterProps {
  onPrivacyPolicyClick: () => void;
  onTermsOfServiceClick: () => void;
  onCookiePolicyClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyPolicyClick, onTermsOfServiceClick, onCookiePolicyClick }) => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold">
                <span className="text-white">Verse</span>
                <span className="text-green-500">Bi</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses and individuals with professional data solutions and digital presence services. 
              Transform your data into insights and your expertise into opportunity.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail size={20} className="text-green-400 mr-3" />
                <span className="text-gray-400">Sales@versebi.me</span>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-green-400 mr-3" />
                <span className="text-gray-400">+201014673656</span>
              </div>
              <div className="flex items-center">
                <MapPin size={20} className="text-green-400 mr-3" />
                <span className="text-gray-400">Cairo, Egypt</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 cursor-default select-none transition-colors duration-200 hover:text-green-400">
                  Data & BI Analysis
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default select-none transition-colors duration-200 hover:text-green-400">
                  Portfolio Creation
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default select-none transition-colors duration-200 hover:text-green-400">
                  Power BI Dashboards
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default select-none transition-colors duration-200 hover:text-green-400">
                  Data Integration
                </span>
              </li>
              <li>
                <span className="text-gray-400 cursor-default select-none transition-colors duration-200 hover:text-green-400">
                  Web Hosting
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#home" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-green-400 transition-colors duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-green-400 transition-colors duration-200 flex items-center">
                  Blog
                  <ExternalLink size={14} className="ml-1" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 VerseBi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button 
                onClick={onPrivacyPolicyClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <button 
                onClick={onTermsOfServiceClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                Terms of Service
              </button>
              <button 
                onClick={onCookiePolicyClick}
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
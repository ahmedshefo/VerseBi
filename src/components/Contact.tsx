import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', service: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Get In <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your data or get your portfolio online? Let's discuss your project
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail size={24} className="text-green-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">Sales@versebi.me</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone size={24} className="text-green-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+201014673656</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin size={24} className="text-green-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Location</p>
                    <p className="text-gray-300">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Actions</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/201014673656?text=Hi! I'm interested in getting a portfolio for $100 (sale price from $150)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Get Portfolio for $100 (SALE)
                </a>
                
                <a
                  href="https://wa.me/201014673656?text=Hi! I'm a student interested in getting a portfolio for $10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  Student Portfolio for $10
                </a>
                
                <a
                  href="https://wa.me/201014673656?text=Hi! I'm interested in scheduling a BI consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 border border-white/30 flex items-center justify-center"
                >
                  Schedule BI Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col h-full">
            <h3 className="text-2xl font-bold text-white mb-6">Contact & Support</h3>
            <ul className="text-gray-300 space-y-4 mb-8 text-lg">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>Work days:</strong> Saturday–Thursday</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>Email support:</strong> support@versebi.me</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>Phone support:</strong> +201014673656</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>WhatsApp support:</strong> +201014673656</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>Typical response time:</strong> within 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                <span><strong>Location:</strong> Cairo, Egypt</span>
              </li>
            </ul>
            <div className="mt-auto flex flex-col gap-4">
              <a
                href="mailto:Sales@versebi.me?subject=Contact%20from%20VerseBi%20Website"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg gap-2"
              >
                <Mail size={20} className="mr-2" />
                Email Us
              </a>
              <a
                href="tel:+201014673656"
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg border border-white/30 gap-2"
              >
                <Phone size={20} className="mr-2" />
                Call Us
              </a>
              <a
                href="https://wa.me/201014673656"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center text-lg gap-2"
              >
                <MessageCircle size={20} className="mr-2" />
                WhatsApp
              </a>
            </div>
            <div className="text-gray-400 text-sm mt-8 text-center">
              We typically respond within 24 hours, Saturday–Thursday.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import React, { useEffect, useState } from 'react';
import { ChevronRight, BarChart3, Globe } from 'lucide-react';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

const subtitles = [
  'Professional data analytics solutions',
  'Portfolio creation services',
  'Showcase your expertise',
  'Grow your business',
];

const TYPING_SPEED = 60; // ms per character
const PAUSE_DURATION = 1200; // ms to pause after full phrase

const Hero: React.FC<HeroProps> = ({ setActiveSection }) => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const current = subtitles[subtitleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout = setTimeout(() => setTyping(false), PAUSE_DURATION);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed('');
        setTyping(true);
        setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, subtitleIndex]);

  const handleGetStarted = () => {
    setActiveSection('contact');
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="text-center">
          <h1 className="mb-6">
            <span className="block text-3xl md:text-5xl font-extrabold text-white leading-tight mb-2">
              Empowering Your Data Journey
            </span>
            <span className="block text-3xl md:text-5xl font-bold text-green-400 mb-2 tracking-wide">
              &#8734;
            </span>
            <span className="block text-4xl md:text-6xl font-black tracking-tight">
              <span className="text-white">Verse</span><span className="text-green-400">Bi</span>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-green-300 mb-8 max-w-3xl mx-auto min-h-[2.5rem] transition-all duration-500">
            <span aria-live="polite">{displayed}<span className="inline-block w-2 h-6 align-middle bg-green-400 animate-pulse ml-1" style={{borderRadius:'2px'}}></span></span>
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Get Started Today
            <ChevronRight size={20} className="ml-2" />
          </button>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group flex flex-col h-full">
            <div className="flex items-center mb-4">
              <BarChart3 size={32} className="text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Data & BI Analysis</h3>
            </div>
            <p className="text-gray-300 mb-6">
              Transform your data into actionable insights with custom dashboards, 
              automation, and seamless integrations across your systems.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Power BI, Tableau, Excel expertise
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                ERP, SCM, CRM integrations
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Custom automation solutions
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Fully interactive Dashboard
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                7 days support
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Detailed report
              </li>
            </ul>
            <div className="mt-auto">
              <div className="bg-green-500/20 rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold text-green-400">Starting from $120</div>
              </div>
              <button 
                onClick={() => {
                  setActiveSection('contact');
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 w-full"
              >
                Get your interactive Dashboard
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <div className="flex items-center mb-4">
              <Globe size={32} className="text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Portfolio Creation</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Launch your professional portfolio website quickly and easily, designed to showcase your data expertise and achievements.
            </p>
            <ul className="text-gray-300 space-y-2 mb-6">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Live in 1-3 days
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Custom domain
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                SSL certificate
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Managed hosting included
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Modern, interactive template
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                Mobile-friendly & responsive
              </li>
            </ul>
            <div className="bg-green-500/20 rounded-lg p-4 mb-4">
              <div className="text-3xl font-bold text-green-400">$150</div>
              <div className="text-sm text-gray-300">One-time for first year</div>
            </div>
            <button 
              onClick={() => {
                setActiveSection('contact');
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 w-full"
            >
              Get Your Portfolio Live Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
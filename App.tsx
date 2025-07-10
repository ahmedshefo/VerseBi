import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import CookiePolicy from './components/CookiePolicy';
import LoadingIcon from './components/LoadingIcon';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Real loading bar animation
    const loadingBar = document.getElementById('loading-bar');
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5; // Random progress between 5-20%
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 300);
      }
      
      if (loadingBar) {
        loadingBar.style.width = progress + '%';
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (showPrivacyPolicy) {
    return (
      <PrivacyPolicy onBack={() => setShowPrivacyPolicy(false)} />
    );
  }

  if (showTermsOfService) {
    return (
      <TermsOfService onBack={() => setShowTermsOfService(false)} />
    );
  }

  if (showCookiePolicy) {
    return (
      <CookiePolicy onBack={() => setShowCookiePolicy(false)} />
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <LoadingIcon />
          <div className="mt-8 w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-green-400 rounded-full transition-all duration-300 ease-out" style={{width: '0%'}} id="loading-bar"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer 
        onPrivacyPolicyClick={() => setShowPrivacyPolicy(true)}
        onTermsOfServiceClick={() => setShowTermsOfService(true)}
        onCookiePolicyClick={() => setShowCookiePolicy(true)}
      />
    </div>
  );
}

export default App;
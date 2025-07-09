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

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

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
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-gray-800' : 'bg-transparent border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={e => { e.preventDefault(); handleNavClick('home'); }}
              className="text-2xl font-bold focus:outline-none rounded transition-shadow duration-200"
              aria-label="Go to home section"
            >
              <span className="text-white">Verse</span>
              <span className="text-green-500">Bi</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center" aria-label="Main navigation">
            <ul className="flex items-baseline space-x-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={e => { e.preventDefault(); handleNavClick(item.id); }}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded ${
                      activeSection === item.id
                        ? 'text-green-500 border-b-2 border-green-500'
                        : 'text-gray-300 hover:text-green-400'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 transition-colors duration-200 text-gray-300 hover:text-green-400"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-800 animate-fade-in" aria-label="Mobile navigation">
            <ul className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={e => { e.preventDefault(); handleNavClick(item.id); }}
                    className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded ${
                      activeSection === item.id
                        ? 'text-green-500 bg-green-900/20'
                        : 'text-gray-300 hover:text-green-400 hover:bg-green-900/20'
                    }`}
                    aria-current={activeSection === item.id ? 'page' : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
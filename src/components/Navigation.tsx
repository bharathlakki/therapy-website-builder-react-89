
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p6bGgzl8X5q8b8M9QQcCvkOjYhALKi.png"
              alt="Dr. Serena Blake"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h1 className={`font-semibold ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`}>
                Dr. Serena Blake
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-600'}`}>
                Clinical Psychologist
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`hover:text-blue-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-gray-700'}`}
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full"
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            <div className="w-6 h-5 relative">
              <span className={`absolute w-full h-0.5 bg-gray-700 transition-all ${
                isMobileMenuOpen ? 'rotate-45 top-2' : 'top-0'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 top-2 transition-all ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-full h-0.5 bg-gray-700 transition-all ${
                isMobileMenuOpen ? '-rotate-45 top-2' : 'top-4'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                Contact
              </button>
              <div className="px-4">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full"
                >
                  Book Consult
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

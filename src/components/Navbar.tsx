import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Instagram, Linkedin } from 'lucide-react';


export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Stack & Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo / Developer Name */}
          <a href="#inicio" className="flex items-center gap-2 group">
            <span className="font-extrabold text-xl text-white tracking-tight uppercase">
              MATIAS<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.DEV</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Social Links */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/matias-salazar-9a110b312/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-blue-400 hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/5 hover:border-blue-500/30"
              title="LinkedIn de Matias"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/smatias_n/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-pink-400 hover:bg-white/10 rounded-xl transition-all duration-200 border border-white/5 hover:border-pink-500/30"
              title="Instagram de Matias (@smatias_n)"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://www.linkedin.com/in/matias-salazar-9a110b312/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-300 hover:text-blue-400 bg-white/5 border border-white/10 rounded-xl"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/smatias_n/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-gray-300 hover:text-pink-400 bg-white/5 border border-white/10 rounded-xl"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-gray-300 hover:text-white bg-white/5 border border-white/10 rounded-xl"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Social in mobile drawer */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
              <a
                href="https://www.linkedin.com/in/matias-salazar-9a110b312/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/smatias_n/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white flex items-center justify-center gap-2 text-xs font-semibold"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5493815755909"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl text-center text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};


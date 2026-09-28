import React from 'react';
import { ArrowUp, MessageSquare, Instagram, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/40 border-t border-white/5 backdrop-blur-sm pt-14 pb-10 text-gray-400 text-xs relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight uppercase text-white">
                MATIAS<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">.DEV</span>
              </span>
            </div>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm">
              Portfolio de desarrollo web full-stack, software a medida y plataformas interactivas. Creado con React, TypeScript y Tailwind CSS en Tucumán, Argentina.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <a
                href="https://wa.me/5493815755909?text=Hola%20Matias!%20Te%20escribo%20desde%20tu%20portfolio%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-emerald-500/40 transition-colors flex items-center gap-2"
                title="Contactar vía WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href="https://www.linkedin.com/in/matias-salazar-9a110b312/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-blue-500/40 transition-colors flex items-center gap-2"
                title="Perfil en LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/smatias_n/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-semibold hover:bg-white/10 hover:border-pink-500/40 transition-colors flex items-center gap-2"
                title="Perfil en Instagram"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div className="lg:col-span-6 space-y-2">
            <h4 className="font-bold text-white text-[10px] uppercase tracking-widest">Navegación Rápida</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#proyectos" className="hover:text-white transition-colors">Proyectos Realizados</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Stack & Habilidades</a></li>
              <li><a href="#contacto" className="hover:text-white transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-[11px] font-mono text-center sm:text-left">
            © {new Date().getFullYear()} Matias • Desarrollador Web
          </p>

          <button
            onClick={scrollToTop}
            className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center gap-1.5 text-xs cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

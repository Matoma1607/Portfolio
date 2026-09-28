import React from 'react';
import { ArrowDown, MessageSquare, Code2, Bot, Layers, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-[-8%] left-1/2 -translate-x-1/2 w-[650px] h-[400px] bg-gradient-to-b from-blue-600/15 via-purple-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Status & Intro */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wide text-gray-300 mb-6 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-white font-bold">PORTFOLIO PERSONAL</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-300">Desarrollo Web & Automatización</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-10"
          >
            Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Matias</span>.
            <br />
            <span className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-200 block mt-2">
              Desarrollador Web & Automatizaciones
            </span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14"
          >
            <button
              onClick={onExplorePortfolio}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-xl shadow-blue-500/20 hover:shadow-purple-500/30 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Explorar Mis Proyectos</span>
              <ArrowDown className="w-4 h-4 text-blue-200 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <a
              href="https://wa.me/5493815755909?text=Hola%20Matias!%20Estuve%20viendo%20tu%20portfolio%20y%20me%20gustaria%20contactarte."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2"
              title="Contactar directamente por WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current text-blue-400" />
              <span>Contactar Directamente</span>
            </a>
          </motion.div>
        </div>

        {/* Bento Hero Cards (Developer Profile Overview) with Scroll-In Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Bento Card 1: Live Projects */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-3xl font-black text-white">7</span>
              <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Code2 className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Proyectos en Producción</h3>
            <p className="text-xs text-gray-400">Sistemas de gestión, portales internos, bots y plataformas web en vivo.</p>

          </motion.div>


          {/* Bento Card 2: Automation & RPA */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-emerald-500/40 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                RPA & Bots
              </span>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <Bot className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Automatización</h3>
            <p className="text-xs text-gray-400">RPA de escritorio/web, bots, scripting y flujos low-code con APIs.</p>
          </motion.div>

          {/* Bento Card 3: Modern Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.19, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-purple-500/40 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                React • TS • Tailwind
              </span>
              <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Desarrollo Web Moderno</h3>
            <p className="text-xs text-gray-400">Interfaces reactivas, componentes modulares y diseño mobile-first.</p>
          </motion.div>

          {/* Bento Card 4: Location */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-indigo-500/40 transition-all duration-300 hover:translate-y-[-2px]"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold text-indigo-300 px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30">
                Tucumán, AR
              </span>
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <MapPin className="w-4 h-4" />
              </div>
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Ubicación</h3>
            <p className="text-xs text-gray-400">Desarrollo remoto, comunicación directa y colaboración técnica.</p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

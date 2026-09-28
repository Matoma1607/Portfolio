import React from 'react';
import { MapPin, Sparkles, Instagram, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';


export const ContactForm: React.FC = () => {
  return (
    <section id="contacto" className="py-20 relative border-t border-white/10">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Contacto Directo
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contacto{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Directo
            </span>
          </h2>

          <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Para consultas sobre mis desarrollos, colaboraciones o preguntas sobre mi trabajo, puedes escribirme directamente.
          </p>
        </motion.div>

        {/* Minimalist Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 sm:p-10 rounded-3xl shadow-2xl"
        >

          <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white">Matias</h3>
              <p className="text-xs text-gray-400">Desarrollo Web & Automatizaciones (RPA)</p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Disponible
            </div>
          </div>

          <div className="space-y-6">
            {/* Round WhatsApp Action Button */}
            <div className="flex flex-col items-center justify-center py-2">
              <a
                href="https://wa.me/5493815755909?text=Hola%20Matias!%20Vi%20tu%20portfolio%20y%20me%20gustaria%20escribirte."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/60 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer p-1 bg-white/[0.04] border border-emerald-500/30 hover:border-emerald-400"
                title="Abrir WhatsApp"
                aria-label="Abrir WhatsApp"
              >
                <img
                  src="https://i.postimg.cc/y6n9kRv7/logowhastapp.jpg"
                  alt="WhatsApp"
                  className="w-full h-full object-cover rounded-full"
                />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-neutral-900"></span>
                </span>
              </a>
              <a
                href="https://wa.me/5493815755909?text=Hola%20Matias!%20Vi%20tu%20portfolio%20y%20me%20gustaria%20escribirte."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm font-semibold text-gray-300 mt-3 hover:text-emerald-400 transition-colors"
              >
                Enviar mensaje por WhatsApp
              </a>
            </div>

            {/* Redes Sociales: Instagram & LinkedIn */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-white/5">
              <a
                href="https://www.linkedin.com/in/matias-salazar-9a110b312/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/40 hover:bg-blue-500/10 text-gray-300 hover:text-white transition-all duration-200 text-xs font-semibold"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://www.instagram.com/smatias_n/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/10 text-gray-300 hover:text-white transition-all duration-200 text-xs font-semibold"
              >
                <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400 group-hover:scale-110 transition-transform">
                  <Instagram className="w-4 h-4" />
                </div>
                <span>Instagram (@smatias_n)</span>
              </a>
            </div>

            {/* Location & Modality info */}
            <div className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>Tucumán, Argentina • Proyectos Remotos & Colaboraciones</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

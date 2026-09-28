import React from 'react';
import { motion } from 'motion/react';
import { Terminal, Smartphone, Workflow, Bot, Cpu, CheckCircle2 } from 'lucide-react';

export const TechStack: React.FC = () => {
  const technologies = [
    { name: 'React 19', role: 'Frontend Core', tag: 'UI Library' },
    { name: 'TypeScript', role: 'Seguridad de Tipos', tag: 'Language' },
    { name: 'Tailwind CSS', role: 'Estilos Utilitarios', tag: 'CSS' },
    { name: 'Vite', role: 'Bundler Ultrarrápido', tag: 'Tooling' },
    { name: 'Motion', role: 'Animaciones Fluidas', tag: 'UX' },
    { name: 'Netlify & Vercel', role: 'Despliegue Continuo', tag: 'DevOps' },
    { name: 'Node.js / Express', role: 'APIs & Backend', tag: 'Runtime' },
    { name: 'RPA', role: 'Automatización de escritorio y web', tag: 'Desktop & Web' },
    { name: 'Low-Code & APIs', role: 'Automatización low-code y APIs', tag: 'Integración' },
    { name: 'Bots & Scripting', role: 'Bots y scripting automatizado', tag: 'Automation' },
  ];

  return (
    <section id="skills" className="py-20 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Cpu className="w-3.5 h-3.5 text-blue-400" />
            Stack & Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Tecnologías &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Áreas de Enfoque
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            El conjunto de herramientas y metodologías que utilizo para programar software robusto, interfaces reactivas y flujos automatizados.
          </p>
        </motion.div>

        {/* Bento Grid for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Bento Card 1: Core Technologies (2 cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-blue-500/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Stack de Desarrollo</h3>
                <p className="text-xs text-gray-400">Ecosistema moderno centrado en rendimiento y mantenibilidad</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {technologies.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.05] transition-all group"
                >
                  <span className="text-[10px] font-mono text-blue-400 font-semibold block mb-1">{tech.tag}</span>
                  <div className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors">{tech.name}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-2 leading-tight">{tech.role}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bento Card 2: Mobile & UX (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-purple-500/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Diseño Mobile-First</h3>
                  <p className="text-xs text-gray-400">Optimización para cualquier pantalla</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Priorizo la experiencia móvil en cada vista: carga liviana, componentes táctiles fluidos y maquetación adaptable a celulares, tablets y desktop.
              </p>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/5">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Navegación táctil fluida</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Carga ultrarrápida y optimizada</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Componentes reutilizables con Tailwind</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Systems & Data Architecture (1 col) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-indigo-500/30 transition-colors"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Workflow className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Sistemas & Lógica Web</h3>
                  <p className="text-xs text-gray-400">Dashboards y gestión interna</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Desarrollo de herramientas con lógica de datos real: control de socios en clubes, trazabilidad de pedidos de óptica y plataformas de consulta comunitaria.
              </p>
            </div>

            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 text-xs text-gray-400 font-mono">
              Famaillá IF • Tucu Oficios • Gestión Óptica
            </div>
          </motion.div>

          {/* Bento Card 4: RPA & Process Automation (2 cols on md) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-2 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/30 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Automatización de Procesos & RPA</h3>
                  <p className="text-xs text-gray-400">Eliminación de tareas repetitivas mediante software y scripts</p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                RPA & Bots
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">RPA Escritorio y Web</div>
                <div className="text-xs text-gray-400">Automatización de flujos en aplicaciones de escritorio, navegadores y plataformas heredadas.</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">Low-Code & Conexión de APIs</div>
                <div className="text-xs text-gray-400">Integración de servicios externos, webhooks y flujos sincronizados entre sistemas.</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-bold text-white mb-1">Bots & Scripting</div>
                <div className="text-xs text-gray-400">Scripts automáticos para procesamiento de datos, scraping y ejecución desatendida de tareas.</div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

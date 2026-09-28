import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Eye, Sparkles, ArrowUpRight, ChevronDown, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Portfolio: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const allCategories = [
    { id: 'all', label: 'Todos los Proyectos', count: PORTFOLIO_PROJECTS.length },
    { id: 'app', label: 'Sistemas & Gestión', count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'app').length },
    { id: 'automation', label: 'Bots & Automatización', count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'automation').length },
    { id: 'web', label: 'Webs & Plataformas', count: PORTFOLIO_PROJECTS.filter((p) => p.category === 'web').length },
  ];
  const categories = allCategories.filter((cat) => cat.count > 0);

  const filteredProjects = activeTab === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter((p) => p.category === activeTab);

  // If in 'all' view and not expanded, show top 2 flagship projects initially, unfolding all when expanded
  const displayedProjects = (activeTab === 'all' && !isExpanded)
    ? filteredProjects.slice(0, 2)
    : filteredProjects;

  return (
    <section id="proyectos" className="py-20 relative border-t border-white/10">
      {/* Anchor for old links */}
      <div id="portafolio" className="absolute -top-24" />

      {/* Subtle ambient light */}
      <div className="absolute top-1/4 left-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-[-100px] w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-purple-400 text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Lo que hago • Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Proyectos Desarrollados &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Casos Reales
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Aquí puedes ver y probar las aplicaciones que he construido: sistemas de gestión, bots en la nube y plataformas web en producción.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="flex items-center justify-center flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setIsExpanded(true); // Auto-expand when selecting specific category
              }}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/20 border border-white/20 scale-105'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeTab === cat.id ? 'bg-black/30 text-white' : 'bg-white/10 text-gray-400'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project, index) => {
              // Bento layout sizing: in 'all' view, cards alternate 2-cols and 1-col on large screens for a balanced 3-col grid
              const isLargeBento = activeTab === 'all' && (index === 0 || index === 3 || index === 4);


              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 45, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.96 }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25 rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                    isLargeBento ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  <div>
                    {/* Media Preview Container */}
                    <div className={`relative overflow-hidden bg-black/60 ${isLargeBento ? 'h-64 sm:h-80' : 'h-60'}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-blue-400 border border-white/10 text-[10px] font-bold uppercase tracking-wider">
                          {project.categoryLabel}
                        </span>

                        {project.highlight && (
                          <span className="px-3 py-1 rounded-full bg-purple-500/25 backdrop-blur-md text-purple-300 border border-purple-500/30 text-[10px] font-semibold">
                            {project.highlight}
                          </span>
                        )}
                      </div>

                      {/* Hover Overlay Fast Actions */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold shadow-xl flex items-center gap-1.5 transition-transform hover:scale-105"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Abrir Sitio en Vivo</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => setSelectedProject(project)}
                            className={`px-4 py-2.5 rounded-xl text-white text-xs font-bold shadow-xl flex items-center gap-1.5 transition-transform hover:scale-105 cursor-pointer ${
                              project.category === 'automation'
                                ? 'bg-gradient-to-r from-emerald-600 to-teal-600'
                                : 'bg-gradient-to-r from-blue-600 to-indigo-600'
                            }`}
                          >
                            {project.category === 'automation' ? (
                              <Bot className="w-3.5 h-3.5" />
                            ) : (
                              <Eye className="w-3.5 h-3.5" />
                            )}
                            <span>{project.category === 'automation' ? 'Ver Arquitectura & Bot' : 'Ver Portal Interno'}</span>
                          </button>
                        )}


                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-4 py-2.5 rounded-xl bg-white/15 border border-white/20 text-white text-xs font-bold hover:bg-white/25 transition-transform hover:scale-105 flex items-center gap-1.5 cursor-pointer backdrop-blur-md"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Ver más</span>
                        </button>
                      </div>
                    </div>

                    {/* Card Content Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2 text-xs font-mono text-gray-400">
                        <span className="text-blue-400 font-bold">{project.subtitle || project.categoryLabel}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2.5 tracking-tight">
                        {project.title}
                      </h3>

                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tech Stack Chips */}
                      {project.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className={`px-2.5 py-1 rounded-lg border text-[11px] font-mono ${
                                tech.toLowerCase().includes('sheet')
                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-semibold'
                                  : tech.toLowerCase().includes('telegram') || tech.toLowerCase().includes('script')
                                  ? 'bg-blue-500/10 border-blue-500/30 text-blue-300 font-semibold'
                                  : 'bg-white/5 border border-white/10 text-gray-300'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Features bullets for large bento */}
                      {isLargeBento && project.features && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3 border-t border-white/5 mb-2">
                          {project.features.map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-gray-400">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Card Bottom CTA Strip */}
                  <div className="p-6 pt-0 border-t border-white/5 flex items-center gap-3 mt-auto">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/40 text-white text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Ver Demo en Vivo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </a>
                    ) : (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className={`flex-1 py-3 px-4 rounded-xl border text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer ${
                          project.category === 'automation'
                            ? 'bg-emerald-500/10 border-emerald-500/30 hover:bg-emerald-500/20 text-emerald-300'
                            : 'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 text-blue-300'
                        }`}
                      >
                        {project.category === 'automation' ? (
                          <>
                            <Bot className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Bot Telegram (Detalles)</span>
                          </>
                        ) : (
                          <>
                            <Eye className="w-3.5 h-3.5 text-blue-400" />
                            <span>Ver Portal & Vistas</span>
                          </>
                        )}
                      </button>
                    )}


                    <button
                      onClick={() => setSelectedProject(project)}
                      className="py-3 px-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/40 text-gray-200 hover:text-white text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                      title="Ver más detalles técnicos"
                    >
                      <Eye className="w-4 h-4 text-purple-400" />
                      <span>Ver más</span>
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Section "Ver más" unfold button */}
        {activeTab === 'all' && filteredProjects.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white/5 border border-white/15 hover:border-blue-500/50 hover:bg-white/10 text-white font-bold text-sm transition-all duration-300 shadow-xl shadow-black/40 hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>{isExpanded ? 'Ver menos' : 'Ver más'}</span>
              <ChevronDown
                className={`w-4 h-4 text-blue-400 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </motion.div>
        )}

      </div>

      {/* Interactive Desktop/Mobile Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

import React, { useState } from 'react';
import { X, ExternalLink, Monitor, Smartphone, MessageSquare, Bot, CheckCircle2 } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  const handleConsultProject = () => {
    const text = encodeURIComponent(
      `Hola Matias! 👋 Vi el proyecto "${project.title}" en tu portfolio y me gustaría consultarte.`
    );
    window.open(`https://wa.me/5493815755909?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="p-4 sm:p-6 bg-black/60 border-b border-white/10 flex items-center justify-between">
          <div>
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-bold uppercase tracking-widest">
              {project.categoryLabel}
            </span>
            <h3 className="text-lg sm:text-2xl font-bold text-white mt-1">{project.title}</h3>
            {project.subtitle && <p className="text-xs text-gray-400 font-mono mt-0.5">{project.subtitle}</p>}
          </div>

          <div className="flex items-center gap-2">
            {/* Device Switcher */}
            <div className="hidden sm:flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
              <button
                onClick={() => setDeviceMode('desktop')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'desktop'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Monitor className="w-3.5 h-3.5" />
                <span>Desktop</span>
              </button>
              <button
                onClick={() => setDeviceMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  deviceMode === 'mobile'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>Móvil</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white rounded-xl bg-white/5 border border-white/10"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          
          {/* Device Preview */}
          <div className="bg-black/60 p-4 rounded-2xl border border-white/10 flex justify-center items-center relative overflow-hidden min-h-[260px] sm:min-h-[340px]">
            {deviceMode === 'desktop' ? (
              <div className="w-full max-w-3xl rounded-xl border border-white/10 overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-300">
                <div className="bg-black/80 px-4 py-2 border-b border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  </div>
                  <div className="truncate max-w-xs px-3 py-0.5 bg-neutral-800 rounded text-[11px] text-blue-300">
                    {project.liveUrl || (project.category === 'automation' ? 'Telegram Bot • Scripting & Nube' : 'Portal Interno • Red Privada')}
                  </div>
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white flex items-center gap-1 text-[11px] text-blue-400 font-bold"
                    >
                      <span>Abrir Sitio</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : project.category === 'automation' ? (
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-bold">
                      <Bot className="w-3.5 h-3.5" />
                      <span>Bot Telegram</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] text-blue-400 font-bold">
                      <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span>Portal Interno</span>
                    </span>
                  )}
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[460px] object-contain bg-black/40"
                />
              </div>
            ) : (
              <div className="w-72 rounded-[32px] border-4 border-neutral-700 overflow-hidden bg-neutral-900 shadow-2xl transition-all duration-300 relative">
                <div className="bg-black pt-2 pb-1 text-center text-[10px] text-gray-400 font-mono border-b border-white/10">
                  <div className="w-12 h-1 bg-neutral-600 rounded-full mx-auto mb-1" />
                  {project.category === 'automation' ? 'Telegram Bot View' : 'Vista Móvil'}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full max-h-[480px] object-contain bg-black/40"
                />
              </div>
            )}
          </div>

          {/* Description */}
          <div className="p-4 bg-white/5 rounded-xl border border-white/10">
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Descripción del Desarrollo</h4>
            <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
          </div>

          {/* Architecture / Features */}
          {project.features && project.features.length > 0 && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3">Puntos Clave & Arquitectura</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          {project.techStack && (
            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-2">Stack Utilizado</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-black/60 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4 text-blue-400" />
              <span>Visitar Sitio Web</span>
            </a>
          ) : (
            <div className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl ${
              project.category === 'automation'
                ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                : 'text-blue-400 bg-blue-500/10 border border-blue-500/20'
            }`}>
              {project.category === 'automation' ? (
                <Bot className="w-4 h-4" />
              ) : (
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              )}
              <span>
                {project.category === 'automation'
                  ? 'Proyecto de Scripting & Bot (Sin interfaz web pública)'
                  : 'Portal de Uso Interno / Red Privada'}
              </span>
            </div>
          )}


          <button
            onClick={handleConsultProject}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { MessageSquare, X, Code2 } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWhatsApp = (customMsg?: string) => {
    const text = encodeURIComponent(
      customMsg || 'Hola Matias! 👋 Vi tu portfolio y me gustaría hacerte una consulta por un proyecto web.'
    );
    window.open(`https://wa.me/5493815755909?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      
      {/* WhatsApp Popup Card */}
      {isOpen && (
        <div className="mb-4 w-72 bg-neutral-900/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 text-white flex items-center justify-center font-bold text-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-neutral-900" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Matias</h4>
                <span className="text-[10px] text-emerald-400 font-medium">🟢 Disponible ahora</span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-400 hover:text-white rounded-lg cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-gray-300 leading-relaxed mb-4 bg-white/5 p-3 rounded-xl border border-white/10">
            ¡Hola! 👋 Si quieres consultar sobre mis desarrollos o conversar sobre una colaboración técnica, escríbeme directamente.
          </p>


          <button
            onClick={() => handleOpenWhatsApp()}
            className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Iniciar Chat en WhatsApp</span>
          </button>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative p-3.5 sm:p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-full shadow-2xl shadow-blue-500/30 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
        aria-label="Abrir WhatsApp"
        title="Contactar directamente por WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
      </button>

    </div>
  );
};

import { Play, Info } from 'lucide-react';
import type { InflectionPoint } from './EventSelection';

interface InfoPanelProps {
  selectedPoint: InflectionPoint | null;
}

export function InfoPanel({ selectedPoint }: InfoPanelProps) {
  if (!selectedPoint) {
    return (
      <div 
        className="bg-slate-800 border-2 border-slate-700 rounded-xl p-6 lg:p-8"
        role="status"
        aria-live="polite"
      >
        <div className="text-center space-y-4">
          <div 
            className="w-20 h-20 mx-auto bg-slate-700 rounded-full flex items-center justify-center"
            aria-hidden="true"
          >
            <Info size={40} className="text-slate-500" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-white">
              Aucun scénario sélectionné
            </h2>
            <p className="text-base text-slate-400">
              Choisissez un point d'inflexion dans la timeline pour découvrir son scénario alternatif
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article 
      aria-labelledby="info-panel-title"
      className="bg-slate-800 border-2 border-indigo-500 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Image principale */}
      <div className="relative w-full h-48 lg:h-56 overflow-hidden bg-slate-900">
        <img 
          src={selectedPoint.imageUrl} 
          alt={`Illustration du scénario : ${selectedPoint.title}`}
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <span 
              className={`text-xs px-3 py-1 rounded font-medium ${
                selectedPoint.era === 'Antiquité' ? 'bg-amber-600 text-white' :
                selectedPoint.era === 'Moyen Âge' ? 'bg-purple-600 text-white' :
                selectedPoint.era === 'Époque moderne' ? 'bg-blue-600 text-white' :
                'bg-emerald-600 text-white'
              }`}
            >
              {selectedPoint.era}
            </span>
            <span className="text-sm text-white font-mono bg-black/60 px-2 py-1 rounded">
              {selectedPoint.year}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6 lg:p-8 space-y-6">
        <header>
          <h2 id="info-panel-title" className="text-xl lg:text-2xl font-bold text-white">
            {selectedPoint.title}
          </h2>
        </header>
      
        {/* Description */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-2">
              Description
            </h3>
            <p className="text-base lg:text-lg text-slate-200 leading-relaxed">
              {selectedPoint.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-2">
              Impact potentiel
            </h3>
            <p className="text-base text-slate-200 leading-relaxed">
              {selectedPoint.impact}
            </p>
          </div>
        </div>

        {/* Action button */}
        <button
          className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 lg:py-5 px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 flex items-center justify-center gap-3 shadow-lg"
          aria-label={`Lancer la simulation : ${selectedPoint.title}`}
        >
          <Play size={20} aria-hidden="true" fill="currentColor" />
          <span className="text-base lg:text-lg">Lancer la simulation</span>
        </button>

        {/* Stats ou info additionnelle */}
        <div className="pt-4 border-t border-slate-700 grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-indigo-400">12</p>
            <p className="text-xs lg:text-sm text-slate-400">Simulations</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-indigo-400">4.8</p>
            <p className="text-xs lg:text-sm text-slate-400">Note moyenne</p>
          </div>
        </div>
      </div>
    </article>
  );
}
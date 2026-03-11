import { useState } from 'react';
import { User, Search, Settings, ChevronRight, Shield } from 'lucide-react';
import { CookieConsent } from './CookieConsent';

interface InflectionPoint {
  id: string;
  era: string;
  title: string;
  description: string;
  year: string;
}

const inflectionPoints: InflectionPoint[] = [
  {
    id: '1',
    era: 'Antiquité',
    title: 'Et si la Bibliothèque d\'Alexandrie n\'avait jamais brûlé ?',
    description: 'Explorez un monde où le savoir antique a été préservé. Comment la Renaissance aurait-elle été différente si les manuscrits perdus avaient survécu ?',
    year: '-48'
  },
  {
    id: '2',
    era: 'Moyen-Âge',
    title: 'Et si la Peste Noire avait épargné l\'Europe ?',
    description: 'Découvrez une Europe sans la grande peste du XIVe siècle. Quel impact sur la démographie, l\'économie et les rapports sociaux ?',
    year: '1347'
  },
  {
    id: '3',
    era: 'Époque Moderne',
    title: 'Et si Louis XVI avait réussi sa fuite à Varennes ?',
    description: 'Imaginez une France où le roi parvient à rejoindre les armées étrangères. La République aurait-elle existé ?',
    year: '1791'
  },
  {
    id: '4',
    era: 'Époque Contemporaine',
    title: 'Et si Internet avait été inventé en 1940 ?',
    description: 'Visualisez un XXe siècle transformé par Internet dès la Seconde Guerre mondiale. Quelles conséquences géopolitiques et culturelles ?',
    year: '1940'
  }
];

const eras = [
  { name: 'Antiquité', range: '-3000 à 476', color: 'bg-amber-600' },
  { name: 'Moyen-Âge', range: '476 à 1492', color: 'bg-purple-600' },
  { name: 'Époque Moderne', range: '1492 à 1789', color: 'bg-blue-600' },
  { name: 'Époque Contemporaine', range: '1789 à aujourd\'hui', color: 'bg-emerald-600' }
];

export function TimelineNexus() {
  const [selectedPoint, setSelectedPoint] = useState<InflectionPoint | null>(null);
  const [showDataManagement, setShowDataManagement] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-slate-950 text-slate-50 max-w-md mx-auto">
      {/* Barre supérieure */}
      <header 
        className="flex items-center justify-between px-4 py-4 border-b border-slate-800"
        role="banner"
      >
        <h1 className="text-lg font-semibold flex-1">
          Console de contrôle temporel
        </h1>
        <nav aria-label="Navigation principale" className="flex items-center gap-2">
          <button
            aria-label="Rechercher"
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Search size={20} aria-hidden="true" />
          </button>
          <button
            aria-label="Profil utilisateur"
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <User size={20} aria-hidden="true" />
          </button>
          <button
            aria-label="Paramètres"
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            <Settings size={20} aria-hidden="true" />
          </button>
        </nav>
      </header>

      {/* Zone principale */}
      <main className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Introduction */}
        <section aria-labelledby="intro-title">
          <h2 id="intro-title" className="sr-only">Introduction</h2>
          <p className="text-slate-300 text-base">
            Sélectionnez un point d'inflexion historique pour simuler une timeline alternative
          </p>
        </section>

        {/* Timeline horizontale */}
        <section aria-labelledby="timeline-title" className="space-y-4">
          <h2 id="timeline-title" className="text-lg font-semibold">
            Timeline Interactive
          </h2>
          
          {/* Époques */}
          <div 
            className="overflow-x-auto pb-4 -mx-4 px-4"
            role="region"
            aria-label="Timeline des époques historiques"
            tabIndex={0}
          >
            <div className="flex gap-4 min-w-max">
              {eras.map((era, index) => (
                <div
                  key={era.name}
                  className="flex flex-col items-center min-w-[160px]"
                >
                  <div className={`w-full h-2 ${era.color} rounded-full mb-2`} aria-hidden="true" />
                  <h3 className="font-semibold text-base text-center">
                    {era.name}
                  </h3>
                  <p className="text-sm text-slate-400 text-center">
                    {era.range}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Points d'inflexion */}
          <div className="space-y-3">
            <h3 className="text-base font-medium text-slate-300">
              Points d'inflexion disponibles
            </h3>
            <ul className="space-y-3" role="list">
              {inflectionPoints.map((point) => (
                <li key={point.id}>
                  <button
                    onClick={() => setSelectedPoint(point)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                      selectedPoint?.id === point.id
                        ? 'border-cyan-400 bg-slate-800'
                        : 'border-slate-700 bg-slate-900 hover:border-slate-600'
                    }`}
                    aria-pressed={selectedPoint?.id === point.id}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span 
                            className={`text-xs px-2 py-1 rounded ${
                              point.era === 'Antiquité' ? 'bg-amber-600/20 text-amber-300' :
                              point.era === 'Moyen-Âge' ? 'bg-purple-600/20 text-purple-300' :
                              point.era === 'Époque Moderne' ? 'bg-blue-600/20 text-blue-300' :
                              'bg-emerald-600/20 text-emerald-300'
                            }`}
                          >
                            {point.era}
                          </span>
                          <span className="text-xs text-slate-400">
                            {point.year}
                          </span>
                        </div>
                        <p className="text-base font-medium leading-snug">
                          {point.title}
                        </p>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={`flex-shrink-0 mt-1 ${
                          selectedPoint?.id === point.id ? 'text-cyan-400' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Panneau d'information */}
        {selectedPoint && (
          <section 
            aria-labelledby="info-panel-title"
            className="bg-slate-900 border-2 border-cyan-400/50 rounded-lg p-5 space-y-4"
          >
            <h2 id="info-panel-title" className="text-lg font-semibold text-cyan-400">
              Scénario sélectionné
            </h2>
            
            {/* Illustration placeholder */}
            <div 
              className="w-full h-48 bg-slate-800 rounded-lg border border-slate-700 flex items-center justify-center"
              role="img"
              aria-label={`Illustration du scénario : ${selectedPoint.title}`}
            >
              <div className="text-center text-slate-500">
                <div className="w-16 h-16 mx-auto mb-2 border-2 border-slate-700 rounded-lg flex items-center justify-center">
                  <span className="text-2xl" aria-hidden="true">🦋</span>
                </div>
                <p className="text-sm">Illustration du scénario</p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-semibold">
                {selectedPoint.title}
              </h3>
              <p className="text-base text-slate-300 leading-relaxed">
                {selectedPoint.description}
              </p>
            </div>

            <button
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold py-4 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label={`Simuler la timeline : ${selectedPoint.title}`}
            >
              Simuler cette timeline
            </button>
          </section>
        )}
      </main>

      {/* Pied de page - RGPD */}
      <footer 
        className="border-t border-slate-800 px-4 py-4"
        role="contentinfo"
      >
        <button
          onClick={() => setShowDataManagement(!showDataManagement)}
          className="w-full flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 py-2 rounded"
        >
          <Shield size={16} aria-hidden="true" />
          <span>Gestion des données et confidentialité</span>
        </button>
        
        {showDataManagement && (
          <div 
            className="mt-3 p-4 bg-slate-900 rounded-lg border border-slate-700"
            role="region"
            aria-label="Informations sur la confidentialité"
          >
            <h3 className="text-base font-semibold mb-2">Vos données</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-3">
              Cette application ne collecte aucune donnée personnelle par défaut. 
              Vous pouvez l'utiliser sans créer de compte.
            </p>
            <button
              className="text-sm text-cyan-400 hover:text-cyan-300 underline focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded"
            >
              En savoir plus sur notre politique de confidentialité
            </button>
          </div>
        )}
      </footer>

      {/* Consentement cookies */}
      <CookieConsent />
    </div>
  );
}

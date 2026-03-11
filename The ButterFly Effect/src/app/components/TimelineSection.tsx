import { InflectionPoint } from './EventSelection';
import { ChevronDown, Play } from 'lucide-react';

const eras = [
  { name: 'Antiquité', range: '-3000 à 476', color: 'bg-amber-600', borderColor: 'border-amber-600' },
  { name: 'Moyen Âge', range: '476 à 1492', color: 'bg-purple-600', borderColor: 'border-purple-600' },
  { name: 'Époque moderne', range: '1492 à 1789', color: 'bg-blue-600', borderColor: 'border-blue-600' },
  { name: 'Époque contemporaine', range: '1789 à aujourd\'hui', color: 'bg-emerald-600', borderColor: 'border-emerald-600' }
];

const inflectionPoints: InflectionPoint[] = [
  {
    id: '1',
    era: 'Antiquité',
    title: 'Et si la Bibliothèque d\'Alexandrie n\'avait jamais brûlé ?',
    description: 'Explorez un monde où le savoir antique a été préservé. Des milliers de manuscrits contenant la connaissance grecque, égyptienne et romaine auraient pu transformer le développement de la science et de la philosophie.',
    year: '-48',
    impact: 'La Renaissance aurait pu arriver 1000 ans plus tôt. Les connaissances perdues en mathématiques, astronomie et médecine auraient accéléré le progrès scientifique.',
    imageUrl: 'https://images.unsplash.com/photo-1707241934240-f10247984c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwbGlicmFyeSUyMGFsZXhhbmRyaWElMjBib29rcyUyMHNjcm9sbHN8ZW58MXx8fHwxNzczMjM3MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '2',
    era: 'Moyen Âge',
    title: 'Et si la Peste noire avait épargné l\'Europe ?',
    description: 'Découvrez une Europe sans la grande peste du XIVe siècle qui a décimé entre 30% et 60% de la population. Comment les structures sociales, économiques et politiques auraient-elles évolué différemment ?',
    year: '1347',
    impact: 'Sans cette catastrophe démographique, le système féodal aurait perduré plus longtemps. Les salaires n\'auraient pas augmenté et la mobilité sociale aurait été beaucoup plus limitée.',
    imageUrl: 'https://images.unsplash.com/photo-1706820864836-4a233c74531f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHBsYWd1ZSUyMGV1cm9wZSUyMGJsYWNrJTIwZGVhdGh8ZW58MXx8fHwxNzczMjM3MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '3',
    era: 'Époque moderne',
    title: 'Et si Louis XVI avait réussi sa fuite à Varennes ?',
    description: 'Imaginez une France où le roi parvient à rejoindre les armées étrangères en juin 1791. La monarchie aurait-elle été restaurée ? La République française aurait-elle existé ?',
    year: '1791',
    impact: 'La Révolution française aurait pu être écrasée par une coalition monarchique européenne. Napoléon n\'aurait jamais pris le pouvoir et toute l\'histoire européenne aurait été transformée.',
    imageUrl: 'https://images.unsplash.com/photo-1660646100706-36d83921bdd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJzYWlsbGVzJTIwY2FzdGxlJTIwZnJhbmNlJTIwaGlzdG9yaWNhbHxlbnwxfHx8fDE3NzMyMzcyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  {
    id: '4',
    era: 'Époque contemporaine',
    title: 'Et si Internet avait été inventé en 1940 ?',
    description: 'Visualisez un XXe siècle transformé par Internet dès la Seconde Guerre mondiale. Quelles auraient été les conséquences sur la guerre, la Guerre froide, et le développement technologique ?',
    year: '1940',
    impact: 'La Seconde Guerre mondiale aurait été radicalement différente avec les communications instantanées. La désinformation et la cybersécurité seraient devenues des enjeux militaires majeurs dès les années 1940.',
    imageUrl: 'https://images.unsplash.com/photo-1561990975-6cfff5661206?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwY29tcHV0ZXIlMjB0ZWNobm9sb2d5JTIwMTk0MHN8ZW58MXx8fHwxNzczMjM3MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080'
  }
];

interface TimelineSectionProps {
  selectedPoint: InflectionPoint | null;
  onSelectPoint: (point: InflectionPoint) => void;
}

export function TimelineSection({ selectedPoint, onSelectPoint }: TimelineSectionProps) {
  return (
    <section aria-labelledby="timeline-title" className="space-y-6">
      {/* Timeline horizontale */}
      <div>
        <h2 id="timeline-title" className="text-xl lg:text-2xl font-semibold mb-4 text-white">
          Timeline Interactive
        </h2>
        
        <div 
          className="overflow-x-auto pb-4 -mx-4 px-4"
          role="region"
          aria-label="Timeline des époques historiques"
          tabIndex={0}
        >
          <div className="flex gap-4 lg:gap-6 min-w-max">
            {eras.map((era) => (
              <div
                key={era.name}
                className="flex flex-col items-center min-w-[140px] lg:min-w-[200px]"
              >
                <div className={`w-full h-3 ${era.color} rounded-full mb-3`} aria-hidden="true" />
                <h3 className="font-semibold text-base lg:text-lg text-center text-white">
                  {era.name}
                </h3>
                <p className="text-sm lg:text-base text-slate-400 text-center mt-1">
                  {era.range}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Points d'inflexion */}
      <div>
        <h3 className="text-lg lg:text-xl font-medium text-slate-200 mb-4">
          Points d'inflexion disponibles
        </h3>
        
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" role="list">
          {inflectionPoints.map((point) => {
            const era = eras.find(e => e.name === point.era);
            const isSelected = selectedPoint?.id === point.id;
            
            return (
              <li key={point.id} className="md:col-span-2">
                <div>
                  <button
                    onClick={() => onSelectPoint(isSelected ? null : point)}
                    className={`w-full text-left rounded-xl border-2 overflow-hidden transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                      isSelected
                        ? 'border-indigo-500 shadow-lg'
                        : 'border-slate-700 hover:border-slate-600 bg-slate-800'
                    }`}
                    aria-pressed={isSelected}
                    aria-expanded={isSelected}
                  >
                    {/* Image d'illustration */}
                    <div className="relative w-full h-32 lg:h-40 overflow-hidden bg-slate-800">
                      <img 
                        src={point.imageUrl} 
                        alt={point.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                        <span 
                          className={`text-xs px-2 py-1 rounded font-medium ${
                            point.era === 'Antiquité' ? 'bg-amber-600 text-white' :
                            point.era === 'Moyen Âge' ? 'bg-purple-600 text-white' :
                            point.era === 'Époque moderne' ? 'bg-blue-600 text-white' :
                            'bg-emerald-600 text-white'
                          }`}
                        >
                          {point.era}
                        </span>
                        <span className="text-xs text-white font-mono bg-black/60 px-2 py-1 rounded">
                          {point.year}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 lg:p-5 bg-slate-800 flex items-center justify-between">
                      <p className="text-base lg:text-lg font-semibold leading-snug text-white">
                        {point.title}
                      </p>
                      <ChevronDown 
                        size={24} 
                        className={`flex-shrink-0 ml-3 text-slate-400 transition-transform ${isSelected ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </div>
                  </button>

                  {/* Menu déroulant avec détails */}
                  {isSelected && (
                    <div className="border-2 border-t-0 border-indigo-500 rounded-b-xl bg-slate-800 p-6 lg:p-8 space-y-6">
                      {/* Description */}
                      <div>
                        <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-2">
                          Description
                        </h4>
                        <p className="text-base lg:text-lg text-slate-200 leading-relaxed">
                          {point.description}
                        </p>
                      </div>

                      {/* Impact potentiel */}
                      <div>
                        <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wide mb-2">
                          Impact potentiel
                        </h4>
                        <p className="text-base text-slate-200 leading-relaxed">
                          {point.impact}
                        </p>
                      </div>

                      {/* Bouton d'action */}
                      <button
                        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 lg:py-5 px-6 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-800 flex items-center justify-center gap-3 shadow-lg"
                        aria-label={`Lancer la simulation : ${point.title}`}
                      >
                        <Play size={20} aria-hidden="true" fill="currentColor" />
                        <span className="text-base lg:text-lg">Lancer la simulation</span>
                      </button>

                      {/* Stats */}
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
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
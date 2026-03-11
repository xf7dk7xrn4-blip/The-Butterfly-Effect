import { useState } from 'react';
import { NavBar } from './NavBar';
import { TimelineSection } from './TimelineSection';
import { InfoPanel } from './InfoPanel';
import { CookieConsent } from './CookieConsent';
import { BottomNav } from './BottomNav';

export interface InflectionPoint {
  id: string;
  era: string;
  title: string;
  description: string;
  year: string;
  impact: string;
  imageUrl: string;
}

export const inflectionPoints: InflectionPoint[] = [
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

export function EventSelection() {
  const [selectedPoint, setSelectedPoint] = useState<InflectionPoint | null>(null);

  return (
    <div className="min-h-screen flex flex-col pb-16 lg:pb-0 bg-slate-900">
      <NavBar />
      
      <main className="flex-1">
        {/* Layout Desktop: 2 colonnes | Mobile: vertical */}
        <div className="container mx-auto px-4 py-8 lg:py-12">
          {/* Hero section with title over image */}
          <div className="relative rounded-xl overflow-hidden mb-8 lg:mb-12 h-64 lg:h-80">
            <img 
              src="https://images.unsplash.com/photo-1501139083538-0139583c060f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjbG9jayUyMHRpbWUlMjBoaXN0b3J5JTIwdmludGFnZXxlbnwxfHx8fDE3NzMyMzk1Njh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Horloge vintage symbolisant le temps et l'histoire"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/70 to-slate-900/80" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
              <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2 lg:mb-3 text-white">
                Choisissez un point d'inflexion de l'Histoire
              </h1>
              <p className="text-center text-slate-200 text-sm lg:text-base max-w-2xl">
                Explorez des scénarios alternatifs et découvrez comment un événement aurait pu changer le cours de l'histoire
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Timeline - Pleine largeur */}
            <div className="lg:col-span-3">
              <TimelineSection 
                selectedPoint={selectedPoint}
                onSelectPoint={setSelectedPoint}
              />
            </div>
          </div>
        </div>
      </main>

      <footer 
        className="border-t border-slate-700 py-6 px-4 text-center bg-slate-900"
        role="contentinfo"
      >
        <p className="text-sm text-slate-400">
          © 2026 The Butterfly Effect - Simulateur d'Uchronies
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Application éducative - Aucune donnée personnelle collectée
        </p>
      </footer>

      <BottomNav />
      <CookieConsent />
    </div>
  );
}
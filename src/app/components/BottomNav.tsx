import { Home, Compass, FileText, User } from 'lucide-react';

const navItems = [
  { name: 'Accueil', icon: Home, href: '#accueil' },
  { name: 'Explorer', icon: Compass, href: '#explorer' },
  { name: 'Simulations', icon: FileText, href: '#simulations' },
  { name: 'Profil', icon: User, href: '#profil' }
];

export function BottomNav() {
  return (
    <nav 
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 z-50"
      role="navigation"
      aria-label="Navigation mobile"
    >
      <ul className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.name} className="flex-1">
              <a
                href={item.href}
                className="flex flex-col items-center justify-center h-full text-slate-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-label={item.name}
              >
                <Icon size={22} aria-hidden="true" />
                <span className="text-xs mt-1">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
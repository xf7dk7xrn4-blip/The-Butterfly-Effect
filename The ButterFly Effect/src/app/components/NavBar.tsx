import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

const navLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Explorer les Uchronies', href: '#explorer' },
  { name: 'Mes Simulations', href: '#simulations' },
  { name: 'Confidentialité', href: '#confidentialite' }
];

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-2xl">🦋</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg lg:text-xl font-bold text-white">
                The Butterfly Effect
              </h1>
              <p className="text-xs text-slate-400 hidden lg:block">
                Simulateur d'Uchronies
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-4 py-2 text-base text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Profil utilisateur */}
            <button
              aria-label="Profil utilisateur"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <User size={20} aria-hidden="true" />
            </button>

            {/* Menu hamburger (mobile) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {isMobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className="lg:hidden py-4 border-t border-slate-700 bg-slate-900"
            role="menu"
          >
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name} role="none">
                  <a
                    href={link.href}
                    role="menuitem"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
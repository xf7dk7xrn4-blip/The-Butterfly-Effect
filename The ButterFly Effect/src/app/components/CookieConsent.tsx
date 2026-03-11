import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-description"
      className="fixed bottom-20 lg:bottom-4 left-4 right-4 lg:left-auto lg:right-4 lg:max-w-md bg-slate-800 border-2 border-slate-700 rounded-lg shadow-2xl p-4 lg:p-5 z-50"
    >
      <div className="flex justify-between items-start mb-3">
        <h2 id="cookie-title" className="text-base lg:text-lg font-semibold text-white">
          🍪 Cookies et confidentialité
        </h2>
        <button
          onClick={handleDecline}
          aria-label="Fermer le message"
          className="p-1 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <X size={18} aria-hidden="true" />
        </button>
      </div>
      
      <p id="cookie-description" className="text-sm lg:text-base text-slate-300 leading-relaxed mb-4">
        Nous utilisons uniquement des cookies essentiels pour améliorer votre expérience. 
        Aucune donnée personnelle n'est collectée ou partagée.
      </p>

      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={handleAccept}
          className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Accepter
        </button>
        <button
          onClick={handleDecline}
          className="flex-1 bg-slate-700 hover:bg-slate-600 text-slate-200 font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { ArrowUp, FileDown, MessageSquare } from 'lucide-react';

export default function FloatingControls({ onOpenResume }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5 print:hidden">
      {/* Quick Contact Button */}
      <button
        onClick={scrollToContact}
        className="p-3 rounded-2xl glass-card border border-white/10 text-cyan-400 hover:text-white hover:bg-cyan-500 shadow-xl transition-all duration-300 hover:scale-110 group"
        title="Contact Vedant"
        aria-label="Quick contact"
      >
        <MessageSquare className="w-4 h-4" />
      </button>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-600 text-white shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 active:scale-95 group animate-in fade-in zoom-in-75"
          title="Back to Top"
          aria-label="Back to top"
        >
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  );
}

import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl glass-card border border-cyan-400/40 text-cyan-300 shadow-2xl shadow-cyan-500/20 text-xs sm:text-sm font-medium animate-in fade-in slide-in-from-bottom-5 duration-300">
      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
      <span>{message}</span>
    </div>
  );
}

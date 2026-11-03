import React from 'react';
import { 
  Award, CheckCircle2, Database, Cloud, Sparkles, 
  Bot, ShieldCheck, Lock, Infinity, ExternalLink 
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function Certifications() {
  const iconMap = {
    Database: Database,
    Cloud: Cloud,
    Sparkles: Sparkles,
    Bot: Bot,
    ShieldCheck: ShieldCheck,
    Lock: Lock,
    Infinity: Infinity,
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & KNOWLEDGE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Industry credentials in relational databases, cloud architectures, AI tools, cybersecurity simulations, and AWS DevOps.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-lg"
              >
                <div className="space-y-4">
                  {/* Top Bar with Icon and Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:border-cyan-500/40 transition-all shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-violet-300 bg-violet-500/15 border border-violet-500/30">
                      {cert.category}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <div>
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs font-semibold text-cyan-400 font-mono mt-1">
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Skills Learned Badges */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Verified Badge */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    ID #{1001 + index}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

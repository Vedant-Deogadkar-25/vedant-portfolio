import React from 'react';
import { 
  Code2, Cpu, Sparkles, MapPin, GraduationCap, Award, Compass, ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Code2: Code2,
    Cpu: Cpu,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>GET TO KNOW ME</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            A Little <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed font-light text-base sm:text-lg">
            {personalInfo.aboutMe.paragraphs.map((para, idx) => (
              <p key={idx} className="p-1">
                {para}
              </p>
            ))}

            {/* Quick Badges */}
            <div className="pt-4 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-200 border border-white/5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Pune, Maharashtra, India</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-200 border border-white/5">
                <GraduationCap className="w-4 h-4 text-violet-400" />
                <span>B.E. Computer Engineering (2023 - 2026)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-200 border border-white/5">
                <Award className="w-4 h-4 text-blue-400" />
                <span>CGPA 8.97 Distinction</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Grid: Key Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {personalInfo.aboutMe.quickStats.map((stat, idx) => (
              <div 
                key={idx} 
                className="group relative p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-br from-white via-cyan-200 to-blue-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-200 mb-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 font-mono">
                  {stat.subtext}
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Three Visual Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personalInfo.aboutMe.highlights.map((card) => {
            const Icon = iconMap[card.icon] || Code2;
            return (
              <div
                key={card.id}
                className={`group relative p-8 rounded-2xl glass-card border border-white/10 ${card.borderGlow} transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Background soft gradient wash */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400/40 transition-transform duration-300 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

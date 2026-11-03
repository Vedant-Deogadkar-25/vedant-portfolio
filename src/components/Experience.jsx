import React from 'react';
import { 
  Briefcase, Calendar, MapPin, CheckCircle, 
  Sparkles, Layers, ArrowRight, ExternalLink 
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-cyan-400 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER JOURNEY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Hands-on internships and industrial training programs where I engineered real-world software, analyzed datasets, and collaborated in technical teams.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Modern Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Timeline Glowing Spine */}
          <div className="hidden md:block absolute left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-600" />

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div 
                key={exp.id}
                className="relative md:pl-24 group"
              >
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden md:flex absolute left-4 top-0 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 items-center justify-center text-cyan-400 shadow-glow-cyan group-hover:scale-110 group-hover:border-white transition-all duration-300 z-10">
                  <span className="font-mono text-xs font-bold">{index + 1}</span>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                  
                  {/* Top Metadata Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4 mb-4">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[11px] font-mono text-cyan-300 bg-cyan-500/15 border border-cyan-500/30 mb-2">
                        {exp.type}
                      </span>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-violet-300 mt-0.5">
                        {exp.organization}
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400 space-y-1">
                      <div className="flex items-center gap-1.5 text-cyan-400/90 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Context Description */}
                  <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Responsibilities List */}
                  <div className="space-y-2.5 mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Responsibilities & Deliverables:
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                      <Layers className="w-3.5 h-3.5 text-slate-400" />
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Technologies & Environment
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900/80 text-cyan-300 border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

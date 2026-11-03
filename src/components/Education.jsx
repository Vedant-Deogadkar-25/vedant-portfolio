import React from 'react';
import { 
  GraduationCap, Calendar, MapPin, Award, 
  Sparkles, BookOpen, CheckCircle2 
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            Consistent academic excellence spanning Computer Engineering undergraduate degree, polytechnic diploma, and foundational schooling in Pune.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Education Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative p-6 sm:p-8 rounded-3xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-4">
                {/* Badge & Period */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-500/15 border border-cyan-500/30">
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="font-heading text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-sm font-medium text-violet-300/90 mt-1">
                    {edu.institution}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Score Showcase Callout */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-900/40 to-slate-900/30 border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      Academic Score
                    </div>
                    <div className="text-2xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
                      {edu.score}
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Coursework & Details */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  {edu.details}
                </p>
              </div>

              {/* Honors Badge Footer */}
              <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>{edu.badge}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

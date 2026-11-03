import React, { useState } from 'react';
import { 
  Code2, Layout, Server, Database, Wrench, Users, 
  Sparkles, CheckCircle2, Search, Filter 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categoryIcons = {
    'Programming Languages': Code2,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Databases': Database,
    'Tools & IDEs': Wrench,
    'Soft Skills': Users,
  };

  const categories = ['All', ...skillsData.map(c => c.category)];

  // Filter skills based on tab and optional search query
  const filteredCategories = skillsData
    .filter(cat => activeCategory === 'All' || cat.category === activeCategory)
    .map(cat => ({
      ...cat,
      skills: cat.skills.filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tag.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.level.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(cat => cat.skills.length > 0);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-xs font-mono text-violet-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            A comprehensive overview of my programming proficiencies, full-stack technologies, database architectures, and engineering workflows.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md shadow-cyan-500/20 font-semibold'
                    : 'glass-card text-slate-300 hover:text-white hover:bg-white/5 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Instant Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skill (e.g. Python, React)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-900/80 border border-slate-700/80 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

        </div>

        {/* Categorized Skills Grids */}
        <div className="space-y-10">
          {filteredCategories.map((group) => {
            const GroupIcon = categoryIcons[group.category] || Code2;
            return (
              <div 
                key={group.category}
                className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <GroupIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {group.category}
                      </h3>
                      <p className="text-xs text-slate-400 font-light">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                    {group.skills.length} skills
                  </span>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-4 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/5 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-1 shadow-sm"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-heading font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base">
                            {skill.name}
                          </div>
                          <div className="text-[11px] font-mono text-slate-400 mt-0.5">
                            {skill.level}
                          </div>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_8px_#22d3ee] transition-all" />
                      </div>
                      
                      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                        <span className="truncate">{skill.tag}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400/80 ml-1 shrink-0" />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-400">
              No skills found matching "{searchQuery}". Try a different search term.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

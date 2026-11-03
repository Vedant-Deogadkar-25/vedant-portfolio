import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Mail 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const roles = personalInfo.typewriterRoles;

  // Typewriter effect
  useEffect(() => {
    const currentFullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentFullRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullRole.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentFullRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Dynamic ambient background glow circles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[450px] h-[450px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none animate-glow" />
      <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-glow-cyan animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Opportunities & Collaborations</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{' '}
                <span className="gradient-text drop-shadow-sm">
                  {personalInfo.name}
                </span>
              </h1>

              {/* Animated Typing Text */}
              <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                <span className="font-mono text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
                  <span className="text-cyan-400">&gt; </span>
                  {displayedText}
                  <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Professional Headline */}
            <p className="font-heading text-sm sm:text-base font-semibold text-violet-300/90 tracking-wide">
              {personalInfo.roleHeadline}
            </p>

            {/* Short Introduction */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {personalInfo.shortIntro}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 transition-all duration-300 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3 ml-0 sm:ml-2">
                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-slate-700/60 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all duration-200 hover:scale-105"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-card border border-slate-700/60 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200 hover:scale-105"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Metrics Badges */}
            <div className="pt-4 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-lg sm:text-xl font-bold font-heading text-cyan-400">8.97</div>
                <div className="text-[11px] text-slate-400 font-mono">B.E. CGPA</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-lg sm:text-xl font-bold font-heading text-violet-400">3+</div>
                <div className="text-[11px] text-slate-400 font-mono">Internships</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900/60 border border-white/5 text-center">
                <div className="text-lg sm:text-xl font-bold font-heading text-blue-400">4+</div>
                <div className="text-[11px] text-slate-400 font-mono">Core Projects</div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Developer Avatar Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group max-w-[320px] sm:max-w-[420px] w-full">
              
              {/* Outer decorative ambient glow */}
              <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-cyan-500/25 via-indigo-600/25 to-violet-600/25 opacity-70 blur-2xl group-hover:opacity-100 transition duration-700 animate-pulse-slow pointer-events-none" />
              
              {/* Avatar Graphic with smooth floating animation & hover scale */}
              <div className="relative rounded-3xl overflow-hidden transition-all duration-500 group-hover:scale-[1.03] animate-float">
                <img
                  src="/images/vedant-avatar.jpg"
                  alt="Vedant Deogadkar - Computer Engineer & Developer Avatar"
                  className="w-full h-auto object-contain drop-shadow-[0_15px_40px_rgba(6,182,212,0.25)]"
                  loading="eager"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Scroll Down Indicator */}
        <div className="pt-16 sm:pt-20 flex justify-center">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group flex flex-col items-center text-slate-400 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-mono uppercase tracking-widest mb-1 group-hover:text-cyan-300">
              Scroll Down
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-slate-600 group-hover:border-cyan-400 flex justify-center pt-2 transition-colors">
              <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full animate-bounce" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}

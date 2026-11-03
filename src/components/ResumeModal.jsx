import { 
  X, Printer, Download, ExternalLink, Mail, Phone, MapPin, 
  CheckCircle2, GraduationCap, Briefcase, Award 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { 
  personalInfo, skillsData, experienceData, projectsData, 
  educationData, certificationsData 
} from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `VEDANT DEOGADKAR
${personalInfo.roleHeadline}
Email: ${personalInfo.contact.email} | Phone: ${personalInfo.contact.phone} | Location: ${personalInfo.contact.location}
LinkedIn: ${personalInfo.contact.linkedin}
GitHub: ${personalInfo.contact.github}

========================================================================
PROFESSIONAL SUMMARY
========================================================================
${personalInfo.shortIntro}

========================================================================
EDUCATION
========================================================================
${educationData.map(e => `• ${e.degree} | ${e.institution} (${e.period})
  ${e.score} | ${e.details}`).join('\n\n')}

========================================================================
PROFESSIONAL EXPERIENCE / INTERNSHIPS
========================================================================
${experienceData.map(exp => `• ${exp.role} - ${exp.organization} (${exp.period})
  Location: ${exp.location} | Tech: ${exp.techStack.join(', ')}
  ${exp.responsibilities.map(r => `  - ${r}`).join('\n')}`).join('\n\n')}

========================================================================
FEATURED PROJECTS
========================================================================
${projectsData.map(p => `• ${p.title} (${p.category})
  Technologies: ${p.technologies.join(', ')}
  ${p.description}
  Key Features:
  ${p.features.map(f => `  - ${f}`).join('\n')}`).join('\n\n')}

========================================================================
TECHNICAL SKILLS
========================================================================
${skillsData.map(s => `${s.category}: ${s.skills.map(k => k.name).join(', ')}`).join('\n')}

========================================================================
CERTIFICATIONS
========================================================================
${certificationsData.map(c => `• ${c.title} - ${c.issuer}`).join('\n')}
`;

    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Vedant_Deogadkar_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Dark backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-900 border border-slate-700 text-slate-100 shadow-2xl z-10 p-6 sm:p-10 animate-in fade-in zoom-in-95">
        
        {/* Header Controls (Hidden on Print) */}
        <div className="print:hidden flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-700">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
              Curriculum Vitae Preview
            </span>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Vedant Deogadkar – Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 transition-colors"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Text</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div id="printable-resume" className="space-y-6 text-sm text-slate-300">
          
          {/* Resume Header */}
          <div className="border-b border-slate-700 pb-5">
            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-semibold text-cyan-400 font-mono mt-1">
              {personalInfo.roleHeadline}
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {personalInfo.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-violet-400" />
                {personalInfo.contact.phone}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
                {personalInfo.contact.location}
              </span>
              <span className="flex items-center gap-1">
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-500" />
                linkedin.com/in/vedant-deogadkar-b3a767375
              </span>
              <span className="flex items-center gap-1">
                <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                github.com/Vedant-Deogadkar-25
              </span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Education
            </h3>
            <div className="space-y-3">
              {educationData.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <span className="font-semibold text-white">{edu.degree}</span>
                    <div className="text-xs text-slate-400">{edu.institution}, {edu.location}</div>
                  </div>
                  <div className="text-xs sm:text-right font-mono">
                    <span className="text-cyan-300 font-bold">{edu.score}</span>
                    <div className="text-slate-400">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Internships & Practical Experience
            </h3>
            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-white">{exp.role}</span>
                    <span className="text-xs font-mono text-cyan-300">{exp.period}</span>
                  </div>
                  <div className="text-xs text-violet-300 font-medium">
                    {exp.organization} • {exp.location}
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    Stack: {exp.techStack.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Key Technical Projects
            </h3>
            <div className="space-y-4">
              {projectsData.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <span className="font-semibold text-white">{proj.title}</span>
                    <span className="text-xs font-mono text-slate-400">{proj.category}</span>
                  </div>
                  <p className="text-xs text-slate-300">{proj.description}</p>
                  <ul className="list-disc list-inside text-xs text-slate-300 space-y-0.5">
                    {proj.features.slice(0, 2).map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-cyan-300/90">
                    Tech: {proj.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Technical Proficiencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {skillsData.map((s) => (
                <div key={s.category}>
                  <strong className="text-white">{s.category}: </strong>
                  <span className="text-slate-300">{s.skills.map(k => k.name).join(', ')}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-slate-800 pb-1 mb-3">
              Certifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="flex items-start gap-1.5 text-slate-300">
                  <span className="text-cyan-400">•</span>
                  <span><strong className="text-white">{cert.title}</strong> – {cert.issuer}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

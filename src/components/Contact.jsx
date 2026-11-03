import React, { useState } from 'react';
import { 
  Mail, Phone, MapPin, Send, 
  Copy, Check, ExternalLink, Sparkles, AlertCircle, MessageSquare 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [copiedType, setCopiedType] = useState(null);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onShowToast) {
      onShowToast(`Copied ${type} to clipboard!`);
    }
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.email.trim()) {
      errs.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#3b82f6', '#8b5cf6', '#06b6d4']
      });
    } catch (err) {
      // ignore
    }

    // Set transparent status: client-side preparation
    setStatusMessage({
      type: 'ready',
      title: 'Message Prepared!',
      text: 'Because this portfolio runs client-side without an active backend server, click below to send via your email client or copy the formatted text.'
    });
  };

  const sendViaEmailClient = () => {
    const mailtoUrl = `mailto:${personalInfo.contact.email}?subject=${encodeURIComponent(
      `[Portfolio Contact] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Hello Vedant,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
  };

  const copyFullMessage = () => {
    const fullText = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject}\n\n${formData.message}`;
    navigator.clipboard.writeText(fullText);
    if (onShowToast) onShowToast('Full message copied to clipboard!');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something <span className="gradient-text">Great Together.</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-light">
            I'm always interested in connecting with people, exploring opportunities, and collaborating on innovative technology projects.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Social Links */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="font-heading font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base break-all"
                  >
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.contact.email, 'email')}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy Email"
                aria-label="Copy Email"
              >
                {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">Phone Number</div>
                  <a
                    href={`tel:${personalInfo.contact.phone.replace(/\s+/g, '')}`}
                    className="font-heading font-semibold text-white group-hover:text-violet-300 transition-colors text-sm sm:text-base"
                  >
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.contact.phone, 'phone')}
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                title="Copy Phone Number"
                aria-label="Copy Phone Number"
              >
                {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-slate-400">Current Base</div>
                <div className="font-heading font-semibold text-white text-sm sm:text-base">
                  {personalInfo.contact.location}
                </div>
              </div>
            </div>

            {/* Social Network Connect Buttons */}
            <div className="p-6 rounded-2xl glass-card border border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Connect Directly
              </div>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#0077b5]/15 hover:bg-[#0077b5]/30 border border-[#0077b5]/30 text-white font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
                </a>

                <a
                  href={personalInfo.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-xs sm:text-sm transition-all hover:scale-[1.02]"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 ml-auto" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form with Transparent Real-World Action */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl glass-card border border-white/10 shadow-2xl">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 font-light">
                Fill out the details below to initiate direct communication regarding job opportunities, freelance work, or technical discussions.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                        errors.name ? 'border-red-500' : 'border-slate-700'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                        errors.email ? 'border-red-500' : 'border-slate-700'
                      } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Opportunity for Software Developer Role"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                      errors.subject ? 'border-red-500' : 'border-slate-700'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors`}
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Share the details of your project, role, or inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl bg-slate-900/80 border ${
                      errors.message ? 'border-red-500' : 'border-slate-700'
                    } text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Transparent Feedback Message Banner */}
                {statusMessage && (
                  <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-200 space-y-3 animate-in fade-in">
                    <div className="flex items-center gap-2 font-semibold text-sm text-cyan-300">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>{statusMessage.title}</span>
                    </div>
                    <p className="text-xs text-slate-300 font-light">
                      {statusMessage.text}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        type="button"
                        onClick={sendViaEmailClient}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-md"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Launch in Email Client</span>
                      </button>
                      <button
                        type="button"
                        onClick={copyFullMessage}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Message</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Prepare & Send Message</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

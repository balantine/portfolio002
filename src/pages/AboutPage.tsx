import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <article className="w-full bg-[#010736] text-[#FCF1D0]">
      {/* Section 1: Hero Imagery on About */}
      <section className="py-12 md:py-16 px-6 md:px-12 max-w-[1500px] mx-auto border-b border-[#22396F]/40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Northern WI Landscape */}
          <div className="rounded-2xl overflow-hidden border border-[#22396F] bg-[#0D1C42] shadow-xl">
            <img
              src={PERSONAL_INFO.images.lakeLandscape}
              alt="Northern Wisconsin lake landscape"
              className="w-full h-[320px] md:h-[400px] object-cover"
              loading="eager"
            />
          </div>

          {/* Friendly Blue Devil Cartoon */}
          <div className="rounded-2xl overflow-hidden border border-[#22396F] bg-[#0D1C42] shadow-xl flex items-center justify-center p-6">
            <img
              src={PERSONAL_INFO.images.blueDevilCartoon}
              alt="Cartoon of a friendly blue devil hacker"
              className="max-h-[350px] w-auto object-contain hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Narrative & Efficient AI Chip Art */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1500px] mx-auto border-b border-[#22396F]/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-[#FCF1D0]/90 font-sans-body font-light leading-relaxed">
            <p>
              I'm <strong className="text-white font-medium">Jake</strong>, a Northern WI native with a background in tourism from restaurants to campsites, though my passion lies in technology. From networking and coding to support and engineering, I've gained valuable experience helping people connect and find information.
            </p>

            <p>
              Currently residing in <span className="text-[#FCF1D0] font-medium">Madison, WI</span>, I work for a not-for-profit insurance company, specializing in <span className="text-white font-medium">Office 365</span>. My resume can be found on{' '}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FCF1D0] font-semibold underline underline-offset-4 hover:text-white"
              >
                Avalon.dev
              </a>
              .
            </p>

            <p>
              Beyond work, I indulge in <span className="text-[#FCF1D0]">House music</span>, <span className="text-[#FCF1D0]">alpha chill</span>, and enjoy walking and exercising. If you'd like to get in touch, visit my contact form/page or reach out via text, call, or email.
            </p>

            <p className="text-sm md:text-base text-[#FCF1D0]/80 bg-[#0D1C42] p-5 rounded-xl border border-[#22396F]/60">
              I'm also planning to blog more while organizing my papers and preparing for graduate-level courses and certificates in the near future!
            </p>

            <div className="pt-4 space-y-2">
              <p className="text-sm font-sans-body text-[#FCF1D0]/75">
                This portfolio was produced while a student at UW-Stout in the M.S. ICT program:
              </p>
              <p>
                <a
                  href={PERSONAL_INFO.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#22396F]/60 hover:bg-[#22396F] text-[#FCF1D0] font-mono-tech text-xs border border-[#22396F] transition-colors"
                >
                  <span>About the Program - Go Blue Devils!</span>
                  <span>↗</span>
                </a>
              </p>
            </div>
          </div>

          {/* Right Image Block: Efficient AI Chip Concept */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="rounded-2xl overflow-hidden border border-[#22396F] bg-[#0D1C42] p-4 shadow-2xl w-full">
              <img
                src={PERSONAL_INFO.images.aiChipConcept}
                alt="Efficient AI Chip Art Concept"
                className="w-full h-auto object-cover rounded-xl"
                loading="lazy"
              />
              <div className="mt-3 text-center text-xs font-mono-tech text-[#FCF1D0]/70">
                Efficient AI Chip Art Concept
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Section 3: Let's Work Together Contact Form */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1500px] mx-auto bg-[#0D1C42]/40">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-serif-display text-white">
              Let’s Work Together
            </h2>
            <p className="text-sm font-sans-body text-[#FCF1D0]/80">
              Please provide some information on your project or goals and we’ll move the conversation on from there.
            </p>
          </div>

          <div className="bg-[#010736] p-6 sm:p-8 rounded-2xl border border-[#22396F] shadow-xl">
            {status === 'success' ? (
              <div className="p-6 text-center space-y-3">
                <div className="text-emerald-400 font-medium">✓ Thank you for reaching out!</div>
                <p className="text-xs font-mono-tech text-[#FCF1D0]/80">
                  Your message has been received. Jake will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono-tech text-[#FCF1D0]/80">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono-tech text-[#FCF1D0]/80">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono-tech text-[#FCF1D0]/80">Message</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3 px-4 rounded-lg bg-[#FCF1D0] hover:bg-white text-[#010736] font-semibold text-xs font-mono-tech transition-colors cursor-pointer shadow-md"
                >
                  {status === 'submitting' ? 'Submitting...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </article>
  );
};

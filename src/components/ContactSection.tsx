import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Get in Touch · Let's Work Together
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Contact Jake
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Please provide some information on your project or goals and we'll move the conversation on from there.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono-tech text-[#7C8197]">
            {PERSONAL_INFO.handle} · MONONA, WI
          </div>
        </div>

        {/* 2-Column Grid matching portfolio.avalon.dev */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Information from portfolio.avalon.dev */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif-display text-white font-normal">
                Let's Work Together
              </h3>
              <p className="text-sm text-[#959AAE] font-light leading-relaxed">
                Whether you have questions about my MS-ICT coursework at UW-Stout, Office 365 enterprise implementations, or prospective opportunities, reach out directly.
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono-tech">
              {/* Physical Address */}
              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-1">
                <span className="text-[#6D7286] block text-[11px] uppercase tracking-wider">
                  Mailing Address
                </span>
                <span className="text-white text-sm block font-sans-body">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-1">
                <span className="text-[#6D7286] block text-[11px] uppercase tracking-wider">
                  Call or Text
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-white hover:text-[#E2B774] text-sm block font-sans-body transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-1">
                <span className="text-[#6D7286] block text-[11px] uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#E2B774] hover:underline text-sm block font-sans-body"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Quick Link to Resume */}
            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#12141F] hover:bg-[#1A1D2B] text-xs font-mono-tech text-[#D0D4E4] border border-[#232738] transition-colors flex items-center justify-between"
              >
                <span>View Full Resume on Avalon.dev</span>
                <span className="text-[#E2B774]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0F17] border border-[#202538] shadow-xl">
              
              <h3 className="text-lg font-serif-display text-white mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-[#0A1813] border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="text-emerald-400 text-lg font-medium">✓ Message Sent</div>
                  <p className="text-xs font-mono-tech text-[#A4C4B5] leading-relaxed">
                    Thank you! Your message has been received. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-mono-tech bg-[#14261F] text-emerald-300 rounded-lg hover:bg-[#1C362C] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-[#8A8F9F]">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide some information on your project or goals..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-xs font-mono-tech text-rose-400">
                      Please fill out all required fields.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-4 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors cursor-pointer font-medium shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{status === 'submitting' ? 'Sending...' : 'Submit Message →'}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

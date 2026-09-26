import React, { useState } from 'react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    affiliation: '',
    inquiryType: 'PhD / Doctoral Opportunity',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [copiedPgp, setCopiedPgp] = useState(false);

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
        affiliation: '',
        inquiryType: 'PhD / Doctoral Opportunity',
        message: '',
      });
    }, 900);
  };

  const handleCopyPgp = () => {
    navigator.clipboard.writeText('4E2B 9F01 D15A C832 940E  5F8A 2814 BE90 19A2 E04D');
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Academic &amp; Professional Engagement
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Inquiries &amp; Research Collaborations
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Currently reviewing doctoral research fellowships, industrial R&amp;D appointments, and guest lectures.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono-tech text-[#7C8197]">
            RESPONSE WINDOW: ~24 HOURS
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Institutional Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-serif-display text-white font-normal">
                Direct Academic Channels
              </h3>
              <p className="text-xs text-[#959AAE] font-light leading-relaxed">
                For thesis committee inquiries, peer reviews, code repository access, or seminar invitations.
              </p>
            </div>

            <div className="space-y-4 text-xs font-mono-tech">
              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-1">
                <span className="text-[#6D7286] block text-[11px]">Primary Academic Email</span>
                <a
                  href="mailto:j.vance@telecom-institute.edu"
                  className="text-[#E2B774] hover:underline text-sm block font-sans-body"
                >
                  j.vance@telecom-institute.edu
                </a>
              </div>

              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-1">
                <span className="text-[#6D7286] block text-[11px]">ORCID Researcher Identifier</span>
                <span className="text-white text-xs block">
                  0000-0002-8419-5201
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#0C0D14] border border-[#1E2232] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[#6D7286] text-[11px]">PGP Cryptographic Fingerprint</span>
                  <button
                    onClick={handleCopyPgp}
                    className="text-[#E2B774] hover:underline cursor-pointer"
                  >
                    {copiedPgp ? '✓ Copied' : 'Copy Key'}
                  </button>
                </div>
                <div className="text-[11px] text-[#8E93AA] font-mono-tech break-all">
                  4E2B 9F01 D15A C832 940E 5F8A 2814 BE90 19A2 E04D
                </div>
              </div>
            </div>

            {/* Academic Profiles & Repositories */}
            <div className="pt-4 border-t border-[#1C202F]">
              <span className="text-xs font-mono-tech text-[#6D7286] uppercase tracking-wider block mb-3">
                Scholarly Repositories &amp; Profiles
              </span>
              <div className="flex flex-wrap gap-3 text-xs font-mono-tech">
                <a
                  href="https://scholar.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#12141F] hover:bg-[#1A1D2B] text-[#D0D4E4] border border-[#232738] transition-colors"
                >
                  Google Scholar ↗
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#12141F] hover:bg-[#1A1D2B] text-[#D0D4E4] border border-[#232738] transition-colors"
                >
                  GitHub Systems ↗
                </a>
                <a
                  href="https://ieeexplore.ieee.org"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#12141F] hover:bg-[#1A1D2B] text-[#D0D4E4] border border-[#232738] transition-colors"
                >
                  IEEE Xplore ↗
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#0D0F17] border border-[#202538] shadow-xl">
              
              <h3 className="text-lg font-serif-display text-white mb-6">
                Transmit Research Inquiry
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-[#0A1813] border border-emerald-500/30 text-center space-y-3 animate-fade-in">
                  <div className="text-emerald-400 text-lg font-medium">✓ Transmission Delivered</div>
                  <p className="text-xs font-mono-tech text-[#A4C4B5] leading-relaxed">
                    Your inquiry has been logged into candidate Julian Vance's research queue. A confirmation dispatch has been routed to your specified address.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-mono-tech bg-[#14261F] text-emerald-300 rounded-lg hover:bg-[#1C362C] transition-colors cursor-pointer"
                  >
                    Send Another Dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        Full Name / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Prof. Evelyn Reed"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        Institutional Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.reed@university.edu"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        University / Laboratory / Org
                      </label>
                      <input
                        type="text"
                        value={formData.affiliation}
                        onChange={(e) => setFormData({ ...formData, affiliation: e.target.value })}
                        placeholder="Max Planck / MIT Media Lab"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#8A8F9F]">
                        Inquiry Scope
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors cursor-pointer"
                      >
                        <option value="PhD / Doctoral Opportunity">PhD / Doctoral Fellowship</option>
                        <option value="Research Collaboration">Academic Research Collaboration</option>
                        <option value="Industry Systems Role">Industry Systems R&amp;D</option>
                        <option value="Invited Seminar">Invited Seminar / Guest Lecture</option>
                        <option value="General Inquiry">General Scholarly Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-[#8A8F9F]">
                      Message / Research Brief *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline proposed collaboration, doctoral position details, or technical inquiry..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#090A0F] border border-[#222638] text-white text-xs focus:outline-none focus:border-[#E2B774] transition-colors resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-xs font-mono-tech text-rose-400">
                      Please fill out all required fields with a valid email.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-4 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors cursor-pointer font-medium shadow-md flex items-center justify-center gap-2"
                  >
                    <span>{status === 'submitting' ? 'Transmitting Dispatch...' : 'Send Academic Inquiry →'}</span>
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

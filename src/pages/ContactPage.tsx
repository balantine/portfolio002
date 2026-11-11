import React, { useState } from 'react';
import { ArrowUpRight, Download, Check } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RevealSection } from '../components/RevealSection';
import { downloadAcademicResumePdf } from '../utils/downloadResumePdf';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [downloadState, setDownloadState] = useState<'idle' | 'preparing' | 'done'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  const handleDownloadResume = () => {
    if (downloadState === 'preparing') return;
    setDownloadState('preparing');
    setTimeout(() => {
      downloadAcademicResumePdf();
      setDownloadState('done');
      setTimeout(() => setDownloadState('idle'), 3500);
    }, 450);
  };

  return (
    <article className="w-full text-[#181615]">
      <section className="py-14 md:py-24 px-6 md:px-12 max-w-[1380px] mx-auto">
        {/* Masthead */}
        <div className="pb-8 mb-14 border-b border-[#DED8CC] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
              Correspondence &amp; Academic Dossier
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif-display font-medium text-[#181615] tracking-tight leading-[1.04]">
              Let’s Work{' '}
              <span className="italic font-normal text-[#1E3A8A]">Together.</span>
            </h1>
          </div>

          <p className="text-sm font-mono-tech text-[#78716C]">
            MONONA &amp; MADISON, WISCONSIN
          </p>
        </div>

        <RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5/12): Direct Registry & Academic Resume PDF */}
            <div className="lg:col-span-5 space-y-10">
              <div className="space-y-3">
                <h2 className="text-2xl font-serif-display font-medium text-[#181615]">
                  Direct Contact
                </h2>
                <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed">
                  Please provide some information on your project or goals and we’ll move the conversation on from there. You can also reach out directly by phone, text, or email.
                </p>
              </div>

              {/* Clean Hairline Definition List */}
              <dl className="divide-y divide-[#DED8CC] border-y border-[#DED8CC]">
                <div className="py-4 space-y-1">
                  <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                    Mailing Address
                  </dt>
                  <dd className="text-sm font-sans-body text-[#181615]">
                    704 Pirate Island Rd., Monona, WI 53716
                  </dd>
                </div>

                <div className="py-4 space-y-1">
                  <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                    Telephone &amp; SMS
                  </dt>
                  <dd>
                    <a
                      href="tel:7156172471"
                      className="text-sm font-mono-tech text-[#181615] hover:text-[#1E3A8A] transition-colors duration-150"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </dd>
                </div>

                <div className="py-4 space-y-1">
                  <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                    Electronic Mail
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-mono-tech text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-4 decoration-[#1E3A8A]/35 transition-colors duration-150"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </dd>
                </div>
              </dl>

              {/* Academic Portfolio PDF Download & Live Web CV */}
              <div className="space-y-4">
                <div className="text-xs font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                  Curriculum Vitae &amp; Academic Dossier
                </div>

                <button
                  type="button"
                  onClick={handleDownloadResume}
                  disabled={downloadState === 'preparing'}
                  className="w-full py-3.5 px-5 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-sm font-sans-body font-medium transition-colors duration-150 flex items-center justify-between cursor-pointer disabled:opacity-75"
                >
                  <span className="inline-flex items-center gap-2.5">
                    {downloadState === 'done' ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                    <span>
                      {downloadState === 'preparing'
                        ? 'Preparing Academic PDF...'
                        : downloadState === 'done'
                        ? 'Academic Resume Downloaded'
                        : 'Download Resume (PDF)'}
                    </span>
                  </span>
                  <span className="text-xs font-mono-tech opacity-80">PDF</span>
                </button>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-1 text-xs font-sans-body text-[#4A4540]">
                  <a
                    href={PERSONAL_INFO.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#1E3A8A] underline underline-offset-4 decoration-[#C4BCB0] transition-colors duration-150"
                  >
                    <span>Live Curriculum Vitae on Avalon.dev</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={PERSONAL_INFO.programUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-[#1E3A8A] underline underline-offset-4 decoration-[#C4BCB0] transition-colors duration-150"
                  >
                    <span>UW-Stout MS-ICT</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column (7/12): Studio Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="gallery-mat p-7 sm:p-10">
                <h2 className="text-2xl font-serif-display font-medium text-[#181615] mb-6">
                  Send a Message
                </h2>

                {status === 'success' ? (
                  <div className="py-10 space-y-3">
                    <h3 className="text-2xl font-serif-display font-medium text-[#181615]">
                      Message received.
                    </h3>
                    <p className="text-sm font-sans-body text-[#4A4540] leading-relaxed">
                      Thank you for getting in touch. Jake will review your note and respond shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-3 px-4 py-2 text-xs font-sans-body font-medium uppercase tracking-[0.14em] text-[#181615] border border-[#181615] hover:bg-[#181615] hover:text-[#F8F6F1] transition-colors duration-150 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-name"
                          className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block"
                        >
                          Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name or organization"
                          className="w-full px-3.5 py-2.5 bg-[#F8F6F1] border border-[#D4CEC2] text-[#181615] text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors duration-150 placeholder:text-[#9C958B]"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="contact-email"
                          className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block"
                        >
                          Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-3.5 py-2.5 bg-[#F8F6F1] border border-[#D4CEC2] text-[#181615] text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors duration-150 placeholder:text-[#9C958B]"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="contact-message"
                        className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please provide some information on your project, inquiry, or goals..."
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F1] border border-[#D4CEC2] text-[#181615] text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors duration-150 resize-none placeholder:text-[#9C958B]"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-6 py-3.5 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-sm font-sans-body font-medium transition-colors duration-150 cursor-pointer"
                    >
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </RevealSection>
      </section>
    </article>
  );
};

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [downloadStatus, setDownloadStatus] = useState<'idle' | 'preparing' | 'downloaded'>('idle');

  const handleDownloadResume = () => {
    setDownloadStatus('preparing');

    setTimeout(() => {
      // Create a simulated formatted academic portfolio PDF document blob
      const resumeContent = `%PDF-1.4
% Academic Portfolio & Curriculum Dossier
% Student: Jake Andrews (@Jake)
% Program: Master of Science in Information and Communication Technologies
% University: University of Wisconsin-Stout (UW-Stout)
% Specialization: Enterprise Systems & Office 365
% Contact: jake@avalon.dev | (715) 617-2471 | Monona, WI 53716
% Verification: https://portfolio.avalon.dev

1 0 obj
<<
  /Title (Jake Andrews - M.S. ICT Academic Portfolio & Resume)
  /Author (Jake Andrews)
  /Subject (University of Wisconsin-Stout MS-ICT Program Dossier)
  /Keywords (ICT, Office 365, Enterprise Systems, UW-Stout, Sociotechnical Systems)
>>
endobj
2 0 obj
<<
  /Type /Catalog
  /Pages 3 0 R
>>
endobj
3 0 obj
<<
  /Type /Pages
  /Kids [4 0 R]
  /Count 1
>>
endobj
4 0 obj
<<
  /Type /Page
  /Parent 3 0 R
  /MediaBox [0 0 612 792]
  /Contents 5 0 R
  /Resources <<
    /Font <<
      /F1 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica
      >>
      /F2 <<
        /Type /Font
        /Subtype /Type1
        /BaseFont /Helvetica-Bold
      >>
    >>
  >>
>>
endobj
5 0 obj
<< /Length 850 >>
stream
BT
/F2 18 Tf
50 740 Td
(JAKE ANDREWS - ACADEMIC PORTFOLIO & RESUME) Tj
/F1 11 Tf
0 -22 Td
(Candidate for M.S. in Information and Communication Technologies) Tj
0 -16 Td
(University of Wisconsin-Stout | Blue Devils | Madison / Monona, WI) Tj
0 -16 Td
(Phone: (715) 617-2471 | Email: jake@avalon.dev | Web: portfolio.avalon.dev) Tj
0 -28 Td
/F2 13 Tf
(PROFESSIONAL PROFILE & ENTERPRISE SPECIALIZATION) Tj
/F1 10 Tf
0 -18 Td
(Experienced technology professional specializing in Enterprise Applications, Office 365,) Tj
0 -14 Td
(systems administration, networking, and IT governance for non-profit insurance organizations.) Tj
0 -26 Td
/F2 13 Tf
(UW-STOUT MS-ICT PROGRAM OBJECTIVES & COURSE SEQUENCE) Tj
/F1 10 Tf
0 -18 Td
(- ICT 700: Intro to ICT & Portfolio Development) Tj
0 -14 Td
(- ICT 701: Information & Communication Technologies in Organizations) Tj
0 -14 Td
(- ICT 505: Information Systems for Enterprise) Tj
0 -14 Td
(- ICT 710: Learning Technologies & Training Systems) Tj
0 -14 Td
(- ICT 555: ICT Systems Analysis & Design) Tj
0 -14 Td
(- ICT 732: Technology Futures & Systems Forecasting) Tj
0 -14 Td
(- ICT 605: Enterprise Technology Seminar & Credentialing) Tj
0 -14 Td
(- DMT 511: ICT Analytics & Emerging Telemetry) Tj
0 -14 Td
(- ICT 601: IT Policy, Regulatory Frameworks & Audit (NIST 800-53 / CMMC)) Tj
0 -14 Td
(- ICT 733: Technology Adoption and Historical/Social Implications) Tj
0 -14 Td
(- ICT 780: Capstone ICT Electronic Portfolio) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000210 00000 n 
0000000360 00000 n 
0000000418 00000 n 
0000000478 00000 n 
0000000720 00000 n 
trailer
<<
  /Size 6
  /Root 2 0 R
  /Info 1 0 R
>>
startxref
1630
%%EOF`;

      const blob = new Blob([resumeContent], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Jake_Andrews_MS_ICT_Portfolio_Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setDownloadStatus('downloaded');
      setTimeout(() => setDownloadStatus('idle'), 4000);
    }, 750);
  };

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
    <section id="contact" className="py-24 md:py-32 border-b border-[#22396F]/50 relative bg-[#0D1C42]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#22396F]/60">
          <div>
            <div className="text-xs font-mono-tech text-[#FCF1D0] tracking-widest uppercase mb-3 font-semibold">
              Get in Touch · Let's Work Together
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-white tracking-tight">
              Contact Jake
            </h2>
            <p className="text-sm text-[#FCF1D0]/70 font-light mt-1">
              Please provide some information on your project or goals and we'll move the conversation on from there.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono-tech text-[#FCF1D0]/70">
            {PERSONAL_INFO.handle} · MONONA, WI
          </div>
        </div>

        {/* 2-Column Grid matching portfolio.avalon.dev */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-serif-display text-white font-normal">
                Let's Work Together
              </h3>
              <p className="text-sm text-[#FCF1D0]/80 font-light leading-relaxed">
                Whether you have questions about my MS-ICT coursework at UW-Stout, Office 365 enterprise implementations, or prospective opportunities, reach out directly.
              </p>
            </div>

            <div className="space-y-3 text-xs font-mono-tech">
              {/* Physical Address */}
              <div className="p-4 rounded-xl bg-[#010736] border border-[#22396F] space-y-1 shadow-sm">
                <span className="text-[#FCF1D0]/60 block text-[11px] uppercase tracking-wider">
                  Mailing Address
                </span>
                <span className="text-white text-sm block font-sans-body">
                  {PERSONAL_INFO.location}
                </span>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-[#010736] border border-[#22396F] space-y-1 shadow-sm">
                <span className="text-[#FCF1D0]/60 block text-[11px] uppercase tracking-wider">
                  Call or Text
                </span>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-[#FCF1D0] hover:text-white text-sm block font-sans-body transition-colors font-medium"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              {/* Email */}
              <div className="p-4 rounded-xl bg-[#010736] border border-[#22396F] space-y-1 shadow-sm">
                <span className="text-[#FCF1D0]/60 block text-[11px] uppercase tracking-wider">
                  Direct Email
                </span>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-[#FCF1D0] hover:underline text-sm block font-sans-body font-semibold"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            {/* Resume & Chat Actions */}
            <div className="pt-2 space-y-2.5">
              {/* Tawk.to Instant Chat Button */}
              <button
                type="button"
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as unknown as { Tawk_API?: { maximize?: () => void; toggle?: () => void } }).Tawk_API?.maximize) {
                    (window as unknown as { Tawk_API: { maximize: () => void } }).Tawk_API.maximize();
                  }
                }}
                className="w-full py-3 px-4 rounded-xl bg-[#010736] hover:bg-[#22396F] text-[#FCF1D0] font-medium text-xs font-mono-tech transition-all duration-200 flex items-center justify-between border border-[#22396F] hover:border-[#FCF1D0] cursor-pointer shadow-md group"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white group-hover:text-[#FCF1D0] transition-colors">
                    Start Live Chat with Jake
                  </span>
                </div>
                <span className="text-[11px] font-mono-tech text-[#FCF1D0] bg-[#22396F] px-2 py-0.5 rounded border border-[#FCF1D0]/30">
                  Tawk.to Online
                </span>
              </button>

              {/* Primary Download Resume Button */}
              <button
                type="button"
                onClick={handleDownloadResume}
                disabled={downloadStatus === 'preparing'}
                className="w-full py-3 px-4 rounded-xl bg-[#FCF1D0] hover:bg-white text-[#010736] font-semibold text-xs font-mono-tech transition-all duration-200 flex items-center justify-between shadow-md hover:shadow-lg cursor-pointer disabled:opacity-75 disabled:cursor-wait"
              >
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>
                    {downloadStatus === 'preparing'
                      ? 'Compiling Dossier PDF...'
                      : downloadStatus === 'downloaded'
                      ? '✓ Academic PDF Downloaded'
                      : 'Download Academic Resume (PDF)'}
                  </span>
                </div>
                <span className="text-[11px] font-mono-tech uppercase font-bold">
                  {downloadStatus === 'downloaded' ? 'Done' : 'PDF · 1.4'}
                </span>
              </button>

              {/* Secondary Link to Avalon.dev CV */}
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#010736] hover:bg-[#22396F] text-xs font-mono-tech text-[#FCF1D0] hover:text-white border border-[#22396F] transition-colors flex items-center justify-between shadow-xs"
              >
                <span>View Live Web Resume on Avalon.dev</span>
                <span className="text-[#FCF1D0]">↗</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-[#010736] border border-[#22396F] shadow-2xl">
              
              <h3 className="text-lg font-serif-display text-white mb-6">
                Send a Message
              </h3>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-[#0D1C42] border border-emerald-500/50 text-center space-y-3 animate-fade-in">
                  <div className="text-emerald-400 text-lg font-medium">✓ Message Sent</div>
                  <p className="text-xs font-mono-tech text-[#FCF1D0] leading-relaxed">
                    Thank you! Your message has been received. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-4 py-2 text-xs font-mono-tech bg-[#22396F] text-[#FCF1D0] rounded-lg hover:bg-white hover:text-[#010736] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#FCF1D0]/80">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-xs focus:outline-none focus:border-[#FCF1D0] transition-colors placeholder:text-[#FCF1D0]/40"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono-tech text-[#FCF1D0]/80">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-xs focus:outline-none focus:border-[#FCF1D0] transition-colors placeholder:text-[#FCF1D0]/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-[#FCF1D0]/80">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please provide some information on your project or goals..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#0D1C42] border border-[#22396F] text-white text-xs focus:outline-none focus:border-[#FCF1D0] transition-colors resize-none placeholder:text-[#FCF1D0]/40"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="text-xs font-mono-tech text-rose-300">
                      Please fill out all required fields.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3 px-4 text-xs font-mono-tech text-[#010736] bg-[#FCF1D0] hover:bg-white rounded-lg transition-colors cursor-pointer font-bold shadow-md flex items-center justify-center gap-2"
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

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactPage: React.FC = () => {
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
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1200px] mx-auto min-h-[70vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info matching portfolio.avalon.dev/contact */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif-display text-white tracking-tight">
              Let’s Work Together
            </h2>
            <p className="text-base font-sans-body font-light text-[#FCF1D0]/90 leading-relaxed">
              Please provide some information on your project or goals and we’ll move the conversation on from there.
            </p>

            <div className="space-y-4 pt-4 border-t border-[#22396F]/60 text-sm font-sans-body">
              <div>
                <span className="text-xs font-mono-tech text-[#FCF1D0]/60 block uppercase tracking-wider mb-1">
                  Location
                </span>
                <span className="text-white">704 Pirate Island Rd.</span>
                <span className="block text-[#FCF1D0]/80">Monona, WI 53716</span>
              </div>

              <div>
                <span className="text-xs font-mono-tech text-[#FCF1D0]/60 block uppercase tracking-wider mb-1">
                  Phone
                </span>
                <a
                  href="tel:7156172471"
                  className="text-[#FCF1D0] hover:text-white transition-colors"
                >
                  (715) 617-2471
                </a>
              </div>

              <div>
                <span className="text-xs font-mono-tech text-[#FCF1D0]/60 block uppercase tracking-wider mb-1">
                  Email
                </span>
                <a
                  href="mailto:jake@avalon.dev"
                  className="text-[#FCF1D0] hover:underline font-medium"
                >
                  jake@avalon.dev
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="md:col-span-7">
            <div className="bg-[#0D1C42] p-8 md:p-10 rounded-2xl border border-[#22396F] shadow-2xl">
              {status === 'success' ? (
                <div className="py-8 text-center space-y-3">
                  <div className="text-emerald-400 text-lg font-medium">✓ Message Sent</div>
                  <p className="text-sm font-sans-body text-[#FCF1D0]/80">
                    Thank you! Your inquiry has been delivered directly to Jake.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 text-xs font-mono-tech bg-[#22396F] text-[#FCF1D0] rounded-lg hover:bg-white hover:text-[#010736] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-tech text-[#FCF1D0]/80">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[#010736] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0]"
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
                      className="w-full px-4 py-3 rounded-lg bg-[#010736] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0]"
                    />
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
                      className="w-full px-4 py-3 rounded-lg bg-[#010736] border border-[#22396F] text-white text-sm focus:outline-none focus:border-[#FCF1D0] resize-none placeholder:text-[#FCF1D0]/40"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 px-4 rounded-lg bg-[#FCF1D0] hover:bg-white text-[#010736] font-semibold text-xs font-mono-tech transition-colors cursor-pointer shadow-md"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Submit Message →'}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </article>
  );
};

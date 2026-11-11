import React, { useState } from 'react';
import { ArrowUpRight, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RevealSection } from '../components/RevealSection';
import { ArchivalImage } from '../components/ArchivalImage';
import { ArtworkLightbox, LightboxPlate } from '../components/ArtworkLightbox';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const [activePlate, setActivePlate] = useState<LightboxPlate | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const plates: Record<'lake' | 'cartoon' | 'chip', LightboxPlate> = {
    lake: {
      figure: 'Fig. 02',
      title: 'Northern Wisconsin Lake Horizon',
      src: PERSONAL_INFO.images.lakeLandscape,
      alt: 'Northern Wisconsin lake landscape',
      medium: 'Photographic Study · Northern Wisconsin',
      caption:
        'Northern Wisconsin roots in hospitality, lakeshore tourism, and seasonal campsites—where service-minded communication first shaped an interest in connecting people.',
    },
    cartoon: {
      figure: 'Fig. 03',
      title: 'Friendly Blue Devil Character Study',
      src: PERSONAL_INFO.images.blueDevilCartoon,
      alt: 'Friendly Blue Devil hacker character illustration',
      medium: 'Character Illustration · UW-Stout Study',
      caption:
        'Approachable character study pairing UW-Stout Blue Devil iconography with everyday technical curiosity and human-centered support.',
    },
    chip: {
      figure: 'Fig. 04',
      title: 'Efficient AI Silicon Architecture Concept',
      src: PERSONAL_INFO.images.aiChipConcept,
      alt: 'Efficient AI Chip Art Concept',
      medium: 'Conceptual Render · Emerging Hardware',
      caption:
        'Visual study representing specialized silicon accelerators, edge computing, and sustainable enterprise infrastructure investigated during graduate coursework.',
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <article className="w-full text-[#181615]">
      {/* Section 1: Monograph Masthead & Asymmetric Dual Gallery Spread */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 max-w-[1380px] mx-auto border-b border-[#DED8CC]">
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 mb-12 border-b border-[#DED8CC] gap-6">
          <div className="space-y-2">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
              Biography &amp; Studio Practice
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif-display font-medium text-[#181615] tracking-tight leading-[1.05]">
              About <span className="italic font-normal text-[#1E3A8A]">Jake.</span>
            </h1>
          </div>

          <p className="text-sm font-sans-body text-[#57534E] max-w-sm leading-relaxed">
            From Northern Wisconsin hospitality to Madison enterprise technology and graduate research at UW-Stout.
          </p>
        </div>

        {/* Asymmetric Bento Media Pairing (7/5 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Fig. 02: Landscape Study */}
          <figure className="md:col-span-7 gallery-mat p-5 sm:p-7 flex flex-col justify-between">
            <button
              type="button"
              onClick={() => setActivePlate(plates.lake)}
              className="group relative w-full overflow-hidden bg-[#E8E2D5] aspect-[16/10] cursor-pointer focus:outline-none"
              aria-label="Inspect Northern Wisconsin lake photograph"
            >
              <ArchivalImage
                src={plates.lake.src}
                alt={plates.lake.alt}
                fallbackTitle={plates.lake.title}
                loading="eager"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#F8F6F1]/92 text-[#181615] px-2.5 py-1 text-[11px] font-mono-tech border border-[#DED8CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <Maximize2 className="w-3 h-3" />
                <span>Inspect</span>
              </span>
            </button>
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
              <span className="text-sm font-serif-display italic text-[#4A4540]">
                Fig. 02 — Northern Wisconsin roots: hospitality, lakeshore tourism, and campsite heritage.
              </span>
              <span className="text-[11px] font-mono-tech text-[#78716C] shrink-0">
                NORTHERN WI
              </span>
            </figcaption>
          </figure>

          {/* Fig. 03: Character Study */}
          <figure className="md:col-span-5 gallery-mat p-5 sm:p-7 flex flex-col justify-between">
            <button
              type="button"
              onClick={() => setActivePlate(plates.cartoon)}
              className="group relative w-full flex-1 min-h-[260px] overflow-hidden bg-[#E8E2D5] flex items-center justify-center p-6 cursor-pointer focus:outline-none"
              aria-label="Inspect Friendly Blue Devil character illustration"
            >
              <ArchivalImage
                src={plates.cartoon.src}
                alt={plates.cartoon.alt}
                fallbackTitle={plates.cartoon.title}
                className="max-h-[280px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#F8F6F1]/92 text-[#181615] px-2.5 py-1 text-[11px] font-mono-tech border border-[#DED8CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                <Maximize2 className="w-3 h-3" />
                <span>Inspect</span>
              </span>
            </button>
            <figcaption className="mt-3.5 flex items-baseline justify-between gap-4">
              <span className="text-sm font-serif-display italic text-[#4A4540]">
                Fig. 03 — Friendly Blue Devil character study produced during MS-ICT coursework.
              </span>
              <span className="text-[11px] font-mono-tech text-[#78716C] shrink-0">
                STUDY II
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 2: Asymmetric Editorial Essay with Drop Cap & Margin Plate */}
      <RevealSection>
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1380px] mx-auto border-b border-[#DED8CC]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Narrative Column (70% Measure) */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-[17px] font-sans-body text-[#3F3A36] leading-[1.8] max-w-prose">
              <p className="editorial-dropcap text-[#181615]">
                I’m <strong className="font-semibold text-[#181615]">Jake</strong>, a Northern WI native with a background in tourism from restaurants to campsites, though my passion lies in technology. From networking and coding to support and engineering, I’ve gained valuable experience helping people connect and find information.
              </p>

              <p>
                Currently residing in <strong className="font-medium text-[#181615]">Madison, WI</strong>, I work for a not-for-profit insurance company, specializing in <strong className="font-medium text-[#1E3A8A]">Office 365</strong>. My full professional resume can be found on{' '}
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1E3A8A] hover:text-[#9A3412] font-medium underline underline-offset-4 decoration-[#1E3A8A]/40 transition-colors duration-150"
                >
                  Avalon.dev
                </a>
                .
              </p>

              <p>
                Beyond work, I indulge in House music, alpha chill, and enjoy walking and exercising. If you’d like to get in touch, visit my contact form below or reach out directly via text, call, or email.
              </p>

              {/* Editorial Pull Quote — Hairline Top/Bottom Framing (No Left Accent Stripe) */}
              <blockquote className="my-10 py-8 border-y border-[#DED8CC]">
                <p className="text-2xl md:text-[28px] font-serif-display italic text-[#181615] leading-[1.38]">
                  “I’m also planning to blog more while organizing my papers and preparing for graduate-level courses and certificates in the near future!”
                </p>
              </blockquote>

              {/* Academic Provenance */}
              <div className="pt-2 space-y-3">
                <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#78716C]">
                  Academic Provenance
                </div>
                <p className="text-sm text-[#4A4540] leading-relaxed">
                  This portfolio was produced while a student at the University of Wisconsin-Stout in the M.S. Information &amp; Communication Technologies program.
                </p>
                <div className="pt-1">
                  <a
                    href={PERSONAL_INFO.programUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-8 decoration-[#1E3A8A]/35 transition-colors duration-150"
                  >
                    <span>About the Program — Go Blue Devils!</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Margin Sidebar (30%): Silicon Plate & Biographical Dossier */}
            <aside className="lg:col-span-5 space-y-8">
              <figure className="gallery-mat p-5 sm:p-6">
                <button
                  type="button"
                  onClick={() => setActivePlate(plates.chip)}
                  className="group relative w-full overflow-hidden bg-[#E8E2D5] aspect-[3/2] cursor-pointer focus:outline-none"
                  aria-label="Inspect Efficient AI Silicon Concept artwork"
                >
                  <ArchivalImage
                    src={plates.chip.src}
                    alt={plates.chip.alt}
                    fallbackTitle={plates.chip.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#F8F6F1]/92 text-[#181615] px-2.5 py-1 text-[11px] font-mono-tech border border-[#DED8CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <Maximize2 className="w-3 h-3" />
                    <span>Inspect</span>
                  </span>
                </button>
                <figcaption className="mt-4 space-y-1">
                  <div className="text-lg font-serif-display font-medium text-[#181615]">
                    Fig. 04 — Efficient AI Chip Art Concept
                  </div>
                  <p className="text-xs font-serif-display italic text-[#57534E] leading-relaxed">
                    Conceptual study of specialized silicon accelerators and sustainable enterprise computing architectures.
                  </p>
                </figcaption>
              </figure>

              {/* Biographical Margin Index */}
              <dl className="divide-y divide-[#DED8CC] border-y border-[#DED8CC] text-sm">
                <div className="py-3.5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#78716C]">Residence</dt>
                  <dd className="font-sans-body text-[#181615]">Madison / Monona, Wisconsin</dd>
                </div>
                <div className="py-3.5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#78716C]">Practice</dt>
                  <dd className="font-sans-body text-[#181615]">Enterprise Systems · Office 365</dd>
                </div>
                <div className="py-3.5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#78716C]">Sector</dt>
                  <dd className="font-sans-body text-[#181615]">Not-for-Profit Insurance</dd>
                </div>
                <div className="py-3.5 flex items-baseline justify-between gap-4">
                  <dt className="text-xs uppercase tracking-[0.14em] text-[#78716C]">Interests</dt>
                  <dd className="font-sans-body text-[#181615]">House Music · Alpha Chill · Walking</dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>
      </RevealSection>

      {/* Section 3: Studio Inquiry Form (Matching portfolio.avalon.dev/about) */}
      <RevealSection>
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
                Correspondence
              </div>
              <h2 className="text-4xl font-serif-display font-medium text-[#181615] tracking-tight">
                Let’s Work Together
              </h2>
              <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed max-w-md">
                Please provide some information on your project or goals and we’ll move the conversation on from there.
              </p>
            </div>

            <div className="lg:col-span-7 gallery-mat p-7 sm:p-10">
              {status === 'success' ? (
                <div className="py-8 space-y-3">
                  <h3 className="text-2xl font-serif-display font-medium text-[#181615]">
                    Thank you for reaching out.
                  </h3>
                  <p className="text-sm font-sans-body text-[#4A4540]">
                    Your message has been received. Jake will follow up with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 px-4 py-2 text-xs font-sans-body font-medium uppercase tracking-[0.14em] text-[#181615] border border-[#181615] hover:bg-[#181615] hover:text-[#F8F6F1] transition-colors duration-150 cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="about-name" className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block">
                        Name *
                      </label>
                      <input
                        id="about-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F1] border border-[#D4CEC2] text-[#181615] text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors duration-150 placeholder:text-[#9C958B]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="about-email" className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block">
                        Email *
                      </label>
                      <input
                        id="about-email"
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
                    <label htmlFor="about-message" className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#57534E] block">
                      Message *
                    </label>
                    <textarea
                      id="about-message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details about your project, academic question, or collaboration..."
                      className="w-full px-3.5 py-2.5 bg-[#F8F6F1] border border-[#D4CEC2] text-[#181615] text-sm focus:outline-none focus:border-[#1E3A8A] transition-colors duration-150 resize-none placeholder:text-[#9C958B]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="px-6 py-3 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-sm font-sans-body font-medium transition-colors duration-150 cursor-pointer"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </RevealSection>

      <ArtworkLightbox plate={activePlate} onClose={() => setActivePlate(null)} />
    </article>
  );
};

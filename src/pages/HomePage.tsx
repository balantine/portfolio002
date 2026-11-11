import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO, PROGRAM_OBJECTIVES } from '../data/portfolioData';
import { RevealSection } from '../components/RevealSection';
import { ArchivalImage } from '../components/ArchivalImage';
import { ArtworkLightbox, LightboxPlate } from '../components/ArtworkLightbox';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activePlate, setActivePlate] = useState<LightboxPlate | null>(null);

  const heroPlate: LightboxPlate = {
    figure: 'Fig. 01',
    title: 'Digital Blue Devil Identity Study',
    src: PERSONAL_INFO.images.blueDevilHero,
    alt: 'Digital Blue Devil visual study created for the UW-Stout M.S. ICT portfolio',
    medium: 'Digital Illustration · Archival Plate',
    caption:
      'Visual emblem synthesizing University of Wisconsin-Stout Blue Devil heritage with enterprise systems engineering, network security, and human-centered computing.',
  };

  return (
    <article className="w-full text-[#181615]">
      {/* Split-Screen Editorial Hero */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 max-w-[1380px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 space-y-7">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#78716C]">
              University of Wisconsin-Stout · Graduate Monograph
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-[68px] font-serif-display font-medium text-[#181615] tracking-tight leading-[1.03]">
                MS-ICT Program{' '}
                <span className="italic font-normal text-[#1E3A8A]">Objectives.</span>
              </h1>
              <p className="text-lg md:text-xl font-serif-display italic text-[#4A4540] leading-relaxed max-w-xl">
                An academic and creative synthesis of sociotechnical systems, enterprise architecture, and organizational learning.
              </p>
            </div>

            <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed max-w-prose">
              Curated by <strong className="font-medium text-[#181615]">{PERSONAL_INFO.fullName}</strong> in fulfillment of the Master of Science in Information and Communication Technologies. Grounded in Madison, Wisconsin enterprise practice, this monograph documents seven core pillars of inquiry from foundational theory to applied systems forecasting.
            </p>

            {/* Primary CTA + Quiet Secondary Link */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              {onNavigate && (
                <>
                  <button
                    type="button"
                    onClick={() => onNavigate('/competencies')}
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-sans-body font-medium text-[#F8F6F1] bg-[#181615] hover:bg-[#1E3A8A] transition-colors duration-150 cursor-pointer"
                  >
                    <span>Explore Competencies</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('/sequence-1')}
                    className="inline-flex items-center gap-1.5 text-sm font-sans-body font-medium text-[#181615] hover:text-[#1E3A8A] underline underline-offset-8 decoration-[#C4BCB0] hover:decoration-[#1E3A8A] transition-colors duration-150 cursor-pointer py-2"
                  >
                    <span>View Course Sequence</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right Column: Single-Level Museum Mat Artwork */}
          <div className="lg:col-span-6">
            <figure className="gallery-mat p-6 sm:p-9 transition-colors duration-200">
              <button
                type="button"
                onClick={() => setActivePlate(heroPlate)}
                className="group relative w-full bg-[#E8E2D5] overflow-hidden aspect-[4/3] flex items-center justify-center p-4 sm:p-6 cursor-pointer focus:outline-none"
                aria-label="Inspect Digital Blue Devil artwork in fullscreen viewer"
              >
                <ArchivalImage
                  src={PERSONAL_INFO.images.blueDevilHero}
                  alt={heroPlate.alt}
                  fallbackTitle={heroPlate.title}
                  loading="eager"
                  className="max-h-full w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 bg-[#F8F6F1]/92 text-[#181615] px-2.5 py-1 text-[11px] font-mono-tech border border-[#DED8CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect</span>
                </span>
              </button>

              <figcaption className="mt-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 text-xs text-[#57534E]">
                <span className="font-serif-display italic text-sm text-[#181615]">
                  Fig. 01 — Digital Blue Devil study, UW-Stout M.S. ICT visual motif.
                </span>
                <span className="font-mono-tech text-[11px] text-[#78716C] shrink-0">
                  PLATE I · ARCHIVAL
                </span>
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Full-Width Curatorial Provenance Row Below Hero Split */}
        <dl className="mt-14 pt-8 border-t border-[#DED8CC] grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-1">
            <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
              Candidate
            </dt>
            <dd className="text-lg font-serif-display font-semibold text-[#181615]">
              {PERSONAL_INFO.fullName} <span className="italic font-normal text-[#78716C]">({PERSONAL_INFO.handle})</span>
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
              Specialization
            </dt>
            <dd className="text-lg font-serif-display font-semibold text-[#181615]">
              Enterprise Systems &amp; Office 365
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
              Academic Sequence
            </dt>
            <dd className="text-lg font-serif-display font-semibold text-[#181615] font-variant-numeric tabular-nums">
              11 Graduate Courses <span className="italic font-normal text-[#78716C]">(2023–2025)</span>
            </dd>
          </div>

          <div className="space-y-1">
            <dt className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
              Institution
            </dt>
            <dd className="text-lg font-serif-display font-semibold text-[#181615]">
              UW-Stout · Wisconsin
            </dd>
          </div>
        </dl>
      </section>

      {/* Subtle Curatorial Marquee Section Divider */}
      <div
        className="w-full border-y border-[#DED8CC] bg-[#F1EDE4] py-3.5 overflow-hidden select-none"
        aria-hidden="true"
      >
        <div className="animate-curatorial-marquee">
          {[0, 1].map((dup) => (
            <div
              key={dup}
              className="flex items-center gap-8 pr-8 text-sm font-serif-display italic text-[#57534E] whitespace-nowrap"
            >
              <span>Sociotechnical Systems</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
              <span>Organizational Enablement</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
              <span>Enterprise Infrastructure</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
              <span>Technology Futures &amp; Forecasting</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
              <span>IT Policy, NIST &amp; Governance</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
              <span>Scholarly Inquiry</span>
              <span className="text-[#9A3412] not-italic text-xs">·</span>
            </div>
          ))}
        </div>
      </div>

      {/* Asymmetric Exhibition Catalog: Seven Program Objectives */}
      <RevealSection>
        <section className="py-20 md:py-28 px-6 md:px-12 max-w-[1380px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Margin Column (30%): Curatorial Context & Institution Emblem */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              <div className="space-y-3">
                <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
                  Curricular Manifesto
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif-display font-medium text-[#181615] leading-[1.12]">
                  Seven Pillars of Graduate Mastery
                </h2>
                <p className="text-sm font-sans-body text-[#4A4540] leading-relaxed">
                  Upon completion of the M.S. in Information and Communication Technologies at UW-Stout, candidates demonstrate command across these seven foundational objectives.
                </p>
              </div>

              {/* Institutional Seal & Official Program Link */}
              <div className="pt-6 border-t border-[#DED8CC] space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-14 bg-[#F1EDE4] border border-[#DED8CC] p-2 flex items-center justify-center shrink-0">
                    <ArchivalImage
                      src={PERSONAL_INFO.images.uwStoutLogo}
                      alt="University of Wisconsin-Stout official emblem"
                      fallbackTitle="UW-Stout"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-base font-serif-display font-semibold text-[#181615]">
                      University of Wisconsin-Stout
                    </div>
                    <div className="text-xs font-sans-body text-[#78716C]">
                      Wisconsin’s Polytechnic University · Go Blue Devils!
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-sans-body font-medium uppercase tracking-[0.14em] text-[#1E3A8A] hover:text-[#9A3412] transition-colors duration-150"
                >
                  <span>Official UW-Stout Program Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </aside>

            {/* Right Catalog Column (70%): Numbered Objectives 01–07 */}
            <div className="lg:col-span-8 border-t border-[#DED8CC]">
              {PROGRAM_OBJECTIVES.map((obj) => (
                <div
                  key={obj.num}
                  className="group py-8 border-b border-[#DED8CC] grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-baseline transition-colors duration-150"
                >
                  <div className="sm:col-span-2 flex items-baseline gap-2">
                    <span className="text-2xl md:text-3xl font-serif-display italic text-[#1E3A8A] tabular-nums">
                      0{obj.num}.
                    </span>
                  </div>

                  <div className="sm:col-span-10 space-y-2.5">
                    <h3 className="text-2xl md:text-[28px] font-serif-display font-medium text-[#181615] group-hover:text-[#1E3A8A] transition-colors duration-150 leading-[1.2]">
                      {obj.title}
                    </h3>
                    <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed max-w-prose">
                      {obj.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Chapter Continuation Footer */}
              {onNavigate && (
                <div className="pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-sm font-serif-display italic text-[#57534E]">
                    Continue reading through the chronological curriculum or biographical essay.
                  </p>
                  <div className="flex items-center gap-6">
                    <button
                      type="button"
                      onClick={() => onNavigate('/about')}
                      className="inline-flex items-center gap-1.5 text-sm font-sans-body font-medium text-[#181615] hover:text-[#1E3A8A] transition-colors duration-150 cursor-pointer"
                    >
                      <span>About Jake</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('/sequence-1')}
                      className="inline-flex items-center gap-1.5 text-sm font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] transition-colors duration-150 cursor-pointer"
                    >
                      <span>Course Sequence</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </RevealSection>

      <ArtworkLightbox plate={activePlate} onClose={() => setActivePlate(null)} />
    </article>
  );
};

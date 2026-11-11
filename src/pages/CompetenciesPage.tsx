import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Maximize2, X } from 'lucide-react';
import { CORE_COMPETENCIES, EMPHASIS_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';
import { RevealSection } from '../components/RevealSection';
import { ArchivalImage } from '../components/ArchivalImage';
import { ArtworkLightbox, LightboxPlate } from '../components/ArtworkLightbox';

interface CompetenciesPageProps {
  onNavigate?: (path: string) => void;
}

interface SelectedArtifactBrief {
  domainLabel: string;
  competencyTitle: string;
  artifactTitle: string;
  introduction: string;
  outcome: string;
}

export const CompetenciesPage: React.FC<CompetenciesPageProps> = () => {
  const [domainFilter, setDomainFilter] = useState<'all' | 'core' | 'emphasis'>('all');
  const [activePlate, setActivePlate] = useState<LightboxPlate | null>(null);
  const [selectedBrief, setSelectedBrief] = useState<SelectedArtifactBrief | null>(null);

  useEffect(() => {
    if (!selectedBrief) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBrief(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedBrief]);

  const studyPlate: LightboxPlate = {
    figure: 'Fig. 06',
    title: 'Sociotechnical Networks & Inquiry Study',
    src: PERSONAL_INFO.images.competenciesStudy,
    alt: 'M.S. ICT Competencies archival visual study',
    medium: 'Photographic Study · UW-Stout ICT Monograph',
    caption:
      'Visual preface accompanying the core sociotechnical reflections and enterprise emphasis artifacts.',
  };

  const showCore = domainFilter === 'all' || domainFilter === 'core';
  const showEmphasis = domainFilter === 'all' || domainFilter === 'emphasis';

  return (
    <article className="w-full text-[#181615]">
      {/* Curatorial Split Masthead */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 max-w-[1380px] mx-auto border-b border-[#DED8CC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
              Scholarly Reflections &amp; Curricular Evidence
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif-display font-medium text-[#181615] tracking-tight leading-[1.04]">
              M.S. ICT{' '}
              <span className="italic font-normal text-[#1E3A8A]">Competencies.</span>
            </h1>
            <p className="text-base md:text-lg font-sans-body text-[#4A4540] leading-relaxed max-w-prose">
              Research-grounded reflections, learning outcomes, and tangible enterprise artifacts spanning five foundational core pillars and five specialized enterprise coursework domains.
            </p>

            <div className="pt-1">
              <a
                href={PERSONAL_INFO.reflectionAidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-8 decoration-[#1E3A8A]/35 transition-colors duration-150"
              >
                <span>Open UW-Stout Reflection Aid (Google Drive)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <figure className="gallery-mat p-4 sm:p-5">
              <button
                type="button"
                onClick={() => setActivePlate(studyPlate)}
                className="group relative w-full overflow-hidden bg-[#E8E2D5] aspect-[16/9] cursor-pointer focus:outline-none"
                aria-label="Inspect M.S. ICT Competencies visual study"
              >
                <ArchivalImage
                  src={studyPlate.src}
                  alt={studyPlate.alt}
                  fallbackTitle={studyPlate.title}
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 bg-[#F8F6F1]/92 text-[#181615] px-2.5 py-1 text-[11px] font-mono-tech border border-[#DED8CC] opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <Maximize2 className="w-3 h-3" />
                  <span>Inspect</span>
                </span>
              </button>
              <figcaption className="mt-3 flex items-baseline justify-between gap-2 text-xs text-[#57534E]">
                <span className="font-serif-display italic text-sm">
                  Fig. 06 — Sociotechnical &amp; enterprise inquiry study.
                </span>
                <span className="font-mono-tech text-[11px] text-[#78716C]">10 ENTRIES</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Sticky Domain Filter Rail */}
      <div className="border-b border-[#DED8CC] bg-[#F8F6F1]/95 backdrop-blur-sm">
        <div className="max-w-[1380px] mx-auto px-6 md:px-12 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div
            role="tablist"
            aria-label="Filter competency monograph sections"
            className="inline-flex flex-wrap items-center gap-6"
          >
            {[
              { key: 'all' as const, label: 'Complete Monograph (10)' },
              { key: 'core' as const, label: 'Core Competencies (01–05)' },
              { key: 'emphasis' as const, label: 'Enterprise Emphasis (5)' },
            ].map((tab) => {
              const active = domainFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setDomainFilter(tab.key)}
                  className={`py-1 text-sm font-sans-body transition-colors duration-150 border-b-2 cursor-pointer ${
                    active
                      ? 'text-[#181615] font-semibold border-[#1E3A8A]'
                      : 'text-[#78716C] hover:text-[#181615] border-transparent'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-mono-tech text-[#78716C]">
            UW-STOUT GRADUATE PORTFOLIO STANDARDS
          </div>
        </div>
      </div>

      {/* Main Monograph Content */}
      <div className="py-16 md:py-24 px-6 md:px-12 max-w-[1380px] mx-auto space-y-28">
        {/* ================= CORE COMPETENCIES ================= */}
        {showCore && (
          <RevealSection>
            <section aria-labelledby="core-heading" className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#181615] gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
                    Part I · Foundational Pillars
                  </div>
                  <h2 id="core-heading" className="text-3xl sm:text-4xl font-serif-display font-medium text-[#181615]">
                    Core Competencies
                  </h2>
                </div>
                <div className="text-xs font-mono-tech text-[#78716C]">
                  ENTRIES 01 – 05 · SOCIOTECHNICAL ANALYSIS
                </div>
              </div>

              <div className="divide-y divide-[#DED8CC]">
                {CORE_COMPETENCIES.map((comp) => (
                  <div
                    key={comp.id}
                    className="py-14 first:pt-4 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
                  >
                    {/* Left Column: Accession Number, Title & Sub-Competencies */}
                    <div className="lg:col-span-4 space-y-5">
                      <div className="space-y-2">
                        <span className="text-xs font-mono-tech uppercase tracking-[0.16em] text-[#1E3A8A] block">
                          Core Competency 0{comp.id}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-[#181615] leading-[1.18]">
                          {comp.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[#E6E0D4] space-y-2">
                        <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                          Curricular Benchmarks
                        </div>
                        <ul className="space-y-2 text-xs md:text-[13px] font-sans-body text-[#4A4540] leading-relaxed">
                          {comp.subCompetencies.map((sub, idx) => (
                            <li key={idx}>{sub}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Reflection, Outcome & Artifact Verification Table */}
                    <div className="lg:col-span-8 space-y-8">
                      {/* Scholarly Reflection in Editorial Serif */}
                      <div className="space-y-2">
                        <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                          Reflective Statement
                        </div>
                        <blockquote className="text-xl md:text-[22px] font-serif-display italic text-[#181615] leading-[1.55]">
                          “{comp.reflection}”
                        </blockquote>
                      </div>

                      {/* Demonstrated Outcome (Unboxed Editorial Block) */}
                      <div className="py-5 border-y border-[#DED8CC] grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                        <span className="sm:col-span-3 text-xs font-sans-body uppercase tracking-[0.16em] text-[#9A3412] font-medium">
                          Outcome
                        </span>
                        <p className="sm:col-span-9 text-sm md:text-[15px] font-sans-body text-[#181615] leading-relaxed">
                          {comp.outcome}
                        </p>
                      </div>

                      {/* Artifact Verification Table */}
                      {comp.artifacts && comp.artifacts.length > 0 && (
                        <div className="space-y-3">
                          <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                            Artifact Verification Ledger
                          </div>
                          <div className="overflow-x-auto border border-[#DED8CC] bg-[#F1EDE4]/65">
                            <table className="w-full text-left text-xs">
                              <thead className="border-b border-[#DED8CC] text-[#57534E] uppercase tracking-[0.12em] font-sans-body text-[11px]">
                                <tr>
                                  <th className="py-3 px-4 font-medium">Title of Artifact</th>
                                  <th className="py-3 px-4 font-medium">Work Sample Introduction</th>
                                  <th className="py-3 px-4 font-medium whitespace-nowrap">Work Sample</th>
                                  <th className="py-3 px-4 font-medium whitespace-nowrap">Reflection Link</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E4DEC2]/60 text-[#3F3A36]">
                                {comp.artifacts.map((art, aIdx) => (
                                  <tr key={aIdx} className="hover:bg-[#EAE4D8]/60 transition-colors duration-150">
                                    <td className="py-4 px-4 font-serif-display font-semibold text-base text-[#181615] min-w-[200px]">
                                      {art.title}
                                    </td>
                                    <td className="py-4 px-4 font-sans-body text-xs text-[#4A4540] leading-relaxed max-w-md">
                                      {art.introduction}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setSelectedBrief({
                                            domainLabel: `Core Competency 0${comp.id}`,
                                            competencyTitle: comp.title,
                                            artifactTitle: art.title,
                                            introduction: art.introduction,
                                            outcome: comp.outcome,
                                          })
                                        }
                                        className="font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-4 decoration-[#1E3A8A]/35 transition-colors duration-150 cursor-pointer"
                                      >
                                        Sample Brief
                                      </button>
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap">
                                      <a
                                        href={PERSONAL_INFO.reflectionAidUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 font-sans-body font-medium text-[#181615] hover:text-[#1E3A8A] underline underline-offset-4 decoration-[#C4BCB0] transition-colors duration-150"
                                      >
                                        <span>Reflection Aid</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealSection>
        )}

        {/* ================= EMPHASIS COMPETENCIES ================= */}
        {showEmphasis && (
          <RevealSection>
            <section aria-labelledby="emphasis-heading" className="space-y-12">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-6 border-b border-[#181615] gap-4">
                <div className="space-y-1">
                  <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
                    Part II · Specialization Track
                  </div>
                  <h2 id="emphasis-heading" className="text-3xl sm:text-4xl font-serif-display font-medium text-[#181615]">
                    Emphasis Competencies
                  </h2>
                </div>
                <div className="text-xs font-mono-tech text-[#78716C]">
                  ENTERPRISE SYSTEMS · POLICY &amp; ANALYTICS
                </div>
              </div>

              <div className="divide-y divide-[#DED8CC]">
                {EMPHASIS_COMPETENCIES.map((comp) => (
                  <div
                    key={comp.code}
                    className="py-14 first:pt-4 last:pb-0 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start"
                  >
                    {/* Left Column: Course Code, Title & Objective */}
                    <div className="lg:col-span-4 space-y-5">
                      <div className="space-y-2">
                        <span className="text-xs font-mono-tech uppercase tracking-[0.16em] text-[#1E3A8A] block">
                          Enterprise Emphasis · {comp.code}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-serif-display font-medium text-[#181615] leading-[1.18]">
                          {comp.title}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[#E6E0D4] space-y-2">
                        <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                          Course Objective
                        </div>
                        <p className="text-xs md:text-[13px] font-sans-body text-[#4A4540] leading-relaxed">
                          {comp.objective}
                        </p>
                      </div>
                    </div>

                    {/* Right Column: Reflection, Outcome & Artifact Verification Table */}
                    <div className="lg:col-span-8 space-y-8">
                      <div className="space-y-2">
                        <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                          Reflective Statement
                        </div>
                        <blockquote className="text-xl md:text-[22px] font-serif-display italic text-[#181615] leading-[1.55]">
                          “{comp.reflection}”
                        </blockquote>
                      </div>

                      <div className="py-5 border-y border-[#DED8CC] grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline">
                        <span className="sm:col-span-3 text-xs font-sans-body uppercase tracking-[0.16em] text-[#9A3412] font-medium">
                          Outcome
                        </span>
                        <p className="sm:col-span-9 text-sm md:text-[15px] font-sans-body text-[#181615] leading-relaxed">
                          {comp.outcome}
                        </p>
                      </div>

                      {comp.artifacts && comp.artifacts.length > 0 && (
                        <div className="space-y-3">
                          <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                            Artifact Verification Ledger
                          </div>
                          <div className="overflow-x-auto border border-[#DED8CC] bg-[#F1EDE4]/65">
                            <table className="w-full text-left text-xs">
                              <thead className="border-b border-[#DED8CC] text-[#57534E] uppercase tracking-[0.12em] font-sans-body text-[11px]">
                                <tr>
                                  <th className="py-3 px-4 font-medium">Title of Artifact</th>
                                  <th className="py-3 px-4 font-medium">Work Sample Introduction</th>
                                  <th className="py-3 px-4 font-medium whitespace-nowrap">Work Sample</th>
                                  <th className="py-3 px-4 font-medium whitespace-nowrap">Reflection Link</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-[#E4DEC2]/60 text-[#3F3A36]">
                                {comp.artifacts.map((art, aIdx) => (
                                  <tr key={aIdx} className="hover:bg-[#EAE4D8]/60 transition-colors duration-150">
                                    <td className="py-4 px-4 font-serif-display font-semibold text-base text-[#181615] min-w-[200px]">
                                      {art.title}
                                    </td>
                                    <td className="py-4 px-4 font-sans-body text-xs text-[#4A4540] leading-relaxed max-w-md">
                                      {art.introduction}
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setSelectedBrief({
                                            domainLabel: `Enterprise Emphasis · ${comp.code}`,
                                            competencyTitle: comp.title,
                                            artifactTitle: art.title,
                                            introduction: art.introduction,
                                            outcome: comp.outcome,
                                          })
                                        }
                                        className="font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-4 decoration-[#1E3A8A]/35 transition-colors duration-150 cursor-pointer"
                                      >
                                        Sample Brief
                                      </button>
                                    </td>
                                    <td className="py-4 px-4 whitespace-nowrap">
                                      <a
                                        href={PERSONAL_INFO.reflectionAidUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 font-sans-body font-medium text-[#181615] hover:text-[#1E3A8A] underline underline-offset-4 decoration-[#C4BCB0] transition-colors duration-150"
                                      >
                                        <span>Reflection Aid</span>
                                        <ArrowUpRight className="w-3.5 h-3.5" />
                                      </a>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </RevealSection>
        )}

        {/* UW-Stout Reflection Aid ColophonPlinth */}
        <div className="gallery-mat p-8 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#78716C]">
              Graduate Evaluation Reference
            </div>
            <h3 className="text-2xl font-serif-display font-medium text-[#181615]">
              UW-Stout MS-ICT Reflection Aid Rubric
            </h3>
            <p className="text-sm font-sans-body text-[#4A4540] leading-relaxed">
              Consult the official UW-Stout reflection framework guiding artifact selection and critical synthesis across this portfolio.
            </p>
          </div>

          <a
            href={PERSONAL_INFO.reflectionAidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-sm font-sans-body font-medium whitespace-nowrap transition-colors duration-150 self-start sm:self-center"
          >
            <span>Open Reflection Aid</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Artifact Sample Brief Modal */}
      {selectedBrief && (
        <div
          className="fixed inset-0 z-50 bg-[#181615]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedBrief(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedBrief.artifactTitle}
        >
          <div
            className="w-full max-w-2xl bg-[#F8F6F1] border border-[#DED8CC] p-6 sm:p-10 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#DED8CC]">
              <span className="text-xs font-mono-tech uppercase tracking-[0.16em] text-[#1E3A8A]">
                {selectedBrief.domainLabel}
              </span>
              <button
                type="button"
                onClick={() => setSelectedBrief(null)}
                aria-label="Close sample brief"
                className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#181615] hover:text-[#9A3412] transition-colors duration-150 cursor-pointer"
              >
                <span>ESC</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-sans-body uppercase tracking-[0.14em] text-[#78716C]">
                {selectedBrief.competencyTitle}
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#181615]">
                {selectedBrief.artifactTitle}
              </h3>
              <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed">
                {selectedBrief.introduction}
              </p>
            </div>

            <div className="p-5 bg-[#F1EDE4] border border-[#DED8CC] space-y-1.5">
              <div className="text-[11px] font-sans-body uppercase tracking-[0.16em] text-[#9A3412] font-medium">
                Verified Competency Outcome
              </div>
              <p className="text-sm font-serif-display italic text-[#181615] leading-relaxed">
                “{selectedBrief.outcome}”
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <a
                href={PERSONAL_INFO.reflectionAidUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-sans-body font-medium text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-4 transition-colors duration-150"
              >
                <span>Open UW-Stout Reflection Aid</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={() => setSelectedBrief(null)}
                className="px-5 py-2.5 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-xs font-sans-body uppercase tracking-[0.14em] transition-colors duration-150 cursor-pointer"
              >
                Close Brief
              </button>
            </div>
          </div>
        </div>
      )}

      <ArtworkLightbox plate={activePlate} onClose={() => setActivePlate(null)} />
    </article>
  );
};

import React, { useState } from 'react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { COURSE_SEQUENCE, PERSONAL_INFO } from '../data/portfolioData';
import { RevealSection } from '../components/RevealSection';
import { ArchivalImage } from '../components/ArchivalImage';
import { ArtworkLightbox, LightboxPlate } from '../components/ArtworkLightbox';

interface SequencePageProps {
  onNavigate?: (path: string) => void;
}

export const SequencePage: React.FC<SequencePageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'core' | 'emphasis'>('all');
  const [activePlate, setActivePlate] = useState<LightboxPlate | null>(null);

  const hardwarePlate: LightboxPlate = {
    figure: 'Fig. 05',
    title: 'Enterprise Systems & Circuit Topology',
    src: PERSONAL_INFO.images.sequenceHardware,
    alt: 'Motherboard hardware and integrated circuits',
    medium: 'Photographic Study · Systems Architecture',
    caption:
      'Hardware substrate representing the physical and logical layers studied across the 11-course M.S. Information and Communication Technologies sequence.',
  };

  const coreCount = COURSE_SEQUENCE.filter((c) => c.category === 'core').length;
  const emphasisCount = COURSE_SEQUENCE.filter((c) => c.category === 'emphasis').length;

  const filteredCourses =
    selectedCategory === 'all'
      ? COURSE_SEQUENCE
      : COURSE_SEQUENCE.filter((c) => c.category === selectedCategory);

  return (
    <article className="w-full text-[#181615]">
      {/* Editorial Split Masthead + Framed Hardware Study */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 max-w-[1380px] mx-auto border-b border-[#DED8CC]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
              Curriculum Chronology · Fall 2023 – Fall 2025
            </div>
            <h1 className="text-5xl sm:text-6xl font-serif-display font-medium text-[#181615] tracking-tight leading-[1.04]">
              M.S. ICT Course{' '}
              <span className="italic font-normal text-[#1E3A8A]">Sequence.</span>
            </h1>
            <p className="text-base md:text-lg font-sans-body text-[#4A4540] leading-relaxed max-w-prose">
              Eleven graduate courses tracing a deliberate arc from organizational communication theory and enterprise systems analysis to IT policy audit, analytics, and the culminating electronic portfolio.
            </p>
          </div>

          <div className="lg:col-span-5">
            <figure className="gallery-mat p-4 sm:p-5">
              <button
                type="button"
                onClick={() => setActivePlate(hardwarePlate)}
                className="group relative w-full overflow-hidden bg-[#E8E2D5] aspect-[16/9] cursor-pointer focus:outline-none"
                aria-label="Inspect Enterprise Systems motherboard study"
              >
                <ArchivalImage
                  src={hardwarePlate.src}
                  alt={hardwarePlate.alt}
                  fallbackTitle={hardwarePlate.title}
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
                  Fig. 05 — Physical &amp; enterprise infrastructure substrate.
                </span>
                <span className="font-mono-tech text-[11px] text-[#78716C]">11 COURSES</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Interactive Curriculum Filter & Chronological Index */}
      <RevealSection>
        <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1380px] mx-auto">
          {/* Interactive Segmented Control */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-[#DED8CC]">
            <div
              role="tablist"
              aria-label="Filter courses by curriculum track"
              className="inline-flex flex-wrap items-center gap-6"
            >
              {[
                { key: 'all' as const, label: `All Courses (${COURSE_SEQUENCE.length})` },
                { key: 'core' as const, label: `Core Curriculum (${coreCount})` },
                { key: 'emphasis' as const, label: `Enterprise Emphasis (${emphasisCount})` },
              ].map((tab) => {
                const active = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedCategory(tab.key)}
                    className={`pb-2 text-sm font-sans-body transition-colors duration-150 border-b-2 cursor-pointer ${
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
              SHOWING {filteredCourses.length} OF {COURSE_SEQUENCE.length} MILESTONES
            </div>
          </div>

          {/* Chronological Table / Ledger */}
          <div className="divide-y divide-[#DED8CC] border-b border-[#DED8CC]">
            {filteredCourses.map((course, index) => (
              <div
                key={course.id}
                className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline transition-colors duration-150"
              >
                {/* Chronological Index & Term */}
                <div className="md:col-span-3 flex md:flex-col justify-between md:justify-start gap-1">
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs font-mono-tech text-[#78716C] tabular-nums">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-mono-tech font-medium text-[#1E3A8A]">
                      {course.code}
                    </span>
                  </div>
                  <div className="text-xs font-sans-body text-[#78716C]">
                    {course.term} · {course.category === 'core' ? 'Core Foundation' : 'Enterprise Emphasis'}
                  </div>
                </div>

                {/* Course Title & Syllabus Synopsis */}
                <div className="md:col-span-9 space-y-2">
                  <h2 className="text-2xl md:text-[28px] font-serif-display font-medium text-[#181615] group-hover:text-[#1E3A8A] transition-colors duration-150 leading-[1.2]">
                    {course.title}
                  </h2>
                  <p className="text-sm md:text-[15px] font-sans-body text-[#4A4540] leading-relaxed max-w-prose">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Culminating Capstone Plinth (All-around 1px hairline, zero left-border stripe) */}
          <div className="mt-16 gallery-mat p-8 sm:p-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="text-xs font-sans-body uppercase tracking-[0.18em] text-[#9A3412]">
                Culminating Synthesis · ICT 780
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif-display font-medium text-[#181615]">
                ICT Electronic Portfolio &amp; Research Reflections
              </h3>
              <p className="text-sm font-sans-body text-[#4A4540] leading-relaxed">
                Each course in the sequence feeds into researched reflections, applied enterprise artifacts, and measurable learning outcomes documented in the Competency Monograph.
              </p>
            </div>

            {onNavigate && (
              <button
                type="button"
                onClick={() => onNavigate('/competencies')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#181615] hover:bg-[#1E3A8A] text-[#F8F6F1] text-sm font-sans-body font-medium whitespace-nowrap transition-colors duration-150 cursor-pointer self-start md:self-center"
              >
                <span>Read Competency Reflections</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </section>
      </RevealSection>

      <ArtworkLightbox plate={activePlate} onClose={() => setActivePlate(null)} />
    </article>
  );
};

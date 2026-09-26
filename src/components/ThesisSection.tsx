import React, { useState } from 'react';
import { THESIS_DATA } from '../data/portfolioData';

interface ThesisSectionProps {
  onOpenFullDossier: () => void;
}

export const ThesisSection: React.FC<ThesisSectionProps> = ({ onOpenFullDossier }) => {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const activeChapter = THESIS_DATA.chapters[activeChapterIndex];

  const handleCopyBibtex = () => {
    const bib = `@mastersthesis{vance2026latent,
  title={Latent Semantic Routing & Synchronous Telepresence in Ultra-Dense Mesh Topologies},
  author={Vance, Julian},
  school={Institute for Advanced Telecommunications & Media Technology},
  year={2026},
  month={May},
  type={Master's Thesis in Information and Communication Technology}
}`;
    navigator.clipboard.writeText(bib);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2200);
  };

  return (
    <section id="thesis" className="py-24 md:py-32 border-b border-[#1A1D27] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Master of Science Thesis · Capstone Monograph
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Latent Semantic Routing &amp; Synchronous Telepresence
            </h2>
            <p className="text-sm font-mono-tech text-[#7B8096] mt-2">
              In Ultra-Dense Multi-Hop Optical &amp; Wireless Mesh Topologies
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={handleCopyBibtex}
              className="px-3.5 py-2 text-xs font-mono-tech bg-[#12141D] hover:bg-[#1A1E2B] text-[#D0D4E4] border border-[#272B3C] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>{copiedBibtex ? '✓ Copied BibTeX' : 'Cite Thesis (BibTeX)'}</span>
            </button>

            <button
              onClick={onOpenFullDossier}
              className="px-4 py-2 text-xs font-medium bg-[#E2B774] hover:bg-[#EDC78B] text-[#090A0D] rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              Open Complete Dossier
            </button>
          </div>
        </div>

        {/* 2-Column Monograph Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Abstract, Theoretical Motivation & Key Innovations */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h3 className="text-sm font-mono-tech text-[#8E93AA] uppercase tracking-wider mb-3">
                Research Thesis Abstract
              </h3>
              <p className="text-[#B9BDCE] text-base leading-relaxed font-light">
                {THESIS_DATA.abstract}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-mono-tech text-[#8E93AA] uppercase tracking-wider mb-3">
                Theoretical Motivation
              </h3>
              <p className="text-[#969BAE] text-sm leading-relaxed">
                {THESIS_DATA.motivation}
              </p>
            </div>

            {/* Core Architectural Innovations */}
            <div>
              <h3 className="text-sm font-mono-tech text-[#8E93AA] uppercase tracking-wider mb-4">
                Key Contributions &amp; Formal Novelty
              </h3>
              <ul className="space-y-3.5">
                {THESIS_DATA.innovations.map((innovation, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#A8ACB9]">
                    <span className="font-mono-tech text-[#E2B774] text-xs mt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{innovation}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Advisory Committee Unboxed Attribution */}
            <div className="pt-6 border-t border-[#1C202C]">
              <div className="text-xs font-mono-tech text-[#7B8096] uppercase tracking-wider mb-4">
                Academic Advisory &amp; Defense Committee
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {THESIS_DATA.advisors.map((adv, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-[#0D0E15] border border-[#1F2332]">
                    <div className="text-sm font-medium text-[#ECECEF]">{adv.name}</div>
                    <div className="text-xs text-[#8A8F9F] mt-0.5">{adv.title}</div>
                    <div className="text-[11px] font-mono-tech text-[#5E6377] mt-1">{adv.lab}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Empirical Proof & Interactive Chapter Reader */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Quantitative Empirical Benchmarks (Claim-to-Proof Adjacency) */}
            <div className="rounded-2xl bg-[#0F1017] border border-[#222636] p-6">
              <div className="flex items-center justify-between border-b border-[#1E2230] pb-4 mb-5">
                <span className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
                  Empirical Results · 64-Node Physical Testbed
                </span>
                <span className="text-xs font-mono-tech text-[#6F7488]">
                  Hardware Verified
                </span>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {THESIS_DATA.keyMetrics.map((km, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                      {km.value}
                    </div>
                    <div className="text-xs font-medium text-[#BFC3D4]">
                      {km.label}
                    </div>
                    <div className="text-[11px] font-mono-tech text-[#72768B]">
                      {km.context}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Chapter Excerpt Navigator */}
            <div className="rounded-2xl bg-[#0D0E15] border border-[#1E2333] p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-[#1B1E2B] pb-3">
                <span className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider">
                  Selected Chapters &amp; Proof Excerpts
                </span>
                <span className="text-xs font-mono-tech text-[#E2B774]">
                  4 Chapters · 220 Pages
                </span>
              </div>

              {/* Chapter selector tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {THESIS_DATA.chapters.map((ch, idx) => (
                  <button
                    key={ch.number}
                    onClick={() => setActiveChapterIndex(idx)}
                    className={`p-2.5 rounded-lg text-left transition-all cursor-pointer ${
                      activeChapterIndex === idx
                        ? 'bg-[#1C202F] text-white border border-[#E2B774]/40 shadow-sm'
                        : 'bg-[#12141D] text-[#868A9C] hover:text-[#C5C8D6] border border-transparent'
                    }`}
                  >
                    <div className="text-[10px] font-mono-tech text-[#E2B774]">
                      CH {ch.number}
                    </div>
                    <div className="text-xs font-medium truncate mt-0.5">
                      {ch.title.split(' ')[0]}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Chapter Reading Pane */}
              <div className="p-4 rounded-xl bg-[#08090C] border border-[#191C28] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tech text-[#7C8196]">
                  <span className="text-[#ECECEF] font-serif-display text-base">
                    Chapter {activeChapter.number}: {activeChapter.title}
                  </span>
                  <span>{activeChapter.pages}</span>
                </div>

                <p className="text-xs text-[#959AAE] italic border-l-2 border-[#E2B774]/50 pl-3 py-0.5">
                  "{activeChapter.synopsis}"
                </p>

                <div className="pt-2 text-xs font-mono-tech text-[#B8BCD0] leading-relaxed bg-[#0C0D13] p-3 rounded border border-[#161822]">
                  <div className="text-[10px] text-[#5A5F75] uppercase mb-1">Formal Mathematical Excerpt:</div>
                  {activeChapter.excerpts}
                </div>
              </div>

              {/* Trigger for Full Reading View */}
              <div className="pt-2">
                <button
                  onClick={onOpenFullDossier}
                  className="w-full py-2.5 text-xs font-mono-tech text-[#D4D7E2] hover:text-[#E2B774] text-center border border-[#232738] hover:border-[#E2B774]/30 rounded-lg bg-[#11131C] transition-colors cursor-pointer"
                >
                  Inspect Extended Methodology, Equations &amp; Defense Slides →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

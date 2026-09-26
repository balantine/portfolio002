import React, { useState } from 'react';
import { PUBLICATIONS } from '../data/portfolioData';
import { Publication } from '../types/portfolio';

export const PublicationsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Journal' | 'Conference' | 'Workshop'>('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredPubs = PUBLICATIONS.filter((pub) => {
    if (filter === 'All') return true;
    return pub.type === filter;
  });

  const handleCopyBibtex = (pub: Publication) => {
    navigator.clipboard.writeText(pub.bibtex);
    setCopiedId(pub.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="publications" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Peer-Reviewed Scholarly Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Academic Publications &amp; Proceedings
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Authored contributions in IEEE Transactions, ACM IMWUT, and international communications conferences.
            </p>
          </div>

          {/* Type Filter Buttons */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#10121B] rounded-xl border border-[#202538]">
            {(['All', 'Journal', 'Conference', 'Workshop'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
                  filter === t
                    ? 'bg-[#1E2335] text-[#E2B774] shadow-xs'
                    : 'text-[#7D8296] hover:text-[#CCD0DF]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Summary Bar (Tabular context) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-[#0D0F16] border border-[#1E2232] mb-10">
          <div>
            <div className="text-2xl font-serif-display text-[#F5F5F7] tabular-nums">4</div>
            <div className="text-xs font-mono-tech text-[#72768B]">Indexed Publications</div>
          </div>
          <div>
            <div className="text-2xl font-serif-display text-[#E2B774] tabular-nums">57</div>
            <div className="text-xs font-mono-tech text-[#72768B]">Cross-Ref Citations</div>
          </div>
          <div>
            <div className="text-2xl font-serif-display text-[#F5F5F7] tabular-nums">01</div>
            <div className="text-xs font-mono-tech text-[#72768B]">Pending Patent App</div>
          </div>
          <div>
            <div className="text-2xl font-serif-display text-[#F5F5F7] tabular-nums">100%</div>
            <div className="text-xs font-mono-tech text-[#72768B]">Open-Access Preprints</div>
          </div>
        </div>

        {/* Publication Entries List */}
        <div className="space-y-4">
          {filteredPubs.map((pub, idx) => {
            const isExpanded = expandedId === pub.id;
            const isCopied = copiedId === pub.id;

            return (
              <div
                key={pub.id}
                className="p-6 sm:p-7 rounded-2xl bg-[#0C0D14] border border-[#1F2332] hover:border-[#2D3349] transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="space-y-2 max-w-4xl">
                    
                    {/* Unboxed Metadata Line */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#7C8197]">
                      <span className="text-[#E2B774] font-medium">{pub.type}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pub.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#A2A6B9]">{pub.venue}</span>
                      <span aria-hidden="true">·</span>
                      <span>{pub.citations} Citations</span>
                    </div>

                    {/* Paper Title */}
                    <h3 className="text-lg sm:text-xl font-serif-display text-[#F4F4F7] font-normal leading-snug">
                      {pub.title}
                    </h3>

                    {/* Authors List */}
                    <p className="text-xs font-mono-tech text-[#8E93AA]">
                      {pub.authors.split('Julian Vance').map((part, i, arr) => (
                        <React.Fragment key={i}>
                          {part}
                          {i < arr.length - 1 && (
                            <span className="text-[#E2B774] font-medium underline underline-offset-2">
                              Julian Vance
                            </span>
                          )}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>

                  {/* Actions: Cite & Abstract Expander */}
                  <div className="flex items-center gap-2.5 shrink-0 pt-2 lg:pt-0">
                    <button
                      onClick={() => handleCopyBibtex(pub)}
                      className="px-3 py-1.5 text-xs font-mono-tech bg-[#141622] hover:bg-[#1D2132] text-[#CCD0DF] border border-[#272B3E] rounded-lg transition-colors cursor-pointer"
                      title="Copy BibTeX Citation"
                    >
                      {isCopied ? '✓ Copied' : 'BibTeX'}
                    </button>

                    <button
                      onClick={() => toggleExpand(pub.id)}
                      className="px-3 py-1.5 text-xs font-mono-tech bg-[#171926] hover:bg-[#202334] text-[#E2B774] border border-[#2B3045] rounded-lg transition-colors cursor-pointer"
                    >
                      {isExpanded ? 'Hide Abstract ▲' : 'Read Abstract ▼'}
                    </button>
                  </div>
                </div>

                {/* Collapsible Abstract & DOI */}
                {isExpanded && (
                  <div className="mt-5 pt-4 border-t border-[#1C2030] space-y-4 animate-fade-in text-xs font-light">
                    <div>
                      <span className="text-[11px] font-mono-tech text-[#7C8197] uppercase tracking-wider block mb-1.5">
                        Paper Abstract:
                      </span>
                      <p className="text-[#B2B6CA] leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech pt-2">
                      <div className="text-[#7C8197]">
                        Digital Object Identifier (DOI):{' '}
                        <span className="text-[#E2B774]">{pub.doi}</span>
                      </div>
                      <span className="text-[#595E74]">Open Access IEEE / ACM Archive</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

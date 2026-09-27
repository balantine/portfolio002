import React, { useState } from 'react';
import { CORE_COMPETENCIES, EMPHASIS_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';

export const CompetenciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'emphasis'>('core');

  return (
    <section id="competencies" className="py-24 md:py-32 border-b border-[#22396F]/50 relative bg-[#010736]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#22396F]/60">
          <div>
            <div className="text-xs font-mono-tech text-[#FCF1D0] tracking-widest uppercase mb-3 font-semibold">
              M.S. ICT Competency Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-white tracking-tight">
              M.S. ICT Competencies &amp; Reflections
            </h2>
            <p className="text-sm text-[#FCF1D0]/70 font-light mt-1">
              Curriculum reflections, philosophical perspectives, and tangible academic outcomes across core and enterprise emphasis domains.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.reflectionAidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono-tech bg-[#0D1C42] hover:bg-[#22396F] text-[#FCF1D0] border border-[#22396F] rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>UW-Stout Reflection Aid</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Tab Selector: Core vs Emphasis */}
        <div className="flex items-center gap-2 mb-10 p-1 bg-[#0D1C42] rounded-xl border border-[#22396F] w-fit shadow-md">
          <button
            onClick={() => setActiveTab('core')}
            className={`px-4 py-2 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
              activeTab === 'core'
                ? 'bg-[#22396F] text-[#FCF1D0] font-semibold shadow-xs'
                : 'text-[#FCF1D0]/70 hover:text-white'
            }`}
          >
            Core Competencies (1 – 5)
          </button>
          <button
            onClick={() => setActiveTab('emphasis')}
            className={`px-4 py-2 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
              activeTab === 'emphasis'
                ? 'bg-[#22396F] text-[#FCF1D0] font-semibold shadow-xs'
                : 'text-[#FCF1D0]/70 hover:text-white'
            }`}
          >
            Emphasis Competencies (Enterprise Tech)
          </button>
        </div>

        {/* Core Competencies View */}
        {activeTab === 'core' && (
          <div className="space-y-8 animate-fade-in">
            {CORE_COMPETENCIES.map((comp) => (
              <div
                key={comp.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#0D1C42] border border-[#22396F] space-y-6 shadow-xl"
              >
                {/* Header & Sub-Competencies */}
                <div className="space-y-3 pb-5 border-b border-[#22396F]/70">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FCF1D0] font-semibold">
                    <span>CORE COMPETENCY 0{comp.id}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display text-white font-normal">
                    {comp.title}
                  </h3>
                  <div className="space-y-1.5 pt-2">
                    {comp.subCompetencies.map((sub, idx) => (
                      <div key={idx} className="text-xs font-mono-tech text-[#FCF1D0]/80 flex items-start gap-2">
                        <span className="text-[#FCF1D0] font-bold">›</span>
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Personal Reflection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#FCF1D0]/70 uppercase tracking-wider block font-semibold">
                    Student Reflection &amp; Intellectual Intent:
                  </span>
                  <p className="text-sm text-[#FCF1D0]/90 font-light leading-relaxed italic bg-[#010736] p-5 rounded-xl border border-[#22396F]/60">
                    "{comp.reflection}"
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-[#010736] border border-[#22396F] flex items-start gap-3">
                  <span className="text-xs font-mono-tech text-[#FCF1D0] font-semibold uppercase mt-0.5 shrink-0 bg-[#22396F]/60 px-2 py-0.5 rounded border border-[#22396F]">
                    OUTCOME:
                  </span>
                  <p className="text-xs sm:text-sm text-[#FCF1D0] font-medium leading-relaxed">
                    {comp.outcome}
                  </p>
                </div>

                {/* Artifact Table Template as specified in portfolio.avalon.dev */}
                <div className="pt-2">
                  <span className="text-xs font-mono-tech text-[#FCF1D0]/70 uppercase tracking-wider block mb-3 font-semibold">
                    Competency Artifact Matrix:
                  </span>
                  <div className="overflow-x-auto rounded-xl border border-[#22396F] bg-[#010736]">
                    <table className="w-full text-left text-xs font-mono-tech">
                      <thead className="bg-[#0D1C42] text-[#FCF1D0] border-b border-[#22396F]">
                        <tr>
                          <th className="py-3 px-4 font-semibold">Title of Artifact</th>
                          <th className="py-3 px-4 font-semibold">Work Sample Introduction</th>
                          <th className="py-3 px-4 font-semibold">Work Sample Link</th>
                          <th className="py-3 px-4 font-semibold">Reflection Link</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#22396F]/60 text-[#FCF1D0]/90">
                        {comp.artifacts?.map((art, aIdx) => (
                          <tr key={aIdx} className="hover:bg-[#22396F]/20 transition-colors">
                            <td className="py-3.5 px-4 font-serif-display text-white text-sm">
                              {art.title}
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0]/80 font-sans-body max-w-md font-light">
                              {art.introduction}
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0] font-medium">
                              <span className="hover:underline cursor-pointer">Sample In Archive</span>
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0]">
                              <a
                                href={PERSONAL_INFO.reflectionAidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline font-semibold inline-flex items-center gap-1"
                              >
                                <span>Reflection Aid</span>
                                <span className="text-[10px]">↗</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Emphasis Competencies View */}
        {activeTab === 'emphasis' && (
          <div className="space-y-8 animate-fade-in">
            {EMPHASIS_COMPETENCIES.map((comp) => (
              <div
                key={comp.code}
                className="p-7 sm:p-8 rounded-2xl bg-[#0D1C42] border border-[#22396F] space-y-6 shadow-xl"
              >
                {/* Header & Course Code */}
                <div className="space-y-2 pb-5 border-b border-[#22396F]/70">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#FCF1D0] font-semibold">
                    <span>ENTERPRISE EMPHASIS · {comp.code}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display text-white font-normal">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-tech text-[#FCF1D0]/80">
                    {comp.objective}
                  </p>
                </div>

                {/* Personal Reflection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#FCF1D0]/70 uppercase tracking-wider block font-semibold">
                    Course Intent &amp; Enterprise Relevance:
                  </span>
                  <p className="text-sm text-[#FCF1D0]/90 font-light leading-relaxed italic bg-[#010736] p-5 rounded-xl border border-[#22396F]/60">
                    "{comp.reflection}"
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-[#010736] border border-[#22396F] flex items-start gap-3">
                  <span className="text-xs font-mono-tech text-[#FCF1D0] font-semibold uppercase mt-0.5 shrink-0 bg-[#22396F]/60 px-2 py-0.5 rounded border border-[#22396F]">
                    OUTCOME:
                  </span>
                  <p className="text-xs sm:text-sm text-[#FCF1D0] font-medium leading-relaxed">
                    {comp.outcome}
                  </p>
                </div>

                {/* Artifact Table */}
                <div className="pt-2">
                  <span className="text-xs font-mono-tech text-[#FCF1D0]/70 uppercase tracking-wider block mb-3 font-semibold">
                    Course Artifact Matrix:
                  </span>
                  <div className="overflow-x-auto rounded-xl border border-[#22396F] bg-[#010736]">
                    <table className="w-full text-left text-xs font-mono-tech">
                      <thead className="bg-[#0D1C42] text-[#FCF1D0] border-b border-[#22396F]">
                        <tr>
                          <th className="py-3 px-4 font-semibold">Title of Artifact</th>
                          <th className="py-3 px-4 font-semibold">Work Sample Introduction</th>
                          <th className="py-3 px-4 font-semibold">Work Sample Link</th>
                          <th className="py-3 px-4 font-semibold">Reflection Link</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#22396F]/60 text-[#FCF1D0]/90">
                        {comp.artifacts?.map((art, aIdx) => (
                          <tr key={aIdx} className="hover:bg-[#22396F]/20 transition-colors">
                            <td className="py-3.5 px-4 font-serif-display text-white text-sm">
                              {art.title}
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0]/80 font-sans-body max-w-md font-light">
                              {art.introduction}
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0] font-medium">
                              <span className="hover:underline cursor-pointer">Sample In Archive</span>
                            </td>
                            <td className="py-3.5 px-4 text-[#FCF1D0]">
                              <a
                                href={PERSONAL_INFO.reflectionAidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline font-semibold inline-flex items-center gap-1"
                              >
                                <span>Reflection Aid</span>
                                <span className="text-[10px]">↗</span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

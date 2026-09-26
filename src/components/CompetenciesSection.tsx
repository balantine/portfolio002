import React, { useState } from 'react';
import { CORE_COMPETENCIES, EMPHASIS_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';

export const CompetenciesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'core' | 'emphasis'>('core');

  return (
    <section id="competencies" className="py-24 md:py-32 border-b border-[#1A1D27] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              M.S. ICT Competency Framework
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              M.S. ICT Competencies &amp; Reflections
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Curriculum reflections, philosophical perspectives, and tangible academic outcomes across core and enterprise emphasis domains.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.reflectionAidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono-tech bg-[#12141D] hover:bg-[#1A1E2B] text-[#E2B774] border border-[#272B3C] rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>UW-Stout Reflection Aid</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* Tab Selector: Core vs Emphasis */}
        <div className="flex items-center gap-2 mb-10 p-1 bg-[#10121B] rounded-xl border border-[#202538] w-fit">
          <button
            onClick={() => setActiveTab('core')}
            className={`px-4 py-2 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
              activeTab === 'core'
                ? 'bg-[#1D2232] text-[#E2B774] shadow-xs'
                : 'text-[#7D8296] hover:text-[#CCD0DF]'
            }`}
          >
            Core Competencies (1 – 5)
          </button>
          <button
            onClick={() => setActiveTab('emphasis')}
            className={`px-4 py-2 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
              activeTab === 'emphasis'
                ? 'bg-[#1D2232] text-[#E2B774] shadow-xs'
                : 'text-[#7D8296] hover:text-[#CCD0DF]'
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
                className="p-7 sm:p-8 rounded-2xl bg-[#0D0F17] border border-[#1F2436] space-y-6"
              >
                {/* Header & Sub-Competencies */}
                <div className="space-y-3 pb-5 border-b border-[#1D2132]">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#E2B774]">
                    <span>CORE COMPETENCY 0{comp.id}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display text-white font-normal">
                    {comp.title}
                  </h3>
                  <div className="space-y-1.5 pt-2">
                    {comp.subCompetencies.map((sub, idx) => (
                      <div key={idx} className="text-xs font-mono-tech text-[#999EB2] flex items-start gap-2">
                        <span className="text-[#E2B774]">›</span>
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Personal Reflection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#7C8197] uppercase tracking-wider block">
                    Student Reflection &amp; Intellectual Intent:
                  </span>
                  <p className="text-sm text-[#C2C6D6] font-light leading-relaxed italic bg-[#08090D] p-5 rounded-xl border border-[#191C2A]">
                    "{comp.reflection}"
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-[#0E151F] border border-[#1B324D] flex items-start gap-3">
                  <span className="text-xs font-mono-tech text-sky-400 font-medium uppercase mt-0.5 shrink-0">
                    OUTCOME:
                  </span>
                  <p className="text-xs sm:text-sm text-[#D2E2F2] font-medium leading-relaxed">
                    {comp.outcome}
                  </p>
                </div>

                {/* Artifact Table Template as specified in portfolio.avalon.dev */}
                <div className="pt-2">
                  <span className="text-xs font-mono-tech text-[#7C8197] uppercase tracking-wider block mb-3">
                    Competency Artifact Matrix:
                  </span>
                  <div className="overflow-x-auto rounded-xl border border-[#1E2333] bg-[#090A0F]">
                    <table className="w-full text-left text-xs font-mono-tech">
                      <thead className="bg-[#12141F] text-[#8E93AA] border-b border-[#1E2333]">
                        <tr>
                          <th className="py-3 px-4 font-medium">Title of Artifact</th>
                          <th className="py-3 px-4 font-medium">Work Sample Introduction</th>
                          <th className="py-3 px-4 font-medium">Work Sample Link</th>
                          <th className="py-3 px-4 font-medium">Reflection Link</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#181B28] text-[#B0B4C6]">
                        {comp.artifacts?.map((art, aIdx) => (
                          <tr key={aIdx} className="hover:bg-[#0E1018] transition-colors">
                            <td className="py-3.5 px-4 font-serif-display text-white text-sm">
                              {art.title}
                            </td>
                            <td className="py-3.5 px-4 text-[#8C91A4] font-sans-body max-w-md font-light">
                              {art.introduction}
                            </td>
                            <td className="py-3.5 px-4 text-[#E2B774]">
                              <span className="hover:underline cursor-pointer">Sample In Archive</span>
                            </td>
                            <td className="py-3.5 px-4 text-sky-400">
                              <a
                                href={PERSONAL_INFO.reflectionAidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline inline-flex items-center gap-1"
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
                className="p-7 sm:p-8 rounded-2xl bg-[#0D0F17] border border-[#1F2436] space-y-6"
              >
                {/* Header & Course Code */}
                <div className="space-y-2 pb-5 border-b border-[#1D2132]">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#E2B774]">
                    <span>ENTERPRISE EMPHASIS · {comp.code}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif-display text-white font-normal">
                    {comp.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono-tech text-[#A4A8BC]">
                    {comp.objective}
                  </p>
                </div>

                {/* Personal Reflection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono-tech text-[#7C8197] uppercase tracking-wider block">
                    Course Intent &amp; Enterprise Relevance:
                  </span>
                  <p className="text-sm text-[#C2C6D6] font-light leading-relaxed italic bg-[#08090D] p-5 rounded-xl border border-[#191C2A]">
                    "{comp.reflection}"
                  </p>
                </div>

                {/* Outcome Statement */}
                <div className="p-4 rounded-xl bg-[#0E151F] border border-[#1B324D] flex items-start gap-3">
                  <span className="text-xs font-mono-tech text-sky-400 font-medium uppercase mt-0.5 shrink-0">
                    OUTCOME:
                  </span>
                  <p className="text-xs sm:text-sm text-[#D2E2F2] font-medium leading-relaxed">
                    {comp.outcome}
                  </p>
                </div>

                {/* Artifact Table */}
                <div className="pt-2">
                  <span className="text-xs font-mono-tech text-[#7C8197] uppercase tracking-wider block mb-3">
                    Course Artifact Matrix:
                  </span>
                  <div className="overflow-x-auto rounded-xl border border-[#1E2333] bg-[#090A0F]">
                    <table className="w-full text-left text-xs font-mono-tech">
                      <thead className="bg-[#12141F] text-[#8E93AA] border-b border-[#1E2333]">
                        <tr>
                          <th className="py-3 px-4 font-medium">Title of Artifact</th>
                          <th className="py-3 px-4 font-medium">Work Sample Introduction</th>
                          <th className="py-3 px-4 font-medium">Work Sample Link</th>
                          <th className="py-3 px-4 font-medium">Reflection Link</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#181B28] text-[#B0B4C6]">
                        {comp.artifacts?.map((art, aIdx) => (
                          <tr key={aIdx} className="hover:bg-[#0E1018] transition-colors">
                            <td className="py-3.5 px-4 font-serif-display text-white text-sm">
                              {art.title}
                            </td>
                            <td className="py-3.5 px-4 text-[#8C91A4] font-sans-body max-w-md font-light">
                              {art.introduction}
                            </td>
                            <td className="py-3.5 px-4 text-[#E2B774]">
                              <span className="hover:underline cursor-pointer">Sample In Archive</span>
                            </td>
                            <td className="py-3.5 px-4 text-sky-400">
                              <a
                                href={PERSONAL_INFO.reflectionAidUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline inline-flex items-center gap-1"
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

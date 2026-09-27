import React from 'react';
import { CORE_COMPETENCIES, EMPHASIS_COMPETENCIES, PERSONAL_INFO } from '../data/portfolioData';

export const CompetenciesPage: React.FC = () => {
  return (
    <article className="w-full bg-[#010736] text-[#FCF1D0]">
      
      {/* Section 1: Hero Banner with image-asset.jpeg background */}
      <section className="relative w-full h-[320px] md:h-[420px] overflow-hidden border-b border-[#22396F]/50 flex items-center justify-center">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/1701809863266-WCM26DSDZMYXRYWDEPT3/image-asset.jpeg"
          alt="M.S. ICT Competencies background"
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-50"
        />
        <div className="absolute inset-0 bg-[#010736]/60 backdrop-blur-[2px]" />
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-serif-display text-white tracking-tight">
            M.S. ICT Competencies
          </h1>
          <p className="text-xs md:text-sm font-mono-tech text-[#FCF1D0] mt-3">
            Core &amp; Emphasis Competencies Framework · UW-Stout
          </p>
        </div>
      </section>

      {/* Section 2: Full Competencies Content */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1100px] mx-auto space-y-20">
        
        {/* ================= CORE COMPETENCIES ================= */}
        <div className="space-y-16">
          <h2 className="text-3xl md:text-4xl font-serif-display text-center text-white pb-4 border-b border-[#22396F]/60">
            Core competencies
          </h2>

          {CORE_COMPETENCIES.map((comp) => (
            <div key={comp.id} className="space-y-6 pb-12 border-b border-[#22396F]/30">
              
              {/* Blockquote with Subcompetencies & Personal Statement */}
              <blockquote className="border-l-2 border-[#FCF1D0] pl-6 space-y-4 text-base md:text-lg text-[#FCF1D0]/90 font-light leading-relaxed">
                <p className="font-serif-display text-xl text-white font-normal">
                  {comp.id}. {comp.title}
                </p>
                {comp.subCompetencies.map((sub, sIdx) => (
                  <p key={sIdx} className="text-sm md:text-base font-sans-body pl-4">
                    {sub}
                  </p>
                ))}
                <p className="text-sm md:text-base font-sans-body italic pl-4 text-[#FCF1D0]/80">
                  {comp.reflection}
                </p>
              </blockquote>

              {/* Outcome Highlight */}
              <div className="p-4 rounded-xl bg-[#0D1C42] border border-[#22396F] text-sm md:text-base text-[#FCF1D0]">
                <strong>OUTCOME: </strong>
                <span className="text-white font-semibold">
                  {comp.outcome}
                </span>
              </div>

              {/* Artifact Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-[#22396F] bg-[#0D1C42]/50">
                <table className="w-full text-left text-xs font-mono-tech">
                  <thead className="bg-[#0D1C42] text-[#FCF1D0] border-b border-[#22396F]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Title of Artifact</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Introduction</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Link</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Reflection Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#22396F]/50 text-[#FCF1D0]/85">
                    {comp.artifacts?.map((art, aIdx) => (
                      <tr key={aIdx} className="hover:bg-[#22396F]/20">
                        <td className="py-3 px-4 font-serif-display text-white text-sm">
                          {art.title}
                        </td>
                        <td className="py-3 px-4 font-sans-body text-xs text-[#FCF1D0]/80 max-w-xs">
                          {art.introduction}
                        </td>
                        <td className="py-3 px-4 text-[#FCF1D0]">
                          <span className="hover:underline cursor-pointer">Archive Sample</span>
                        </td>
                        <td className="py-3 px-4 text-[#FCF1D0]">
                          <a
                            href={PERSONAL_INFO.reflectionAidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                          >
                            Reflection Aid ↗
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))}
        </div>

        {/* ================= EMPHASIS COMPETENCIES ================= */}
        <div className="space-y-16 pt-8">
          <h2 className="text-3xl md:text-4xl font-serif-display text-center text-white pb-4 border-b border-[#22396F]/60">
            Emphasis competencies
          </h2>

          {EMPHASIS_COMPETENCIES.map((comp) => (
            <div key={comp.code} className="space-y-6 pb-12 border-b border-[#22396F]/30">
              
              {/* Blockquote with Course Objective & Personal Intent */}
              <blockquote className="border-l-2 border-[#FCF1D0] pl-6 space-y-4 text-base md:text-lg text-[#FCF1D0]/90 font-light leading-relaxed">
                <p className="font-mono-tech text-base text-[#FCF1D0] font-semibold">
                  {comp.code}
                </p>
                <p className="text-sm md:text-base font-sans-body text-white font-normal pl-4">
                  {comp.objective}
                </p>
                <p className="text-sm md:text-base font-sans-body italic pl-4 text-[#FCF1D0]/80">
                  {comp.reflection}
                </p>
              </blockquote>

              {/* Outcome Highlight */}
              <div className="p-4 rounded-xl bg-[#0D1C42] border border-[#22396F] text-sm md:text-base text-[#FCF1D0]">
                <strong>OUTCOME: </strong>
                <span className="text-white font-semibold">
                  {comp.outcome}
                </span>
              </div>

              {/* Artifact Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-[#22396F] bg-[#0D1C42]/50">
                <table className="w-full text-left text-xs font-mono-tech">
                  <thead className="bg-[#0D1C42] text-[#FCF1D0] border-b border-[#22396F]">
                    <tr>
                      <th className="py-3 px-4 font-semibold">Title of Artifact</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Introduction</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Link</th>
                      <th className="py-3 px-4 font-semibold">Work Sample Reflection Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#22396F]/50 text-[#FCF1D0]/85">
                    {comp.artifacts?.map((art, aIdx) => (
                      <tr key={aIdx} className="hover:bg-[#22396F]/20">
                        <td className="py-3 px-4 font-serif-display text-white text-sm">
                          {art.title}
                        </td>
                        <td className="py-3 px-4 font-sans-body text-xs text-[#FCF1D0]/80 max-w-xs">
                          {art.introduction}
                        </td>
                        <td className="py-3 px-4 text-[#FCF1D0]">
                          <span className="hover:underline cursor-pointer">Archive Sample</span>
                        </td>
                        <td className="py-3 px-4 text-[#FCF1D0]">
                          <a
                            href={PERSONAL_INFO.reflectionAidUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-white"
                          >
                            Reflection Aid ↗
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))}

          {/* Bottom Reflection Aid Link exactly as in portfolio.avalon.dev */}
          <div className="pt-8 text-center">
            <a
              href={PERSONAL_INFO.reflectionAidUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FCF1D0] hover:bg-white text-[#010736] font-semibold text-sm font-mono-tech transition-all shadow-md"
            >
              <span>Download / View Reflection Aid (Google Drive)</span>
              <span>↗</span>
            </a>
          </div>

        </div>

      </section>
    </article>
  );
};

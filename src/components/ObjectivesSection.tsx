import React from 'react';
import { PROGRAM_OBJECTIVES, PERSONAL_INFO } from '../data/portfolioData';

export const ObjectivesSection: React.FC = () => {
  return (
    <section id="objectives" className="py-24 md:py-32 border-b border-[#22396F]/50 relative bg-[#010736]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#22396F]/60">
          <div>
            <div className="text-xs font-mono-tech text-[#FCF1D0] tracking-widest uppercase mb-3 font-semibold">
              M.S. in Information &amp; Communication Technologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-white tracking-tight">
              MS-ICT Program Objectives
            </h2>
            <p className="text-sm text-[#FCF1D0]/70 font-light mt-1">
              Upon completion of this program at UW-Stout, students will be able to demonstrate seven foundational competencies.
            </p>
          </div>

          <div className="mt-4 md:mt-0 text-xs font-mono-tech text-[#FCF1D0]/70">
            UW-STOUT GRADUATE STANDARDS · 7 OBJECTIVES
          </div>
        </div>

        {/* 2-Column Presentation: Objectives Grid + AI Chip Art Artifact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Numbered Objectives */}
          <div className="lg:col-span-7 space-y-4">
            {PROGRAM_OBJECTIVES.map((obj) => (
              <div
                key={obj.num}
                className="p-5 sm:p-6 rounded-2xl bg-[#0D1C42] border border-[#22396F] hover:border-[#FCF1D0]/60 transition-all duration-300 group shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-[#010736] border border-[#22396F] text-[#FCF1D0] font-mono-tech text-sm flex items-center justify-center shrink-0 group-hover:border-[#FCF1D0] group-hover:bg-[#22396F] transition-colors font-semibold">
                    {obj.num}
                  </div>
                  <div className="space-y-1.5 flex-1">
                    <h3 className="text-lg font-serif-display text-white group-hover:text-[#FCF1D0] transition-colors font-medium">
                      {obj.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#FCF1D0]/75 font-light leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: AI Chip Concept Image & Synthesis Panel */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Efficient AI Chip Art Concept from portfolio.avalon.dev */}
            <div className="rounded-2xl bg-[#0D1C42] border border-[#22396F] p-5 space-y-4 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#FCF1D0]/80 pb-2 border-b border-[#22396F]/60">
                <span>EFFICIENT AI CHIP CONCEPT</span>
                <span className="text-[#FCF1D0] font-medium">Technology Futures</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#010736] border border-[#22396F]/50">
                <img
                  src={PERSONAL_INFO.images.aiChipConcept}
                  alt="Efficient AI Chip Art Concept"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-[#FCF1D0]/80 font-light leading-relaxed">
                Visual synthesis of computational acceleration, silicon architectures, and the forecasting of next-generation enterprise ICT systems.
              </p>
            </div>

            {/* Program Outcomes Callout */}
            <div className="p-6 rounded-2xl bg-[#0D1C42] border border-[#22396F] space-y-4 shadow-lg">
              <span className="text-xs font-mono-tech text-[#FCF1D0] uppercase tracking-wider block font-semibold">
                Integrated Capstone Philosophy
              </span>
              <p className="text-xs sm:text-sm text-[#FCF1D0]/80 font-light leading-relaxed">
                The MS-ICT program at the University of Wisconsin-Stout bridges theoretical frameworks in sociotechnical systems with direct workplace application. Every course directly contributes artifacts and reflective evidence toward these seven program objectives.
              </p>
              <div className="pt-2 flex items-center justify-between text-xs font-mono-tech border-t border-[#22396F]/60">
                <span className="text-[#FCF1D0]/60">Degree Status:</span>
                <span className="text-[#FCF1D0] font-semibold bg-[#22396F]/50 px-2 py-0.5 rounded border border-[#22396F]">Graduate Candidate</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

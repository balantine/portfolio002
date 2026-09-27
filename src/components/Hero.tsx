import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import blueDevilHeroImage from '../assets/images/regenerated_image_1790449142702.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#22396F]/50 bg-[#010736]">
      {/* Subtle glowing ambient lights using #22396F and #FCF1D0 */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[580px] bg-gradient-to-tr from-[#0D1C42] via-[#22396F]/40 to-[#FCF1D0]/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Candidate Overview & Program Context */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Academic program kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#FCF1D0]/80 tracking-wide">
              <span className="text-[#FCF1D0] font-semibold">UW-Stout Graduate Studies</span>
              <span aria-hidden="true" className="text-[#22396F]">·</span>
              <span>M.S. in Information &amp; Communication Technologies</span>
              <span aria-hidden="true" className="text-[#22396F]">·</span>
              <span className="text-[#FCF1D0] font-medium bg-[#22396F]/40 px-2 py-0.5 rounded border border-[#22396F]">Blue Devils</span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-normal text-white leading-[1.1] tracking-tight">
              Bridging enterprise technology, human development, and <span className="italic text-[#FCF1D0] font-serif-display">sociotechnical</span> systems.
            </h1>

            {/* Sub-prose directly reflecting Jake's background */}
            <p className="text-base sm:text-lg text-[#FCF1D0]/80 leading-relaxed max-w-2xl font-light">
              Graduate academic portfolio produced while studying in the Master of Science in Information &amp; 
              Communication Technologies program at the University of Wisconsin-Stout. Focusing on enterprise systems analysis, 
              Office 365 engineering, technology adoption frameworks, and IT policy governance.
            </p>

            {/* Quick credentials & affiliations bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#22396F]/60">
              <div className="p-3 rounded-xl bg-[#0D1C42]/60 border border-[#22396F]/40">
                <div className="text-2xl sm:text-3xl font-serif-display text-white tabular-nums">
                  11
                </div>
                <div className="text-xs font-mono-tech text-[#FCF1D0]/70 mt-0.5">
                  Graduate Courses
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1C42]/60 border border-[#22396F]/40">
                <div className="text-2xl sm:text-3xl font-serif-display text-white tabular-nums">
                  07
                </div>
                <div className="text-xs font-mono-tech text-[#FCF1D0]/70 mt-0.5">
                  Program Objectives
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1C42]/60 border border-[#22396F]/40">
                <div className="text-2xl sm:text-3xl font-serif-display text-white tabular-nums">
                  O365
                </div>
                <div className="text-xs font-mono-tech text-[#FCF1D0]/70 mt-0.5">
                  Enterprise Focus
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0D1C42]/60 border border-[#22396F]/40">
                <div className="text-2xl sm:text-3xl font-serif-display text-[#FCF1D0]">
                  Madison, WI
                </div>
                <div className="text-xs font-mono-tech text-[#FCF1D0]/70 mt-0.5">
                  Location
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#objectives"
                className="px-6 py-3 text-sm font-semibold text-[#010736] bg-[#FCF1D0] hover:bg-white rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg"
              >
                Explore Objectives
              </a>

              <a
                href="#sequence"
                className="px-5 py-3 text-sm font-medium text-[#FCF1D0] hover:text-white bg-[#0D1C42] hover:bg-[#22396F] border border-[#22396F] rounded-lg transition-colors cursor-pointer shadow-sm"
              >
                View Course Sequence
              </a>

              <a
                href="#competencies"
                className="px-4 py-3 text-sm font-medium text-[#FCF1D0]/80 hover:text-[#FCF1D0] transition-colors cursor-pointer"
              >
                Core Competencies ↓
              </a>
            </div>
          </div>

          {/* Right Column: Original Digital Mascot & Program Badge Artifact */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0D1C42] border border-[#22396F] p-6 sm:p-7 shadow-2xl overflow-hidden group">
              
              {/* Badge Header */}
              <div className="flex items-center justify-between border-b border-[#22396F]/80 pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 p-1 flex items-center justify-center border border-[#22396F]">
                    <img
                      src={PERSONAL_INFO.images.uwStoutLogo}
                      alt="UW-Stout Logo"
                      className="max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono-tech text-[#FCF1D0] uppercase tracking-wider font-medium">
                      University of Wisconsin-Stout
                    </div>
                    <div className="text-sm font-serif-display text-white">
                      M.S. in ICT Graduate Program
                    </div>
                  </div>
                </div>

                <a
                  href={PERSONAL_INFO.programUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono-tech text-[#FCF1D0] hover:bg-[#22396F] bg-[#010736]/60 px-2.5 py-1 rounded border border-[#22396F] transition-colors"
                >
                  Program ↗
                </a>
              </div>

              {/* Digital Hacker Blue Devil Artifact */}
              <div className="relative rounded-xl bg-[#010736] border border-[#22396F]/60 overflow-hidden mb-5">
                <div className="aspect-[4/3] w-full relative flex items-center justify-center bg-radial from-[#22396F]/40 via-[#010736] to-[#010736]">
                  <img
                    src={blueDevilHeroImage}
                    alt="Digital Hacker Blue Devil Mascot"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 text-[10px] font-mono-tech text-[#FCF1D0] bg-[#0D1C42]/90 px-2 py-0.5 rounded border border-[#22396F]">
                    Go Blue Devils!
                  </div>
                </div>
              </div>

              {/* Candidate Info Card */}
              <div className="space-y-2.5 text-xs font-mono-tech text-[#FCF1D0]/80 mb-4 bg-[#010736]/50 p-3.5 rounded-xl border border-[#22396F]/50">
                <div className="flex items-center justify-between">
                  <span className="text-[#FCF1D0]/60">Student Scholar</span>
                  <span className="text-white font-sans-body font-medium">Jake Andrews</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#FCF1D0]/60">Industry Specialization</span>
                  <span className="text-[#FCF1D0]">Enterprise Systems / Office 365</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#FCF1D0]/60">Academic Portfolio</span>
                  <span className="text-[#FCF1D0] font-semibold">portfolio.avalon.dev</span>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#22396F]/50 hover:bg-[#22396F] text-xs font-mono-tech text-[#FCF1D0] hover:text-white border border-[#22396F] transition-colors flex items-center justify-between group-hover:border-[#FCF1D0]/60 cursor-pointer shadow-xs"
              >
                <span>Inspect Full Professional Resume on Avalon.dev</span>
                <span className="text-[#FCF1D0]">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

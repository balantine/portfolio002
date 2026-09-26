import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#1A1D27]">
      {/* Subtle UW-Stout blue & gold glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[520px] bg-gradient-to-tr from-[#00529B]/15 via-[#E2B774]/10 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Candidate Overview & Program Context */}
          <div className="lg:col-span-7 space-y-7">
            
            {/* Academic program kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#A0A4B8] tracking-wide">
              <span className="text-[#E2B774] font-medium">UW-Stout Graduate Studies</span>
              <span aria-hidden="true" className="text-[#3F4458]">·</span>
              <span>M.S. in Information &amp; Communication Technologies</span>
              <span aria-hidden="true" className="text-[#3F4458]">·</span>
              <span className="text-sky-400 font-medium">Blue Devils</span>
            </div>

            {/* Editorial Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-normal text-[#F4F4F7] leading-[1.1] tracking-tight">
              Bridging enterprise technology, human development, and <span className="italic text-[#E2B774] font-serif-display">sociotechnical</span> systems.
            </h1>

            {/* Sub-prose directly reflecting Jake's background */}
            <p className="text-base sm:text-lg text-[#9EA3B6] leading-relaxed max-w-2xl font-light">
              Graduate academic portfolio produced while studying in the Master of Science in Information &amp; 
              Communication Technologies program at the University of Wisconsin-Stout. Focusing on enterprise systems analysis, 
              Office 365 engineering, technology adoption frameworks, and IT policy governance.
            </p>

            {/* Quick credentials & affiliations bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-[#1C202C]">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  11
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-0.5">
                  Graduate Courses
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  07
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-0.5">
                  Program Objectives
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  O365
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-0.5">
                  Enterprise Focus
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#E2B774]">
                  Madison, WI
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-0.5">
                  Location
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#objectives"
                className="px-6 py-3 text-sm font-medium text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg font-medium"
              >
                Explore Objectives
              </a>

              <a
                href="#sequence"
                className="px-5 py-3 text-sm font-medium text-[#D4D7E2] hover:text-white bg-[#12141C] hover:bg-[#1A1D28] border border-[#262A3B] rounded-lg transition-colors cursor-pointer"
              >
                View Course Sequence
              </a>

              <a
                href="#competencies"
                className="px-4 py-3 text-sm font-medium text-[#8E93A6] hover:text-[#E2B774] transition-colors cursor-pointer"
              >
                Core Competencies ↓
              </a>
            </div>
          </div>

          {/* Right Column: Original Digital Mascot & Program Badge Artifact */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F1017] border border-[#242838] p-6 sm:p-7 shadow-2xl overflow-hidden group">
              
              {/* Badge Header */}
              <div className="flex items-center justify-between border-b border-[#1E2230] pb-4 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 p-1 flex items-center justify-center border border-[#2A2E40]">
                    <img
                      src={PERSONAL_INFO.images.uwStoutLogo}
                      alt="UW-Stout Logo"
                      className="max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
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
                  className="text-xs font-mono-tech text-[#7B8096] hover:text-[#E2B774] bg-[#171924] px-2.5 py-1 rounded border border-[#232738] transition-colors"
                >
                  Program ↗
                </a>
              </div>

              {/* Digital Hacker Blue Devil Artifact */}
              <div className="relative rounded-xl bg-[#08090C] border border-[#1A1D27] overflow-hidden mb-5">
                <div className="aspect-[4/3] w-full relative flex items-center justify-center bg-radial from-[#00529B]/20 via-[#08090C] to-[#08090C]">
                  <img
                    src={PERSONAL_INFO.images.blueDevilHero}
                    alt="Digital Hacker Blue Devil Mascot"
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 right-2 text-[10px] font-mono-tech text-[#6F7489] bg-[#0C0E14]/80 px-2 py-0.5 rounded border border-[#1E2333]">
                    Go Blue Devils!
                  </div>
                </div>
              </div>

              {/* Candidate Info Card */}
              <div className="space-y-2.5 text-xs font-mono-tech text-[#8A8F9F] mb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#5E6377]">Student Scholar</span>
                  <span className="text-white font-sans-body font-medium">Jake Andrews</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5E6377]">Industry Specialization</span>
                  <span className="text-[#C8CCD9]">Enterprise Systems / Office 365</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5E6377]">Academic Portfolio</span>
                  <span className="text-[#E2B774]">portfolio.avalon.dev</span>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#181B26] hover:bg-[#202434] text-xs font-mono-tech text-[#D4D7E5] border border-[#2B3044] hover:border-[#E2B774]/50 transition-colors flex items-center justify-between group-hover:text-white cursor-pointer"
              >
                <span>Inspect Full Professional Resume on Avalon.dev</span>
                <span className="text-[#E2B774]">↗</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#22396F]/50 relative bg-[#0D1C42]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#22396F]/60">
          <div>
            <div className="text-xs font-mono-tech text-[#FCF1D0] tracking-widest uppercase mb-3 font-semibold">
              About the Technologist · M.S. ICT Candidate
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-white tracking-tight">
              About Jake
            </h2>
            <p className="text-sm text-[#FCF1D0]/70 font-light mt-1">
              Northern Wisconsin native, technology practitioner, and graduate student at the University of Wisconsin-Stout.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono-tech bg-[#010736] hover:bg-[#22396F] text-[#FCF1D0] border border-[#22396F] rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Resume on Avalon.dev</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        {/* 2-Column Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Full Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-5 text-base sm:text-lg text-[#FCF1D0]/90 font-light leading-relaxed">
              <p>
                I'm <strong className="text-white font-medium">Jake</strong>, a Northern WI native with a background in 
                tourism from restaurants to campsites, though my passion lies in technology. From networking and coding 
                to support and engineering, I've gained valuable experience helping people connect and find information.
              </p>

              <p>
                Currently residing in <span className="text-[#FCF1D0] font-medium underline underline-offset-4 decoration-[#22396F]">Madison, WI</span>, I work for a not-for-profit 
                insurance company, specializing in <span className="text-white font-medium">Office 365</span>. My resume 
                can be found on <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-[#FCF1D0] font-semibold underline underline-offset-4 hover:text-white">Avalon.dev</a>.
              </p>

              <p>
                Beyond work, I indulge in <span className="text-[#FCF1D0] font-medium">House music</span>, <span className="text-[#FCF1D0] font-medium">alpha chill</span>, 
                and enjoy walking and exercising. If you'd like to get in touch, visit my contact form/page or reach out via 
                text, call, or email.
              </p>

              <p className="text-sm text-[#FCF1D0]/80 bg-[#010736]/70 p-5 rounded-xl border border-[#22396F]/60">
                I'm also planning to blog more while organizing my papers and preparing for graduate-level courses and certificates in the near future!
              </p>
            </div>

            {/* University & Program Badge Banner */}
            <div className="p-6 rounded-2xl bg-[#010736] border border-[#22396F] flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={PERSONAL_INFO.images.uwStoutLogo}
                  alt="UW Stout Emblem"
                  className="w-12 h-12 object-contain bg-white/10 p-1 rounded-lg border border-[#22396F]"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-serif-display text-white">
                    University of Wisconsin-Stout
                  </h4>
                  <p className="text-xs font-mono-tech text-[#FCF1D0]/70">
                    M.S. in Information and Communication Technologies · Go Blue Devils!
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono-tech bg-[#22396F] hover:bg-[#22396F]/80 text-[#FCF1D0] hover:text-white rounded-lg border border-[#22396F] transition-colors whitespace-nowrap shadow-xs"
              >
                About the Program ↗
              </a>
            </div>

            {/* Technical & Personal Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#22396F]/60">
              <div className="p-4 rounded-xl bg-[#010736]/80 border border-[#22396F]/60 space-y-1">
                <div className="text-xs font-mono-tech text-[#FCF1D0] font-semibold">Enterprise Tech</div>
                <div className="text-sm text-white">Office 365 &amp; Systems</div>
                <div className="text-[11px] font-mono-tech text-[#FCF1D0]/60">Networking, Support &amp; Engineering</div>
              </div>

              <div className="p-4 rounded-xl bg-[#010736]/80 border border-[#22396F]/60 space-y-1">
                <div className="text-xs font-mono-tech text-[#FCF1D0] font-semibold">Creative Passion</div>
                <div className="text-sm text-white">House Music &amp; Chill</div>
                <div className="text-[11px] font-mono-tech text-[#FCF1D0]/60">Alpha chill soundscapes</div>
              </div>

              <div className="p-4 rounded-xl bg-[#010736]/80 border border-[#22396F]/60 space-y-1">
                <div className="text-xs font-mono-tech text-[#FCF1D0] font-semibold">Wellness</div>
                <div className="text-sm text-white">Walking &amp; Exercise</div>
                <div className="text-[11px] font-mono-tech text-[#FCF1D0]/60">Outdoor endurance in Madison</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Imagery from portfolio.avalon.dev */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Friendly Blue Devil Cartoon Image */}
            <div className="rounded-2xl bg-[#010736] border border-[#22396F] p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#FCF1D0]/80 pb-2 border-b border-[#22396F]/60">
                <span>BLUE DEVIL GRADUATE ARTIFACT</span>
                <span className="text-[#FCF1D0] font-medium">UW-Stout Mascot</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0D1C42] border border-[#22396F]/50">
                <img
                  src={PERSONAL_INFO.images.blueDevilCartoon}
                  alt="Friendly Blue Devil Hacker Mascot"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-mono-tech text-[#FCF1D0]/70 italic text-center">
                Friendly Blue Devil cartoon crafted during MS-ICT study at UW-Stout.
              </p>
            </div>

            {/* Northern Wisconsin Lake & Tourism Roots Image */}
            <div className="rounded-2xl bg-[#010736] border border-[#22396F] p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#FCF1D0]/80 pb-2 border-b border-[#22396F]/60">
                <span>WISCONSIN ROOTS &amp; LANDSCAPE</span>
                <span className="text-[#FCF1D0]/70 font-medium">Northern WI</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#0D1C42] border border-[#22396F]/50">
                <img
                  src={PERSONAL_INFO.images.lakeLandscape}
                  alt="Northern Wisconsin Lake Landscape"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-mono-tech text-[#FCF1D0]/70 italic text-center">
                Northern Wisconsin heritage — from tourism, restaurants, and campsites to enterprise technology.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

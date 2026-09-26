import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              About the Technologist · M.S. ICT Candidate
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              About Jake
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Northern Wisconsin native, technology practitioner, and graduate student at the University of Wisconsin-Stout.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-3">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-mono-tech bg-[#141622] hover:bg-[#1D2132] text-[#E2B774] border border-[#272B3E] rounded-lg transition-colors inline-flex items-center gap-1.5"
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
            <div className="space-y-5 text-base sm:text-lg text-[#CCD0DF] font-light leading-relaxed">
              <p>
                I'm <strong className="text-white font-medium">Jake</strong>, a Northern WI native with a background in 
                tourism from restaurants to campsites, though my passion lies in technology. From networking and coding 
                to support and engineering, I've gained valuable experience helping people connect and find information.
              </p>

              <p>
                Currently residing in <span className="text-[#E2B774]">Madison, WI</span>, I work for a not-for-profit 
                insurance company, specializing in <span className="text-white font-medium">Office 365</span>. My resume 
                can be found on <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer" className="text-[#E2B774] underline underline-offset-4 hover:text-[#EDC78B]">Avalon.dev</a>.
              </p>

              <p>
                Beyond work, I indulge in <span className="text-[#E2B774]">House music</span>, <span className="text-[#E2B774]">alpha chill</span>, 
                and enjoy walking and exercising. If you'd like to get in touch, visit my contact form/page or reach out via 
                text, call, or email.
              </p>

              <p className="text-sm text-[#9FA4B8] bg-[#0E1018] p-5 rounded-xl border border-[#1E2334]">
                I'm also planning to blog more while organizing my papers and preparing for graduate-level courses and certificates in the near future!
              </p>
            </div>

            {/* University & Program Badge Banner */}
            <div className="p-6 rounded-2xl bg-[#0D0F17] border border-[#1F2436] flex flex-col sm:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4">
                <img
                  src={PERSONAL_INFO.images.uwStoutLogo}
                  alt="UW Stout Emblem"
                  className="w-12 h-12 object-contain bg-white/5 p-1 rounded-lg border border-[#272B3E]"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-base font-serif-display text-white">
                    University of Wisconsin-Stout
                  </h4>
                  <p className="text-xs font-mono-tech text-[#8E93AA]">
                    M.S. in Information and Communication Technologies · Go Blue Devils!
                  </p>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono-tech bg-[#171926] hover:bg-[#202436] text-[#E2B774] rounded-lg border border-[#272C3E] transition-colors whitespace-nowrap"
              >
                About the Program ↗
              </a>
            </div>

            {/* Technical & Personal Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1C202F]">
              <div className="p-4 rounded-xl bg-[#0B0C12] border border-[#1B1E2B] space-y-1">
                <div className="text-xs font-mono-tech text-[#E2B774]">Enterprise Tech</div>
                <div className="text-sm text-white">Office 365 &amp; Systems</div>
                <div className="text-[11px] font-mono-tech text-[#6F7488]">Networking, Support &amp; Engineering</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0C12] border border-[#1B1E2B] space-y-1">
                <div className="text-xs font-mono-tech text-[#E2B774]">Creative Passion</div>
                <div className="text-sm text-white">House Music &amp; Chill</div>
                <div className="text-[11px] font-mono-tech text-[#6F7488]">Alpha chill soundscapes</div>
              </div>

              <div className="p-4 rounded-xl bg-[#0B0C12] border border-[#1B1E2B] space-y-1">
                <div className="text-xs font-mono-tech text-[#E2B774]">Wellness</div>
                <div className="text-sm text-white">Walking &amp; Exercise</div>
                <div className="text-[11px] font-mono-tech text-[#6F7488]">Outdoor endurance in Madison</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Imagery from portfolio.avalon.dev */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Friendly Blue Devil Cartoon Image */}
            <div className="rounded-2xl bg-[#0D0F17] border border-[#202538] p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#7C8197] pb-2 border-b border-[#1C2030]">
                <span>BLUE DEVIL GRADUATE ARTIFACT</span>
                <span className="text-[#E2B774]">UW-Stout Mascot</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#07080B] border border-[#171A26]">
                <img
                  src={PERSONAL_INFO.images.blueDevilCartoon}
                  alt="Friendly Blue Devil Hacker Mascot"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-mono-tech text-[#7A7F94] italic text-center">
                Friendly Blue Devil cartoon crafted during MS-ICT study at UW-Stout.
              </p>
            </div>

            {/* Northern Wisconsin Lake & Tourism Roots Image */}
            <div className="rounded-2xl bg-[#0D0F17] border border-[#202538] p-5 space-y-3 shadow-xl">
              <div className="flex items-center justify-between text-xs font-mono-tech text-[#7C8197] pb-2 border-b border-[#1C2030]">
                <span>WISCONSIN ROOTS &amp; LANDSCAPE</span>
                <span className="text-[#8E93AA]">Northern WI</span>
              </div>
              <div className="rounded-xl overflow-hidden bg-[#07080B] border border-[#171A26]">
                <img
                  src={PERSONAL_INFO.images.lakeLandscape}
                  alt="Northern Wisconsin Lake Landscape"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <p className="text-[11px] font-mono-tech text-[#7A7F94] italic text-center">
                Northern Wisconsin heritage — from tourism, restaurants, and campsites to enterprise technology.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

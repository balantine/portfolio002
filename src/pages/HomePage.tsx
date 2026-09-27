import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  return (
    <article className="w-full bg-[#010736] text-[#FCF1D0]">
      {/* Main Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1500px] mx-auto min-h-[70vh] flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-24 gap-y-12 lg:gap-x-8 items-center">
          
          {/* Text Block: MS-ICT Program Objectives */}
          <div className="lg:col-start-7 lg:col-end-21 space-y-6">
            <h2 className="text-3xl md:text-5xl font-serif-display font-normal text-white tracking-tight leading-tight">
              MS-ICT Program Objectives
            </h2>

            <div className="space-y-4 text-base md:text-lg text-[#FCF1D0]/90 font-sans-body leading-relaxed font-light">
              <p className="font-normal text-white">
                Upon completion of this program, students will be able to:
              </p>
              <ol className="space-y-2.5 list-none pl-0">
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">1.</span>
                  <span>Appraise the influences between society and ICT development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">2.</span>
                  <span>Analyze the relationship between organizations and ICT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">3.</span>
                  <span>Critique trends impacting the ICT professional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">4.</span>
                  <span>Evaluate ICT related to one’s own career</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">5.</span>
                  <span>Forecast the influence of ICT systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">6.</span>
                  <span>Conduct research contributing to ICT</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FCF1D0] font-mono-tech">7.</span>
                  <span>Design ICT systems</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Image Block: Digital Hacker Blue Devil Mascot Holding Device */}
          <div className="lg:col-start-10 lg:col-end-22 flex justify-center">
            <div className="w-full max-w-[550px] relative rounded-2xl overflow-hidden bg-[#0D1C42]/50 p-6 border border-[#22396F]/40 shadow-2xl">
              <img
                src={PERSONAL_INFO.images.blueDevilHero}
                alt="Digital Hacker Blue Devil Mascot"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-105"
                loading="eager"
              />
            </div>
          </div>

          {/* Logo Block: UW-Stout Formal Logo */}
          <div className="lg:col-start-6 lg:col-end-14 flex items-center justify-start pt-4">
            <div className="max-w-[320px] bg-white/10 p-3 rounded-xl border border-[#22396F]/50 backdrop-blur-xs">
              <img
                src={PERSONAL_INFO.images.uwStoutLogo}
                alt="University of Wisconsin-Stout"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>
    </article>
  );
};

import React from 'react';
import { COURSE_SEQUENCE } from '../data/portfolioData';

export const SequencePage: React.FC = () => {
  return (
    <article className="w-full bg-[#010736] text-[#FCF1D0]">
      {/* Top Banner with Motherboard Graphic matching portfolio.avalon.dev */}
      <section className="relative w-full h-[280px] md:h-[380px] overflow-hidden border-b border-[#22396F]/50">
        <img
          src="https://images.squarespace-cdn.com/content/v1/65594014335cfa705974cf81/b87963ca-4c1a-4901-b244-f20ca53b2428/motherboard1_single_1920x1080.jpg"
          alt="Motherboard hardware and circuits"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010736] via-[#010736]/40 to-transparent" />
        <div className="absolute bottom-8 left-6 md:left-12 max-w-[1500px]">
          <h1 className="text-3xl md:text-5xl font-serif-display text-white tracking-tight">
            M.S. ICT Course Sequence
          </h1>
          <p className="text-xs md:text-sm font-mono-tech text-[#FCF1D0]/80 mt-1">
            University of Wisconsin-Stout · Graduate Curriculum Roadmap
          </p>
        </div>
      </section>

      {/* Main Course Listing section */}
      <section className="py-16 md:py-24 px-6 md:px-12 max-w-[1100px] mx-auto">
        <div className="space-y-12">
          {COURSE_SEQUENCE.map((c) => (
            <div
              key={c.id}
              className="pb-8 border-b border-[#22396F]/40 space-y-2 group"
            >
              <h4 className="text-xl md:text-2xl font-serif-display text-white group-hover:text-[#FCF1D0] transition-colors leading-snug">
                {c.term} - {c.code} {c.title}
              </h4>
              <p className="text-sm md:text-base font-sans-body font-light text-[#FCF1D0]/85 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </article>
  );
};

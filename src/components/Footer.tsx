import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#22396F]/60 bg-[#010736] text-xs font-mono-tech text-[#FCF1D0]/70">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Identity & Academic Affiliation */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-white font-medium font-serif-display text-base">
            {PERSONAL_INFO.handle} · {PERSONAL_INFO.degree}
          </div>
          <div className="text-[11px] text-[#FCF1D0]/60">
            {PERSONAL_INFO.location} · {PERSONAL_INFO.phone} · {PERSONAL_INFO.email}
          </div>
        </div>

        {/* Center / Right: Navigation & Top Action */}
        <div className="flex items-center gap-6">
          <a href="#about" className="hover:text-[#FCF1D0] transition-colors">
            About
          </a>
          <a href="#objectives" className="hover:text-[#FCF1D0] transition-colors">
            Objectives
          </a>
          <a href="#sequence" className="hover:text-[#FCF1D0] transition-colors">
            Sequence
          </a>
          <a href="#competencies" className="hover:text-[#FCF1D0] transition-colors">
            Competencies
          </a>
          <a href="#contact" className="hover:text-[#FCF1D0] transition-colors">
            Contact
          </a>
          <button
            onClick={scrollToTop}
            className="text-[#FCF1D0] hover:text-white transition-colors cursor-pointer flex items-center gap-1 font-semibold"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-[#181A24] bg-[#07080B] text-xs font-mono-tech text-[#6E7387]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left side: Identity & Academic Affiliation */}
        <div className="space-y-1 text-center md:text-left">
          <div className="text-[#C4C8D8] font-medium font-serif-display text-base">
            Julian Vance · Master of Science in Information &amp; Communication Technology
          </div>
          <div className="text-[11px] text-[#55596D]">
            Institute for Advanced Telecommunications &amp; Media Technology · Class of 2026
          </div>
        </div>

        {/* Center / Right: Quiet Navigation & Top Action */}
        <div className="flex items-center gap-6">
          <a href="#thesis" className="hover:text-[#E2B774] transition-colors">
            Thesis
          </a>
          <a href="#projects" className="hover:text-[#E2B774] transition-colors">
            Works
          </a>
          <a href="#laboratory" className="hover:text-[#E2B774] transition-colors">
            Lab
          </a>
          <a href="#publications" className="hover:text-[#E2B774] transition-colors">
            Publications
          </a>
          <button
            onClick={scrollToTop}
            className="text-[#8E93AA] hover:text-[#E2B774] transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Top</span>
            <span>↑</span>
          </button>
        </div>

      </div>
    </footer>
  );
};

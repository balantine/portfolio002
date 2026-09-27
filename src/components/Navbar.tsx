import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setReadingProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Objectives', href: '#objectives' },
    { label: 'Sequence', href: '#sequence' },
    { label: 'Competencies', href: '#competencies' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#010736]/90 backdrop-blur-md border-[#22396F]/70 shadow-lg shadow-[#010736]/50'
          : 'bg-[#010736]/50 backdrop-blur-xs border-transparent'
      }`}
    >
      {/* Reading progress bar using #22396F and #FCF1D0 */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#0D1C42] overflow-hidden z-50 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-gradient-to-r from-[#22396F] via-[#FCF1D0] to-[#FCF1D0] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(252,241,208,0.5)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-xl font-normal tracking-tight font-serif-display text-[#FCF1D0] hover:text-white transition-colors"
        >
          <span className="text-2xl font-serif-display font-medium text-[#FCF1D0]">Portfolio</span>
          <span className="text-xs font-mono-tech text-[#FCF1D0]/70 tracking-normal group-hover:text-[#FCF1D0]">
            {PERSONAL_INFO.handle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FCF1D0]/75">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap hover:text-[#FCF1D0] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#FCF1D0] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium font-mono-tech text-[#FCF1D0] hover:text-white bg-[#0D1C42] hover:bg-[#22396F] border border-[#22396F] rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Resume (Avalon.dev)</span>
            <span className="text-[10px] text-[#FCF1D0]">↗</span>
          </a>

          <button
            onClick={() => {
              if (typeof window !== 'undefined' && (window as unknown as { Tawk_API?: { maximize?: () => void; toggle?: () => void } }).Tawk_API?.maximize) {
                (window as unknown as { Tawk_API: { maximize: () => void } }).Tawk_API.maximize();
              } else {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-4 py-2 text-xs font-semibold text-[#010736] bg-[#FCF1D0] hover:bg-white rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-md hover:shadow-lg flex items-center gap-1.5"
          >
            <span>Contact Jake</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" title="Live Chat Available" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#FCF1D0]/80 hover:text-[#FCF1D0] focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.75}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-[#0D1C42] border-b border-[#22396F] space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#FCF1D0]/80 hover:text-[#FCF1D0] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#22396F]/50">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left py-2 text-xs font-mono-tech text-[#FCF1D0]"
            >
              View Resume on Avalon.dev ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

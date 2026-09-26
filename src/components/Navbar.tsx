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
          ? 'bg-[#08090C]/90 backdrop-blur-md border-[#222530]/80 shadow-lg shadow-black/20'
          : 'bg-[#08090C]/40 backdrop-blur-xs border-transparent'
      }`}
    >
      {/* Thin elegant reading progress bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#1A1D28] overflow-hidden z-50 pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      >
        <div
          className="h-full bg-gradient-to-r from-[#00529B] via-[#E2B774] to-[#F3D5A5] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(226,183,116,0.5)]"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-xl font-normal tracking-tight font-serif-display text-[#F5F5F7] hover:text-[#E2B774] transition-colors"
        >
          <span className="text-2xl font-serif-display font-medium">Portfolio</span>
          <span className="text-xs font-mono-tech text-[#8E92A4] tracking-normal">
            {PERSONAL_INFO.handle}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#A5A9B8]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 whitespace-nowrap hover:text-[#F5F5F7] transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#E2B774] hover:after:w-full after:transition-all after:duration-200"
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
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium font-mono-tech text-[#D4D7E2] hover:text-white bg-[#14161F] hover:bg-[#1D202D] border border-[#272B3B] rounded-lg transition-colors whitespace-nowrap"
          >
            <span>Resume (Avalon.dev)</span>
            <span className="text-[10px] text-[#E2B774]">↗</span>
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
            className="px-4 py-2 text-xs font-medium text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors whitespace-nowrap cursor-pointer shadow-sm hover:shadow flex items-center gap-1.5"
          >
            <span>Contact Jake</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse" title="Live Chat Available" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A5A9B8] hover:text-white focus:outline-none cursor-pointer"
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
        <div className="md:hidden px-6 py-4 bg-[#0B0C11] border-b border-[#222530] space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm text-[#C0C4D4] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2 border-t border-[#1C202F]">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-left py-2 text-xs font-mono-tech text-[#E2B774]"
            >
              View Resume on Avalon.dev ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

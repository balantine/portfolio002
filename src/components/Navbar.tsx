import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onOpenCvModal: () => void;
  onOpenThesisModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal, onOpenThesisModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Thesis', href: '#thesis' },
    { label: 'Selected Works', href: '#projects' },
    { label: 'Interactive Lab', href: '#laboratory' },
    { label: 'Publications', href: '#publications' },
    { label: 'Curriculum Vitae', href: '#cv' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#08090C]/90 backdrop-blur-md border-[#222530]/80 shadow-lg shadow-black/20'
          : 'bg-[#08090C]/40 backdrop-blur-xs border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex items-baseline gap-2 text-xl font-normal tracking-tight font-serif-display text-[#F5F5F7] hover:text-[#E2B774] transition-colors"
        >
          <span className="text-2xl font-serif-display font-medium">Julian Vance</span>
          <span className="text-xs font-mono-tech text-[#8E92A4] tracking-normal uppercase">
            M.Sc. ICT
          </span>
        </a>

        {/* Zone 2: 4-6 nav links, 1-2 word labels, single line */}
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

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenThesisModal}
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium font-mono-tech text-[#D4D7E2] hover:text-white bg-[#14161F] hover:bg-[#1D202D] border border-[#272B3B] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Thesis Dossier</span>
          </button>

          <a
            href="#contact"
            className="px-4 py-2 text-xs font-medium text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors whitespace-nowrap font-medium cursor-pointer shadow-sm hover:shadow"
          >
            Inquiries
          </a>

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

      {/* Mobile drawer */}
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
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCvModal();
              }}
              className="w-full text-left py-2 text-xs font-mono-tech text-[#E2B774]"
            >
              View Full Academic CV →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

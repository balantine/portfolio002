import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close menu when route changes or resize
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navItems = [
    { label: 'About', path: '/about' },
    { label: 'Objectives', path: '/' },
    { label: 'Sequence', path: '/sequence-1' },
    { label: 'Competencies', path: '/competencies' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="w-full relative z-40 bg-[#010736] border-b border-[#22396F]/50">
      <div className="max-w-[1500px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Site Title / Brand matching portfolio.avalon.dev */}
        <div className="flex items-center">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="text-2xl md:text-3xl font-serif-display tracking-tight text-white hover:text-[#FCF1D0] transition-colors"
          >
            Portfolio
          </a>
        </div>

        {/* Desktop Navigation Links (Right aligned) */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-sans-body tracking-wide">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`py-1 transition-colors relative ${
                  isActive
                    ? 'text-white font-medium after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FCF1D0]'
                    : 'text-[#FCF1D0]/75 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#FCF1D0] hover:text-white focus:outline-none cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              }`}
            />
          </div>
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0D1C42] border-b border-[#22396F] px-8 py-6 space-y-4 animate-fade-in">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className={`block text-lg font-serif-display ${
                  isActive ? 'text-[#FCF1D0] font-medium' : 'text-white/80 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-[#22396F]/50 flex items-center justify-between">
            <a
              href="https://www.avalon.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono-tech text-[#FCF1D0] hover:underline"
            >
              Avalon.dev ↗
            </a>
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="px-3 py-1.5 text-xs font-semibold text-[#010736] bg-[#FCF1D0] rounded-md"
            >
              Contact Jake
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

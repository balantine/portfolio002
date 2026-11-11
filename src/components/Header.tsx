import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentPath]);

  const navItems = [
    { label: 'Objectives', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Sequence', path: '/sequence-1' },
    { label: 'Competencies', path: '/competencies' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-[#F8F6F1]/95 backdrop-blur-md border-b border-[#DED8CC]">
      <div className="max-w-[1380px] mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-2xl md:text-[26px] font-serif-display font-semibold tracking-tight text-[#181615] hover:text-[#1E3A8A] transition-colors duration-150 whitespace-nowrap"
        >
          Jake Andrews
        </a>

        {/* Zone 2: Clean Single-Line Text Navigation */}
        <nav
          aria-label="Primary portfolio navigation"
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-sans-body whitespace-nowrap transition-colors duration-150 ${
                  isActive
                    ? 'text-[#181615] font-medium'
                    : 'text-[#57534E] hover:text-[#181615]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-[1.5px] transition-opacity duration-150 ${
                    isActive ? 'bg-[#1E3A8A] opacity-100' : 'bg-[#181615] opacity-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action */}
        <div className="hidden md:flex items-center">
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="px-4 py-2 text-sm font-sans-body font-medium text-[#F8F6F1] bg-[#181615] hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 -mr-2 text-[#181615] hover:text-[#1E3A8A] transition-colors duration-150 cursor-pointer"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F8F6F1] border-b border-[#DED8CC] px-6 py-6 space-y-4">
          <nav aria-label="Mobile portfolio navigation" className="flex flex-col divide-y divide-[#E6E0D4]">
            {navItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`py-3 text-xl font-serif-display transition-colors duration-150 ${
                    isActive
                      ? 'text-[#1E3A8A] font-semibold italic'
                      : 'text-[#181615] hover:text-[#1E3A8A]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="w-full py-2.5 px-4 text-sm font-sans-body font-medium text-[#F8F6F1] bg-[#181615] hover:bg-[#1E3A8A] transition-colors duration-150 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

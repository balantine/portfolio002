import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface SiteFooterProps {
  onNavigate?: (path: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({ onNavigate }) => {
  const navLinks = [
    { label: 'Program Objectives', path: '/' },
    { label: 'Biography & Studio', path: '/about' },
    { label: 'Course Sequence', path: '/sequence-1' },
    { label: 'Competency Monograph', path: '/competencies' },
    { label: 'Correspondence', path: '/contact' },
  ];

  const handleNav = (e: React.MouseEvent, path: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <footer className="w-full bg-[#F1EDE4] border-t border-[#DED8CC] pt-16 pb-12 px-6 md:px-12 text-[#4A4540]">
      <div className="max-w-[1380px] mx-auto space-y-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Identity & Academic Colophon */}
          <div className="md:col-span-5 space-y-4">
            <div className="space-y-1">
              <h3 className="text-3xl font-serif-display font-semibold text-[#181615] tracking-tight">
                Jake Andrews <span className="italic font-normal text-[#78716C]">({PERSONAL_INFO.handle})</span>
              </h3>
              <p className="text-xs font-sans-body uppercase tracking-[0.16em] text-[#78716C]">
                M.S. in Information &amp; Communication Technologies
              </p>
            </div>

            <p className="text-sm font-sans-body text-[#4A4540] max-w-md leading-relaxed">
              Graduate academic monograph and professional portfolio produced at the University of Wisconsin-Stout, exploring enterprise systems, sociotechnical design, and technology futures.
            </p>
          </div>

          {/* Monograph Index */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-sans-body uppercase tracking-[0.16em] text-[#78716C] block">
              Index
            </span>
            <ul className="space-y-2 text-sm font-sans-body">
              {navLinks.map((item) => (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => handleNav(e, item.path)}
                    className="text-[#4A4540] hover:text-[#1E3A8A] transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-2 space-y-3">
            <span className="text-xs font-sans-body uppercase tracking-[0.16em] text-[#78716C] block">
              Location
            </span>
            <address className="not-italic text-sm font-sans-body text-[#181615] space-y-1 leading-relaxed">
              <p>704 Pirate Island Rd.</p>
              <p className="text-[#4A4540]">Monona, WI 53716</p>
            </address>
            <p className="text-xs font-mono-tech text-[#78716C]">
              43.0569° N, 89.3337° W
            </p>
          </div>

          {/* Correspondence & External Archives */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-sans-body uppercase tracking-[0.16em] text-[#78716C] block">
              Correspondence
            </span>
            <div className="space-y-1.5 text-sm">
              <div>
                <a
                  href="tel:7156172471"
                  className="font-mono-tech text-[#181615] hover:text-[#1E3A8A] transition-colors duration-150"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="font-mono-tech text-[#1E3A8A] hover:text-[#9A3412] underline underline-offset-4 decoration-[#1E3A8A]/35 transition-colors duration-150"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-sans-body text-[#57534E]">
              <a
                href={PERSONAL_INFO.avalonHomeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition-colors duration-150"
              >
                Avalon.dev ↗
              </a>
              <span className="text-[#C4BCB0]">·</span>
              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition-colors duration-150"
              >
                Curriculum Vitae ↗
              </a>
              <span className="text-[#C4BCB0]">·</span>
              <a
                href={PERSONAL_INFO.programUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#1E3A8A] transition-colors duration-150"
              >
                UW-Stout ↗
              </a>
            </div>
          </div>
        </div>

        {/* Colophon Base Rule */}
        <div className="pt-8 border-t border-[#DED8CC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-sans-body text-[#78716C]">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.fullName}. Produced at the University of Wisconsin-Stout.
          </div>
          <div className="font-serif-display italic text-sm text-[#57534E]">
            M.S. Information &amp; Communication Technologies — Madison &amp; Menomonie, Wisconsin
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ArchivalImage } from './ArchivalImage';

export interface LightboxPlate {
  figure: string;
  title: string;
  src: string;
  alt: string;
  medium: string;
  caption: string;
}

interface ArtworkLightboxProps {
  plate: LightboxPlate | null;
  onClose: () => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({ plate, onClose }) => {
  useEffect(() => {
    if (!plate) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [plate, onClose]);

  if (!plate) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#181615]/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 md:p-12"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={plate.title}
    >
      <div
        className="relative w-full max-w-5xl bg-[#F8F6F1] border border-[#DED8CC] p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Metadata & Close Bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DED8CC] gap-4">
          <div className="flex items-baseline gap-3 text-xs text-[#78716C]">
            <span className="font-mono-tech uppercase tracking-widest text-[#1E3A8A]">
              {plate.figure}
            </span>
            <span>·</span>
            <span className="font-sans-body">{plate.medium}</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close artwork viewer"
            className="inline-flex items-center gap-1.5 text-xs font-mono-tech text-[#181615] hover:text-[#9A3412] transition-colors duration-150 cursor-pointer py-1 px-2"
          >
            <span>ESC</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* High-Resolution Plate Canvas */}
        <div className="bg-[#EFEBE2] border border-[#E2DDD2] p-4 sm:p-8 flex items-center justify-center">
          <ArchivalImage
            src={plate.src}
            alt={plate.alt}
            fallbackTitle={plate.title}
            className="max-h-[60vh] w-auto object-contain"
            loading="eager"
          />
        </div>

        {/* Museum Accession Caption */}
        <div className="pt-6 mt-6 border-t border-[#DED8CC] grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
          <h3 className="md:col-span-5 text-2xl font-serif-display font-medium text-[#181615]">
            {plate.title}
          </h3>
          <p className="md:col-span-7 text-sm font-serif-display italic text-[#4A4540] leading-relaxed">
            {plate.caption}
          </p>
        </div>
      </div>
    </div>
  );
};

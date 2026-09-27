import React from 'react';

interface SiteFooterProps {
  onNavigate?: (path: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = () => {
  return (
    <footer className="w-full bg-[#010736] border-t border-[#22396F]/50 py-16 px-6 md:px-12 text-[#FCF1D0]">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-24 gap-y-8 items-start">
        
        {/* Block 1: @Jake heading */}
        <div className="md:col-start-2 md:col-end-10 lg:col-end-8">
          <h3 className="text-2xl md:text-3xl font-serif-display text-white tracking-tight">
            @Jake
          </h3>
        </div>

        {/* Block 2: Address */}
        <div className="md:col-start-2 md:col-end-9 lg:col-start-9 lg:col-end-15 text-sm font-sans-body text-[#FCF1D0]/80 leading-relaxed">
          <p>704 Pirate Island Rd.</p>
          <p>Monona, WI 53716</p>
        </div>

        {/* Block 3: Phone & Email */}
        <div className="md:col-start-10 md:col-end-24 lg:col-start-16 lg:col-end-24 text-sm font-sans-body space-y-1">
          <div>
            <a
              href="tel:7156172471"
              className="text-[#FCF1D0] hover:text-white transition-colors"
            >
              (715) 617-2471
            </a>
          </div>
          <div>
            <a
              href="mailto:jake@avalon.dev"
              className="text-[#FCF1D0] hover:underline font-medium"
            >
              jake@avalon.dev
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

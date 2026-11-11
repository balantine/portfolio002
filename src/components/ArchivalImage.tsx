import React, { useState } from 'react';

interface ArchivalImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackNote?: string;
  loading?: 'eager' | 'lazy';
}

export const ArchivalImage: React.FC<ArchivalImageProps> = ({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackNote,
  loading = 'lazy',
}) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAE4D8] text-[#4A4540] p-8 text-center select-none ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-[#78716C] mb-2">
          Archival Plate
        </span>
        <span className="font-serif-display italic text-xl text-[#181615]">
          {fallbackTitle || alt}
        </span>
        {fallbackNote && (
          <span className="font-sans-body text-xs text-[#78716C] mt-1.5 max-w-xs">
            {fallbackNote}
          </span>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
};

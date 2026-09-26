import React, { useEffect, useRef, useState } from 'react';
import { THESIS_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenThesisModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenThesisModal, onExploreProjects }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeFrequency, setActiveFrequency] = useState(1.2);

  // Render artistic waveform on the right hero card
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let t = 0;

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      const step = 20;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw multiple layered harmonic waveforms representing spatial audio / packet telemetry
      const waves = [
        { amp: 26, freq: 0.018 * activeFrequency, speed: 0.035, color: 'rgba(226, 183, 116, 0.85)', width: 2 },
        { amp: 18, freq: 0.028 * activeFrequency, speed: -0.025, color: 'rgba(96, 165, 250, 0.65)', width: 1.5 },
        { amp: 12, freq: 0.042 * activeFrequency, speed: 0.045, color: 'rgba(212, 215, 226, 0.35)', width: 1 },
      ];

      waves.forEach((w) => {
        ctx.beginPath();
        ctx.strokeStyle = w.color;
        ctx.lineWidth = w.width;

        const centerY = height / 2;
        for (let x = 0; x <= width; x += 2) {
          // Envelope attenuation on both sides
          const envelope = Math.sin((x / width) * Math.PI);
          const y = centerY + Math.sin(x * w.freq + t * w.speed) * w.amp * envelope;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      // Draw scattered telemetry packet dots
      const packetCount = 6;
      for (let i = 0; i < packetCount; i++) {
        const px = ((t * 40 + i * (width / packetCount)) % width);
        const envelope = Math.sin((px / width) * Math.PI);
        const py = height / 2 + Math.sin(px * 0.018 * activeFrequency + t * 0.035) * 26 * envelope;

        ctx.fillStyle = '#E2B774';
        ctx.beginPath();
        ctx.arc(px, py, 3, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(226, 183, 116, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(px, py, 7, 0, Math.PI * 2);
        ctx.stroke();
      }

      t += 0.03;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeFrequency]);

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden border-b border-[#1A1D27]">
      {/* Radial ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#E2B774]/8 via-[#3B82F6]/5 to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Scholarly Thesis & Candidate Thesis Statement */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Clean unboxed metadata kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#A0A4B8] tracking-wide">
              <span className="text-[#E2B774] font-medium">M.Sc. Information & Communication Technology</span>
              <span aria-hidden="true" className="text-[#3F4458]">·</span>
              <span>Candidate Class of 2026</span>
              <span aria-hidden="true" className="text-[#3F4458]">·</span>
              <span>Distinction & Fellowship</span>
            </div>

            {/* Massive editorial display heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif-display font-normal text-[#F4F4F7] leading-[1.08] tracking-tight">
              Where computational <span className="italic text-[#E2B774] font-serif-display">networks</span> meet human perception.
            </h1>

            {/* Sub-prose with measured line height */}
            <p className="text-base sm:text-lg text-[#9EA3B6] leading-relaxed max-w-2xl font-light">
              Bridging distributed telecommunications, kernel-level eBPF packet datapaths, and 
              spatial audio-haptic telepresence. Developing mathematical frameworks and open-source 
              protocols that preserve human sensory co-presence across congested, variable-jitter 
              optical and wireless networks.
            </p>

            {/* Empirical research indicators (Tabular numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[#1C202C]">
              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  41.6%
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-1">
                  Jitter Reduction
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  &lt; 50ms
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-1">
                  Telepresence WAN
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#F5F5F7] tabular-nums">
                  03
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-1">
                  IEEE / ACM Papers
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-serif-display text-[#E2B774] tabular-nums">
                  4.0 / 4.0
                </div>
                <div className="text-xs font-mono-tech text-[#787D92] mt-1">
                  Academic Merit
                </div>
              </div>
            </div>

            {/* Call to action triggers */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenThesisModal}
                className="px-6 py-3 text-sm font-medium text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-all duration-200 cursor-pointer shadow-md hover:shadow-lg hover:shadow-[#E2B774]/10 font-medium"
              >
                Read Master's Thesis
              </button>

              <a
                href="#laboratory"
                className="px-5 py-3 text-sm font-medium text-[#D4D7E2] hover:text-white bg-[#12141C] hover:bg-[#1A1D28] border border-[#262A3B] rounded-lg transition-colors cursor-pointer"
              >
                Launch Network Lab
              </a>

              <button
                onClick={onExploreProjects}
                className="px-4 py-3 text-sm font-medium text-[#8E93A6] hover:text-[#E2B774] transition-colors cursor-pointer"
              >
                View Works ↓
              </button>
            </div>
          </div>

          {/* Right Column: Master's Capstone Monograph Box */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-[#0F1017] border border-[#242838] p-6 sm:p-7 shadow-2xl overflow-hidden group">
              
              {/* Header inside Monograph Card */}
              <div className="flex items-start justify-between border-b border-[#1E2230] pb-5 mb-5">
                <div>
                  <div className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider mb-1">
                    Master of Science Thesis
                  </div>
                  <h3 className="text-xl font-serif-display text-[#F5F5F7] font-normal leading-snug">
                    {THESIS_DATA.title}
                  </h3>
                </div>
                <span className="text-xs font-mono-tech text-[#7B8096] bg-[#171924] px-2.5 py-1 rounded border border-[#232738]">
                  2026
                </span>
              </div>

              {/* Interactive Telemetry Waveform Oscilloscope */}
              <div className="relative rounded-xl bg-[#08090C] border border-[#1A1D27] p-3 mb-5 overflow-hidden">
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#72778E] mb-2 px-1">
                  <span>CHANNEL TELEMETRY</span>
                  <div className="flex items-center gap-2">
                    <span>FREQ:</span>
                    <button
                      onClick={() => setActiveFrequency((f) => (f === 1.2 ? 2.0 : f === 2.0 ? 0.8 : 1.2))}
                      className="text-[#E2B774] hover:underline cursor-pointer"
                    >
                      {activeFrequency}x MOD
                    </button>
                  </div>
                </div>

                <canvas
                  ref={canvasRef}
                  width={460}
                  height={130}
                  className="w-full h-[130px] rounded block"
                />

                <div className="flex items-center justify-between text-[10px] font-mono-tech text-[#595E74] mt-2 px-1">
                  <span>BER: &lt; 10⁻⁹ (OPTICAL)</span>
                  <span>EBPF FILTER: ACTIVE</span>
                  <span>JITTER: 1.4ms</span>
                </div>
              </div>

              {/* Research Supervisors & Institutional Lab */}
              <div className="space-y-3 text-xs text-[#8A8F9F] mb-6">
                <div className="flex items-start justify-between">
                  <span className="text-[#5E6377]">Advisors</span>
                  <span className="text-right text-[#C8CCD9]">
                    Prof. M. Sterling & Dr. H. Rossi
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#5E6377]">Laboratory</span>
                  <span className="text-right text-[#C8CCD9]">
                    Computational Media & Distributed Comms
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-[#5E6377]">Scheduled Defense</span>
                  <span className="text-right text-[#E2B774] font-mono-tech">
                    {THESIS_DATA.defenseDate}
                  </span>
                </div>
              </div>

              {/* Direct Card Action */}
              <button
                onClick={onOpenThesisModal}
                className="w-full py-2.5 px-4 rounded-lg bg-[#181B26] hover:bg-[#202434] text-xs font-mono-tech text-[#D4D7E5] border border-[#2B3044] hover:border-[#E2B774]/50 transition-colors flex items-center justify-between group-hover:text-white cursor-pointer"
              >
                <span>Examine Full Thesis Dossier & Methodology</span>
                <span className="text-[#E2B774]">→</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

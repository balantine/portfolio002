import React, { useState } from 'react';
import { THESIS_DATA } from '../data/portfolioData';

interface ThesisModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ThesisModal: React.FC<ThesisModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'abstract' | 'formalism' | 'system' | 'defense'>('abstract');
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1017] border border-[#272B3C] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#1E2232] bg-[#0A0B10]">
          <div className="space-y-1.5 pr-6">
            <div className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
              {THESIS_DATA.department} · {THESIS_DATA.institution}
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif-display text-white font-normal leading-snug">
              {THESIS_DATA.title}
            </h3>
            <p className="text-sm font-mono-tech text-[#8E93AA]">
              {THESIS_DATA.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7F8498] hover:text-white hover:bg-[#1B1E2B] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close thesis dossier dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-[#1C2030] bg-[#0B0C12]">
          {[
            { id: 'abstract', label: '1. Abstract & Motivation' },
            { id: 'formalism', label: '2. Mathematical Formulation' },
            { id: 'system', label: '3. Kernel Datapath & Architecture' },
            { id: 'defense', label: '4. Defense & Committee' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`py-3 px-3 text-xs font-mono-tech border-b-2 transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'border-[#E2B774] text-[#E2B774] font-medium'
                  : 'border-transparent text-[#767B90] hover:text-[#B6BACD]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#C2C6D6]">
          {activeTab === 'abstract' && (
            <div className="space-y-6 animate-fade-in font-light">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Complete Thesis Abstract
                </h4>
                <p className="text-base text-[#D4D7E5] leading-relaxed">
                  {THESIS_DATA.abstract}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Theoretical Background &amp; Motivation
                </h4>
                <p className="text-sm text-[#A0A5BA] leading-relaxed bg-[#08090D] p-5 rounded-xl border border-[#1C2030]">
                  {THESIS_DATA.motivation}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-3">
                  Summary of Experimental Innovations
                </h4>
                <div className="space-y-3">
                  {THESIS_DATA.innovations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#B4B8CA]">
                      <span className="font-mono-tech text-[#E2B774] text-xs mt-0.5">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'formalism' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Perceptual Entropy Metric (PEM) Formulation
                </h4>
                <p className="text-sm text-[#A0A5BA] leading-relaxed font-light">
                  Let S = &#123;s₁, s₂, ..., sₖ&#125; denote the set of continuous telepresence sensory streams (spatial acoustic channels, 6-DoF force vectors, and volumetric point-cloud geometry). We define the Perceptual Salience Loss functional L_p as:
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#08090C] border border-[#1E2334] font-mono-tech text-xs text-[#E2B774] leading-loose">
                <div>L_p(P) = Σ&#91; i=1..k &#93; ω_i · ∫&#91;t..t+Δt&#93; | Ψ_i(s_i(τ)) - Ψ̂_i(ŝ_i(τ)) |² dτ</div>
                <div className="text-[#8E93AA] text-[11px] mt-2">
                  Where Ψ_i represents the non-linear human perceptual filter (e.g. psychoacoustic Bark frequency weighting for acoustics, Weber-Fechner tactile thresholds for haptics) and ω_i is the empirical modal weighting factor.
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Pareto Link Slicing Theorem
                </h4>
                <p className="text-sm text-[#9CA1B5] leading-relaxed font-light">
                  Under transient bottleneck capacity C_e(t) &lt; Σ R_i(t), the eBPF packet discard mechanism satisfies the minimax perceptual divergence criteria, ensuring zero complete sensory outages by gracefully degrading low-frequency texture channels while strictly preserving phase coherence in spatial sound and tactile pulses.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'system' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Kernel Datapath &amp; XDP Hook Architecture
                </h4>
                <p className="text-sm text-[#A0A5BA] leading-relaxed font-light">
                  {THESIS_DATA.methodology}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#08090C] border border-[#1E2333] space-y-3 font-mono-tech text-xs">
                <div className="text-[11px] text-[#E2B774] uppercase tracking-wider">
                  Hardware Switch / NIC Datapath Benchmarks
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3 bg-[#11131E] rounded-lg border border-[#1C2030]">
                    <div className="text-base font-serif-display text-white">138 ns</div>
                    <div className="text-[10px] text-[#6F7488]">XDP Instruction Time</div>
                  </div>
                  <div className="p-3 bg-[#11131E] rounded-lg border border-[#1C2030]">
                    <div className="text-base font-serif-display text-white">14.8 Mpps</div>
                    <div className="text-[10px] text-[#6F7488]">Line-Rate Throughput</div>
                  </div>
                  <div className="p-3 bg-[#11131E] rounded-lg border border-[#1C2030]">
                    <div className="text-base font-serif-display text-white">0 kbps</div>
                    <div className="text-[10px] text-[#6F7488]">Zero Bufferbloat</div>
                  </div>
                  <div className="p-3 bg-[#11131E] rounded-lg border border-[#1C2030]">
                    <div className="text-base font-serif-display text-white">99.8%</div>
                    <div className="text-[10px] text-[#6F7488]">Saturation Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'defense' && (
            <div className="space-y-6 animate-fade-in font-light">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-3">
                  Defense Examination Committee
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {THESIS_DATA.committee.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#0D0F17] border border-[#1E2333]">
                      <div className="font-medium text-white text-sm">{c.name}</div>
                      <div className="text-xs text-[#E2B774] font-mono-tech mt-0.5">{c.role}</div>
                      <div className="text-xs text-[#7B8096] mt-1">{c.institution}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0A0B10] border border-[#1C2030] text-xs font-mono-tech text-[#8E93AA] flex items-center justify-between">
                <span>Public Academic Defense Date:</span>
                <span className="text-white font-medium">{THESIS_DATA.defenseDate}</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer Bar */}
        <div className="flex items-center justify-between p-6 border-t border-[#1C2030] bg-[#0A0B10]">
          <div className="text-xs font-mono-tech text-[#72768B]">
            {downloadSuccess ? (
              <span className="text-emerald-400">✓ Thesis Excerpt Download Prepared</span>
            ) : (
              <span>Institutional Repository Ref: 2026-ICT-MTHESIS-042</span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors cursor-pointer font-medium"
            >
              Download Thesis Summary (PDF)
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#D4D7E2] hover:text-white bg-[#151722] hover:bg-[#1E2232] border border-[#272B3C] rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'benchmarks'>('overview');

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0E1017] border border-[#272B3C] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-start justify-between p-6 sm:p-8 border-b border-[#1E2232] bg-[#0A0B10]">
          <div className="space-y-2 pr-6">
            {/* Clean unboxed metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#8E93AA]">
              <span className="text-[#E2B774] font-medium">{project.domain}</span>
              <span aria-hidden="true">·</span>
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span>{project.readTime}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif-display text-[#F4F4F7] font-normal leading-snug">
              {project.title}
            </h3>

            <p className="text-sm text-[#9499AD] font-light">
              {project.subtitle}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#7F8498] hover:text-white hover:bg-[#1B1E2B] rounded-lg transition-colors cursor-pointer shrink-0"
            aria-label="Close case study dialog"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Tab Navigator */}
        <div className="flex items-center gap-2 px-6 sm:px-8 border-b border-[#1C2030] bg-[#0B0C12]">
          {[
            { id: 'overview', label: '1. Problem & Innovation' },
            { id: 'architecture', label: '2. System Datapath' },
            { id: 'benchmarks', label: '3. Empirical Verification' },
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

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#C2C6D6]">
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  System Context &amp; Objective
                </h4>
                <p className="text-base text-[#D4D7E5] font-light leading-relaxed">
                  {project.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  The Fundamental Engineering Challenge
                </h4>
                <p className="text-sm text-[#9CA1B5] leading-relaxed bg-[#08090D] p-4 rounded-xl border border-[#1C202F]">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-3">
                  Technical Stack &amp; Protocols
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono-tech text-[#D4D7E2] bg-[#141622] rounded border border-[#23273A]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-2">
                  Pipeline &amp; Algorithmic Architecture
                </h4>
                <p className="text-sm text-[#A5AABF] leading-relaxed">
                  {project.architecture}
                </p>
              </div>

              {/* Architectural Schematic Box */}
              <div className="p-5 rounded-xl bg-[#08090C] border border-[#1E2334] space-y-3 font-mono-tech text-xs">
                <div className="text-[11px] text-[#E2B774] uppercase tracking-wider">
                  Data Flow Schematic (Kernel to User-Space Pipeline)
                </div>
                <div className="p-4 bg-[#0D0F16] rounded-lg border border-[#171A26] text-[#A6ABBf] text-[11px] leading-loose">
                  <div>[1] Physical NIC RX → XDP BPF Driver (Priority Filter &lt;140ns)</div>
                  <div>[2] Latent Semantic Vector Classification (PEM score computation)</div>
                  <div>[3] Ring Buffer IPC → Rust Userspace Async Tokio Scheduler</div>
                  <div>[4] WebRTC SCTP / Photonic Switch Conduit Dissemination</div>
                  <div>[5] Client Playback / Kalman Phase Sync / Zero Sensory Artifacts</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'benchmarks' && (
            <div className="space-y-6 animate-fade-in">
              <div>
                <h4 className="text-xs font-mono-tech text-[#8A8F9F] uppercase tracking-wider mb-3">
                  Experimental Milestones &amp; Validations
                </h4>
                <ul className="space-y-3">
                  {project.results.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#AFB3C6]">
                      <span className="font-mono-tech text-[#E2B774] text-xs mt-0.5 shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#090A0F] border border-[#1E2234]">
                    <div className="text-2xl font-serif-display text-[#E2B774] tabular-nums">
                      {m.value}
                    </div>
                    <div className="text-xs font-mono-tech text-[#7C8197] mt-1">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-6 border-t border-[#1C2030] bg-[#0A0B10]">
          <div className="text-xs font-mono-tech text-[#6F7488]">
            Master of Science Research Archive · Ref #{project.id}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#D4D7E2] hover:text-white bg-[#151722] hover:bg-[#1E2232] border border-[#272B3C] rounded-lg transition-colors cursor-pointer"
          >
            Close Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

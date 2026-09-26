import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA, PUBLICATIONS, TECHNICAL_SKILLS, THESIS_DATA } from '../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0E1017] border border-[#272B3D] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Toolbar */}
        <div className="flex items-center justify-between p-6 border-b border-[#1E2232] bg-[#0A0B10]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
              Academic Curriculum Vitae
            </div>
            <h3 className="text-xl font-serif-display text-white font-normal">
              Julian Vance · M.Sc. Information &amp; Communication Technology
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-mono-tech text-[#D4D7E2] hover:text-white bg-[#161824] hover:bg-[#1E2232] border border-[#282C3E] rounded-lg transition-colors cursor-pointer"
            >
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#767B90] hover:text-white hover:bg-[#1B1E2B] rounded-lg transition-colors cursor-pointer"
              aria-label="Close CV modal"
            >
              ✕
            </button>
          </div>
        </div>

        {/* CV Scrollable Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10 text-[#C4C8D8]">
          
          {/* Header Summary */}
          <div className="border-b border-[#1D2130] pb-6 space-y-2">
            <h2 className="text-3xl font-serif-display text-white">Julian Vance</h2>
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#8E93AA]">
              <span>Institute for Advanced Telecommunications &amp; Media Technology</span>
              <span aria-hidden="true">·</span>
              <span>Department of ICT</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#E2B774]">j.vance@telecom-institute.edu</span>
            </div>
          </div>

          {/* Master's Thesis Section */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-widest mb-3 border-b border-[#1E2334] pb-1">
              Master's Thesis
            </h4>
            <div className="space-y-1 text-sm">
              <div className="font-medium text-white text-base font-serif-display">
                {THESIS_DATA.title}: {THESIS_DATA.subtitle}
              </div>
              <div className="text-xs font-mono-tech text-[#8E93AA]">
                Advisors: {THESIS_DATA.advisors.map((a) => a.name).join(', ')} · Defense Date: {THESIS_DATA.defenseDate}
              </div>
              <p className="text-xs text-[#9FA4B8] font-light pt-1 leading-relaxed">
                {THESIS_DATA.abstract}
              </p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-widest mb-4 border-b border-[#1E2334] pb-1">
              Education
            </h4>
            <div className="space-y-5">
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="space-y-1 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-white font-medium">
                    <span className="font-serif-display text-base">{edu.degree}</span>
                    <span className="text-xs font-mono-tech text-[#7C8196]">{edu.period}</span>
                  </div>
                  <div className="text-xs font-mono-tech text-[#999EB2]">
                    {edu.institution}, {edu.location} · GPA: {edu.gpa}
                  </div>
                  <div className="text-xs text-[#82879B]">Focus: {edu.focus}</div>
                  <div className="text-xs text-[#E2B774] pt-0.5">
                    {edu.honors.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research & Academic Appointments */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-widest mb-4 border-b border-[#1E2334] pb-1">
              Academic &amp; Research Appointments
            </h4>
            <div className="space-y-6">
              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-white font-medium">
                    <span className="font-serif-display text-base">{exp.role}</span>
                    <span className="text-xs font-mono-tech text-[#7C8196]">{exp.period}</span>
                  </div>
                  <div className="text-xs font-mono-tech text-[#999EB2]">
                    {exp.organization}, {exp.location}
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-[#A5AABF] pl-1">
                    {exp.description.map((desc, dIdx) => (
                      <li key={dIdx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Peer-Reviewed Publications */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-widest mb-4 border-b border-[#1E2334] pb-1">
              Peer-Reviewed Publications
            </h4>
            <div className="space-y-4">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="text-xs space-y-1">
                  <div className="text-[#DCE0EE]">
                    [{idx + 1}] <span className="text-white font-medium">{pub.authors}</span>. "{pub.title}." <span className="italic">{pub.venue}</span>, {pub.year}. DOI: {pub.doi}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical & Theoretical Competencies */}
          <div>
            <h4 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-widest mb-4 border-b border-[#1E2334] pb-1">
              Technical &amp; Mathematical Competencies
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono-tech">
              <div>
                <div className="text-[#E2B774] mb-2 font-medium">Network Protocols &amp; Datapaths</div>
                <div className="space-y-1 text-[#8F94A7]">
                  {TECHNICAL_SKILLS.protocols.map((p, i) => (
                    <div key={i}>· {p}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[#E2B774] mb-2 font-medium">Systems &amp; Software</div>
                <div className="space-y-1 text-[#8F94A7]">
                  {TECHNICAL_SKILLS.engineering.map((e, i) => (
                    <div key={i}>· {e}</div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[#E2B774] mb-2 font-medium">Information Theory &amp; DSP</div>
                <div className="space-y-1 text-[#8F94A7]">
                  {TECHNICAL_SKILLS.theoretical.map((t, i) => (
                    <div key={i}>· {t}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#1C2030] bg-[#0A0B10] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#D4D7E2] hover:text-white bg-[#151722] hover:bg-[#1E2232] border border-[#272B3C] rounded-lg transition-colors cursor-pointer"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};

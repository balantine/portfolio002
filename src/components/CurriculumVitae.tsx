import React from 'react';
import { EDUCATION_DATA, EXPERIENCE_DATA, TECHNICAL_SKILLS } from '../data/portfolioData';

interface CurriculumVitaeProps {
  onOpenCvModal: () => void;
}

export const CurriculumVitae: React.FC<CurriculumVitaeProps> = ({ onOpenCvModal }) => {
  return (
    <section id="cv" className="py-24 md:py-32 border-b border-[#1A1D27] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Academic Credentials &amp; Appointments
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Curriculum Vitae &amp; Pedagogy
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Graduate research, teaching assistantships, and core competencies in information systems.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onOpenCvModal}
              className="px-5 py-2.5 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors cursor-pointer font-medium shadow-sm"
            >
              Examine Full Academic CV (Print/PDF) →
            </button>
          </div>
        </div>

        {/* 2-Column CV Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Education & Appointments */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Education History */}
            <div>
              <h3 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider mb-6 flex items-center gap-2">
                <span>01. Higher Education &amp; Degrees</span>
                <span className="h-[1px] bg-[#222738] flex-1" />
              </h3>

              <div className="space-y-6">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0D0F16] border border-[#1E2333] space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h4 className="text-base font-serif-display text-[#F4F4F7] font-normal">
                        {edu.degree}
                      </h4>
                      <span className="text-xs font-mono-tech text-[#7C8197]">{edu.period}</span>
                    </div>

                    <div className="text-xs font-mono-tech text-[#A4A8BC]">
                      {edu.institution}, {edu.location} · <span className="text-[#E2B774]">{edu.gpa}</span>
                    </div>

                    <p className="text-xs text-[#8A8F9F] font-light">
                      Specialization: {edu.focus}
                    </p>

                    <div className="pt-2 text-xs font-mono-tech text-[#7C8196] border-t border-[#191D2C]">
                      {edu.honors.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Teaching Appointments */}
            <div>
              <h3 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider mb-6 flex items-center gap-2">
                <span>02. Research &amp; Teaching Appointments</span>
                <span className="h-[1px] bg-[#222738] flex-1" />
              </h3>

              <div className="space-y-6">
                {EXPERIENCE_DATA.map((exp, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-[#0D0F16] border border-[#1E2333] space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <h4 className="text-base font-serif-display text-[#F4F4F7] font-normal">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-mono-tech text-[#7C8197]">{exp.period}</span>
                    </div>

                    <div className="text-xs font-mono-tech text-[#A4A8BC]">
                      {exp.organization} · {exp.location}
                    </div>

                    <ul className="space-y-1.5 text-xs text-[#959AAE] font-light list-disc list-inside">
                      {exp.description.map((item, dIdx) => (
                        <li key={dIdx}>{item}</li>
                      ))}
                    </ul>

                    <div className="pt-2 text-[11px] font-mono-tech text-[#6F7488]">
                      Core Focus: {exp.skills.join(' · ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Repertoire Matrix */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 rounded-2xl bg-[#0D0F17] border border-[#202538] space-y-6 sticky top-28">
              
              <div>
                <h3 className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider mb-2">
                  Technical &amp; Theoretical Repertoire
                </h3>
                <p className="text-xs text-[#8A8F9F] font-light">
                  Synthesizing rigorous mathematical fundamentals with wire-speed systems implementation.
                </p>
              </div>

              {/* Network Protocols */}
              <div className="space-y-2.5">
                <span className="text-xs font-mono-tech text-[#C2C6D6] font-medium block">
                  Telecommunication Protocols &amp; Datapaths
                </span>
                <div className="space-y-1 text-xs font-mono-tech text-[#8E93AA]">
                  {TECHNICAL_SKILLS.protocols.map((proto, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#E2B774] text-[10px]">■</span>
                      <span>{proto}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Systems Engineering */}
              <div className="space-y-2.5 pt-4 border-t border-[#1C2030]">
                <span className="text-xs font-mono-tech text-[#C2C6D6] font-medium block">
                  Systems &amp; Software Engineering
                </span>
                <div className="space-y-1 text-xs font-mono-tech text-[#8E93AA]">
                  {TECHNICAL_SKILLS.engineering.map((eng, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#60A5FA] text-[10px]">■</span>
                      <span>{eng}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Theory & DSP */}
              <div className="space-y-2.5 pt-4 border-t border-[#1C2030]">
                <span className="text-xs font-mono-tech text-[#C2C6D6] font-medium block">
                  Information Theory, DSP &amp; Math
                </span>
                <div className="space-y-1 text-xs font-mono-tech text-[#8E93AA]">
                  {TECHNICAL_SKILLS.theoretical.map((th, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="text-[#A78BFA] text-[10px]">■</span>
                      <span>{th}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filterCategories = [
    { id: 'all', label: 'All Research Works' },
    { id: 'Distributed Systems & Telecommunications', label: 'Distributed Systems' },
    { id: 'Human-Computer Interaction & Audio DSP', label: 'HCI & Audio DSP' },
    { id: 'Optical Communications & Algorithmic Routing', label: 'Optical Comms' },
    { id: 'Applied Cryptography & Media Systems', label: 'Applied Crypto' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedFilter === 'all') return true;
    return p.domain.toLowerCase().includes(selectedFilter.toLowerCase()) || p.domain === selectedFilter;
  });

  return (
    <section id="projects" className="py-24 md:py-32 border-b border-[#1A1D27] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Title and Filter Segmented Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Curated Research &amp; Engineering Capstones
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              Selected Works &amp; Protocol Architectures
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Field-tested systems spanning low-latency mesh routing, binaural acoustic telepresence, and photonic switching.
            </p>
          </div>

          {/* Interactive filter buttons (Allowed per constitution) */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-1.5 p-1 bg-[#10121B] rounded-xl border border-[#202538]">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer whitespace-nowrap ${
                  selectedFilter === cat.id
                    ? 'bg-[#1D2232] text-[#E2B774] shadow-xs'
                    : 'text-[#7D8296] hover:text-[#CCD0DF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {filteredProjects.map((project) => {
            const isFeatured = project.featured;

            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`group relative rounded-2xl bg-[#0D0E16] border border-[#202436] hover:border-[#E2B774]/40 p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-black/40 ${
                  isFeatured ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-6 lg:col-span-5'
                }`}
              >
                <div>
                  {/* Top unboxed metadata line (Zero-Pill discipline) */}
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-[#7C8198] mb-4">
                    <span className="text-[#E2B774] font-medium">{project.domain}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.year}</span>
                    <span aria-hidden="true">·</span>
                    <span>{project.readTime}</span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-serif-display text-[#F4F4F7] font-normal group-hover:text-[#E2B774] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  
                  <p className="text-xs text-[#8A8F9F] mt-1.5 font-light leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-[#9CA1B5] mt-4 font-light leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Quantitative Empirical Highlights */}
                  <div className="grid grid-cols-3 gap-3 my-6 pt-5 border-t border-[#1C2030]">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-lg sm:text-xl font-serif-display text-[#F5F5F7] tabular-nums">
                          {m.value}
                        </div>
                        <div className="text-[11px] font-mono-tech text-[#6F7488] mt-0.5 truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer: Tech Stack + Action */}
                <div className="pt-4 border-t border-[#191D2C] flex items-center justify-between">
                  {/* Stack unboxed text */}
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-[#787D93] truncate max-w-[70%]">
                    <span>{project.stack.slice(0, 3).join(' · ')}</span>
                    {project.stack.length > 3 && <span>+{project.stack.length - 3}</span>}
                  </div>

                  <span className="text-xs font-mono-tech text-[#E2B774] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Dossier</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

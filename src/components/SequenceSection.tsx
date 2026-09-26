import React, { useState } from 'react';
import { COURSE_SEQUENCE } from '../data/portfolioData';

export const SequenceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'emphasis'>('all');

  const filteredCourses = COURSE_SEQUENCE.filter((course) => {
    if (filter === 'all') return true;
    return course.category === filter;
  });

  return (
    <section id="sequence" className="py-24 md:py-32 border-b border-[#1A1D27] relative bg-[#090A0E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#1C202C]">
          <div>
            <div className="text-xs font-mono-tech text-[#E2B774] tracking-widest uppercase mb-3">
              Curriculum Roadmap · Sequence
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-[#F4F4F7] tracking-tight">
              M.S. ICT Course Sequence
            </h2>
            <p className="text-sm text-[#8F94A7] font-light mt-1">
              Chronological progression through core information technologies, enterprise systems, and capstone portfolio milestones.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#10121B] rounded-xl border border-[#202538]">
            {[
              { id: 'all', label: 'All Courses (11)' },
              { id: 'core', label: 'Core Requirements' },
              { id: 'emphasis', label: 'Enterprise Emphasis' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as typeof filter)}
                className={`px-3 py-1.5 text-xs font-mono-tech rounded-lg transition-colors cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#1D2232] text-[#E2B774] shadow-xs'
                    : 'text-[#7D8296] hover:text-[#CCD0DF]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Chronological Timeline Grid */}
        <div className="space-y-4">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#0C0E16] border border-[#1E2333] hover:border-[#2D3349] transition-all group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Course Metadata & Title */}
                <div className="space-y-2 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#7C8197]">
                    <span className="text-[#E2B774] font-medium">{course.term}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-white font-medium">{course.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-[#A2A6B9] capitalize">
                      {course.category === 'core' ? 'Core Program' : 'Enterprise Emphasis'}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="text-emerald-400 font-mono-tech text-[11px]">
                      ● {course.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-display text-[#F4F4F7] font-normal group-hover:text-[#E2B774] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#9CA1B5] font-light leading-relaxed pt-1">
                    {course.description}
                  </p>
                </div>

                {/* Term Badge & Index */}
                <div className="flex md:flex-col items-end justify-between md:justify-start gap-2 shrink-0">
                  <span className="text-xs font-mono-tech text-[#6F7489] bg-[#141622] px-3 py-1 rounded-lg border border-[#23273A]">
                    Course #{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono-tech text-[#5A5F73]">
                    UW-Stout
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Capstone Callout (ICT-780) */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0D0F17] border border-[#E2B774]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-xs font-mono-tech text-[#E2B774] uppercase tracking-wider">
              Capstone Milestone · Fall 25 · ICT 780
            </div>
            <h4 className="text-xl font-serif-display text-white">
              ICT Portfolio Development &amp; Presentation
            </h4>
            <p className="text-xs text-[#959AAE] font-light max-w-2xl">
              Culminating synthesis producing an electronic portfolio that demonstrates mastery of core and emphasis competencies through curated artifacts and research-based reflections.
            </p>
          </div>

          <a
            href="#competencies"
            className="px-5 py-2.5 text-xs font-mono-tech text-[#090A0D] bg-[#E2B774] hover:bg-[#EDC78B] rounded-lg transition-colors font-medium whitespace-nowrap shadow-sm cursor-pointer"
          >
            Review Competencies →
          </a>
        </div>

      </div>
    </section>
  );
};

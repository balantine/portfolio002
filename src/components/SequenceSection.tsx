import React, { useState } from 'react';
import { COURSE_SEQUENCE } from '../data/portfolioData';

export const SequenceSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'core' | 'emphasis'>('all');

  const filteredCourses = COURSE_SEQUENCE.filter((course) => {
    if (filter === 'all') return true;
    return course.category === filter;
  });

  return (
    <section id="sequence" className="py-24 md:py-32 border-b border-[#22396F]/50 relative bg-[#0D1C42]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#22396F]/60">
          <div>
            <div className="text-xs font-mono-tech text-[#FCF1D0] tracking-widest uppercase mb-3 font-semibold">
              Curriculum Roadmap · Sequence
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif-display font-normal text-white tracking-tight">
              M.S. ICT Course Sequence
            </h2>
            <p className="text-sm text-[#FCF1D0]/70 font-light mt-1">
              Chronological progression through core information technologies, enterprise systems, and capstone portfolio milestones.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#010736] rounded-xl border border-[#22396F]">
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
                    ? 'bg-[#22396F] text-[#FCF1D0] font-semibold shadow-xs'
                    : 'text-[#FCF1D0]/70 hover:text-white'
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
              className="p-6 sm:p-7 rounded-2xl bg-[#010736] border border-[#22396F] hover:border-[#FCF1D0]/60 transition-all group shadow-md"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                
                {/* Course Metadata & Title */}
                <div className="space-y-2 max-w-4xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-tech text-[#FCF1D0]/80">
                    <span className="text-[#FCF1D0] font-semibold">{course.term}</span>
                    <span aria-hidden="true" className="text-[#22396F]">·</span>
                    <span className="text-white font-medium">{course.code}</span>
                    <span aria-hidden="true" className="text-[#22396F]">·</span>
                    <span className="text-[#FCF1D0]/75 capitalize">
                      {course.category === 'core' ? 'Core Program' : 'Enterprise Emphasis'}
                    </span>
                    <span aria-hidden="true" className="text-[#22396F]">·</span>
                    <span className="text-[#FCF1D0] font-mono-tech text-[11px] bg-[#22396F]/50 px-2 py-0.5 rounded border border-[#22396F]">
                      ● {course.status}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif-display text-white font-normal group-hover:text-[#FCF1D0] transition-colors">
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#FCF1D0]/80 font-light leading-relaxed pt-1">
                    {course.description}
                  </p>
                </div>

                {/* Term Badge & Index */}
                <div className="flex md:flex-col items-end justify-between md:justify-start gap-2 shrink-0">
                  <span className="text-xs font-mono-tech text-[#FCF1D0] bg-[#0D1C42] px-3 py-1 rounded-lg border border-[#22396F]">
                    Course #{idx + 1}
                  </span>
                  <span className="text-[11px] font-mono-tech text-[#FCF1D0]/60">
                    UW-Stout
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Capstone Callout (ICT-780) */}
        <div className="mt-8 p-6 rounded-2xl bg-[#010736] border border-[#FCF1D0]/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1">
            <div className="text-xs font-mono-tech text-[#FCF1D0] uppercase tracking-wider font-semibold">
              Capstone Milestone · Fall 25 · ICT 780
            </div>
            <h4 className="text-xl font-serif-display text-white">
              ICT Portfolio Development &amp; Presentation
            </h4>
            <p className="text-xs text-[#FCF1D0]/80 font-light max-w-2xl">
              Culminating synthesis producing an electronic portfolio that demonstrates mastery of core and emphasis competencies through curated artifacts and research-based reflections.
            </p>
          </div>

          <a
            href="#competencies"
            className="px-5 py-2.5 text-xs font-mono-tech text-[#010736] bg-[#FCF1D0] hover:bg-white rounded-lg transition-colors font-semibold whitespace-nowrap shadow-md cursor-pointer"
          >
            Review Competencies →
          </a>
        </div>

      </div>
    </section>
  );
};

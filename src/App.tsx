/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ThesisSection } from './components/ThesisSection';
import { InteractiveLab } from './components/InteractiveLab';
import { ProjectsSection } from './components/ProjectsSection';
import { PublicationsSection } from './components/PublicationsSection';
import { CurriculumVitae } from './components/CurriculumVitae';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ThesisModal } from './components/ThesisModal';
import { CvModal } from './components/CvModal';

export default function App() {
  const [isThesisModalOpen, setIsThesisModalOpen] = useState(false);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090C] text-[#ECECEE] selection:bg-[#E2B774] selection:text-[#08090C] relative">
      {/* Structural Top Navigation Bar */}
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onOpenThesisModal={() => setIsThesisModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* Split-Screen Editorial Hero */}
        <Hero
          onOpenThesisModal={() => setIsThesisModalOpen(true)}
          onExploreProjects={handleScrollToProjects}
        />

        {/* Master of Science Thesis Presentation */}
        <ThesisSection
          onOpenFullDossier={() => setIsThesisModalOpen(true)}
        />

        {/* Selected Works & Protocol Architectures */}
        <ProjectsSection />

        {/* Real-Time Interactive Telemetry Laboratory */}
        <InteractiveLab />

        {/* Peer-Reviewed Academic Publications */}
        <PublicationsSection />

        {/* Curriculum Vitae & Pedagogy */}
        <CurriculumVitae
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* Contact & Academic Engagement */}
        <ContactSection />
      </main>

      {/* Quiet Academic Footer */}
      <Footer />

      {/* Modal Dialogs */}
      <ThesisModal
        isOpen={isThesisModalOpen}
        onClose={() => setIsThesisModalOpen(false)}
      />

      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
}

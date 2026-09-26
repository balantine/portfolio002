/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ObjectivesSection } from './components/ObjectivesSection';
import { SequenceSection } from './components/SequenceSection';
import { CompetenciesSection } from './components/CompetenciesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RevealSection } from './components/RevealSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#08090C] text-[#ECECEE] selection:bg-[#E2B774] selection:text-[#08090C] relative">
      {/* Structural Top Navigation Bar with Progress Bar */}
      <Navbar />

      {/* Main Content Sections mirroring https://portfolio.avalon.dev */}
      <main>
        {/* Hero Section */}
        <RevealSection>
          <Hero />
        </RevealSection>

        {/* About Section */}
        <RevealSection>
          <AboutSection />
        </RevealSection>

        {/* MS-ICT Program Objectives Section */}
        <RevealSection>
          <ObjectivesSection />
        </RevealSection>

        {/* M.S. ICT Course Sequence Section */}
        <RevealSection>
          <SequenceSection />
        </RevealSection>

        {/* M.S. ICT Core & Emphasis Competencies */}
        <RevealSection>
          <CompetenciesSection />
        </RevealSection>

        {/* Contact Jake Section */}
        <RevealSection>
          <ContactSection />
        </RevealSection>
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}

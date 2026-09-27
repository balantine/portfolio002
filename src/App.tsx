import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { SiteFooter } from './components/SiteFooter';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SequencePage } from './pages/SequencePage';
import { CompetenciesPage } from './pages/CompetenciesPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      if (['/about', '/sequence-1', '/competencies', '/contact'].includes(pathname)) {
        return pathname;
      }
      // Check hash fallback
      const hash = window.location.hash.replace('#', '');
      if (hash && ['/about', '/sequence-1', '/competencies', '/contact', 'about', 'sequence-1', 'competencies', 'contact'].includes(hash)) {
        return hash.startsWith('/') ? hash : `/${hash}`;
      }
    }
    return '/';
  });

  const navigate = (path: string) => {
    setCurrentPath(path);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname;
      if (['/about', '/sequence-1', '/competencies', '/contact', '/'].includes(pathname)) {
        setCurrentPath(pathname);
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#010736] text-[#FCF1D0] selection:bg-[#FCF1D0] selection:text-[#010736]">
      {/* Top Header Navigation matching portfolio.avalon.dev */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Main Content Render based on current route */}
      <main className="flex-1">
        {currentPath === '/' && <HomePage />}
        {currentPath === '/about' && <AboutPage onNavigate={navigate} />}
        {currentPath === '/sequence-1' && <SequencePage />}
        {currentPath === '/competencies' && <CompetenciesPage />}
        {currentPath === '/contact' && <ContactPage />}
      </main>

      {/* Squarespace Global Footer matching portfolio.avalon.dev */}
      <SiteFooter onNavigate={navigate} />
    </div>
  );
}

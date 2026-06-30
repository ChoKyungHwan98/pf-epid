import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimeHistoryView } from './components/AnimeHistoryView';
import { DashboardGameHistoryView } from './components/DashboardGameHistoryView';
import { DashboardHome } from './components/DashboardHome';
import { DashboardShell } from './components/DashboardShell';
import type { DashboardView } from './components/DashboardShell';
import { Portfolio } from './components/Portfolio';
import { Resume } from './components/Resume';
import { MobileApp } from './components/mobile/MobileApp';
import { useEditableContent } from './hooks/useEditableContent';
import { useIsMobile } from './hooks/useIsMobile';
import { PROJECTS, RESUME_DATA } from './data';

const normalizeView = (value: string | null): DashboardView => {
  if (value === 'resume' || value === 'cover-letter') return 'resume';
  if (value === 'portfolio') return 'portfolio';
  if (value === 'game-history' || value === 'play') return 'game-history';
  if (value === 'anime-history' || value === 'anime') return 'anime-history';
  return 'home';
};

function App() {
  const [view, setView] = useState<DashboardView>(() => {
    if (typeof window === 'undefined') return 'home';
    const params = new URLSearchParams(window.location.search);
    return normalizeView(params.get('view'));
  });
  const [resumeTab, setResumeTab] = useState<'resume' | 'cover-letter'>(() => {
    if (typeof window === 'undefined') return 'resume';
    const params = new URLSearchParams(window.location.search);
    return params.get('view') === 'cover-letter' ? 'cover-letter' : 'resume';
  });
  const [isEditing, setIsEditing] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const [resumeData, setResumeData, resumeLoaded] = useEditableContent(RESUME_DATA, 'webzen_resume_data');
  const [projectsData, setProjectsData, projectsLoaded] = useEditableContent(PROJECTS, 'webzen_portfolio_projects_v2');

  const isMobile = useIsMobile();
  const isDataLoaded = resumeLoaded && projectsLoaded;

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const nextView = normalizeView(params.get('view'));
      setView(nextView);
      setResumeTab(params.get('view') === 'cover-letter' ? 'cover-letter' : 'resume');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const changeView = (nextView: DashboardView) => {
    setView(nextView);
    if (nextView !== 'resume') setResumeTab('resume');
    const url = nextView === 'home' ? window.location.pathname : `?view=${nextView}`;
    window.history.pushState({ view: nextView }, '', url);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const changeResumeTab = (tab: 'resume' | 'cover-letter') => {
    setResumeTab(tab);
    if (view !== 'resume') setView('resume');
    const url = tab === 'cover-letter' ? '?view=cover-letter' : '?view=resume';
    window.history.pushState({ view: 'resume', tab }, '', url);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const triggerPdfDownload = () => {
    setIsGeneratingPdf(true);
    window.dispatchEvent(new Event('triggerPdfDownload'));
    window.setTimeout(() => setIsGeneratingPdf(false), 500);
  };

  if (!isDataLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#15171b]">
        <div className="dashboard-loading">
          <div />
          <p>데이터를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isMobile) return <MobileApp />;

  return (
    <DashboardShell
      currentView={view}
      onViewChange={changeView}
      resumeTab={resumeTab}
      setResumeTab={changeResumeTab}
      onPdfDownload={triggerPdfDownload}
    >
      <AnimatePresence initial={false}>
        {view === 'home' && <DashboardHome key="home" onViewChange={changeView} />}

        {view === 'resume' && (
          <Resume
            key="resume"
            setView={(next) => {
              if (next === 'cover-letter') changeResumeTab('cover-letter');
              else changeView(normalizeView(String(next)));
            }}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            data={resumeData}
            setData={setResumeData}
            onBack={() => changeView('home')}
            activeTab={resumeTab}
            setActiveTab={changeResumeTab}
            isGeneratingPdf={isGeneratingPdf}
            setIsGeneratingPdf={setIsGeneratingPdf}
          />
        )}

        {view === 'portfolio' && (
          <Portfolio
            key="portfolio"
            onProjectClick={() => undefined}
            isEditing={isEditing}
            projects={projectsData}
            setProjects={setProjectsData}
            setView={changeView}
            onBack={() => changeView('home')}
          />
        )}

        {view === 'game-history' && (
          <motion.div
            key="game-history"
            className="dashboard-page-motion dashboard-view-game-history"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <DashboardGameHistoryView />
          </motion.div>
        )}

        {view === 'anime-history' && (
          <motion.div
            key="anime-history"
            className="dashboard-page-motion dashboard-view-anime-history"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <AnimeHistoryView />
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardShell>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ProjectDetail } from './ProjectDetail';
import { ProjectCard } from './ProjectCard';
import type { Project } from '../types';

interface PortfolioProps {
  onProjectClick: (p: Project) => void;
  isEditing: boolean;
  projects: Project[];
  setProjects: (p: Project[]) => void;
  setView: (v: any) => void;
  onBack: () => void;
  initialProjectId?: number | null;
}

export const Portfolio = ({ isEditing, projects, setProjects, initialProjectId }: PortfolioProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (initialProjectId != null) {
      const target = projects.find(p => p.id === initialProjectId);
      if (target) setSelectedProject(target);
    }
    window.scrollTo(0, 0);
  }, [initialProjectId, projects]);

  const categories = ['전체', '밸런스 기획', '시스템 기획', '코어 룰 기획', '프로토타이핑', 'AI 활용'];
  const [activeCategory, setActiveCategory] = useState('전체');

  const isProjectInCategory = (p: Project, category: string) => {
    if (category === '전체') return true;
    return (p.keyTasks && p.keyTasks.includes(category)) || (p.roles && p.roles.includes(category));
  };

  const filteredProjects = projects.filter(p => isProjectInCategory(p, activeCategory));
  const categoryStats = categories.map(category => ({
    label: category,
    count: projects.filter(p => isProjectInCategory(p, category)).length,
  }));
  const categoryNotes: Record<string, string> = {
    '전체': '프로젝트 전체 보기',
    '밸런스 기획': '수치, 보상, 성장 곡선',
    '시스템 기획': '규칙, 흐름, 플레이 구조',
    '코어 룰 기획': '핵심 루프와 판단 기준',
    '프로토타이핑': '검증 가능한 형태로 구현',
    'AI 활용': '제작 속도와 반복 개선',
  };

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="portfolio-dashboard dashboard-view-portfolio min-h-screen bg-transparent relative">
      <motion.section
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
        className="portfolio-dashboard-section relative z-10 pt-28 pb-16 px-4 md:px-6 max-w-[1400px] mx-auto"
      >
        <div className="portfolio-workspace">
          <div className="portfolio-main-panel">

          {/* Page Header */}
          <div className="portfolio-page-head">
            <div>
              <div className="portfolio-title-row">
                <h1>기획 포트폴리오</h1>
                <span>총 {projects.length}개 프로젝트</span>
              </div>
            </div>
          </div>

          <AnimatePresence initial={false}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.14 }}
              className="portfolio-project-grid"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    duration: 0.2,
                    delay: Math.min(index * 0.01, 0.08),
                    ease: [0.16, 1, 0.3, 1]
                  }}
                >
                  <ProjectCard
                    project={project}
                    idx={projects.findIndex(p => p.id === project.id)}
                    isEditing={isEditing}
                    projects={projects}
                    setProjects={setProjects}
                    onProjectClick={setSelectedProject}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          </div>

          <aside className="portfolio-wing dashboard-right-rail os-right-sidebar">
            <div className="portfolio-wing-card">
              <div className="portfolio-wing-title">
                <span>기획 영역</span>
              </div>
              <div className="portfolio-filter-stack right-sidebar-list">
                {categoryStats.map(({ label, count }, index) => {
                  const isActive = activeCategory === label;

                  return (
                  <button
                    type="button"
                    key={label}
                    aria-pressed={isActive}
                    className={`portfolio-filter-card${isActive ? ' is-active' : ''}${label === '전체' ? ' is-all' : ''}`}
                    onClick={() => setActiveCategory(label)}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activePortfolioFilterCard"
                        className="portfolio-filter-card-bg"
                        transition={{ type: 'spring', bounce: 0.12, duration: 0.28 }}
                      />
                    )}
                    <span className="portfolio-filter-card-index">{label === '전체' ? '전체' : String(index).padStart(2, '0')}</span>
                    <span className="portfolio-filter-card-copy">
                      <strong>{label}</strong>
                      <em>{categoryNotes[label]}</em>
                    </span>
                    <span className="portfolio-filter-card-count">{count}</span>
                  </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </motion.section>

      {/* Detail Overlay Modal */}
      {createPortal(
        <AnimatePresence>
          {selectedProject && (
            <div className="project-detail-overlay">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="project-detail-backdrop"
              />

              <div className="project-detail-stage">
                <motion.div
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 24, scale: 0.98 }}
                  transition={{ type: 'spring', damping: 28, stiffness: 220 }}
                  className="project-detail-modal"
                >
                  <div className="flex-1 overflow-hidden flex flex-col min-h-0">
                    <ProjectDetail
                      project={selectedProject}
                      onBack={() => setSelectedProject(null)}
                      isEditing={isEditing}
                      onSaveContent={(c) => {
                        const p = [...projects];
                        const i = p.findIndex(pp => pp.id === selectedProject.id);
                        if (i !== -1) { p[i].content = c; setProjects(p); setSelectedProject({ ...selectedProject, content: c }); }
                      }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

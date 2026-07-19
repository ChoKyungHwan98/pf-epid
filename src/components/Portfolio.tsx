import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight } from 'lucide-react';
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
  onSelectedProjectChange?: (title: string | null) => void;
}

export const Portfolio = ({ isEditing, projects, setProjects, initialProjectId, onSelectedProjectChange }: PortfolioProps) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (initialProjectId != null) {
      const target = projects.find(p => p.id === initialProjectId);
      if (target) {
        setSelectedProject(target);
        onSelectedProjectChange?.(target.title);
      }
    } else {
      setSelectedProject(null);
      onSelectedProjectChange?.(null);
    }
    window.scrollTo(0, 0);
  }, [initialProjectId, projects, onSelectedProjectChange]);

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

  const openProject = (project: Project) => {
    setSelectedProject(project);
    onSelectedProjectChange?.(project.title);
    window.history.pushState(
      { view: 'portfolio', projectId: project.id },
      '',
      `?view=portfolio&project=${project.id}`
    );
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeProject = () => {
    setSelectedProject(null);
    onSelectedProjectChange?.(null);
    window.history.pushState({ view: 'portfolio' }, '', '?view=portfolio');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const saveSelectedProjectContent = (content: string) => {
    if (!selectedProject) return;
    const nextProjects = [...projects];
    const projectIndex = nextProjects.findIndex(project => project.id === selectedProject.id);
    if (projectIndex === -1) return;
    nextProjects[projectIndex] = { ...nextProjects[projectIndex], content };
    setProjects(nextProjects);
    setSelectedProject({ ...selectedProject, content });
  };

  return (
    <div className="portfolio-dashboard dashboard-view-portfolio min-h-screen bg-transparent relative">
      <section className="portfolio-dashboard-section relative z-10 pt-28 pb-16 px-4 md:px-6 max-w-[1400px] mx-auto">
        {selectedProject ? (
          <motion.div
            key={`project-detail-${selectedProject.id}`}
            className="portfolio-detail-route"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectDetail
              project={selectedProject}
              onBack={closeProject}
              isEditing={isEditing}
              onSaveContent={saveSelectedProjectContent}
            />
          </motion.div>
        ) : (
        <div className="portfolio-workspace">
          <div className="portfolio-main-panel">

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
                    onProjectClick={openProject}
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
                {categoryStats.map(({ label, count }) => {
                  const isActive = activeCategory === label;

                  return (
                  <button
                    type="button"
                    key={label}
                    aria-pressed={isActive}
                    aria-label={`${label}, 프로젝트 ${count}개`}
                    className={`portfolio-filter-card${isActive ? ' is-active' : ''}${label === '전체' ? ' is-all' : ''}`}
                    onClick={() => setActiveCategory(label)}
                  >
                    <span className="portfolio-filter-card-index" aria-hidden="true" />
                    <span className="portfolio-filter-card-copy">
                      <strong>{label}</strong>
                    </span>
                    <span className="portfolio-filter-card-count">{count}</span>
                    <ChevronRight className="portfolio-filter-card-arrow" aria-hidden="true" />
                  </button>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
        )}
      </section>

    </div>
  );
};

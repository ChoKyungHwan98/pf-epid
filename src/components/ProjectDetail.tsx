import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Calendar,
  Calculator,
  CheckCircle2,
  ExternalLink,
  FileText,
  LayoutGrid,
  Play,
  Sparkles,
  Users,
} from 'lucide-react';
import type { Project } from '../types';
import { EBookGallery } from './EBookGallery';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  isEditing?: boolean;
  onSaveContent?: (content: string) => void;
}

type TabType = 'overview' | 'document' | 'scenario' | 'video' | 'link' | 'simulator' | 'prototype' | 'gantt';

type DetailTab = {
  id: TabType;
  label: string;
  icon: React.ReactNode;
  show: boolean;
};

const toEmbedUrl = (url?: string) => {
  if (!url) return '';
  if (url.includes('youtu.be/')) return url.replace('youtu.be/', 'youtube.com/embed/');
  return url.replace('watch?v=', 'embed/');
};

export const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const [activeTab, setActiveTab] = useState<TabType>(project.openExternalByDefault ? 'link' : 'overview');
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = useMemo<DetailTab[]>(() => [
    {
      id: 'overview',
      label: '개요',
      icon: <LayoutGrid aria-hidden="true" />,
      show: true,
    },
    {
      id: 'document',
      label: project.documentLabel || '기획서',
      icon: <FileText aria-hidden="true" />,
      show: Boolean(project.gallery || project.pdfUrl),
    },
    {
      id: 'scenario',
      label: '시나리오',
      icon: <FileText aria-hidden="true" />,
      show: Boolean(project.scenarioGallery),
    },
    {
      id: 'prototype',
      label: '프로토타입',
      icon: <Sparkles aria-hidden="true" />,
      show: Boolean(project.prototypeUrl),
    },
    {
      id: 'video',
      label: '영상',
      icon: <Play aria-hidden="true" />,
      show: Boolean(project.videoUrl),
    },
    {
      id: 'link',
      label: project.externalTabLabel || '외부 링크',
      icon: <ExternalLink aria-hidden="true" />,
      show: Boolean(project.externalUrl && !project.hideExternalTab),
    },
    {
      id: 'simulator',
      label: '시뮬레이터',
      icon: <Calculator aria-hidden="true" />,
      show: Boolean(project.simulatorUrl || project.hasSimulator || project.simulatorVideoUrl),
    },
    {
      id: 'gantt',
      label: '일정표',
      icon: <Calendar aria-hidden="true" />,
      show: Boolean(project.ganttUrl),
    },
  ], [project]);

  const visibleTabs = tabs.filter(tab => tab.show && (!project.externalOnly || tab.id === 'link'));
  const galleryImages = activeTab === 'scenario' && project.scenarioGallery
    ? project.scenarioGallery
    : (project.gallery || [project.image]);

  const openTab = (tab: TabType) => {
    setActiveTab(tab);
    setCurrentPage(0);
  };

  return (
    <motion.div
      className="project-detail-sheet"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
    >
      <main className="project-detail-main">
        <section className={`project-detail-content is-${activeTab}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="project-detail-tab-body"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {activeTab === 'overview' && (
                <OverviewPanel project={project} />
              )}

              {(activeTab === 'document' || activeTab === 'scenario') && (
                <DocumentPanel
                  project={project}
                  images={galleryImages}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                  isScenario={activeTab === 'scenario'}
                />
              )}

              {activeTab === 'video' && (
                <VideoPanel url={project.videoUrl} title={`${project.title} 영상`} />
              )}

              {activeTab === 'simulator' && (
                <SimulatorPanel project={project} />
              )}

              {activeTab === 'prototype' && project.prototypeUrl && (
                <iframe className="project-detail-frame project-detail-prototype" src={project.prototypeUrl} title={`${project.title} 프로토타입`} />
              )}

              {activeTab === 'link' && (
                project.openExternalByDefault && project.externalUrl ? (
                  <DashboardPanel project={project} />
                ) : (
                  <ExternalPanel project={project} />
                )
              )}

              {activeTab === 'gantt' && (
                <ExternalPanel
                  project={project}
                  title="일정표 보기"
                  description="프로젝트 진행 흐름과 작업 분배를 외부 문서에서 확인합니다."
                  url={project.ganttUrl}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </section>
      </main>

      <aside className="project-detail-rail" aria-label="프로젝트 상세 메뉴">
        <div className="project-detail-rail-head">
          <button
            type="button"
            className="project-detail-back"
            onClick={onBack}
            aria-label="포트폴리오로 돌아가기"
          >
            <ArrowLeft aria-hidden="true" />
            <span>포트폴리오로 돌아가기</span>
          </button>
        </div>

        <nav className="project-detail-tab-list" aria-label="프로젝트 콘텐츠">
          {visibleTabs.map(tab => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                className={`project-detail-tab${isActive ? ' is-active' : ''}`}
                onClick={() => openTab(tab.id)}
                aria-pressed={isActive}
                aria-current={isActive ? 'page' : undefined}
              >
                <span className="project-detail-tab-bar" />
                <span className="project-detail-tab-icon">{tab.icon}</span>
                <span className="project-detail-tab-copy">
                  <strong>{tab.label}</strong>
                </span>
                <ArrowRight aria-hidden="true" />
              </button>
            );
          })}
        </nav>

        <div className="project-detail-meta">
          <h3>프로젝트 정보</h3>
          <dl>
            <div>
              <dt><Users aria-hidden="true" /><span>팀 규모</span></dt>
              <dd>{project.stats?.teamSize || '-'}</dd>
            </div>
            <div>
              <dt><BriefcaseBusiness aria-hidden="true" /><span>담당</span></dt>
              <dd>{project.stats?.myRole || project.roles.join(', ')}</dd>
            </div>
            {project.stats?.released && (
              <div>
                <dt><CheckCircle2 aria-hidden="true" /><span>상태</span></dt>
                <dd>{project.stats.released}</dd>
              </div>
            )}
          </dl>
        </div>
      </aside>
    </motion.div>
  );
};

const OverviewPanel = ({ project }: { project: Project }) => {
  const video = toEmbedUrl(project.overviewVideoUrl || project.videoUrl);
  const showInlineExternalCta = Boolean(!video && project.externalUrl && project.hideExternalTab);

  return (
    <div className="project-detail-overview">
      <div className="project-detail-preview project-detail-preview-primary">
        {video ? (
          <iframe src={video} title={`${project.title} 시연 영상`} allowFullScreen />
        ) : (
          <>
            <img src={project.image} alt={project.title} referrerPolicy="no-referrer" />
            {showInlineExternalCta && (
              <div className="project-detail-preview-cta">
                <a href={project.externalUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink aria-hidden="true" />
                  <span>{project.externalCtaLabel || '지금 플레이하기'}</span>
                </a>
                <p>{project.externalCtaNote || 'Gemini 플랫폼에서 실행됩니다'}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const DocumentPanel = ({
  project,
  images,
  currentPage,
  onPageChange,
  isScenario,
}: {
  project: Project;
  images: string[];
  currentPage: number;
  onPageChange: (index: number) => void;
  isScenario: boolean;
}) => {
  if ((isScenario && project.scenarioGallery) || (!isScenario && project.gallery)) {
    return (
      <div className="project-detail-gallery">
        <EBookGallery
          images={images}
          currentIndex={currentPage}
          onPageChange={onPageChange}
          maxScale={project.id === 1 ? 100 : 92}
        />
      </div>
    );
  }

  if (project.pdfUrl) {
    return <iframe className="project-detail-frame" src={`${project.pdfUrl}#toolbar=0`} title={`${project.title} PDF`} />;
  }

  return <EmptyPanel label="준비된 문서가 없습니다." />;
};

const VideoPanel = ({ url, title }: { url?: string; title: string }) => {
  if (!url) return <EmptyPanel label="준비된 영상이 없습니다." />;

  return (
    <div className="project-detail-video">
      <iframe src={toEmbedUrl(url)} title={title} allowFullScreen />
    </div>
  );
};

const SimulatorPanel = ({ project }: { project: Project }) => {
  if (project.simulatorUrl) {
    return <iframe className="project-detail-frame" src={project.simulatorUrl} title={`${project.title} 시뮬레이터`} />;
  }

  if (project.simulatorVideoUrl) {
    return <VideoPanel url={project.simulatorVideoUrl} title={`${project.title} 시뮬레이터 영상`} />;
  }

  return <EmptyPanel label="시뮬레이터가 준비 중입니다." />;
};

const DashboardPanel = ({ project }: { project: Project }) => (
  <div className="project-detail-dashboard">
    <iframe
      src={project.externalUrl}
      title={`${project.title} 분석 대시보드`}
      allow="fullscreen"
    />
  </div>
);

const ExternalPanel = ({
  project,
  title,
  description,
  url,
}: {
  project: Project;
  title?: string;
  description?: string;
  url?: string;
}) => {
  const target = url || project.externalUrl;

  return (
    <div className="project-detail-external">
      <img src={project.image} alt={project.title} referrerPolicy="no-referrer" />
      <div>
        <h3>{title || project.externalCtaLabel || '외부 페이지 열기'}</h3>
        <p>{description || project.externalCtaNote || '새 창에서 프로젝트 관련 페이지를 확인합니다.'}</p>
        {target && (
          <a href={target} target="_blank" rel="noopener noreferrer">
            {project.externalCtaLabel || '새 창에서 열기'}
            <ExternalLink aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
};

const EmptyPanel = ({ label }: { label: string }) => (
  <div className="project-detail-empty">
    <FileText aria-hidden="true" />
    <span>{label}</span>
  </div>
);

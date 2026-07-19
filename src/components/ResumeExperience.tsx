import React from 'react';
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import { EditableText } from './EditableText';
import type { Project, ResumeData } from '../types';

interface ResumeExperienceProps {
  data: ResumeData;
  setData: (d: ResumeData) => void;
  isEditing: boolean;
  projects?: Project[];
  onOpenProject?: (projectId: number) => void;
}

const getLinkedProject = (projects: Project[], title: string, index: number) => {
  const normalizedTitle = title.toLowerCase();
  return projects.find(project => {
    const projectTitle = project.title.toLowerCase();
    return normalizedTitle.includes(projectTitle) || projectTitle.includes(normalizedTitle);
  }) ?? projects[index];
};

const isFormInteraction = (target: EventTarget | null) => (
  target instanceof HTMLElement
  && Boolean(target.closest('a, button, input, textarea, select, [contenteditable="true"]'))
);

export const ResumeExperience = ({ data, setData, isEditing, projects = [], onOpenProject }: ResumeExperienceProps) => {
  const openProject = (project: Project | undefined, target: EventTarget | null) => {
    if (!project || !onOpenProject || isEditing || isFormInteraction(target)) return;
    onOpenProject(project.id);
  };

  return (
    <section className="resume-experience-section">
      <h3 className="resume-paper-section-title text-[22px] font-bold mb-8 flex items-center gap-3 text-[#1A1A1A]">
        <Briefcase className="text-[#0047BB] w-6 h-6" /> 프로젝트 경험
      </h3>
      <div className="resume-experience-grid">
        {data.experience.map((exp, idx) => {
          const linkedProject = getLinkedProject(projects, exp.title, idx);
          const canOpenProject = Boolean(linkedProject && onOpenProject && !isEditing);

          return (
            <article
              key={idx}
              className={`resume-experience-card${canOpenProject ? ' is-clickable' : ''}`}
              role={canOpenProject ? 'button' : undefined}
              tabIndex={canOpenProject ? 0 : undefined}
              aria-label={canOpenProject ? `${linkedProject?.title} 프로젝트로 이동` : undefined}
              onClick={(event) => openProject(linkedProject, event.target)}
              onKeyDown={(event) => {
                if (!canOpenProject || (event.key !== 'Enter' && event.key !== ' ')) return;
                event.preventDefault();
                openProject(linkedProject, event.target);
              }}
            >
              <div className="resume-experience-card-head mb-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h4 className="resume-experience-title font-extrabold text-[22px] lg:text-[24px] text-[#1A1A1A] tracking-tight">
                    <EditableText value={exp.title} onSave={(v) => { const e = [...data.experience]; e[idx].title = v; setData({...data, experience: e}); }} isEditing={isEditing} />
                  </h4>
                  {exp.teamSize && (
                    <span className="resume-experience-team inline-flex items-center gap-1 text-[13px] font-semibold text-zinc-500 bg-zinc-100 border border-zinc-200 px-2.5 py-1 rounded-full">
                      <Users className="w-3.5 h-3.5" />
                      {exp.teamSize}
                    </span>
                  )}
                </div>
                <span className="resume-experience-period mt-2 block w-fit text-[14px] font-bold text-zinc-500 bg-zinc-50 px-3 py-1 rounded-sm border border-zinc-100/50 shrink-0">
                  <EditableText value={exp.period} onSave={(v) => { const e = [...data.experience]; e[idx].period = v; setData({...data, experience: e}); }} isEditing={isEditing} />
                </span>
              </div>

              <div className="resume-experience-role text-[16px] text-[#0047BB] font-bold mb-4 bg-[#0047BB]/5 block px-5 py-3 rounded-sm border-l-4 border-[#0047BB]">
                <EditableText value={exp.description} onSave={(v) => { const e = [...data.experience]; e[idx].description = v; setData({...data, experience: e}); }} isEditing={isEditing} markdown={true} />
              </div>

              {linkedProject?.image && (
                <figure className="resume-experience-thumb" aria-hidden="true">
                  <img src={linkedProject.image} alt="" loading="lazy" />
                </figure>
              )}

              {canOpenProject && (
                <div className="resume-experience-cta" aria-hidden="true">
                  <span>상세 보기</span>
                  <ArrowRight strokeWidth={2.4} />
                </div>
              )}

              <ul className="resume-experience-details text-[16px] text-[#4A4A4A] space-y-4 list-none leading-relaxed font-medium">
                {exp.details.map((detail, dIdx) => (
                  <li key={dIdx} className="relative pl-7">
                    <span className="absolute left-1 top-2.5 w-2 h-2 border-2 border-[#0047BB] rounded-full"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

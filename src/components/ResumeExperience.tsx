import React from 'react';
import { Briefcase, Users } from 'lucide-react';
import { EditableText } from './EditableText';
import type { ResumeData } from '../types';

interface ResumeExperienceProps {
  data: ResumeData;
  setData: (d: ResumeData) => void;
  isEditing: boolean;
}

export const ResumeExperience = ({ data, setData, isEditing }: ResumeExperienceProps) => {
  return (
    <section className="resume-experience-section">
      <h3 className="resume-paper-section-title text-[18px] font-bold mb-5 flex items-center gap-3 text-[#1A1A1A]">
        <Briefcase className="text-[#0047BB] w-5 h-5" /> 프로젝트 경험
      </h3>
      <div className="resume-experience-grid">
        {data.experience.map((exp, idx) => (
          <article key={idx} className="resume-experience-card">
            <div className="resume-experience-index">{String(idx + 1).padStart(2, '0')}</div>

            <div className="resume-experience-card-head">
              <div>
                <h4 className="resume-experience-title font-extrabold text-[18px] lg:text-[19px] text-[#1A1A1A] tracking-tight">
                  <EditableText value={exp.title} onSave={(v) => { const e = [...data.experience]; e[idx].title = v; setData({...data, experience: e}); }} isEditing={isEditing} />
                </h4>
                {exp.teamSize && (
                  <span className="resume-experience-team inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-400 bg-zinc-100 border border-zinc-200 px-2 py-0.5 rounded-full">
                    <Users className="w-2.5 h-2.5" />
                    {exp.teamSize}
                  </span>
                )}
              </div>
              <span className="resume-experience-period text-[12px] font-semibold text-zinc-500 bg-zinc-50 px-2.5 py-0.5 rounded-sm border border-zinc-100/50 shrink-0">
                <EditableText value={exp.period} onSave={(v) => { const e = [...data.experience]; e[idx].period = v; setData({...data, experience: e}); }} isEditing={isEditing} />
              </span>
            </div>

            <div className="resume-experience-role text-[14px] text-[#0047BB] font-bold mb-3 bg-[#0047BB]/5 block px-4 py-2 rounded-sm border-l-4 border-[#0047BB]">
              <EditableText value={exp.description} onSave={(v) => { const e = [...data.experience]; e[idx].description = v; setData({...data, experience: e}); }} isEditing={isEditing} markdown={true} />
            </div>

            <ul className="resume-experience-details text-[14px] text-[#4A4A4A] space-y-3 list-none leading-relaxed font-medium">
              {exp.details.map((detail, dIdx) => (
                <li key={dIdx} className="relative pl-6">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 border border-[#0047BB] rounded-full"></span>
                  {detail}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

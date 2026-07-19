import React from 'react';
import { Award, ChevronRight, FileText, GraduationCap } from 'lucide-react';
import { EditableText } from './EditableText';
import type { ResumeData } from '../types';

interface ResumeWingProps {
  data: ResumeData;
  setData: (d: ResumeData) => void;
  isEditing: boolean;
  activeTab: 'resume' | 'cover-letter';
  activeIntroIndex?: number;
  onNavigateIntro?: (index: number) => void;
}

export const ResumeWing = ({
  data,
  setData,
  isEditing,
  activeTab,
  activeIntroIndex = 0,
  onNavigateIntro,
}: ResumeWingProps) => {
  const introItems = data.selfIntroductions ?? [];
  const certificates = data.certificates ?? [];
  const progress = introItems.length > 0
    ? ((Math.min(activeIntroIndex, introItems.length - 1) + 1) / introItems.length) * 100
    : 0;

  if (activeTab === 'cover-letter') {
    return (
      <aside className="resume-rail cover-letter-rail dashboard-right-rail os-right-sidebar" aria-label="자기소개 목차">
        <section className="resume-rail-section cover-letter-rail-section">
          <div className="rail-title right-sidebar-header">
            <span className="rail-tab rs-tab active">
              <FileText className="resume-rail-section-icon" />
              자기소개 목차
            </span>
          </div>

          <div className="cover-letter-progress" aria-label={`전체 ${introItems.length}개 문항 중 ${activeIntroIndex + 1}번째`}>
            <div className="cover-letter-progress-meta">
              <span>읽는 중</span>
              <strong>{Math.min(activeIntroIndex + 1, introItems.length)} / {introItems.length}</strong>
            </div>
            <div className="cover-letter-progress-track" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>

          <nav className="rail-list right-sidebar-list resume-rail-list cover-letter-rail-list">
            {introItems.map((intro, idx) => {
              const isActive = idx === activeIntroIndex;

              return (
                <button
                  key={idx}
                  type="button"
                  className={`cover-letter-rail-row${isActive ? ' is-active' : ''}`}
                  onClick={() => onNavigateIntro?.(idx)}
                  aria-current={isActive ? 'step' : undefined}
                >
                  <span className="cover-letter-rail-number">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="cover-letter-rail-title">{intro.navTitle || `문항 ${idx + 1}`}</span>
                  <ChevronRight aria-hidden="true" />
                </button>
              );
            })}
          </nav>
        </section>
      </aside>
    );
  }

  return (
    <aside className="resume-rail dashboard-right-rail os-right-sidebar" aria-label="이력서 보조 정보">
      <section id="resume-education" className="resume-rail-section scroll-mt-24">
        <div className="rail-title right-sidebar-header mb-6">
          <span className="rail-tab rs-tab active text-[16px] font-bold">
            <GraduationCap className="resume-rail-section-icon" />
            학력 및 교육
          </span>
        </div>
        <div className="rail-list right-sidebar-list resume-rail-list resume-rail-timeline-list gap-0 flex flex-col">
          {data.education.map((edu, idx) => (
            <div key={idx} className="resume-rail-timeline-item resume-rail-edu-timeline relative">
              <div className="resume-rail-timeline-dot resume-rail-edu-dot" />
              <div className="rail-row rs-row resume-rail-row flex items-start justify-between gap-4 py-3">
              <div className="rail-info rs-info flex-1">
                <div className="rs-name text-[16px] font-bold text-[#1A1A1A] mb-1">
                  <EditableText
                    value={edu.title}
                    onSave={(value) => {
                      const education = [...data.education];
                      education[idx] = { ...education[idx], title: value };
                      setData({ ...data, education });
                    }}
                    isEditing={isEditing}
                  />
                </div>
                <div className="rs-sub text-[14px] text-zinc-500 mb-2 font-medium">
                  <EditableText
                    value={edu.period}
                    onSave={(value) => {
                      const education = [...data.education];
                      education[idx] = { ...education[idx], period: value };
                      setData({ ...data, education });
                    }}
                    isEditing={isEditing}
                  />
                </div>
                {edu.description.trim() && (
                  <div className="resume-rail-detail text-[13px] text-zinc-600 leading-relaxed">
                    <EditableText
                      value={edu.description}
                      onSave={(value) => {
                        const education = [...data.education];
                        education[idx] = { ...education[idx], description: value };
                        setData({ ...data, education });
                      }}
                      isEditing={isEditing}
                      markdown={true}
                    />
                  </div>
                )}
              </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-rail-section">
        <div className="rail-title right-sidebar-header mb-6">
          <span className="rail-tab rs-tab active text-[16px] font-bold">
            <Award className="resume-rail-section-icon" />
            자격증
          </span>
        </div>
        <div className="rail-list right-sidebar-list resume-rail-list resume-rail-timeline-list resume-rail-cert-list gap-0 flex flex-col">
          {certificates.length > 0 ? certificates.map((cert, idx) => (
            <div key={idx} className="resume-rail-timeline-item resume-rail-cert-timeline relative">
              <div className="resume-rail-timeline-dot" />
              <div className="rail-row rs-row resume-rail-row flex items-start justify-between gap-4">
                <div className="rail-info rs-info flex-1">
                  <div className="rs-name text-[16px] font-bold text-[#1A1A1A] mb-1">
                    <EditableText
                      value={cert.name}
                      onSave={(value) => {
                        const nextCertificates = [...certificates];
                        nextCertificates[idx] = { ...nextCertificates[idx], name: value };
                        setData({ ...data, certificates: nextCertificates });
                      }}
                      isEditing={isEditing}
                    />
                  </div>
                  <div className="rs-sub resume-rail-cert-meta text-[14px] text-zinc-500 font-medium flex items-center gap-1">
                    {cert.score && (
                      <>
                        <span>
                          점수{' '}
                          <EditableText
                            value={cert.score}
                            onSave={(value) => {
                              const nextCertificates = [...certificates];
                              nextCertificates[idx] = { ...nextCertificates[idx], score: value };
                              setData({ ...data, certificates: nextCertificates });
                            }}
                            isEditing={isEditing}
                          />
                        </span>
                        <span className="resume-cert-dot-sep" />
                      </>
                    )}
                    <span>취득 {cert.date}</span>
                  </div>
                </div>
              </div>
            </div>
          )) : (
            <div className="resume-rail-empty text-[14px] text-zinc-400">등록된 자격증 없음</div>
          )}
        </div>
      </section>
    </aside>
  );
};

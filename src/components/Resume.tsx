import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ResumeHeader } from './ResumeHeader';
import { ResumeExperience } from './ResumeExperience';
import { ResumeTools } from './ResumeTools';
import { CoverLetter } from './CoverLetter';
import { EditableText } from './EditableText';
import { PdfTemplate } from './PdfTemplate';
import { renderToStaticMarkup } from 'react-dom/server';
import type { ResumeData } from '../types';

interface ResumeProps {
  setView: (v: any) => void;
  onBack: () => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  data: ResumeData;
  setData: (d: ResumeData) => void;
  activeTab: 'resume' | 'cover-letter';
  setActiveTab: (tab: 'resume' | 'cover-letter') => void;
  isGeneratingPdf: boolean;
  setIsGeneratingPdf: (v: boolean) => void;
}

const compactPeriod = (period: string) => {
  const parts = period.split('-').map(part => part.trim()).filter(Boolean);
  return parts.length > 1 ? parts[parts.length - 1] : period;
};

const ResumeWing = ({
  data,
  setData,
  isEditing,
  activeTab,
}: {
  data: ResumeData;
  setData: (d: ResumeData) => void;
  isEditing: boolean;
  activeTab: 'resume' | 'cover-letter';
}) => {
  const introItems = data.selfIntroductions ?? [];
  const certificates = data.certificates ?? [];

  if (activeTab === 'cover-letter') {
    return (
      <aside className="resume-rail dashboard-right-rail os-right-sidebar" aria-label="자기소개 보조 정보">
        <section className="resume-rail-section">
          <div className="rail-title right-sidebar-header">
            <span className="rail-tab rs-tab active">문항 목차</span>
          </div>
          <nav className="rail-list right-sidebar-list resume-rail-list">
            {introItems.map((intro, idx) => (
              <a key={idx} href={`#intro-${idx}`} className="rail-row rs-row resume-rail-row">
                <span className={`rail-rank rs-rank mono r${Math.min(idx + 1, 3)}`}>{idx + 1}</span>
                <span className="rail-info rs-info">
                  <strong className="rs-name">{intro.navTitle || `문항 ${idx + 1}`}</strong>
                  <span className="rs-sub">자기소개서</span>
                </span>
              </a>
            ))}
          </nav>
        </section>
      </aside>
    );
  }

  return (
    <aside className="resume-rail dashboard-right-rail os-right-sidebar" aria-label="이력서 보조 정보">
      <section id="resume-education" className="resume-rail-section scroll-mt-24">
        <div className="rail-title right-sidebar-header">
          <span className="rail-tab rs-tab active">학력 및 교육</span>
        </div>
        <div className="rail-list right-sidebar-list resume-rail-list">
          {data.education.map((edu, idx) => (
            <div key={idx} className="rail-row rs-row resume-rail-row">
              <div className="rail-info rs-info">
                <div className="rs-name">
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
                <div className="rs-sub">
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
                <div className="resume-rail-detail">
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
              </div>
              <div className="rail-meta rs-stats">
                <span className="rs-val mono">{compactPeriod(edu.period)}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="resume-rail-section">
        <div className="rail-title right-sidebar-header">
          <span className="rail-tab rs-tab active">자격증</span>
        </div>
        <div className="rail-list right-sidebar-list resume-rail-list">
          {certificates.length > 0 ? certificates.map((cert, idx) => (
            <div key={idx} className="rail-row rs-row resume-rail-row">
              <div className="rail-info rs-info">
                <div className="rs-name">
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
                <div className="rs-sub resume-rail-cert-meta">
                  {cert.score && (
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
                  )}
                  <span>취득 {cert.date}</span>
                </div>
              </div>
              <div className="rail-meta rs-stats">
                <span className="rs-val mono">{cert.date}</span>
              </div>
            </div>
          )) : (
            <div className="resume-rail-empty">등록된 자격증 없음</div>
          )}
        </div>
      </section>
    </aside>
  );
};

export const Resume = ({ setView, onBack, isEditing, data, setData, activeTab, isGeneratingPdf }: ResumeProps) => {

  const handleDownload = () => {
    const htmlString = renderToStaticMarkup(<PdfTemplate data={data} />);
    const printWindow = window.open('', '_blank', 'width=900,height=1200');
    if (!printWindow) {
      alert('팝업 차단이 활성화되어 있습니다. 팝업을 허용해주세요.');
      return;
    }

    const styles = Array.from(document.querySelectorAll('link[rel="stylesheet"], style'))
      .map(node => node.outerHTML)
      .join('\n');

    printWindow.document.open();
    printWindow.document.write(`
      <!DOCTYPE html>
      <html lang="ko">
        <head>
          <meta charset="utf-8">
          <title>조경환_게임기획자_포트폴리오</title>
          ${styles}
          <style>
            @page { size: A4 portrait; margin: 0; }
            body { margin: 0; background: white; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
            .pdf-page { page-break-after: always; break-after: page; height: 296.5mm; overflow: hidden; }
            .pdf-page:last-child { page-break-after: auto; break-after: auto; }
          </style>
        </head>
        <body>${htmlString}</body>
      </html>
    `);
    printWindow.document.close();

    printWindow.onload = () => {
      Promise.all([
        printWindow.document.fonts.ready,
        ...Array.from(printWindow.document.images).map(img =>
          img.complete ? Promise.resolve() : new Promise(r => { img.onload = r; img.onerror = r; })
        )
      ]).then(() => {
        printWindow.focus();
        printWindow.print();
      });
    };

    const handleAfterPrint = () => {
      printWindow.close();
      printWindow.removeEventListener('afterprint', handleAfterPrint);
    };
    printWindow.addEventListener('afterprint', handleAfterPrint);
  };

  React.useEffect(() => {
    const handler = () => handleDownload();
    window.addEventListener('triggerPdfDownload', handler);
    return () => window.removeEventListener('triggerPdfDownload', handler);
  }, [activeTab, data]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
      className="resume-dashboard-section dashboard-view-resume pt-28 pb-12 md:pb-20 px-4 md:px-8 max-w-[1250px] mx-auto w-full min-h-screen flex flex-col relative">

      <div className={`resume-dashboard-layout os-content-layout ${activeTab === 'cover-letter' ? 'is-cover-letter' : 'is-resume'}`}>
        <main className="resume-main-column dashboard-main-column os-main-column">
          <AnimatePresence initial={false}>
            {activeTab === 'resume' ? (
              <motion.div
                key="resume"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="resume-paper w-full max-w-[1080px] mx-auto bg-white shadow-[0_40px_120px_rgba(0,0,0,0.1)] border border-black/5 rounded-sm overflow-hidden flex flex-col"
              >
                <div id="resume-profile" className="scroll-mt-24">
                  <ResumeHeader data={data} setData={setData} isEditing={isEditing} isGeneratingPdf={isGeneratingPdf} />
                </div>

                <div className="border-t border-black/5">
                  <main className="resume-primary-main p-8 lg:p-12 bg-white">
                    <div className="resume-lower-grid">
                      <section id="resume-experience" className="resume-experience-panel scroll-mt-24">
                        <ResumeExperience data={data} setData={setData} isEditing={isEditing} />
                      </section>
                      <aside id="resume-tools" className="resume-tools-panel scroll-mt-24">
                        <ResumeTools data={data} />
                      </aside>
                    </div>
                  </main>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="cover-letter"
                initial={{ opacity: 0, scale: 0.99, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.01, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="resume-cover-letter-shell"
              >
                <CoverLetter setView={setView} isEditing={isEditing} data={data} setData={setData} />
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        <ResumeWing data={data} setData={setData} isEditing={isEditing} activeTab={activeTab} />
      </div>
    </motion.section>
  );
};

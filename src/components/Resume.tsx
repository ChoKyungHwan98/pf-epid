import React from 'react';
import { ResumeHeader } from './ResumeHeader';
import { ResumeExperience } from './ResumeExperience';
import { ResumeTools } from './ResumeTools';
import { ResumeWing } from './ResumeWing';
import { CoverLetter } from './CoverLetter';
import { PdfTemplate } from './PdfTemplate';
import { renderToStaticMarkup } from 'react-dom/server';
import type { Project, ResumeData } from '../types';

interface ResumeProps {
  setView: (v: any) => void;
  onBack: () => void;
  isEditing: boolean;
  setIsEditing: (v: boolean) => void;
  data: ResumeData;
  setData: (d: ResumeData) => void;
  projects?: Project[];
  onOpenProject?: (projectId: number) => void;
  activeTab: 'resume' | 'cover-letter';
  setActiveTab: (tab: 'resume' | 'cover-letter') => void;
  isGeneratingPdf: boolean;
  setIsGeneratingPdf: (v: boolean) => void;
}

export const Resume = ({ setView, isEditing, data, setData, projects = [], onOpenProject, activeTab, isGeneratingPdf }: ResumeProps) => {
  const [activeIntroIndex, setActiveIntroIndex] = React.useState(0);

  const handleIntroNavigate = React.useCallback((index: number) => {
    const scroller = document.querySelector<HTMLElement>('.resume-dashboard-layout.is-cover-letter .resume-main-column');
    const target = document.getElementById(`intro-${index}`);

    if (!scroller || !target) return;

    const hasInnerScroll = scroller.scrollHeight > scroller.clientHeight + 1;
    const targetTop = target.getBoundingClientRect().top
      - scroller.getBoundingClientRect().top
      + scroller.scrollTop
      - 24;

    setActiveIntroIndex(index);

    window.requestAnimationFrame(() => {
      if (hasInnerScroll) {
        scroller.scrollTop = targetTop;
      } else {
        target.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    });
  }, []);

  React.useEffect(() => {
    if (activeTab !== 'cover-letter') return;
    setActiveIntroIndex(0);

    const scroller = document.querySelector<HTMLElement>('.resume-dashboard-layout.is-cover-letter .resume-main-column');
    scroller?.scrollTo({ top: 0, behavior: 'auto' });
  }, [activeTab]);

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
    <section className="resume-dashboard-section">

      <div className={`resume-dashboard-layout os-content-layout ${activeTab === 'cover-letter' ? 'is-cover-letter' : 'is-resume'}`}>
        <main className="resume-main-column dashboard-main-column os-main-column">
          {activeTab === 'resume' ? (
              <div className="resume-paper w-full max-w-[1080px] mx-auto bg-white shadow-[0_40px_120px_rgba(0,0,0,0.1)] border border-black/5 rounded-sm overflow-hidden flex flex-col">
                <div id="resume-profile" className="resume-top-grid scroll-mt-24">
                  <ResumeHeader data={data} setData={setData} isEditing={isEditing} isGeneratingPdf={isGeneratingPdf} />
                  <aside id="resume-tools" className="resume-tools-panel scroll-mt-24">
                    <ResumeTools data={data} />
                  </aside>
                </div>

                <div className="resume-content-divider border-t border-black/5">
                  <main className="resume-primary-main p-8 lg:p-12 bg-white">
                    <section id="resume-experience" className="resume-experience-panel scroll-mt-24">
                      <ResumeExperience data={data} setData={setData} isEditing={isEditing} projects={projects} onOpenProject={onOpenProject} />
                    </section>
                  </main>
                </div>
              </div>
            ) : (
              <div className="resume-cover-letter-shell">
                <CoverLetter
                  setView={setView}
                  isEditing={isEditing}
                  data={data}
                  setData={setData}
                  activeIndex={activeIntroIndex}
                  onActiveIndexChange={setActiveIntroIndex}
                  onNavigateIntro={handleIntroNavigate}
                />
              </div>
            )}
        </main>

        <ResumeWing
          data={data}
          setData={setData}
          isEditing={isEditing}
          activeTab={activeTab}
          activeIntroIndex={activeIntroIndex}
          onNavigateIntro={handleIntroNavigate}
        />
      </div>
    </section>
  );
};

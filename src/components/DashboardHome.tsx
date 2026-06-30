import React from 'react';
import type { DashboardView } from './DashboardShell';

interface DashboardHomeProps {
  onViewChange: (view: DashboardView) => void;
}

export const DashboardHome = ({ onViewChange }: DashboardHomeProps) => {
  return (
    <section className="dashboard-home">
      <div className="dashboard-home-copy">
        <div className="dashboard-kicker">조경환 · 게임 기획자</div>
        <h1>목차를 쓰는<br />기획자</h1>
        <p>
          게임의 뼈대를 설계하고, 플레이어 경험의 흐름을 구조화합니다.
          체계적인 문서 작성과 데이터 기반의 기획을 지향합니다.
        </p>
        <div className="dashboard-home-actions">
          <button type="button" className="dashboard-primary-btn" onClick={() => onViewChange('resume')}>
            이력서 보기
          </button>
          <button type="button" className="dashboard-secondary-btn" onClick={() => onViewChange('portfolio')}>
            포트폴리오
          </button>
        </div>
      </div>

      <div className="dashboard-signal-panel" aria-hidden="true">
        <div className="signal-card is-main"><span /><span /></div>
        <div className="signal-card is-sub"><span /><span /></div>
        <div className="signal-card is-wide"><span /><span /></div>
        <i className="signal-line is-a" />
        <i className="signal-line is-b" />
        <i className="signal-node is-a" />
        <i className="signal-node is-b" />
        <i className="signal-node is-c" />
      </div>
    </section>
  );
};

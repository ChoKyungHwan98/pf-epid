import React, { useMemo, useState } from 'react';
import { ALL_GAMES } from '../data/games';
import type { GameHistoryItem } from '../types';

const GENRE_MAP: Record<string, string[]> = {
  RPG: ['RPG'],
  어드벤처: ['어드벤처', '노벨', '공포', '로그라이크', '메트로배니아', '비주얼 노벨'],
  퍼즐: ['퍼즐', '퀴즈', '캐주얼'],
  액션: ['액션', '난투', '대전', '배틀로얄', '격투', '런앤건', '플랫폼', '런게임', '생존'],
  전략: ['전략', 'AOS', 'RTS', 'CCG', 'TCG', '디펜스'],
  시뮬레이션: ['시뮬레이션', '스포츠', '레이싱', '경영', 'AR', '수면', '보드게임', '소셜'],
  슈팅: ['슈팅', 'FPS', 'TPS', '히어로슈터'],
  리듬: ['리듬'],
};

const CHART_DATA = [
  { label: 'RPG', score: 99, angle: 0 },
  { label: '어드벤처', score: 92, angle: 45 },
  { label: '퍼즐', score: 88, angle: 90 },
  { label: '액션', score: 85, angle: 135 },
  { label: '전략', score: 82, angle: 180 },
  { label: '시뮬레이션', score: 87, angle: 225 },
  { label: '슈팅', score: 45, angle: 270 },
  { label: '리듬', score: 98, angle: 315 },
];

const FILTERS = [
  { key: '', label: '전체' },
  { key: 'PC', label: 'PC' },
  { key: 'Mobile', label: 'Mobile' },
  { key: 'Console', label: 'Console' },
  ...Object.keys(GENRE_MAP).map((genre) => ({ key: `genre:${genre}`, label: genre })),
];

const FAVORITE_TITLES = [
  'DARK SOULS™ III',
  'OMORI',
  '무기미도',
  '메이플스토리',
  '엘든 링',
  'Danganronpa V3: Killing Harmony',
  '역전재판 3',
];

const HIGHLIGHT_TITLES = FAVORITE_TITLES.slice(0, 4);
const FAVORITE_TITLE_SET = new Set(FAVORITE_TITLES);

const isFavoriteGame = (game: GameHistoryItem) => FAVORITE_TITLE_SET.has(game.title);

const getScore = (game: GameHistoryItem) => {
  let score = 0;
  if (isFavoriteGame(game)) score += 1000000000;
  if (game.yearsPlayed) score += game.yearsPlayed * 1000000;
  if (game.flag && !game.flag.includes('시간') && !game.flag.includes('년')) score += 10000000;
  if (game.isPerfectCleared) score += 1000000;

  const hours = game.flag?.includes('시간') ? Number(game.flag.match(/\d+/)?.[0] ?? 0) : 0;
  score += hours * 10;
  if (game.isCleared) score += 1;
  return score;
};

const sortedGames = [...ALL_GAMES].sort((a, b) => getScore(b) - getScore(a));
const favoriteGames = FAVORITE_TITLES
  .map((title) => ALL_GAMES.find((game) => game.title === title))
  .filter(Boolean) as GameHistoryItem[];
const highlightGames = HIGHLIGHT_TITLES
  .map((title) => ALL_GAMES.find((game) => game.title === title))
  .filter(Boolean) as GameHistoryItem[];

const getRadarPoint = (value: number, angleDeg: number, size: number) => {
  const center = size / 2;
  const radius = (value / 100) * (size / 2 - 38);
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return [center + radius * Math.cos(rad), center + radius * Math.sin(rad)];
};

const radarPoints = (level: number | null, size: number) => {
  return CHART_DATA.map((item) => getRadarPoint(level ?? item.score, item.angle, size).join(',')).join(' ');
};

const gameMatchesFilter = (game: GameHistoryItem, filterKey: string) => {
  if (!filterKey) return true;
  if (filterKey.startsWith('genre:')) {
    const genreLabel = filterKey.slice(6);
    const keywords = GENRE_MAP[genreLabel] || [genreLabel];
    return keywords.some((keyword) => game.genre.toLowerCase().includes(keyword.toLowerCase()));
  }
  return game.category === filterKey;
};

const gameTags = (game: GameHistoryItem) => {
  const tags: { text: string; strong?: boolean }[] = [];
  if (game.isPerfectCleared) tags.push({ text: '100%', strong: true });
  else if (game.isCleared) tags.push({ text: '클리어' });
  if (game.flag) tags.push({ text: game.flag });
  return tags.slice(0, 3);
};

export const DashboardGameHistoryView = () => {
  const [activeFilter, setActiveFilter] = useState('');
  const [hoveredGenre, setHoveredGenre] = useState('');
  const activeGenre = activeFilter.startsWith('genre:') ? activeFilter.slice(6) : '';

  const filteredGames = useMemo(() => {
    return sortedGames.filter((game) => gameMatchesFilter(game, activeFilter));
  }, [activeFilter]);

  const pcConsoleCount = ALL_GAMES.filter((game) => game.category === 'PC' || game.category === 'Console').length;
  const mobileCount = ALL_GAMES.filter((game) => game.category === 'Mobile').length;

  const chartSize = 380;
  const center = chartSize / 2;

  return (
    <div className="dashboard-two-column os-content-layout play-archive">
      <section className="dashboard-main-column os-main-column">
        <div className="play-dna-section">
          <div className="play-dna-card play-dna-radar-card">
            <div className="play-dna-card-title">
              <h2>장르별 숙련도 차트</h2>
            </div>
            <div className="play-dna-chart">
              <svg viewBox={`0 0 ${chartSize} ${chartSize}`} aria-hidden="true">
                {[20, 40, 60, 80, 100].map((level) => (
                  <polygon key={level} points={radarPoints(level, chartSize)} fill="none" stroke="rgba(244,243,238,0.12)" strokeWidth="1" />
                ))}
                {CHART_DATA.map((item) => {
                  const [x, y] = getRadarPoint(100, item.angle, chartSize);
                  return <line key={item.label} x1={center} y1={center} x2={x} y2={y} stroke="rgba(244,243,238,0.11)" strokeWidth="1" />;
                })}
                <polygon points={radarPoints(null, chartSize)} fill="rgba(215,202,179,0.14)" stroke="var(--dash-ice)" strokeWidth="2.4" />
                {CHART_DATA.map((item) => {
                  const [dx, dy] = getRadarPoint(item.score, item.angle, chartSize);
                  const [lx, ly] = getRadarPoint(116, item.angle, chartSize);
                  const [sx, sy] = getRadarPoint(item.score + 11, item.angle, chartSize);
                  const tooltipWidth = item.score >= 100 ? 58 : 50;
                  const isActive = activeGenre === item.label;
                  const isHovered = hoveredGenre === item.label;
                  return (
                    <g
                      key={item.label}
                      className={`play-dna-vertex${isHovered ? ' is-hovered' : ''}`}
                      onMouseEnter={() => setHoveredGenre(item.label)}
                      onMouseLeave={() => setHoveredGenre('')}
                      onClick={() => setActiveFilter(isActive ? '' : `genre:${item.label}`)}
                    >
                      <circle cx={lx} cy={ly} r="22" fill="transparent" />
                      <circle className="play-dna-dot" cx={dx} cy={dy} r="4" />
                      <g className="play-dna-tooltip" transform={`translate(${sx - tooltipWidth / 2} ${sy - 52})`}>
                        <rect className="play-dna-tooltip-bg" width={tooltipWidth} height="24" rx="5" />
                        <text className="play-dna-tooltip-text" x={tooltipWidth / 2} y="12" textAnchor="middle" dominantBaseline="middle">{item.score}점</text>
                      </g>
                      <text className={`play-dna-label${isActive ? ' active' : ''}`} x={lx} y={ly} textAnchor="middle" dominantBaseline="middle">{item.label}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <div className="play-dna-card play-dna-summary-card">
            <div className="play-dna-section-label">플랫폼</div>
            <div className="play-dna-metrics">
              <div className="play-dna-metric"><strong>{pcConsoleCount}</strong><span>PC/Console</span></div>
              <div className="play-dna-metric"><strong>{mobileCount}</strong><span>Mobile</span></div>
            </div>
            <div className="play-dna-section-label">주요 게임</div>
            <div className="play-dna-highlights">
              {highlightGames.map((game) => (
                <div key={game.id} className="play-dna-highlight">
                  <div className="play-dna-thumb"><img src={game.image} alt="" loading="lazy" decoding="async" /></div>
                  <div>
                    <strong>{game.title}</strong>
                    <span>{[game.genre, game.flag].filter(Boolean).join(' · ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="dashboard-section-head section-title-wrap play-section-head">
          <div className="dashboard-section-copy section-title-copy">
            <div className="dashboard-section-title-row section-title-row">
              <h2 className="section-title">전체 게임</h2>
              <div className="dashboard-count anime-total-count">
                <strong className="mono">{filteredGames.length}</strong>
                <span className="count-unit">개</span>
              </div>
            </div>
            <p className="section-subtitle">아카이브에 저장된 모든 게임</p>
          </div>
        </div>

        <div className="dashboard-filter-row os-tabs-bar play-tabs-bar">
          {FILTERS.map((filter) => (
            <button
              key={filter.key || 'all'}
              type="button"
              className={`dashboard-filter-chip genre-tab${activeFilter === filter.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
              <span className="mono">{sortedGames.filter((game) => gameMatchesFilter(game, filter.key)).length}</span>
            </button>
          ))}
        </div>

        <div className="game-opensea-grid">
          {filteredGames.map((game, index) => (
            <article key={`${game.id}-${index}`} className="game-op-card">
              <div className="game-op-cover">
                {isFavoriteGame(game) && <span className="game-fav-star">★</span>}
                <img src={game.image} alt="" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.style.opacity = '0.18'; }} />
              </div>
              <div className="game-op-body">
                <h3 className="game-op-title">{game.title}</h3>
                <div className="game-op-meta">
                  <span>{game.genre}</span>
                  <span>{game.category}</span>
                </div>
                <div className="game-op-tags">
                  {gameTags(game).map((tag) => (
                    <span key={tag.text} className={`game-op-tag${tag.strong ? ' strong is-strong' : ''}`}>{tag.text}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="dashboard-right-rail os-right-sidebar">
        <div className="rail-title right-sidebar-header"><span className="rail-tab rs-tab active">최애 게임</span></div>
        <div className="rail-list right-sidebar-list">
          {favoriteGames.map((game, index) => (
            <div key={`${game.id}-${index}`} className="rail-row rs-row">
              <div className={`rail-rank rs-rank mono r${Math.min(index + 1, 3)}`}>{index + 1}</div>
              <div className="rail-avatar rs-avatar"><img src={game.image} alt="" loading="lazy" decoding="async" /></div>
              <div className="rail-info rs-info">
                <div className="rs-name">{game.title}</div>
                <div className="rs-sub">{[game.genre, game.flag].filter(Boolean).join(' · ') || game.company}</div>
              </div>
              <div className="rail-meta rs-stats">
                <div className="rs-val mono">{game.category}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

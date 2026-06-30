import React, { useEffect, useMemo, useState } from 'react';
import { Flame } from 'lucide-react';
import { ANIME_GENRES, ANIME_ITEMS, FAVORITE_ANIME, FEATURED_ANIME } from '../data/anime';
import type { AnimeItem } from '../data/anime';

const formatMeta = (item: AnimeItem) => {
  if (!item.year) return '연도 미상';
  return `${item.year}년${item.quarterLabel ? ` ${item.quarterLabel}` : ''}`;
};

export const AnimeHistoryView = () => {
  const [activeGenre, setActiveGenre] = useState('');
  const [heroIndex, setHeroIndex] = useState(0);

  const filteredItems = useMemo(() => {
    if (!activeGenre) return ANIME_ITEMS;
    return ANIME_ITEMS.filter((item) => item.genres.includes(activeGenre));
  }, [activeGenre]);

  const genreCounts = useMemo(() => {
    return Object.fromEntries(
      ANIME_GENRES.map((genre) => [
        genre,
        ANIME_ITEMS.filter((item) => item.genres.includes(genre)).length,
      ]),
    );
  }, []);

  useEffect(() => {
    if (FEATURED_ANIME.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setHeroIndex((index) => (index + 1) % FEATURED_ANIME.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="dashboard-two-column os-content-layout">
      <section className="dashboard-main-column os-main-column">
        <div className="anime-hero os-hero-banner" aria-label="최근 본 애니메이션">
          <div className="hero-stage">
            {FEATURED_ANIME.map((item, index) => (
              <article
                key={item.id}
                className={`anime-hero-slide hero-slide${index === heroIndex ? ' active' : ''}`}
              >
                <div
                  className={`hero-bg-image ${item.bannerImage ? 'is-banner' : 'is-cover'}`}
                  style={{ backgroundImage: `url('${item.bannerImage ?? item.image}')` }}
                />
                <div className="anime-hero-gradient hero-gradient" />
                <div className="anime-hero-text hero-content">
                  <div className="hero-text">
                    <span className="dashboard-badge hero-badge"><Flame className="dashboard-badge-icon" aria-hidden /> 최근 본</span>
                    <h2>{item.title}</h2>
                    <p>{formatMeta(item)} · {item.genres.join(', ')}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="anime-hero-dots hero-carousel-indicators">
            {FEATURED_ANIME.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero-dot${index === heroIndex ? ' active' : ''}`}
                onClick={() => setHeroIndex(index)}
                aria-label={`${item.title} 보기`}
              >
                <span className="anime-hero-dot-fill" />
              </button>
            ))}
          </div>
        </div>

        <div className="dashboard-section-head section-title-wrap">
          <div className="dashboard-section-copy section-title-copy">
            <div className="dashboard-section-title-row section-title-row">
              <h2 className="section-title">전체 애니메이션</h2>
              <div className="dashboard-count anime-total-count">
                <strong className="mono">{filteredItems.length}</strong>
                <span className="count-unit">편</span>
              </div>
            </div>
            <p className="section-subtitle">아카이브에 저장된 모든 작품</p>
          </div>
        </div>

        <div className="dashboard-filter-row os-tabs-bar">
          <button
            type="button"
            className={`dashboard-filter-chip genre-tab${!activeGenre ? ' active' : ''}`}
            onClick={() => setActiveGenre('')}
          >
            전체
          </button>
          {ANIME_GENRES.map((genre) => (
            <button
              key={genre}
              type="button"
              className={`dashboard-filter-chip genre-tab${activeGenre === genre ? ' active' : ''}`}
              onClick={() => setActiveGenre(genre)}
            >
              {genre}
              <span className="mono">{genreCounts[genre]}</span>
            </button>
          ))}
        </div>

        <div className="anime-card-grid anime-list">
          {filteredItems.map((item) => (
            <article key={item.id} className="anime-card">
              <div className="anime-card-cover">
                <img src={item.image} alt="" loading="lazy" decoding="async" onError={(event) => { event.currentTarget.classList.add('is-broken'); }} />
              </div>
              <div className="anime-card-body">
                <h3>{item.title}</h3>
                <div className="anime-card-meta">{formatMeta(item)}</div>
                <div className="anime-card-genres">
                  {item.genres.slice(0, 3).map((genre) => (
                    <span key={genre}>{genre}</span>
                  ))}
                  {item.genres.length > 3 && <span>+{item.genres.length - 3}</span>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="dashboard-right-rail os-right-sidebar">
        <div className="rail-title right-sidebar-header"><span className="rail-tab rs-tab active">최애 애니메이션</span></div>
        <div className="rail-list right-sidebar-list">
          {FAVORITE_ANIME.map((item, index) => (
            <div key={item.id} className="rail-row rs-row">
              <div className={`rail-rank rs-rank mono r${Math.min(index + 1, 3)}`}>{index + 1}</div>
              <div className="rail-avatar rs-avatar">
                <img src={item.image} alt="" loading="lazy" decoding="async" />
              </div>
              <div className="rail-info rs-info">
                <div className="rs-name">{item.title}</div>
                <div className="rs-sub">{item.genres.slice(0, 3).join(', ')}</div>
              </div>
              <div className="rail-meta rs-stats">
                <div className="rs-val mono">{item.year ?? '-'}</div>
                <div className="rs-sub">{item.quarterLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

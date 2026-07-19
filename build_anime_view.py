import json, os
from collections import Counter

data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'
out_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

data.sort(key=lambda x: (x.get('year') or 0, x.get('quarter') or 0), reverse=True)

# Genre counts
all_genres = []
for d in data:
    all_genres.extend(d.get('genres', []))
gc = Counter(all_genres)
GENRE_ORDER = ['액션','모험','판타지','SF','메카','스포츠','공포','스릴러','미스터리','심리','로맨스','코미디','드라마','일상','음악']
tabs = [g for g in GENRE_ORDER if gc.get(g)]
extras = [g for g in gc if g not in GENRE_ORDER]
tabs += sorted(extras, key=lambda g: gc[g], reverse=True)

def ext_of(url):
    e = url.split('.')[-1]
    return e if len(e) <= 4 and '?' not in e else 'jpg'

def qtext(item):
    q = item.get('quarter', 0)
    if q == -1: return '극장판'
    if q == -2: return '웹'
    if q > 0: return f'{q}분기'
    return ''

# Cards
cards = []
for a in data:
    aid = a['id']
    ext = ext_of(a.get('image',''))
    img = f'./public/images/anime/{aid}.{ext}'
    gs = a.get('genres', [])
    chips = ''.join(f'<span class="card-genre-chip">{g}</span>' for g in gs[:3])
    if len(gs) > 3:
        chips += f'<span class="card-genre-chip">+{len(gs)-3}</span>'
    qt = qtext(a)
    meta = f'<span class="mono">{a.get("year","")}</span>년{" "+qt if qt else ""}' if a.get('year') else '연도 미상'
    cards.append(f'''<div class="anime-card">
<img class="card-cover" src="{img}" alt="" loading="lazy" onerror="this.classList.add('card-broken')">
<div class="card-body">
<div class="card-title">{a["title"]}</div>
<div class="card-meta">{meta}</div>
<div class="card-genres">{chips}</div>
</div></div>''')

# Favorites
favs = sorted([d for d in data if d.get('favorite') and d.get('favoriteRank') is not None], key=lambda x: x['favoriteRank'])
fav_rows = []
for i, a in enumerate(favs):
    aid = a['id']
    ext = ext_of(a.get('image',''))
    img = f'./public/images/anime/{aid}.{ext}'
    qt = qtext(a)
    gs = ', '.join(a.get('genres',[])[:3])
    rc = f'r{i+1}' if i < 3 else ''
    fav_rows.append(f'''<div class="rs-row">
<div class="rs-rank mono {rc}">{i+1}</div>
<div class="rs-avatar"><img src="{img}" alt="" onerror="this.style.display='none'"></div>
<div class="rs-info"><div class="rs-name">{a["title"]}</div><div class="rs-sub">{gs}</div></div>
<div class="rs-stats"><div class="rs-val mono">{a.get("year","—")}</div><div class="rs-sub">{qt}</div></div>
</div>''')

# Featured (hero)
feats = sorted([d for d in data if d.get('featured')], key=lambda x: x.get('featuredRank', 999))
hero_slides = []
for i, a in enumerate(feats[:5]):
    aid = a['id']
    ext = ext_of(a.get('image',''))
    img = f'./public/images/anime/{aid}.{ext}'
    qt = qtext(a)
    gs = ', '.join(a.get('genres',[]))
    meta = f'{a.get("year","")}년 {qt} · {gs}'
    act = 'active' if i == 0 else ''
    hero_slides.append(f'''<div class="hero-slide {act}" data-idx="{i}">
<div class="hero-bg-image is-cover" style="background-image:url('{img}')"></div>
<div class="hero-gradient"></div>
<div class="hero-content"><div class="hero-text">
<div class="hero-badge"><svg class="ic ic-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg> 최근 본</div>
<h2>{a["title"]}</h2><p>{meta}</p>
</div></div></div>''')

dots = ''.join(f'<div class="hero-dot {"active" if i==0 else ""}" onclick="heroGo({i})"><span class="hero-dot-fill"></span></div>' for i in range(len(hero_slides)))

genre_tabs_html = '<button class="genre-tab active" onclick="setGenreTab(\'\')">전체</button>\n'
for g in tabs:
    genre_tabs_html += f'<button class="genre-tab" onclick="setGenreTab(\'{g}\')">{g} <span class="mono">{gc[g]}</span></button>\n'

# Build full HTML
html = f'''<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>포트폴리오 - 애니메이션 아카이브</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../anime-manager/style.css">
<style>
/* 포트폴리오 사이드바 오버라이드 */
.os-sidebar {{
  width: 240px; align-items: flex-start; padding: 24px 16px;
  transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
}}
.os-sidebar.collapsed {{
  width: 56px; align-items: center; padding: 12px 0;
}}
.os-sidebar.collapsed:hover {{
  width: 240px; align-items: flex-start; padding: 24px 16px;
  box-shadow: 10px 0 30px rgba(0,0,0,0.3);
}}
.nav-text {{ transition: opacity 0.2s; white-space: nowrap; }}
.os-sidebar.collapsed:not(:hover) .nav-text {{ opacity: 0; max-width: 0; overflow: hidden; pointer-events: none; }}
.os-sidebar.collapsed:not(:hover) .sidebar-profile .profile-text {{ opacity: 0; max-width: 0; overflow: hidden; }}
.os-sidebar .os-nav {{ width: 100%; margin-top: 8px; }}
.os-sidebar .os-nav-btn {{
  width: 100%; justify-content: flex-start; padding: 0 16px; gap: 12px;
  font-size: 14px; font-weight: 600;
}}
.os-sidebar.collapsed:not(:hover) .os-nav-btn {{ justify-content: center; padding: 0; }}
.os-sidebar .os-nav-btn[title]:hover::after {{ display: none; }}
.os-body {{ margin-left: 240px; transition: margin-left 0.3s cubic-bezier(0.4,0,0.2,1); }}
.os-body.collapsed {{ margin-left: 56px; }}
.sidebar-profile {{
  display: flex; align-items: center; gap: 12px; width: 100%;
  border-bottom: 1px solid var(--border); padding-bottom: 20px; margin-bottom: 12px; overflow: hidden;
}}
.os-nav-bottom {{ width: 100%; margin-top: auto; }}
</style>
</head>
<body>
<div class="os-wrap">

<nav class="os-sidebar">
  <div class="sidebar-profile">
    <div style="width:40px;height:40px;border-radius:8px;background:var(--ice);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
      <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" width="20" height="20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    </div>
    <div class="profile-text" style="transition:opacity 0.2s;overflow:hidden;">
      <div style="font-size:14px;font-weight:700;color:var(--paper);">조경환</div>
      <div style="font-size:12px;font-weight:600;color:var(--ice);">게임 기획자</div>
    </div>
  </div>
  <div class="os-nav">
    <button id="nav-home" class="os-nav-btn active" onclick="switchTab('home')">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
      <span class="nav-text">홈</span>
    </button>
    <button id="nav-resume" class="os-nav-btn" onclick="switchTab('resume')">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      <span class="nav-text">이력 및 자기소개</span>
    </button>
    <button id="nav-portfolio" class="os-nav-btn" onclick="switchTab('portfolio')">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
      <span class="nav-text">포트폴리오</span>
    </button>
    <button id="nav-play" class="os-nav-btn" onclick="switchTab('play')">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <span class="nav-text">플레이 이력</span>
    </button>
    <button id="nav-anime" class="os-nav-btn" onclick="switchTab('anime')">
      <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="15" rx="2"/><polyline points="17 2 12 7 7 2"/></svg>
      <span class="nav-text">애니메이션 이력</span>
    </button>
  </div>
  <div class="os-nav-bottom">
    <div style="display:flex;align-items:center;gap:14px;padding:0 16px;color:var(--fog);overflow:hidden;">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18" style="flex-shrink:0;"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      <span class="nav-text" style="font-size:12px;font-weight:600;">ckh980624@gmail.com</span>
    </div>
  </div>
</nav>

<div class="os-body">
  <header class="os-header">
    <div class="os-search-wrap" style="background:transparent;border:none;pointer-events:none;">
      <div style="display:flex;align-items:center;gap:8px;font-size:15px;font-weight:700;color:var(--fog);">
        <span style="color:var(--iron);">포트폴리오 /</span>
        <span id="header-title" style="color:var(--paper);">홈 화면</span>
      </div>
    </div>
    <div class="os-header-right">
      <span class="os-stat-chip" id="total-count">총 <span class="mono">{len(data)}</span>편</span>
      <button id="btn-pdf" class="os-connect-btn" style="display:none;">PDF 다운로드</button>
    </div>
  </header>

  <div class="os-content">

    <!-- 홈 화면 -->
    <div id="view-home" class="os-content-layout">
      <div style="display:flex;align-items:center;justify-content:space-between;min-height:calc(100vh - 120px);width:100%;max-width:1200px;margin:0 auto;padding:0 40px;gap:64px;">
        <div style="flex:1;display:flex;flex-direction:column;align-items:flex-start;">
          <div style="font-size:14px;font-weight:800;color:var(--ice);letter-spacing:0.2em;margin-bottom:24px;text-transform:uppercase;">Game Designer Portfolio</div>
          <h1 style="font-size:64px;font-weight:800;color:var(--paper);letter-spacing:-2px;line-height:1.15;margin-bottom:32px;">목차를 쓰는<br>기획자</h1>
          <p style="font-size:18px;font-weight:500;color:var(--fog);line-height:1.7;margin-bottom:40px;max-width:480px;">게임의 뼈대를 설계하고, 플레이어 경험의 흐름을 구조화합니다. 체계적인 문서 작성과 데이터 기반의 기획을 지향합니다.</p>
          <div style="display:flex;gap:12px;">
            <button class="btn btn-primary" onclick="switchTab('resume')" style="padding:14px 32px;font-size:15px;">이력서 보기</button>
            <button class="btn btn-secondary" onclick="switchTab('portfolio')" style="padding:14px 32px;font-size:15px;">포트폴리오</button>
          </div>
        </div>
        <div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:400px;">
          <div style="width:100%;max-width:480px;aspect-ratio:4/3;background:var(--charcoal);border:1px solid var(--border);border-radius:16px;display:flex;align-items:center;justify-content:center;color:var(--iron);font-size:14px;font-weight:600;">[Interactive Animation Area]</div>
        </div>
      </div>
    </div>

    <!-- 이력 및 자기소개 -->
    <div id="view-resume" class="os-content-layout" style="display:none;">
      <div class="os-main-column" style="padding:24px;">
        <div style="font-size:18px;font-weight:700;color:var(--paper);margin-bottom:24px;">이력 및 자기소개</div>
        <div style="color:var(--fog);font-size:14px;line-height:1.8;">이력서 콘텐츠가 여기에 표시됩니다.</div>
      </div>
      <div class="os-right-sidebar">
        <div class="right-sidebar-header"><div class="rs-tabs"><div class="rs-tab active">핵심 요약</div></div></div>
        <div class="right-sidebar-list" style="gap:24px;">
          <div><div style="font-size:11px;font-weight:800;color:var(--iron);margin-bottom:12px;letter-spacing:0.5px;">EDUCATION</div>
            <div style="font-size:13px;font-weight:700;color:var(--paper);">생성형 AI 활용 게임 기획자 과정</div>
            <div style="font-size:11px;color:var(--iron);margin:2px 0 12px;">2025.09 - 2026.04</div>
            <div style="font-size:13px;font-weight:700;color:var(--paper);">숭실대학교 법학과</div>
            <div style="font-size:11px;color:var(--iron);margin-top:2px;">2017.02 - 2025.08</div>
          </div>
          <div><div style="font-size:11px;font-weight:800;color:var(--iron);margin-bottom:12px;letter-spacing:0.5px;">TOOLS</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">
              <span style="padding:4px 8px;background:var(--charcoal);border:1px solid var(--border);border-radius:4px;font-size:11px;font-weight:600;color:var(--fog);">Excel</span>
              <span style="padding:4px 8px;background:var(--charcoal);border:1px solid var(--border);border-radius:4px;font-size:11px;font-weight:600;color:var(--fog);">PowerPoint</span>
              <span style="padding:4px 8px;background:var(--charcoal);border:1px solid var(--border);border-radius:4px;font-size:11px;font-weight:600;color:var(--fog);">Figma</span>
              <span style="padding:4px 8px;background:var(--charcoal);border:1px solid var(--border);border-radius:4px;font-size:11px;font-weight:600;color:var(--fog);">Unity</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 애니메이션 이력 -->
    <div id="view-anime" class="os-content-layout" style="display:none;">
      <div class="os-main-column">
        <div class="os-hero-banner" id="hero-banner">
          <div class="hero-stage">
            {''.join(hero_slides)}
          </div>
          <div class="hero-carousel-indicators">{dots}</div>
        </div>
        <div class="section-title-wrap">
          <h3 class="section-title">전체 애니메이션</h3>
          <span class="section-subtitle">아카이브에 저장된 모든 작품</span>
        </div>
        <div class="os-tabs-bar">
          <div id="genre-tabs" class="genre-tabs">{genre_tabs_html}</div>
          <span id="filter-count" class="badge"><span class="mono">{len(data)}</span>편</span>
        </div>
        <div id="anime-list" class="anime-list">
{''.join(cards)}
        </div>
      </div>
      <div class="os-right-sidebar">
        <div class="right-sidebar-header"><div class="rs-tabs"><div class="rs-tab active">최애 애니메이션</div></div></div>
        <div class="right-sidebar-list" id="favorite-list-placeholder">
{''.join(fav_rows)}
        </div>
      </div>
    </div>

    <!-- 포트폴리오 -->
    <div id="view-portfolio" class="os-content-layout" style="display:none;">
      <div class="os-main-column" style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 120px);">
        <div style="text-align:center;color:var(--fog);font-size:16px;font-weight:600;">포트폴리오 콘텐츠 준비 중...</div>
      </div>
    </div>

    <!-- 플레이 이력 -->
    <div id="view-play" class="os-content-layout" style="display:none;">
      <div class="os-main-column" style="display:flex;align-items:center;justify-content:center;min-height:calc(100vh - 120px);">
        <div style="text-align:center;color:var(--fog);font-size:16px;font-weight:600;">플레이 이력 콘텐츠 준비 중...</div>
      </div>
    </div>

  </div>
</div>
</div>

<script>
// ===== 탭 전환 =====
function switchTab(tabId) {{
  document.querySelectorAll('.os-nav-btn').forEach(b => {{ b.classList.remove('active'); b.style.color = 'var(--fog)'; }});
  const btn = document.getElementById('nav-' + tabId);
  if (btn) {{ btn.classList.add('active'); btn.style.color = 'var(--paper)'; }}
  ['home','resume','anime','portfolio','play'].forEach(v => document.getElementById('view-'+v).style.display = 'none');
  document.getElementById('view-' + tabId).style.display = 'flex';
  const titles = {{ home:'홈 화면', resume:'이력 및 자기소개', portfolio:'포트폴리오', play:'플레이 이력', anime:'애니메이션 이력' }};
  document.getElementById('header-title').innerText = titles[tabId];
  const pdf = document.getElementById('btn-pdf');
  if (pdf) pdf.style.display = tabId === 'resume' ? 'flex' : 'none';
  const sb = document.querySelector('.os-sidebar');
  const bd = document.querySelector('.os-body');
  if (tabId === 'home') {{ sb.classList.remove('collapsed'); bd.classList.remove('collapsed'); }}
  else {{ sb.classList.add('collapsed'); bd.classList.add('collapsed'); }}
}}

// ===== 히어로 캐러셀 =====
let _heroIdx = 0;
const _heroCount = {len(hero_slides)};
let _heroTimer = _heroCount > 1 ? setInterval(() => heroGo((_heroIdx + 1) % _heroCount), 5000) : null;
function heroGo(i) {{
  if (_heroCount === 0) return;
  const prev = _heroIdx; _heroIdx = i;
  document.querySelectorAll('#hero-banner .hero-slide').forEach((s, idx) => {{
    s.classList.remove('active', 'leaving');
    if (idx === i) s.classList.add('active');
    else if (idx === prev && prev !== i) s.classList.add('leaving');
  }});
  document.querySelectorAll('#hero-banner .hero-dot').forEach((d, idx) => d.classList.toggle('active', idx === i));
  const af = document.querySelectorAll('#hero-banner .hero-dot')[i]?.querySelector('.hero-dot-fill');
  if (af) {{ af.style.animation = 'none'; void af.offsetWidth; af.style.animation = ''; }}
  clearInterval(_heroTimer);
  if (_heroCount > 1) _heroTimer = setInterval(() => heroGo((_heroIdx + 1) % _heroCount), 5000);
}}

// ===== 장르 필터 =====
let activeGenreTab = '';
function setGenreTab(g) {{
  activeGenreTab = g;
  document.querySelectorAll('.genre-tab').forEach(t => t.classList.remove('active'));
  event.target.classList.add('active');
  const cards = document.querySelectorAll('#anime-list .anime-card');
  let count = 0;
  cards.forEach(c => {{
    const genres = Array.from(c.querySelectorAll('.card-genre-chip')).map(s => s.textContent.trim());
    const show = !g || genres.includes(g);
    c.style.display = show ? '' : 'none';
    if (show) count++;
  }});
  document.getElementById('filter-count').innerHTML = '<span class="mono">' + count + '</span>편';
}}
</script>
</body>
</html>'''

with open(out_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f"Built! {len(data)} cards, {len(favs)} favorites, {len(hero_slides)} hero slides")

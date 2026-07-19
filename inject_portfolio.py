import json
import re

projects = [
  {
    "id": 1,
    "title": "도로시아",
    "roles": ["밸런스 기획"],
    "description": "핵앤슬래시 방치형 RPG의 전투/재화 밸런스와 방치 보상 시스템을 담당했습니다.",
    "keyTasks": ["밸런스 기획", "시스템 기획", "AI 활용"],
    "tags": ["PDPS", "TTK설계", "재화순환", "성장곡선", "AI시뮬레이터"],
    "image": "./public/images/dorothia_main.jpg",
    "status": "구글플레이스토어 출시",
    "meta": "도로시아 · 11인 팀장 · 밸런스/시스템 기획",
    "pdfUrl": "",
    "videoUrl": "https://youtu.be/z2edJ8OYDyU",
    "prototypeUrl": "./public/prototypes/dorothia_prototype.html"
  },
  {
    "id": 2,
    "title": "Digreed",
    "roles": ["코어 룰 기획"],
    "description": "탐색, 전투, 탈출을 반복하는 로그라이트 구조. 층별 목표 수집량, 무기 교체, 적 AI 상태머신, 탈출 조건을 정의해 반복 도전의 흐름을 설계했습니다.",
    "keyTasks": ["코어 룰 기획", "시스템 기획", "PM"],
    "tags": ["맵 프리팹", "절차적 생성"],
    "image": "./public/images/digreed.png",
    "status": "미출시",
    "meta": "Digreed · 10인 팀장 · 코어 룰/PM",
    "pdfUrl": "./public/documents/digreed_mvp_plan.pdf",
    "videoUrl": "https://youtu.be/DkuijnqOcU0",
    "prototypeUrl": ""
  },
  {
    "id": 3,
    "title": "침묵의 저택",
    "roles": ["시스템 기획"],
    "description": "추격자 AI, 시야 축소, 가구 상호작용, 탈출 조건을 설계하고 짧은 플레이 안에서 긴장감이 상승하도록 수치를 역산했습니다.",
    "keyTasks": ["시스템 기획", "밸런스 기획"],
    "tags": ["AI 패턴", "시야 시스템", "상호작용"],
    "image": "./public/images/silence.png",
    "status": "메이플스토리 월드 출시",
    "meta": "침묵의 저택 · 4인 팀장 · 시스템 기획",
    "pdfUrl": "./public/documents/silent_mansion_system_plan.pdf",
    "videoUrl": "https://www.youtube.com/embed/5vjTeHe0Ozs",
    "prototypeUrl": ""
  },
  {
    "id": 4,
    "title": "Pico-Bang!",
    "roles": ["프로토타이핑", "AI 활용"],
    "description": "포탈 진행, 타겟 파괴, 적 AI 상태머신, 총소리 감지와 협동 포위 로직을 직접 구현해 핵심 재미를 검증했습니다.",
    "keyTasks": ["프로토타이핑", "AI 활용"],
    "tags": ["Unity", "바이브코딩", "AI 상태머신"],
    "image": "./public/images/picobang.png",
    "status": "⚡ 프로토타입",
    "meta": "Pico-Bang! · 1인 · AI 프로토타이핑",
    "pdfUrl": "",
    "videoUrl": "https://www.youtube.com/watch?v=G6x1KBO-_uU",
    "prototypeUrl": ""
  },
  {
    "id": 5,
    "title": "게임 스토어의 불청객",
    "roles": ["AI 활용"],
    "description": "언어 장벽을 게임 규칙으로 삼고, 턴 경과에 따른 감정 변화와 예외 처리를 프롬프트 구조로 설계했습니다.",
    "keyTasks": ["AI 활용", "시스템 기획", "시나리오 기획"],
    "tags": ["LLM 프롬프트", "가변 시나리오", "단서 추출"],
    "image": "./public/images/uninvited_guest.png",
    "status": "⚡ 프로토타입",
    "meta": "게임 스토어의 불청객 · 1인 · LLM 설계",
    "pdfUrl": "",
    "videoUrl": "https://gemini.google.com/gem/1mRNOwrLoLSi_nzpoI6PwXQxmXMz9cYdk?usp=sharing",
    "prototypeUrl": ""
  }
]

html_str = """
          <div class="os-tabs-bar portfolio-tabs-bar" style="margin-bottom:24px;">
            <div class="genre-tabs" id="portfolio-filter-tabs"></div>
          </div>
          <div class="portfolio-card-grid" id="portfolio-grid">
          </div>
"""

with open('test_dashboard.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Replace the static portfolio section with the dynamic container
html = re.sub(r'<article class="portfolio-feature">.*?</article>\s*<div class="portfolio-card-grid">.*?</div>', html_str, html, flags=re.DOTALL)

# Add PORTFOLIO_ITEMS to JS
js_data = f"const PORTFOLIO_ITEMS = {json.dumps(projects, ensure_ascii=False, indent=2)};"

# Inject JS into script tag
js_code = """
// Portfolio Render
let activePortfolioCategory = '전체';

function renderPortfolioTabs() {
  const categories = ['전체', '밸런스 기획', '시스템 기획', '코어 룰 기획', '프로토타이핑', 'AI 활용'];
  const tabsContainer = document.getElementById('portfolio-filter-tabs');
  if (!tabsContainer) return;
  
  tabsContainer.innerHTML = categories.map(cat => {
    let count = 0;
    if (cat === '전체') {
      count = PORTFOLIO_ITEMS.length;
    } else {
      count = PORTFOLIO_ITEMS.filter(p => p.keyTasks.includes(cat) || p.roles.includes(cat)).length;
    }
    const isActive = activePortfolioCategory === cat;
    return `
      <div class="genre-tab ${isActive ? 'active' : ''}" onclick="setPortfolioCategory('${cat}')">
        <span>${cat}</span>
        <span class="genre-count">${count}</span>
      </div>
    `;
  }).join('');
}

function setPortfolioCategory(cat) {
  activePortfolioCategory = cat;
  renderPortfolioTabs();
  renderPortfolioGrid();
}

function renderPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  
  const filtered = PORTFOLIO_ITEMS.filter(p => {
    if (activePortfolioCategory === '전체') return true;
    return p.keyTasks.includes(activePortfolioCategory) || p.roles.includes(activePortfolioCategory);
  });
  
  grid.innerHTML = filtered.map(p => {
    let statusClass = 'is-released';
    if (p.status.includes('미출시')) statusClass = 'is-unreleased';
    if (p.status.includes('프로토타입')) statusClass = 'is-prototype';
    
    let linksHtml = '';
    if (p.pdfUrl) linksHtml += `<a class="game-link-btn" href="${p.pdfUrl}" target="_blank" rel="noopener">기획서 보기</a>`;
    if (p.prototypeUrl) linksHtml += `<a class="game-link-btn" href="${p.prototypeUrl}" target="_blank" rel="noopener">프로토타입</a>`;
    if (p.videoUrl) linksHtml += `<a class="game-link-btn" href="${p.videoUrl}" target="_blank" rel="noopener">영상 보기</a>`;

    return `
      <article class="portfolio-card" onclick="openPortfolioDetail(${p.id})">
        <div class="portfolio-card-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
        </div>
        <div class="portfolio-card-body" style="display: flex; flex-direction: column; height: 100%;">
          <div class="portfolio-status ${statusClass}" style="position: static; display: inline-flex; width: fit-content; margin-bottom: 14px;">${p.status}</div>
          <h3 style="margin-bottom: 8px;">${p.title}</h3>
          <div class="project-meta" style="margin-bottom: 12px; opacity: 0.7;">${p.meta}</div>
          <p>${p.description}</p>
          <div class="portfolio-task-list">
            ${p.keyTasks.map(t => `<span class="portfolio-task">${t}</span>`).join('')}
          </div>
          <div class="portfolio-tag-list" style="margin-bottom: 24px;">
            ${p.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}
          </div>
          <div class="game-action-row" style="margin-top: auto; padding-top: 16px; border-top: 1px solid rgba(244,243,238,0.08); display: flex; justify-content: space-between; align-items: center; width: 100%;">
            <div style="display: flex; gap: 8px;" onclick="event.stopPropagation()">
              ${linksHtml}
            </div>
            <span style="font-size: 13px; font-weight: 800; color: var(--ice);">상세 보기 →</span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function openPortfolioDetail(id) {
  // Can expand to a modal later if needed
  console.log('Opened detail for project', id);
  // For now, if there's a PDF, we can open it
  const project = PORTFOLIO_ITEMS.find(p => p.id === id);
  if (project.pdfUrl) window.open(project.pdfUrl, '_blank');
  else if (project.prototypeUrl) window.open(project.prototypeUrl, '_blank');
  else if (project.videoUrl) window.open(project.videoUrl, '_blank');
}
"""

if "const GAME_DNA_HIGHLIGHT_TITLES" in html:
    html = html.replace("const GAME_DNA_HIGHLIGHT_TITLES", js_data + "\n\n" + js_code + "\n\nconst GAME_DNA_HIGHLIGHT_TITLES")

if "renderGameDnaSummary();" in html:
    html = html.replace("renderGameDnaSummary();", "renderGameDnaSummary();\n  renderPortfolioTabs();\n  renderPortfolioGrid();")

with open('test_dashboard.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Done injecting portfolio script.")

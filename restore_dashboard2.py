import json
import os
import re
from collections import Counter

html_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'
data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def sort_key(x):
    y = x.get('year') or 0
    q = x.get('quarter') or 0
    return (y, q)
data.sort(key=sort_key, reverse=True)

# 1. Main Grid Cards (OpenSea Layout exactly)
html_cards = []
for item in data:
    anime_id = item.get('id')
    title = item.get('title')
    image_url = item.get('image', '')
    ext = image_url.split('.')[-1]
    if len(ext) > 4 or '?' in ext:
        ext = 'jpg'
    local_img_path = f"../../anime-manager/images/{anime_id}.{ext}" if not os.path.exists(f"public/images/anime/{anime_id}.{ext}") else f"./public/images/anime/{anime_id}.{ext}"
    
    genres = item.get('genres', [])
    genre_chips = ''.join([f'<span class="card-genre-chip">{g}</span>' for g in genres[:2]])
    
    card = f'''            <div class="anime-card">
              <div class="card-cover" style="background-image: url('{local_img_path}');"></div>
              <div class="card-body">
                <div class="card-title">{title}</div>
                <div class="card-genres">
                  {genre_chips}
                </div>
              </div>
            </div>'''
    html_cards.append(card)

cards_html = '\n'.join(html_cards)

# 2. Favorites List with Thumbnails
favorites = [d for d in data if d.get('favorite') is True and d.get('favoriteRank') is not None]
favorites.sort(key=lambda x: x.get('favoriteRank'))

fav_cards = []
for item in favorites:
    rank = item.get('favoriteRank') + 1
    title = item.get('title')
    year = item.get('year')
    quarter = item.get('quarter')
    genres_list = ', '.join(item.get('genres', [])[:3])
    anime_id = item.get('id')
    
    image_url = item.get('image', '')
    ext = image_url.split('.')[-1]
    if len(ext) > 4 or '?' in ext:
        ext = 'jpg'
    local_img_path = f"../../anime-manager/images/{anime_id}.{ext}" if not os.path.exists(f"public/images/anime/{anime_id}.{ext}") else f"./public/images/anime/{anime_id}.{ext}"
    
    if quarter == 1: q_str = "1분기"
    elif quarter == 2: q_str = "2분기"
    elif quarter == 3: q_str = "3분기"
    elif quarter == 4: q_str = "4분기"
    elif quarter == -1: q_str = "극장판"
    elif quarter == -2: q_str = "웹(ONA)"
    else: q_str = ""
    
    # Thumbnails styled like OpenSea list rows
    fav_html = f'''            <div style="display: flex; gap: 12px; padding: 10px; border-radius: 8px; transition: background 0.2s; cursor: pointer; align-items: center;" onmouseover="this.style.background='var(--charcoal)';" onmouseout="this.style.background='transparent';">
              <div style="width: 20px; text-align: center; font-size: 13px; font-weight: 800; color: #fbbf24; flex-shrink: 0;">{rank}</div>
              <div style="width: 40px; height: 40px; border-radius: 6px; flex-shrink: 0; background-image: url('{local_img_path}'); background-size: cover; background-position: center; border: 1px solid var(--border);"></div>
              <div style="flex: 1; overflow: hidden;">
                <div style="font-size: 13px; font-weight: 700; color: var(--paper); margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{title}</div>
                <div style="font-size: 10px; font-weight: 600; color: var(--fog); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{genres_list}</div>
              </div>
              <div style="text-align: right; flex-shrink: 0; width: 44px;">
                <div style="font-size: 11px; font-weight: 800; color: var(--paper); margin-bottom: 2px;">{year}</div>
                <div style="font-size: 10px; font-weight: 500; color: var(--fog);">{q_str}</div>
              </div>
            </div>'''
    fav_cards.append(fav_html)

favs_html = '\n'.join(fav_cards)

# 3. Genre Tabs with actual counts
all_genres = []
for d in data:
    all_genres.extend(d.get('genres', []))
genre_counts = Counter(all_genres)
# Sort by count desc
sorted_genres = genre_counts.most_common()

genre_tabs_html = '<button class="genre-tab active">전체</button>'
for g, count in sorted_genres:
    genre_tabs_html += f'\n              <button class="genre-tab">{g} {count}</button>'

with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

top_part = content.split('<!-- 우측 사이드바 (목차 네비게이션 & 핵심 요약) -->')[0]
bottom_part = content.split('<!-- 포트폴리오 뷰 -->')[1]

resume_sidebar = """<!-- 우측 사이드바 (목차 네비게이션 & 핵심 요약) -->
        <div class="os-right-sidebar" style="width: 280px; flex-shrink: 0; padding-left: 24px;">
          <div style="position: sticky; top: 100px; display: flex; flex-direction: column; gap: 32px;">
            <!-- 이력서 목차 -->
            <div>
              <div class="right-sidebar-header" style="border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">
                <div class="rs-tabs" style="display: flex; gap: 16px;">
                  <div class="rs-tab active" style="font-size: 14px; font-weight: 700; color: var(--paper);">이력서 목차</div>
                </div>
              </div>
              
              <div class="right-sidebar-list" style="display: flex; flex-direction: column; gap: 8px;">
                <a href="#section-hero" style="font-size: 13px; font-weight: 600; color: var(--fog); text-decoration: none; padding: 8px 12px; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='var(--charcoal)'; this.style.color='var(--paper)';" onmouseout="this.style.background='transparent'; this.style.color='var(--fog)';">프로필 요약</a>
                <a href="#section-q1" style="font-size: 13px; font-weight: 600; color: var(--fog); text-decoration: none; padding: 8px 12px; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='var(--charcoal)'; this.style.color='var(--paper)';" onmouseout="this.style.background='transparent'; this.style.color='var(--fog)';">1. 장점과 단점</a>
                <a href="#section-q2" style="font-size: 13px; font-weight: 600; color: var(--fog); text-decoration: none; padding: 8px 12px; border-radius: 6px; transition: background 0.2s;" onmouseover="this.style.background='var(--charcoal)'; this.style.color='var(--paper)';" onmouseout="this.style.background='transparent'; this.style.color='var(--fog)';">2. 지원 동기</a>
              </div>
            </div>

            <!-- 핵심 요약 -->
            <div>
              <div class="right-sidebar-header" style="border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">
                <div class="rs-tabs" style="display: flex; gap: 16px;">
                  <div class="rs-tab active" style="font-size: 14px; font-weight: 700; color: var(--paper);">핵심 요약</div>
                </div>
              </div>
              
              <div class="right-sidebar-list" style="display: flex; flex-direction: column; gap: 24px;">
                <!-- 학력 -->
                <div>
                  <div style="font-size: 11px; font-weight: 800; color: var(--slate); margin-bottom: 12px; letter-spacing: 0.5px;">EDUCATION</div>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div>
                      <div style="font-size: 13px; font-weight: 700; color: var(--paper);">생성형 AI 활용 게임 기획자 과정</div>
                      <div style="font-size: 11px; color: var(--fog); margin-top: 2px;">2025.09 - 2026.04</div>
                    </div>
                    <div>
                      <div style="font-size: 13px; font-weight: 700; color: var(--paper);">숭실대학교 법학과</div>
                      <div style="font-size: 11px; color: var(--fog); margin-top: 2px;">2017.02 - 2025.08</div>
                    </div>
                  </div>
                </div>
                <!-- 경험 -->
                <div>
                  <div style="font-size: 11px; font-weight: 800; color: var(--slate); margin-bottom: 12px; letter-spacing: 0.5px;">EXPERIENCE</div>
                  <div style="display: flex; flex-direction: column; gap: 12px;">
                    <div>
                      <div style="font-size: 13px; font-weight: 700; color: var(--paper);">도로시아 (방치형 핵앤슬래시)</div>
                      <div style="font-size: 11px; color: var(--fog); margin-top: 2px;">2026.02 - 2026.04</div>
                    </div>
                    <div>
                      <div style="font-size: 13px; font-weight: 700; color: var(--paper);">Digreed (로그라이트 RPG)</div>
                      <div style="font-size: 11px; color: var(--fog); margin-top: 2px;">2025.12 - 2026.01</div>
                    </div>
                  </div>
                </div>
                <!-- 활용 툴 -->
                <div>
                  <div style="font-size: 11px; font-weight: 800; color: var(--slate); margin-bottom: 12px; letter-spacing: 0.5px;">TOOLS</div>
                  <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                    <span style="padding: 4px 8px; background: var(--obsidian); border: 1px solid var(--border); border-radius: 4px; font-size: 11px; font-weight: 600; color: var(--fog);">Excel</span>
                    <span style="padding: 4px 8px; background: var(--obsidian); border: 1px solid var(--border); border-radius: 4px; font-size: 11px; font-weight: 600; color: var(--fog);">PowerPoint</span>
                    <span style="padding: 4px 8px; background: var(--obsidian); border: 1px solid var(--border); border-radius: 4px; font-size: 11px; font-weight: 600; color: var(--fog);">Figma</span>
                    <span style="padding: 4px 8px; background: var(--obsidian); border: 1px solid var(--border); border-radius: 4px; font-size: 11px; font-weight: 600; color: var(--fog);">Unity</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
"""

view_anime = f"""
      <!-- 애니메이션 이력 뷰 -->
      <div id="view-anime" class="os-content-layout" style="display: none;">
        <div class="os-main-column">
          <!-- 히어로 배너 (황천의 츠가이) -->
          <div class="os-hero-banner" style="background-image: url('./public/images/anime/195600.jpg'); background-size: cover; background-position: center 20%; border-radius: 12px; position: relative; height: 320px; overflow: hidden; margin-bottom: 32px; border: 1px solid var(--border);">
            <div style="position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%);"></div>
            <div style="position: absolute; bottom: 32px; left: 32px; color: white;">
              <span style="display: inline-block; padding: 4px 10px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.15); backdrop-filter: blur(4px); font-size: 11px; font-weight: 700; border-radius: 6px; margin-bottom: 12px; color: #fbbf24;">
                <svg class="ic ic-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px;margin-right:4px;vertical-align:middle;margin-top:-2px;"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg> 최근 본
              </span>
              <h2 style="font-size: 42px; font-weight: 800; margin-bottom: 8px; letter-spacing: -1px;">황천의 츠가이</h2>
              <div style="font-size: 14px; font-weight: 500; color: rgba(255,255,255,0.8);">2026년 2분기 · 액션, 판타지, 코미디, 모험</div>
            </div>
            <!-- 스크롤 인디케이터 (밑에 3개 점) -->
            <div style="position: absolute; bottom: 16px; left: 50%; transform: translateX(-50%); display: flex; gap: 6px;">
              <div style="width: 24px; height: 3px; background: white; border-radius: 2px;"></div>
              <div style="width: 12px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 2px;"></div>
              <div style="width: 12px; height: 3px; background: rgba(255,255,255,0.4); border-radius: 2px;"></div>
            </div>
          </div>

          <div class="section-title-wrap" style="margin-bottom: 16px;">
            <h3 class="section-title" style="font-size: 20px; font-weight: 800; color: var(--paper);">전체 애니메이션</h3>
            <span class="section-subtitle" style="font-size: 13px; color: var(--fog);">아카이브에 저장된 모든 작품</span>
          </div>

          <!-- 장르 탭 -->
          <div class="os-tabs-bar" style="display: flex; gap: 8px; margin-bottom: 24px; align-items: center; flex-wrap: wrap;">
            <div class="genre-tabs" style="display: flex; gap: 8px; flex-wrap: wrap;">
{genre_tabs_html}
            </div>
            <span class="badge" style="margin-left: auto;">{len(data)}편</span>
          </div>

          <!-- 카드 그리드 -->
          <div class="anime-list">
{cards_html}
          </div>
        </div>

        <!-- 우측 사이드바 (최애 애니메이션) -->
        <div class="os-right-sidebar" style="width: 320px; flex-shrink: 0; padding-left: 24px;">
          <div style="position: sticky; top: 100px;">
            <div class="right-sidebar-header" style="border-bottom: 1px solid var(--border); padding-bottom: 12px; margin-bottom: 16px;">
              <div class="rs-tabs" style="display: flex; gap: 16px;">
                <div class="rs-tab active" style="font-size: 15px; font-weight: 800; color: var(--paper);">최애 애니메이션</div>
              </div>
            </div>
            <div class="right-sidebar-list" style="display: flex; flex-direction: column; gap: 2px;">
{favs_html}
            </div>
          </div>
        </div>
      </div>

      <!-- 포트폴리오 뷰 -->
"""

new_content = top_part + resume_sidebar + view_anime + bottom_part

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Restored and styled perfectly as requested.")

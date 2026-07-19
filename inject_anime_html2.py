import json
import os
import re

data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'
html_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Sort data
def sort_key(x):
    y = x.get('year') or 0
    q = x.get('quarter') or 0
    return (y, q)
data.sort(key=sort_key, reverse=True)

# 1. Generate Main Grid Cards
html_cards = []
for item in data:
    anime_id = item.get('id')
    title = item.get('title')
    image_url = item.get('image', '')
    ext = image_url.split('.')[-1]
    if len(ext) > 4 or '?' in ext:
        ext = 'jpg'
    local_img_path = f"./public/images/anime/{anime_id}.{ext}"
    
    card = f'''            <div class="anime-card" style="border-radius: 8px; overflow: hidden; background: var(--obsidian); border: 1px solid var(--border); box-shadow: 0 1px 3px rgba(0,0,0,0.02); display: flex; flex-direction: column;">
              <div class="card-cover" style="background-image: url('{local_img_path}'); background-size: cover; background-position: center; width: 100%; aspect-ratio: 2/3;"></div>
              <div class="card-info" style="padding: 10px; font-size: 12px; font-weight: 600; color: var(--paper); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: center; border-top: 1px solid var(--border);" title="{title}">{title}</div>
            </div>'''
    html_cards.append(card)

cards_html = '\n'.join(html_cards)

# 2. Generate Favorites List
favorites = [d for d in data if d.get('favorite') is True and d.get('favoriteRank') is not None]
favorites.sort(key=lambda x: x.get('favoriteRank'))

fav_cards = []
for item in favorites:
    rank = item.get('favoriteRank') + 1
    title = item.get('title')
    year = item.get('year')
    quarter = item.get('quarter')
    genres = ', '.join(item.get('genres', [])[:3])
    
    if quarter == 1: q_str = "1분기"
    elif quarter == 2: q_str = "2분기"
    elif quarter == 3: q_str = "3분기"
    elif quarter == 4: q_str = "4분기"
    elif quarter == -1: q_str = "극장판"
    elif quarter == -2: q_str = "웹(ONA)"
    else: q_str = ""
    
    fav_html = f'''            <div style="display: flex; gap: 16px; padding: 12px; border-radius: 8px; transition: background 0.2s; cursor: pointer; align-items: center;" onmouseover="this.style.background='var(--charcoal)';" onmouseout="this.style.background='transparent';">
              <div style="width: 24px; text-align: center; font-size: 14px; font-weight: 800; color: #fbbf24;">{rank}</div>
              <div style="flex: 1; overflow: hidden;">
                <div style="font-size: 13px; font-weight: 700; color: var(--paper); margin-bottom: 4px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{title}</div>
                <div style="font-size: 11px; color: var(--fog); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{genres}</div>
              </div>
              <div style="text-align: right; flex-shrink: 0;">
                <div style="font-size: 12px; font-weight: 800; color: var(--slate); margin-bottom: 2px;">{year}</div>
                <div style="font-size: 11px; color: var(--fog);">{q_str}</div>
              </div>
            </div>'''
    fav_cards.append(fav_html)

favs_html = '\n'.join(fav_cards)

# 3. Inject into HTML
with open(html_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Inject Grid
content = re.sub(
    r'(<div class="anime-list"[^>]*>)(.*?)(</div>\s*</div>\s*<!-- 우측 사이드바)',
    rf'\1\n{cards_html}\n          \3',
    content,
    flags=re.DOTALL
)

# Inject Favorites
content = re.sub(
    r'(<div class="right-sidebar-list"[^>]*>)(.*?)(</div>\s*</div>\s*</div>\s*<!-- 포트폴리오 뷰)',
    rf'\1\n{favs_html}\n          \3',
    content,
    flags=re.DOTALL
)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Injected grid and favorites successfully.")

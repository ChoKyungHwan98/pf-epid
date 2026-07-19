import json
import os

data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'
html_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Sort data like the old manager: probably by year/quarter descending
def sort_key(x):
    y = x.get('year') or 0
    q = x.get('quarter') or 0
    return (y, q)
data.sort(key=sort_key, reverse=True)

# Generate HTML
html_cards = []
for item in data:
    anime_id = item.get('id')
    title = item.get('title')
    image_url = item.get('image', '')
    
    ext = image_url.split('.')[-1]
    if len(ext) > 4 or '?' in ext:
        ext = 'jpg'
        
    local_img_path = f"./public/images/anime/{anime_id}.{ext}"
    
    card = f'''            <div class="anime-card">
              <div class="card-cover" style="background-image: url('{local_img_path}'); background-size: cover; background-position: center; width: 100%; aspect-ratio: 2/3;"></div>
              <div class="card-info" style="padding: 10px; font-size: 12px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;" title="{title}">{title}</div>
            </div>'''
    html_cards.append(card)

# Inject into test_dashboard.html
with open(html_path, 'r', encoding='utf-8') as f:
    html_content = f.read()

import re

# Find the anime-list container
pattern = re.compile(r'(<div class="anime-list" style="display: grid; grid-template-columns: repeat\(7, 1fr\); gap: 12px;">)(.*?)(</div>\s*</div>\s*<!-- 우측 사이드바)', re.DOTALL)

new_content = pattern.sub(r'\1\n' + '\n'.join(html_cards) + r'\n          \3', html_content)

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print(f"Injected {len(html_cards)} anime cards into test_dashboard.html")

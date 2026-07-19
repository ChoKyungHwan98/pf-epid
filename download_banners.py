import json, os, urllib.request

data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'
banner_dir = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\public\images\anime_banners'
os.makedirs(banner_dir, exist_ok=True)

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

# Get featured anime IDs
featured = [d for d in data if d.get('featured')]
print(f"Featured items: {[f['title'] for f in featured]}")

# Query AniList for banner images
import urllib.parse
ANILIST_URL = 'https://graphql.anilist.co'

for item in featured:
    aid = item['id']
    banner_path = os.path.join(banner_dir, f'{aid}.jpg')
    if os.path.exists(banner_path):
        print(f"Already exists: {aid}")
        continue
    
    query = '{ Media(id: %d, type: ANIME) { bannerImage coverImage { extraLarge large } } }' % aid
    req_data = json.dumps({'query': query}).encode('utf-8')
    req = urllib.request.Request(ANILIST_URL, data=req_data, headers={
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0'
    })
    
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode('utf-8'))
        
        media = result.get('data', {}).get('Media', {})
        banner_url = media.get('bannerImage') or media.get('coverImage', {}).get('extraLarge') or media.get('coverImage', {}).get('large')
        
        if banner_url:
            req2 = urllib.request.Request(banner_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as resp2, open(banner_path, 'wb') as out:
                out.write(resp2.read())
            print(f"Downloaded banner: {aid} ({item['title']})")
        else:
            print(f"No banner for: {aid} ({item['title']})")
    except Exception as e:
        print(f"Error for {aid}: {e}")

# Also download extraLarge covers for all featured (for fallback)
cover_dir = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\public\images\anime_covers_large'
os.makedirs(cover_dir, exist_ok=True)

for item in featured:
    aid = item['id']
    cover_path = os.path.join(cover_dir, f'{aid}.jpg')
    if os.path.exists(cover_path):
        continue
    
    query = '{ Media(id: %d, type: ANIME) { coverImage { extraLarge large } } }' % aid
    req_data = json.dumps({'query': query}).encode('utf-8')
    req = urllib.request.Request(ANILIST_URL, data=req_data, headers={
        'Content-Type': 'application/json', 'Accept': 'application/json', 'User-Agent': 'Mozilla/5.0'
    })
    try:
        with urllib.request.urlopen(req) as resp:
            result = json.loads(resp.read().decode('utf-8'))
        media = result.get('data', {}).get('Media', {})
        cover_url = media.get('coverImage', {}).get('extraLarge') or media.get('coverImage', {}).get('large')
        if cover_url:
            req2 = urllib.request.Request(cover_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2) as resp2, open(cover_path, 'wb') as out:
                out.write(resp2.read())
            print(f"Downloaded large cover: {aid}")
    except Exception as e:
        print(f"Cover error {aid}: {e}")

print("Done!")

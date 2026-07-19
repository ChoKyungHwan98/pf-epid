import urllib.request
import re
import os

BASE_URL = 'https://lootandwaifus.com'
SKEL_URL = f'{BASE_URL}/l2d/trickcal/xXionx/xXionxSkin2.skel.asset'
ATLAS_URL = f'{BASE_URL}/l2d/trickcal/xXionx/xXionxSkin2.atlas.asset'
OUT_DIR = 'public/spine'

os.makedirs(OUT_DIR, exist_ok=True)

def download(url, path):
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0',
        'Referer': 'https://lootandwaifus.com/'
    })
    data = urllib.request.urlopen(req).read()
    with open(path, 'wb') as f:
        f.write(data)
    print(f"OK: {path} ({len(data)} bytes)")
    return data

# 1. Download .skel.asset
download(SKEL_URL, f'{OUT_DIR}/xXionxSkin2.skel.asset')

# 2. Download .atlas.asset and parse PNG filenames
atlas_data = download(ATLAS_URL, f'{OUT_DIR}/xXionxSkin2.atlas.asset')
atlas_text = atlas_data.decode('utf-8', errors='replace')
print("\n--- Atlas content (first 500 chars) ---")
print(atlas_text[:500])

# 3. Find all PNG references in the atlas
# Atlas format: first non-blank lines after a blank line are page filenames
lines = atlas_text.splitlines()
pngs = []
for i, line in enumerate(lines):
    stripped = line.strip()
    # PNG files in atlas appear right after empty lines (or at start)
    if stripped.endswith('.png') and not stripped.startswith(' '):
        pngs.append(stripped)

print(f"\nPNGs referenced: {pngs}")

# 4. Download all referenced PNGs
base_path = '/l2d/trickcal/xXionx/'
for png in pngs:
    url = BASE_URL + base_path + png
    try:
        download(url, f'{OUT_DIR}/{png}')
    except Exception as e:
        print(f"FAILED: {url} - {e}")

print("\nDone! All files downloaded to public/spine/")

import urllib.request
import os

out = 'public/spine'
os.makedirs(out, exist_ok=True)

files = [
    ('https://unpkg.com/@esotericsoftware/spine-player@4.1/dist/iife/spine-player.js', f'{out}/spine-player.js'),
    ('https://unpkg.com/@esotericsoftware/spine-player@4.1/dist/spine-player.css', f'{out}/spine-player.css'),
]

for url, path in files:
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    data = urllib.request.urlopen(req).read()
    with open(path, 'wb') as f:
        f.write(data)
    print(f"OK: {path} ({len(data):,} bytes)")

print("Done!")

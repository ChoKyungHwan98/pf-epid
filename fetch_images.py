import urllib.request
import re
import json

req = urllib.request.Request('https://lootandwaifus.com/character/xxionx-trickcal/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')
images = set(re.findall(r'https?://[^\s\"\']+\.(?:png|jpg|jpeg|webp)', html))
with open('images.txt', 'w', encoding='utf-8') as f:
    for img in images:
        f.write(img + '\n')
print("Wrote images.txt")

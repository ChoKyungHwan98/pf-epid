import urllib.request
import re
from urllib.error import HTTPError

# Try to get the actual JavaScript source of the viewer page to find asset patterns
req = urllib.request.Request('https://lootandwaifus.com/trickcal-skin-pack-viewer/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='replace')

# Save the raw HTML to inspect
with open('viewer_page.html', 'w', encoding='utf-8') as f:
    f.write(html)

# Find all script sources
scripts = re.findall(r'<script[^>]+src=["\']([^"\']+)["\']', html)
print("Scripts found:")
for s in scripts:
    print(s)

# Find any inline references to spine files
spine_refs = re.findall(r'[^\s"\']+(?:\.skel|\.atlas|\.json)[^\s"\']*', html)
print("\nSpine-like references:")
for r in spine_refs:
    print(r)

# Look for xXionx patterns
xxionx_refs = re.findall(r'[^\s"\']*[xX][iI][oO][nN][xX][^\s"\']*', html)
print("\nxXionx patterns:")
for r in xxionx_refs:
    print(r)

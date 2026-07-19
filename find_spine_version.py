import urllib.request
import re

req = urllib.request.Request('https://lootandwaifus.com/trickcal-skin-pack-viewer/', headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='replace')

# Find spine-player CDN reference
spine_player_refs = re.findall(r'[^\s"\']*spine-player[^\s"\']*', html)
print("Spine-player CDN refs:")
for r in spine_player_refs:
    print(r)

# Find version numbers in CDN urls
cdn_versions = re.findall(r'spine-player@([\d.]+)', html)
print("\nVersions:", cdn_versions)

# Find the SpinePlayer initialization
# Look for "new SpinePlayer" or "SpinePlayer("
sp_init = re.findall(r'.{0,100}SpinePlayer.{0,200}', html)
print("\nSpinePlayer inits:")
for r in sp_init[:3]:
    print(r)

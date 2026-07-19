import urllib.request
from urllib.error import HTTPError

base = 'https://lootandwaifus.com/l2d/trickcal/xXionx/'
files = [
    'xXionxSkin2.skel.asset',
    'xXionxSkin2.atlas.asset',
    'xXionxSkin4.skel.asset',
    'xXionxSkin4.atlas.asset',
]

for f in files:
    url = base + f
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req)
        print(f"OK ({res.getcode()}): {url}")
    except HTTPError as e:
        print(f"ERROR ({e.code}): {url}")

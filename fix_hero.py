path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\test_dashboard.html'
with open(path, 'r', encoding='utf-8') as f:
    s = f.read()

# Only replace the hero bg image paths (first occurrence within hero-slide divs)
import re
def replace_hero_img(match):
    aid = match.group(1)
    return f"background-image:url('./public/images/anime_banners/{aid}.jpg')"

# Match hero image paths like: background-image:url('./public/images/anime/XXXXX.jpg')
# but only when preceded by hero-bg-image class (within 200 chars)
s = re.sub(
    r"(hero-bg-image is-banner\" style=\")background-image:url\('\./public/images/anime/(\d+)\.jpg'\)",
    lambda m: m.group(1) + f"background-image:url('./public/images/anime_banners/{m.group(2)}.jpg')",
    s
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(s)

print("Hero image paths updated to use banner images!")

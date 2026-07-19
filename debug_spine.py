import re

with open('viewer_full.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find the inline script with SpinePlayer init
scripts = re.findall(r'<script[^>]*>(.*?)</script>', html, re.DOTALL)
for i, s in enumerate(scripts):
    if 'SpinePlayer' in s:
        print(f"=== Script #{i} ===")
        # Find the SpinePlayer call
        idx = s.find('SpinePlayer')
        print(s[max(0, idx-200):idx+1000])

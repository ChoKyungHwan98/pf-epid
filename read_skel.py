import struct
import re

# Read animation names from Spine 4.1 binary skeleton
with open('public/spine/xXionxSkin2.skel.asset', 'rb') as f:
    data = f.read()

# Find all readable strings (length > 3, printable ASCII or Korean chars)
# Look for animation-like names by finding null-terminated or length-prefixed strings
text = data.decode('utf-8', errors='replace')

# Find words that look like animation names (alphanumeric, underscores, common spine patterns)
anim_candidates = re.findall(r'[A-Za-z][A-Za-z0-9_]{2,30}', text)

# Filter to likely animation names
likely_anims = [a for a in anim_candidates if any(k in a.lower() for k in 
    ['idle', 'walk', 'run', 'attack', 'win', 'lose', 'hit', 'skill', 'dead', 'intro', 'stand', 'move', 'wait', 'action'])]

print("Likely animation names:")
for a in set(likely_anims):
    print(f"  {a}")

# Also just find all strings of 4+ chars that appear in the binary (alpha + underscore pattern)
all_strings = set(re.findall(r'[A-Za-z_][A-Za-z0-9_]{3,25}', text))
print(f"\nTotal unique identifiers found: {len(all_strings)}")

# Print ones that look like animation names (have underscore pattern common in spine)
underscore_ones = [s for s in all_strings if '_' in s and len(s) > 4]
print("\nUnderscore identifier patterns (likely spine names):")
for s in sorted(underscore_ones)[:40]:
    print(f"  {s}")

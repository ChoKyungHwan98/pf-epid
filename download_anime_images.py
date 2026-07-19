import json
import os
import urllib.request
from concurrent.futures import ThreadPoolExecutor

data_path = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\anime-manager\data.json'
output_dir = r'c:\Users\Admin\Desktop\게임기획\포트폴리오\회사별_포트폴리오사이트\에피드게임즈_포트폴리오사이트\public\images\anime'

os.makedirs(output_dir, exist_ok=True)

with open(data_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

def download_image(item):
    anime_id = item.get('id')
    image_url = item.get('image')
    
    if not anime_id or not image_url:
        return
        
    ext = image_url.split('.')[-1]
    if len(ext) > 4 or '?' in ext:
        ext = 'jpg' # fallback
        
    file_path = os.path.join(output_dir, f"{anime_id}.{ext}")
    
    if not os.path.exists(file_path):
        try:
            req = urllib.request.Request(image_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req) as response, open(file_path, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Downloaded: {anime_id}.{ext}")
        except Exception as e:
            print(f"Failed to download {anime_id}: {e}")

print(f"Starting download of {len(data)} images...")
with ThreadPoolExecutor(max_workers=10) as executor:
    executor.map(download_image, data)
print("Finished downloading all images.")

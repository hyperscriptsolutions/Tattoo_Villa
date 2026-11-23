import urllib.request
import os
import json

with open("all_scraped_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

images = data.get("all_discovered_images", [])

# Let's create public/images directory
os.makedirs("public/images/tattoos", exist_ok=True)
os.makedirs("public/images/studio", exist_ok=True)
os.makedirs("public/images/artists", exist_ok=True)
os.makedirs("public/images/branding", exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

downloaded = []
for url in images:
    filename = url.split('/')[-1]
    # classify
    if "logo" in filename.lower():
        dest = os.path.join("public/images/branding", filename)
    elif any(k in filename.lower() for k in ["9200", "9201", "9202", "9206", "studio"]):
        dest = os.path.join("public/images/studio", filename)
    elif any(k in filename.lower() for k in ["2738", "3343", "brown-photo"]):
        dest = os.path.join("public/images/artists", filename)
    else:
        dest = os.path.join("public/images/tattoos", filename)
    
    if os.path.exists(dest):
        downloaded.append((url, dest))
        continue
    
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp, open(dest, "wb") as out:
            out.write(resp.read())
        print(f"Downloaded {filename} -> {dest}")
        downloaded.append((url, dest))
    except Exception as e:
        print(f"Failed {url}: {e}")

print(f"Total downloaded/verified: {len(downloaded)}")

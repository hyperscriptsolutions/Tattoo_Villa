import urllib.request
import os

url1 = "https://raw.githubusercontent.com/VedantGupta19402/Orion-Ink/main/public/Ink.mp4"
dest1 = "public/videos/tattoo-hero-clean.mp4"

headers = {'User-Agent': 'Mozilla/5.0'}

try:
    print(f"Downloading {url1}...")
    req = urllib.request.Request(url1, headers=headers)
    with urllib.request.urlopen(req, timeout=15) as resp, open(dest1, "wb") as f:
        f.write(resp.read())
    print("Downloaded:", dest1, os.path.getsize(dest1))
except Exception as e:
    print("Download 1 failed:", e)

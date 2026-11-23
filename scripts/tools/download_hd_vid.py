import urllib.request
import os

url_hd = "https://videos.pexels.com/video-files/5238234/5238234-hd_1280_720_25fps.mp4"
dest_hd = "public/videos/hero-tattoo-reel-hd.mp4"

try:
    req = urllib.request.Request(url_hd, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    with urllib.request.urlopen(req, timeout=15) as resp:
        content = resp.read()
        if len(content) > 100000:
            with open(dest_hd, "wb") as f:
                f.write(content)
            print("HD downloaded successfully! Size:", len(content))
except Exception as e:
    print("HD download failed:", e)

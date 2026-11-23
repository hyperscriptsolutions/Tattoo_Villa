import urllib.request
import os

candidates = [
    "https://videos.pexels.com/video-files/4113175/4113175-hd_1920_1080_30fps.mp4",
    "https://videos.pexels.com/video-files/4113175/4113175-hd_1280_720_30fps.mp4",
    "https://videos.pexels.com/video-files/4113175/4113175-sd_640_360_30fps.mp4",
    "https://videos.pexels.com/video-files/4113175/4113175-uhd_2560_1440_30fps.mp4"
]

dest = "public/videos/hero-tattoo-reel-hd.mp4"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

for c in candidates:
    try:
        print("Testing candidate:", c)
        req = urllib.request.Request(c, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            if len(data) > 100000:
                with open(dest, "wb") as f:
                    f.write(data)
                print(f"SUCCESS! Downloaded {dest} ({len(data)} bytes)")
                break
    except Exception as e:
        print("Failed:", e)

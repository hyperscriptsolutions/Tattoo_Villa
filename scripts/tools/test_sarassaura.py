import urllib.request
import os

urls = [
    "https://raw.githubusercontent.com/sarassaura/tattoo/main/src/assets/Home.mp4",
    "https://raw.githubusercontent.com/sarassaura/tattoo/master/src/assets/Home.mp4",
    "https://raw.githubusercontent.com/sarassaura/tattoo/main/public/Home.mp4",
    "https://raw.githubusercontent.com/sarassaura/tattoo/master/public/Home.mp4",
    "https://raw.githubusercontent.com/sarassaura/tattoo/main/src/assets/video/Home.mp4",
    "https://raw.githubusercontent.com/sarassaura/tattoo/master/src/assets/video/Home.mp4"
]

dest = "public/videos/hero-tattoo-reel-hd.mp4"
headers = {'User-Agent': 'Mozilla/5.0'}

for u in urls:
    try:
        print("Checking", u)
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            if len(data) > 100000:
                with open(dest, "wb") as f:
                    f.write(data)
                print("SUCCESS from", u, "Size:", len(data))
                break
    except Exception as e:
        print("Failed:", e)

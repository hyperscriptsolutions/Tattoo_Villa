import urllib.request
import os

os.makedirs("public/videos", exist_ok=True)

# Let's test reliable open video CDNs
urls = [
    # Open high-quality creative commons video of tattoo / artist craft
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    # Or test Pexels direct video cdn
    "https://videos.pexels.com/video-files/3998398/3998398-sd_640_360_24fps.mp4",
    "https://videos.pexels.com/video-files/5238234/5238234-sd_640_360_25fps.mp4",
    "https://videos.pexels.com/video-files/4125345/4125345-sd_640_360_25fps.mp4"
]

dest = "public/videos/hero-tattoo-reel.mp4"

for u in urls:
    try:
        print("Testing", u)
        req = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read()
            if len(content) > 100000:
                with open(dest, "wb") as f:
                    f.write(content)
                print(f"Success! Saved {dest} ({len(content)} bytes)")
                break
    except Exception as e:
        print("Failed:", e)

if os.path.exists(dest):
    print("Found video:", os.path.getsize(dest))

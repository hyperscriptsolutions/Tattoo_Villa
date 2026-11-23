import urllib.request
import re
import json

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}

# Let's search Pexels for "tattoo" video
url = "https://www.pexels.com/search/videos/tattoo/"
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8')
        # Find video file links or video ids
        vid_urls = re.findall(r'https://videos\.pexels\.com/video-files/\d+/[^\s"\'<>]+\.mp4', html)
        print(f"Found {len(vid_urls)} video URLs on Pexels:")
        for v in set(vid_urls)[:10]:
            print(" -", v)
except Exception as e:
    print("Pexels scrape error:", e)

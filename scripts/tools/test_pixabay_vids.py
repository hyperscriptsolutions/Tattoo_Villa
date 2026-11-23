import urllib.request
import os

# Let's test a list of high-definition, verified open video URLs of tattoo artists inking skin
video_urls = [
    # Wikimedia Commons direct videos with full User-Agent
    "https://upload.wikimedia.org/wikipedia/commons/transcoded/0/09/The_making_of_a_tattoo%2C_short_video.webm/The_making_of_a_tattoo%2C_short_video.webm.480p.vp9.webm",
    "https://upload.wikimedia.org/wikipedia/commons/0/09/The_making_of_a_tattoo%2C_short_video.webm",
    # Open high-def video samples
    "https://cdn.pixabay.com/video/2020/05/25/40149-425178384_large.mp4",
    "https://cdn.pixabay.com/video/2019/04/23/23011-332470007_large.mp4",
    "https://cdn.pixabay.com/video/2022/10/05/133722-757757916_large.mp4",
    "https://cdn.pixabay.com/video/2021/08/04/83875-584067332_large.mp4"
]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    'Accept': '*/*'
}

for u in video_urls:
    try:
        print("Trying:", u)
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            content = resp.read()
            if len(content) > 100000:
                print(f"SUCCESS! {u} -> size: {len(content)} bytes")
                with open("public/videos/hero-tattoo-reel-hd.mp4", "wb") as f:
                    f.write(content)
                break
    except Exception as e:
        print("Failed:", e)

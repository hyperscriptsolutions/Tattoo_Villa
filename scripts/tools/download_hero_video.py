import urllib.request
import os

os.makedirs("public/videos", exist_ok=True)

# Let's test video download options
# We can download a high quality cinematic tattoo studio B-roll video
test_urls = [
    # Clean high quality tattoo machine / artist inking B-roll video
    "https://assets.mixkit.co/videos/preview/mixkit-tattoo-artist-working-on-a-design-41484-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-tattoo-artist-inking-a-client-41483-large.mp4",
    "https://assets.mixkit.co/videos/preview/mixkit-tattoo-artist-inking-skin-with-a-machine-41485-large.mp4"
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

dest = "public/videos/hero-tattoo-reel.mp4"

for u in test_urls:
    try:
        print(f"Trying {u}...")
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            content = resp.read()
            if len(content) > 100000:
                with open(dest, "wb") as f:
                    f.write(content)
                print(f"Successfully downloaded to {dest} ({len(content)} bytes)")
                break
    except Exception as e:
        print(f"Failed {u}: {e}")

if os.path.exists(dest):
    print("Video file ready at:", dest, os.path.getsize(dest))
else:
    print("Could not download mixkit, will try alternate source")

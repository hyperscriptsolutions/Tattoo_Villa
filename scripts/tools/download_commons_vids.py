import urllib.request
import json
import os

os.makedirs("public/videos", exist_ok=True)

titles = [
    "File:The making of a tattoo, short video.webm"
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

for t in titles:
    api = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(t)}&prop=imageinfo&iiprop=url|size&format=json"
    try:
        req = urllib.request.Request(api, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as r:
            d = json.loads(r.read().decode('utf-8'))
            for pid, p in d['query']['pages'].items():
                v_url = p['imageinfo'][0]['url']
                out_path = "public/videos/hero-tattoo-reel.webm"
                print(f"Downloading {v_url} -> {out_path}...")
                v_req = urllib.request.Request(v_url, headers=headers)
                with urllib.request.urlopen(v_req, timeout=20) as v_resp, open(out_path, 'wb') as out_f:
                    out_f.write(v_resp.read())
                print(f"Done: {out_path} ({os.path.getsize(out_path)} bytes)")
    except Exception as e:
        print(f"Error downloading {t}: {e}")

import urllib.request
import json

api = "https://api.github.com/repos/sarassaura/tattoo/branches"
req = urllib.request.Request(api, headers={'User-Agent': 'Mozilla/5.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as r:
        branches = json.loads(r.read().decode('utf-8'))
        print("Branches:", [b['name'] for b in branches])
        for b in branches:
            bname = b['name']
            t_api = f"https://api.github.com/repos/sarassaura/tattoo/git/trees/{bname}?recursive=1"
            req2 = urllib.request.Request(t_api, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2, timeout=10) as r2:
                d = json.loads(r2.read().decode('utf-8'))
                for it in d.get('tree', []):
                    if it['path'].lower().endswith(('.mp4', '.webm')):
                        print(f"[{bname}] {it['path']}")
except Exception as e:
    print("Error:", e)

import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0'}

queries = [
    "tattoo+landing+page",
    "tattoo+parlor+video",
    "tattoo+studio+hero"
]

found = []
for q in queries:
    url = f"https://api.github.com/search/repositories?q={q}&per_page=10"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode())
            for item in data.get('items', []):
                full_name = item['full_name']
                default_branch = item.get('default_branch', 'main')
                tree_url = f"https://api.github.com/repos/{full_name}/git/trees/{default_branch}?recursive=1"
                try:
                    req2 = urllib.request.Request(tree_url, headers=headers)
                    with urllib.request.urlopen(req2, timeout=6) as r2:
                        t_data = json.loads(r2.read().decode())
                        for f in t_data.get('tree', []):
                            if f['path'].lower().endswith(('.mp4', '.webm')):
                                raw = f"https://raw.githubusercontent.com/{full_name}/{default_branch}/{f['path']}"
                                print(f"[{full_name}] {f['path']} ({f.get('size')} bytes)")
                                found.append((raw, f.get('size', 0)))
                except Exception:
                    pass
    except Exception as e:
        print("Query error:", e)

with open("found_tattoo_videos.json", "w") as out:
    json.dump(found, out, indent=2)

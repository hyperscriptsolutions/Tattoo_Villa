import urllib.request
import json

headers = {'User-Agent': 'Mozilla/5.0'}

# Search repos for tattoo
url = "https://api.github.com/search/repositories?q=tattoo+studio+website+sort:stars"
req = urllib.request.Request(url, headers=headers)
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode())
        items = data.get('items', [])
        print(f"Found {len(items)} repos")
        for item in items[:10]:
            full_name = item['full_name']
            default_branch = item.get('default_branch', 'main')
            # Check tree
            tree_url = f"https://api.github.com/repos/{full_name}/git/trees/{default_branch}?recursive=1"
            req2 = urllib.request.Request(tree_url, headers=headers)
            try:
                with urllib.request.urlopen(req2, timeout=6) as r2:
                    t_data = json.loads(r2.read().decode())
                    for f in t_data.get('tree', []):
                        if f['path'].lower().endswith(('.mp4', '.webm')):
                            print(f"FOUND VIDEO in {full_name}: {f['path']} (size: {f.get('size')})")
                            raw_url = f"https://raw.githubusercontent.com/{full_name}/{default_branch}/{f['path']}"
                            print("  RAW URL:", raw_url)
            except Exception:
                pass
except Exception as e:
    print("Search error:", e)

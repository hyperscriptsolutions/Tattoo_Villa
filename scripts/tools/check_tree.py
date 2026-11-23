import urllib.request
import json

api = "https://api.github.com/repos/sarassaura/tattoo/git/trees/main?recursive=1"
try:
    req = urllib.request.Request(api, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=10) as resp:
        d = json.loads(resp.read().decode('utf-8'))
        tree = d.get('tree', [])
        for item in tree:
            if item['path'].endswith(('.mp4', '.webm')):
                print("Found video:", item['path'])
except Exception as e:
    print("API error:", e)

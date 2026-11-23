import urllib.request
import json

title = "File:The making of a tattoo, short video.webm"
url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url|mime|size&format=json"

req = urllib.request.Request(url, headers={'User-Agent': 'TattooStudioBot/1.0'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        pages = data['query']['pages']
        for pid, p in pages.items():
            info = p['imageinfo'][0]
            print("Direct URL:", info['url'])
            print("Size:", info['size'])
            print("MIME:", info['mime'])
except Exception as e:
    print("Error:", e)

import urllib.request
import json
import re

# Let's search Wikimedia Commons for tattoo video
query = "tattoo"
api_url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={query}%20filetype:video&srnamespace=6&format=json"

req = urllib.request.Request(api_url, headers={'User-Agent': 'TattooStudioBot/1.0 (contact@example.com)'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        results = data.get('query', {}).get('search', [])
        print(f"Wikimedia found {len(results)} videos:")
        for r in results[:5]:
            print(" -", r['title'])
except Exception as e:
    print("Wikimedia query failed:", e)

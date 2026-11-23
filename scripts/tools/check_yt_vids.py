import urllib.request
import re

url = 'https://www.youtube.com/@tattoovilla5365/videos'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
try:
    with urllib.request.urlopen(req, timeout=10) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        vids = re.findall(r'"videoId":"([^"]+)"', html)
        print('Tattoo Villa YouTube Video IDs found:', len(vids))
        for v in list(dict.fromkeys(vids))[:10]:
            print(" - https://www.youtube.com/watch?v=" + v)
except Exception as e:
    print('Error:', e)

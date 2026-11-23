import urllib.request
import re
import json

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'})
    try:
        with urllib.request.urlopen(req, timeout=15) as resp:
            return resp.read().decode('utf-8', errors='ignore')
    except Exception as e:
        print(f"Error fetching {url}: {e}")
        return ""

pages_to_fetch = [
    "https://tattooartistindelhi.com/page-sitemap.xml",
    "https://tattooartistindelhi.com/about-us/",
    "https://tattooartistindelhi.com/our-studio/",
    "https://tattooartistindelhi.com/our-awards/",
    "https://tattooartistindelhi.com/portfolio/",
    "https://tattooartistindelhi.com/contact-us/",
    "https://tattooartistindelhi.com/training/",
    "https://tattooartistindelhi.com/portrait-tattoos/",
    "https://tattooartistindelhi.com/animal-tattoos/",
    "https://tattooartistindelhi.com/religious-tattoos/",
    "https://tattooartistindelhi.com/fineline-tattoo/",
    "https://tattooartistindelhi.com/minimal-tattoo/",
    "https://tattooartistindelhi.com/calligraphy-tattoo/",
    "https://tattooartistindelhi.com/sleeve-tattoo/",
    "https://tattooartistindelhi.com/travel-tattoos/",
    "https://tattooartistindelhi.com/lion-tattoo/",
    "https://tattooartistindelhi.com/thumb-footprint-tattoo/"
]

all_data = {}
all_images = set()

for url in pages_to_fetch:
    print(f"Fetching {url}...")
    html = fetch(url)
    if not html:
        continue
    
    # Extract page-sitemap urls if it is sitemap
    if "sitemap" in url:
        urls = re.findall(r'<loc>(https?://[^<]+)</loc>', html)
        all_data["page_sitemap_urls"] = urls
        continue

    # Extract title
    title_m = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    title = title_m.group(1).strip() if title_m else ""

    # Extract clean text
    clean_text = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.DOTALL)
    clean_text = re.sub(r'<style[^>]*>.*?</style>', ' ', clean_text, flags=re.DOTALL)
    clean_text = re.sub(r'<[^>]+>', ' ', clean_text)
    clean_text = re.sub(r'\s+', ' ', clean_text).strip()

    # Extract images from wp-content/uploads
    imgs = re.findall(r'src=["\'](https?://tattooartistindelhi\.com/wp-content/uploads/[^"\'\s]+\.(?:jpg|jpeg|png|webp|svg))["\']', html)
    for img in imgs:
        all_images.add(img)

    all_data[url] = {
        "title": title,
        "text_preview": clean_text[:2500],
        "full_text": clean_text,
        "images": sorted(list(set(imgs)))
    }

all_data["all_discovered_images"] = sorted(list(all_images))

with open("all_scraped_data.json", "w", encoding="utf-8") as f:
    json.dump(all_data, f, indent=2)

print(f"\nDone! Scraped {len(all_data)} items. Total images: {len(all_images)}. Saved to all_scraped_data.json")

import json

with open("all_scraped_data.json", "r", encoding="utf-8") as f:
    data = json.load(f)

for url, item in data.items():
    if url in ["page_sitemap_urls", "all_discovered_images"]:
        continue
    imgs = item.get("images", [])
    if imgs:
        print(f"\n{url} ({len(imgs)} images):")
        for img in imgs[:8]:
            print(f"  {img}")

import re
import json

with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

idx = 0
reviews = []
while True:
    idx = html.find('class="wp-google-name"', idx)
    if idx == -1:
        break
    # look back for block start and forward for text
    sub = html[idx-100:idx+1500]
    name_m = re.search(r'class="wp-google-name"[^>]*>([^<]+)</a>', sub)
    time_m = re.search(r'class="wp-google-time"[^>]*>([^<]+)</div>', sub)
    link_m = re.search(r'href="([^"]+)"\s+class="wp-google-name"', sub)
    text_m = re.search(r'class="wp-google-text"[^>]*>(.*?)</div>', sub, re.DOTALL)
    
    if name_m:
        name = name_m.group(1).strip()
        time_str = time_m.group(1).strip() if time_m else ""
        link = link_m.group(1).strip() if link_m else ""
        text = text_m.group(1).strip() if text_m else ""
        text = re.sub(r'<[^>]+>', ' ', text)
        text = re.sub(r'\s+', ' ', text)
        reviews.append({
            "name": name,
            "date": time_str,
            "link": link,
            "text": text,
            "rating": 5
        })
    idx += 50

print(f"Total reviews extracted: {len(reviews)}")
for r in reviews:
    print(f"Name: {r['name']} | Date: {r['date']}")
    print(f"Review: {r['text'][:150]}...")
    print(f"Link: {r['link']}\n")

with open("extracted_reviews.json", "w", encoding="utf-8") as f:
    json.dump({
        "google_rating": 4.9,
        "reviews": reviews
    }, f, indent=2)

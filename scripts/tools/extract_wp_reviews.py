import re
import json

with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

# Match each wp-google-review
review_blocks = re.findall(r'<div class="wp-google-review[^"]*">(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
print(f"Found {len(review_blocks)} review blocks")

reviews_data = []
# Match review parts: name, link, date, text
items = re.findall(r'<a href="([^"]+)" class="wp-google-name"[^>]*>([^<]+)</a>\s*<div class="wp-google-time"[^>]*>([^<]+)</div>.*?<div class="wp-google-text[^"]*">(.*?)</div>', html, re.DOTALL)

print(f"Extracted {len(items)} full reviews:")
for link, name, time_str, text_html in items:
    clean_text = re.sub(r'<[^>]+>', ' ', text_html).strip()
    clean_text = re.sub(r'\s+', ' ', clean_text)
    review_obj = {
        "name": name.strip(),
        "date": time_str.strip(),
        "link": link.strip(),
        "text": clean_text
    }
    reviews_data.append(review_obj)
    print(f"\n- {name.strip()} ({time_str.strip()}): {clean_text[:120]}...")

# Look for overall rating in widget
badge = re.findall(r'<span class="wp-google-rating[^"]*">([^<]+)</span>', html)
rating_num = re.findall(r'class="wp-google-score"[^>]*>([^<]+)</span>', html)
rating_count = re.findall(r'(\d+)\s*Google reviews', html, re.I)
print("\nGoogle Rating overall:", badge, rating_num, rating_count)

with open("extracted_google_reviews.json", "w", encoding="utf-8") as f:
    json.dump({
        "overall_rating": "4.9",
        "reviews": reviews_data
    }, f, indent=2)

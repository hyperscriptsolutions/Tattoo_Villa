import re
import json

with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

# Let's find all text inside wp-google-feedback
feedbacks = re.findall(r'<div class="wp-google-feedback"[^>]*>(.*?)</div>', html, re.DOTALL)
print(f"Total feedback elements: {len(feedbacks)}")
valid_reviews = []
for i, fb in enumerate(feedbacks):
    clean = re.sub(r'<[^>]+>', ' ', fb).strip()
    clean = re.sub(r'\s+', ' ', clean)
    if clean:
        print(f"[{i}] {clean}\n")

# Look for all names
names = re.findall(r'<a href="([^"]+)" class="wp-google-name"[^>]*>([^<]+)</a>', html)
print(f"Total author names: {len(names)}")
for link, n in names:
    print(f"- {n.strip()}: {link}")

# Let's inspect the whole review cards
cards = re.findall(r'<div class="grw-review">(.*?)</div>\s*</div>\s*</div>\s*</div>', html, re.DOTALL)
print(f"Total cards found: {len(cards)}")
for card in cards:
    n_m = re.search(r'class="wp-google-name"[^>]*>([^<]+)</a>', card)
    fb_m = re.search(r'class="wp-google-feedback"[^>]*>(.*?)</div>', card, re.DOTALL)
    dt_m = re.search(r'class="wp-google-time"[^>]*>([^<]+)</div>', card)
    text_content = ""
    if fb_m:
        text_content = re.sub(r'<[^>]+>', ' ', fb_m.group(1)).strip()
    if n_m and text_content:
        print(f"AUTHOR: {n_m.group(1).strip()} ({dt_m.group(1).strip() if dt_m else ''})")
        print(f"TEXT: {text_content}\n")

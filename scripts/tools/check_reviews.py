import re
import json

with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

# Look for reviews or ratings
reviews_section = re.findall(r'(?:review|testimonial|rating|star|google)[^<>]{0,100}', html, re.I)
print("Review mentions count:", len(reviews_section))

# Look for text with customer names or quotes
review_blocks = re.findall(r'<div[^>]*class="[^"]*(?:review|testimonial)[^"]*"[^>]*>(.*?)</div>', html, re.I | re.S)
print("Review blocks found:", len(review_blocks))
for r in review_blocks[:5]:
    clean = re.sub(r'<[^>]+>', ' ', r)
    clean = re.sub(r'\s+', ' ', clean).strip()
    print("  REVIEW:", clean[:200])

# Look for Google rating
g_rating = re.findall(r'(\d\.\d)\s*(?:stars|rating|out of 5|\/5)?', html, re.I)
print("Numeric ratings:", set(g_rating))

# Look for artist mentions
artists = re.findall(r'(Harminder|Jaspreet|Anand)[^<>]{0,150}', html, re.I)
print("Artist mentions:")
for a in set(artists):
    print("  -", a)

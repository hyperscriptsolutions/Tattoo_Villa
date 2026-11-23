import re

with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

# Look for widget-google-reviews
reviews = re.findall(r'<div[^>]*class="[^"]*ti-review-item[^"]*"[^>]*>(.*?)</div>\s*</div>\s*</div>', html, re.DOTALL)
if not reviews:
    # Try another pattern
    reviews = re.findall(r'<div[^>]*class="[^"]*ti-review-content[^"]*"[^>]*>(.*?)</div>', html, re.DOTALL)

print("Total TI reviews found:", len(reviews))

# Let's search for customer names and their review texts
matches = re.findall(r'<div class="ti-name">([^<]+)</div>.*?<div class="ti-date">([^<]+)</div>.*?<div class="ti-review-text[^"]*">(.*?)</div>', html, re.DOTALL)
print(f"Matched {len(matches)} reviews with full info:")
for name, date, text in matches:
    clean_t = re.sub(r'<[^>]+>', ' ', text).strip()
    print(f"\nAuthor: {name.strip()} ({date.strip()})")
    print(f"Review: {clean_t}")

# Check Google rating badge in the widget
badge = re.findall(r'<span class="ti-rating-text[^"]*">(.*?)</span>', html)
print(f"\nRating badge: {badge}")
ti_stars = re.findall(r'<span class="ti-stars[^"]*".*?</span>', html)
print(f"Stars count: {len(ti_stars)}")
score = re.findall(r'(\d\.\d)\s*rating|EXCELLENT|Based on \d+ reviews', html, re.I)
print(f"Rating text: {score}")

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

# Try fetching sitemap
sitemap_xml = fetch("https://tattooartistindelhi.com/sitemap.xml")
if not sitemap_xml:
    sitemap_xml = fetch("https://tattooartistindelhi.com/wp-sitemap.xml")

urls = []
if sitemap_xml:
    urls = re.findall(r'<loc>(https?://[^<]+)</loc>', sitemap_xml)
    print(f"Sitemap URLs found: {len(urls)}")
    for u in urls:
        print("  -", u)
else:
    print("No sitemap found at standard locations")

# Analyze homepage
with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract links
page_links = sorted(list(set(re.findall(r'href=["\'](https?://tattooartistindelhi\.com/[^"\'#\s]*)["\']', html))))
print(f"\nInternal links in homepage: {len(page_links)}")
for l in page_links:
    print("  Link:", l)

# Extract images
images = sorted(list(set(re.findall(r'src=["\'](https?://tattooartistindelhi\.com/wp-content/uploads/[^"\'\s]+\.(?:jpg|jpeg|png|webp|svg))["\']', html))))
print(f"\nUpload images on homepage: {len(images)}")
for img in images[:25]:
    print("  Image:", img)

# Extract text blocks
text = re.sub(r'<script[^>]*>.*?</script>', ' ', html, flags=re.DOTALL)
text = re.sub(r'<style[^>]*>.*?</style>', ' ', text, flags=re.DOTALL)
text = re.sub(r'<[^>]+>', ' ', text)
text = re.sub(r'\s+', ' ', text)

phones = sorted(list(set(re.findall(r'(?:\+?91[\s-]?)?[6-9]\d{9}', text))))
print(f"\nPhones found: {phones}")

emails = sorted(list(set(re.findall(r'[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+', text))))
print(f"Emails found: {emails}")

# Look for address keywords
address_matches = [line.strip() for line in re.split(r'[\r\n]+', text) if any(kw in line.lower() for kw in ['delhi', 'lajpat', 'hauz khas', 'saket', 'rajouri', 'rohini', 'address', 'studio', 'road', 'nagar', 'floor', 'metro'])]
print("\nAddress/Location lines sample:")
for a in address_matches[:10]:
    if len(a) > 20:
        print("  Location snippet:", a[:120])

with open("site_extracted_summary.json", "w", encoding="utf-8") as f:
    json.dump({
        "sitemap_urls": urls,
        "page_links": page_links,
        "images": images,
        "phones": phones,
        "emails": emails,
    }, f, indent=2)

print("\nSummary saved to site_extracted_summary.json")

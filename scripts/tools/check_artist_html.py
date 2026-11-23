with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

import re
print("Matches for Harminder in HTML:")
for m in re.finditer(r'Harminder', html, re.I):
    idx = m.start()
    print(html[idx-100:idx+300])
    print("-" * 40)

print("\nMatches for Jaspreet in HTML:")
for m in re.finditer(r'Jaspreet', html, re.I):
    idx = m.start()
    print(html[idx-100:idx+300])
    print("-" * 40)

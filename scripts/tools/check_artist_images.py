with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

idx1 = html.find("Harminder Singh</h3>")
print("=== AROUND HARMINDER SINGH ===")
print(html[idx1-1500:idx1+500])

idx2 = html.find("Jaspreet Singh</h3>")
print("\n=== AROUND JASPREET SINGH ===")
print(html[idx2-1500:idx2+500])

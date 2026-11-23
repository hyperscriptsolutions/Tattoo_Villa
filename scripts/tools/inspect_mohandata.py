with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

idx = html.find("Mohan Tiwari")
print(html[idx:idx+1500])

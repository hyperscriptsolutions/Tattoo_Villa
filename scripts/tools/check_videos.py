with open("homepage_raw.html", "r", encoding="utf-8") as f:
    html = f.read()

import re
vids = re.findall(r'(https?://[^\s"\'<>]+\.(?:mp4|webm|ogg))', html, re.I)
print("Direct video URLs:", vids)
yt = re.findall(r'(https?://(?:www\.)?(?:youtube\.com|youtu\.be)[^\s"\'<>]+)', html, re.I)
print("YouTube links:", yt)
vimeo = re.findall(r'(https?://(?:www\.)?vimeo\.com[^\s"\'<>]+)', html, re.I)
print("Vimeo links:", vimeo)

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'cloudinary_tattoos');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg'));

let html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Tattoo Villa Cloudinary Catalog</title>
  <style>
    body { background: #0c0d0e; color: #f4f4f5; font-family: system-ui, sans-serif; margin: 0; padding: 24px; }
    h1 { font-size: 24px; color: #d4af37; margin-bottom: 8px; }
    p.sub { color: #a1a1aa; font-size: 14px; margin-bottom: 24px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
    .card { background: #18181b; border: 1px solid #27272a; border-radius: 12px; overflow: hidden; padding: 8px; display: flex; flex-direction: column; }
    img { width: 100%; aspect-ratio: 4/5; object-fit: cover; border-radius: 8px; background: #27272a; }
    .name { font-size: 13px; font-weight: 600; color: #e4e4e7; margin-top: 8px; font-family: monospace; }
  </style>
</head>
<body>
  <h1>Tattoo Villa Cloudinary Gallery Catalog (${files.length} Assets)</h1>
  <p class="sub">Local preview of all 55 downloaded Cloudinary assets</p>
  <div class="grid">
`;

files.forEach(f => {
  html += `    <div class="card">
      <img src="/images/cloudinary_tattoos/${f}" alt="${f}" loading="lazy"/>
      <div class="name">${f}</div>
    </div>\n`;
});

html += `  </div>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, '..', 'public', 'catalog.html'), html);
console.log('Catalog built with ' + files.length + ' images at public/catalog.html');

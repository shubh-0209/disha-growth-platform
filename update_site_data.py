with open('src/lib/site-data.ts', 'r', encoding='utf-8') as f:
    c = f.read()
c = c.replace('"/gallery/', '"/optimized/gallery/')
c = c.replace('.jpg"', '.webp"')
with open('src/lib/site-data.ts', 'w', encoding='utf-8') as f:
    f.write(c)

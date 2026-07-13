import re

with open('src/lib/images.ts', 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    url = match.group(0)
    name_match = re.search(r'photo-[a-zA-Z0-9]+', url)
    if name_match:
        return f'"/optimized/external/{name_match.group(0)}.webp"'
    return url

new_content = re.sub(r'"https://images\.unsplash\.com/[^"]+"', replacer, content)

with open('src/lib/images.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

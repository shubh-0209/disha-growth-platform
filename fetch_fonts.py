import os
import json
import urllib.request

FONTS = {
    "sora": [500, 600, 700, 800],
    "plus-jakarta-sans": [400, 500, 600, 700]
}

os.makedirs('public/fonts', exist_ok=True)
css_lines = []

for font, weights in FONTS.items():
    url = f"https://gwfh.mranv.com/api/fonts/{font}?subsets=latin"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    resp = urllib.request.urlopen(req)
    data = json.loads(resp.read().decode('utf-8'))
    
    for variant in data['variants']:
        weight = variant['fontWeight']
        if int(weight) in weights:
            # handle case where woff2 is not directly under 'woff2' 
            # usually gwfh returns `local` and `woff2` or `url`
            # The gwfh api returns an object like:
            # "variants": [ { "id": "500", "fontFamily": "Sora", "fontStyle": "normal", "fontWeight": "500", "local": ["Sora Medium", "Sora-Medium"], "woff2": "http..." } ]
            woff2_url = variant.get('woff2')
            if not woff2_url:
                continue
            
            filename = f"{font}-{weight}.woff2"
            out_path = os.path.join('public/fonts', filename)
            
            # Download file
            print(f"Downloading {filename} from {woff2_url}...")
            req_font = urllib.request.Request(woff2_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_font) as response, open(out_path, 'wb') as out_file:
                out_file.write(response.read())
            
            # Add to CSS
            font_family = data['family']
            css_lines.append(f"@font-face {{\n  font-family: '{font_family}';\n  font-style: normal;\n  font-weight: {weight};\n  font-display: swap;\n  src: url('/fonts/{filename}') format('woff2');\n}}\n")

with open('public/fonts/fonts.css', 'w') as f:
    f.write('\n'.join(css_lines))
print("Done!")

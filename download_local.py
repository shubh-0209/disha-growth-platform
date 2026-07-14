import os
import json
import urllib.request

FONTS = {
    'sora': [500, 600, 700, 800],
    'plus-jakarta-sans': [400, 500, 600, 700]
}

os.makedirs('src/assets/fonts', exist_ok=True)
css_lines = []

for font, weights in FONTS.items():
    url = f'https://gwfh.mranv.com/api/fonts/{font}?subsets=latin'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    resp = urllib.request.urlopen(req)
    data = json.loads(resp.read().decode('utf-8'))
    
    for variant in data['variants']:
        weight = variant['fontWeight']
        if int(weight) in weights:
            woff2_url = variant.get('woff2')
            if not woff2_url:
                continue
            
            font_family_no_space = font.title().replace('-', '')
            weight_name = {400: 'Regular', 500: 'Medium', 600: 'SemiBold', 700: 'Bold', 800: 'ExtraBold'}.get(int(weight), str(weight))
            filename = f'{font_family_no_space}-{weight_name}.woff2'
            out_path = os.path.join('src/assets/fonts', filename)
            
            print(f'Downloading {filename} from {woff2_url}...')
            req_font = urllib.request.Request(woff2_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req_font) as response, open(out_path, 'wb') as out_file:
                out_file.write(response.read())
            
            font_family = data['family']
            css_lines.append(f"@font-face {{\n  font-family: '{font_family}';\n  src: url('./assets/fonts/{filename}') format('woff2');\n  font-weight: {weight};\n  font-display: swap;\n}}\n")

with open('src/fonts.css', 'w') as f:
    f.write('\n'.join(css_lines))
print('Done!')

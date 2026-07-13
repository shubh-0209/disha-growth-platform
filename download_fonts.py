import os
import urllib.request
import re

FONTS = [
    ("Sora", "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&display=swap"),
    ("Plus_Jakarta_Sans", "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap")
]

USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'

os.makedirs('public/fonts', exist_ok=True)

css_content = ""

for font_name, url in FONTS:
    req = urllib.request.Request(url, headers={'User-Agent': USER_AGENT})
    resp = urllib.request.urlopen(req)
    css = resp.read().decode('utf-8')
    
    # Parse the CSS
    # Example block:
    # /* latin */
    # @font-face {
    #   font-family: 'Sora';
    #   font-style: normal;
    #   font-weight: 500;
    #   font-display: swap;
    #   src: url(https://fonts.gstatic.com/s/sora/v12/xMQbuNdR...woff2) format('woff2');
    #   unicode-range: ...
    # }
    
    blocks = css.split('@font-face')
    for block in blocks[1:]:
        # We only care about latin subset for simplicity (or just download whatever is provided, often it's separated by subsets)
        # But wait, modern google fonts splits by unicode ranges. So there might be multiple files per weight.
        # To avoid multiple files, we can just fetch the old-style or use google-webfonts-helper.
        pass

# Actually, a simpler way is to fetch from google webfonts helper API or construct the direct URL.
# Let's just download the CSS and see how many woff2 files there are.

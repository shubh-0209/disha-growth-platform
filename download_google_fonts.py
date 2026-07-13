import os
import re
import urllib.request

url = "https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36'}

os.makedirs('public/fonts', exist_ok=True)

print("Fetching CSS...")
req = urllib.request.Request(url, headers=headers)
css_content = urllib.request.urlopen(req).read().decode('utf-8')

# Find all url(...) in css
urls = re.findall(r'url\((https://[^)]+\.woff2)\)', css_content)
# some urls might not be wrapped in quotes, just in case:
urls_no_quotes = [u.strip("'\"") for u in urls]

for font_url in urls_no_quotes:
    filename = font_url.split('/')[-1]
    out_path = os.path.join('public/fonts', filename)
    
    print(f"Downloading {filename}...")
    req_font = urllib.request.Request(font_url, headers=headers)
    with urllib.request.urlopen(req_font) as response, open(out_path, 'wb') as out_file:
        out_file.write(response.read())
        
    # Replace in CSS
    css_content = css_content.replace(font_url, f"/fonts/{filename}")

with open('public/fonts/fonts.css', 'w') as f:
    f.write(css_content)
    
print("Done!")

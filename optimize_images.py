import os
import re
import urllib.request
from io import BytesIO
from PIL import Image

def get_urls():
    with open('src/lib/images.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    return list(set(re.findall(r'https://images.unsplash.com/[^\'"]+', content)))

def optimize_image(img, base_path, base_name, is_hero=False):
    # Ensure rgb
    if img.mode in ("RGBA", "P"):
        img = img.convert("RGB")
        
    os.makedirs(base_path, exist_ok=True)
    
    widths = [480, 768, 1200] if is_hero else [480, 800]
    
    for w in widths:
        if img.width > w:
            h = int((float(img.height) * float(w / float(img.width))))
            resized = img.resize((w, h), Image.Resampling.LANCZOS)
        else:
            resized = img
            w = img.width
            
        out_path = os.path.join(base_path, f"{base_name}-{w}w.webp")
        resized.save(out_path, 'WEBP', quality=82, method=6)
        print(f"Saved {out_path} ({os.path.getsize(out_path)//1024} KB)")

    # Also save the original size as fallback/default webp
    out_path = os.path.join(base_path, f"{base_name}.webp")
    # For heroes max width 1920, others 1200
    max_w = 1920 if is_hero else 1200
    if img.width > max_w:
        h = int((float(img.height) * float(max_w / float(img.width))))
        final_img = img.resize((max_w, h), Image.Resampling.LANCZOS)
    else:
        final_img = img
    final_img.save(out_path, 'WEBP', quality=82, method=6)
    print(f"Saved {out_path} ({os.path.getsize(out_path)//1024} KB)")


def process_external():
    urls = get_urls()
    print(f"Found {len(urls)} external images")
    
    base_path = 'public/optimized/external'
    
    for url in urls:
        # Generate a clean name
        # https://images.unsplash.com/photo-1544207964-b045fb9f44ab?q=80&w=1200 -> photo-1544207964
        name_match = re.search(r'photo-[a-zA-Z0-9]+', url)
        if not name_match:
            continue
        base_name = name_match.group(0)
        
        try:
            req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
            resp = urllib.request.urlopen(req)
            img = Image.open(BytesIO(resp.read()))
            print(f"Processing {url} -> {base_name}")
            optimize_image(img, base_path, base_name, is_hero=False)
        except Exception as e:
            print(f"Failed external {url}: {e}")

def process_local_dir(src_dir, dest_dir, is_hero):
    if not os.path.exists(src_dir):
        return
    for fname in os.listdir(src_dir):
        if fname.lower().endswith(('.jpg', '.jpeg', '.png')):
            base_name = os.path.splitext(fname)[0]
            try:
                img = Image.open(os.path.join(src_dir, fname))
                print(f"Processing local {fname}")
                optimize_image(img, dest_dir, base_name, is_hero)
            except Exception as e:
                print(f"Failed local {fname}: {e}")

if __name__ == '__main__':
    process_external()
    process_local_dir('public/gallery', 'public/optimized/gallery', is_hero=False)
    process_local_dir('src/assets/hero', 'public/optimized/hero', is_hero=True)

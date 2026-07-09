from PIL import Image

def remove_bg():
    img_path = "C:/Users/Dhruv/Downloads/disha-growth-platform/public/logo.png"
    out_path = "C:/Users/Dhruv/Downloads/disha-growth-platform/public/logo_transparent.png"
    img = Image.open(img_path).convert("RGBA")
    width, height = img.size
    
    # Simple background removal based on color variance
    new_data = []
    for y in range(height):
        for x in range(width):
            r, g, b, a = img.getpixel((x, y))
            
            # The background is a grey gradient. r, g, b are very close to each other.
            # max - min is small.
            diff = max(r,g,b) - min(r,g,b)
            
            if diff < 40 and r > 120 and g > 120 and b > 120:
                new_data.append((255, 255, 255, 0))
            else:
                new_data.append((r, g, b, a))
                
    img.putdata(new_data)
    
    # Now let's find the bounding box of the remaining pixels
    bbox = img.getbbox()
    print(f"Bounding box after bg removal: {bbox}")
    if bbox:
        img = img.crop(bbox)
        
    img.save(out_path, "PNG")
    print("Saved to", out_path)

if __name__ == "__main__":
    remove_bg()

from PIL import Image

def process(filename):
    img = Image.open(filename).convert("RGBA")
    data = img.get_flattened_data() if hasattr(img, 'get_flattened_data') else img.getdata()
    
    new_data = []
    for item in data:
        r, g, b, a = item
        if a > 0:
            if max(r, g, b) < 110:
                # It's dark, make it white. Keep original alpha for anti-aliasing
                new_data.append((255, 255, 255, a))
            else:
                new_data.append(item)
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(filename)

process("public/logo.png")
try:
    process("public/logo.jpg")
except:
    pass

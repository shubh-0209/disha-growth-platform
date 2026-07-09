from PIL import Image

def analyze_image():
    img_path = "C:/Users/Dhruv/Downloads/disha-growth-platform/public/logo.png"
    try:
        img = Image.open(img_path).convert("RGBA")
        width, height = img.size
        print(f"Size: {width}x{height}")
        
        # Check corners
        corners = [
            (0, 0), (width-1, 0),
            (0, height-1), (width-1, height-1)
        ]
        print("Corner colors:")
        for cx, cy in corners:
            print(f"  {cx},{cy}: {img.getpixel((cx, cy))}")
            
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    analyze_image()

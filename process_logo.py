import os
import subprocess

input_file = "C:/Users/Dhruv/Downloads/disha-growth-platform/public/logo.png"
output_file = "C:/Users/Dhruv/Downloads/disha-growth-platform/public/logo_transparent.png"

def process_image():
    print("Running rembg to remove background...")
    result = subprocess.run(["rembg", "i", input_file, output_file], capture_output=True, text=True)
    if result.returncode != 0:
        print("Error running rembg:")
        print(result.stderr)
        return False
    
    print(f"Background removed. Saved to {output_file}")
    
    # Overwrite the original
    if os.path.exists(output_file):
        os.replace(output_file, input_file)
        print("Overwrote public/logo.png with transparent version.")
        return True
    return False

if __name__ == "__main__":
    process_image()

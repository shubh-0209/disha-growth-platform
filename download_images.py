import os
import urllib.request

urls = [
    "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-1.jpg",
    "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-2.jpg",
    "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-3.jpg",
    "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-4.jpg",
    "https://dishaforindia.org/wp-content/uploads/2021/08/gallery-2-5.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/04/disha-1.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/04/disha-2.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/04/disha-3.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/05/1-2.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/05/2-1.jpg",
    "https://dishaforindia.org/wp-content/uploads/2023/05/3-1.jpg",
]

dest_dir = "public/gallery"
os.makedirs(dest_dir, exist_ok=True)

for url in urls:
    name = url.split('/')[-1]
    if name == '1-2.jpg':
        name = 'activity-1-2.jpg'
    elif name == '2-1.jpg':
        name = 'activity-2-1.jpg'
    elif name == '3-1.jpg':
        name = 'activity-3-1.jpg'
        
    path = os.path.join(dest_dir, name)
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(path, 'wb') as out_file:
            out_file.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")

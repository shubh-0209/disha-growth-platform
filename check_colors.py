from PIL import Image
from collections import Counter

img = Image.open("public/logo.png").convert("RGBA")
data = img.getdata()
colors = Counter()
for item in data:
    r, g, b, a = item
    if a > 50:
        # group by similar colors (bucket by 10s)
        colors[(r//20*20, g//20*20, b//20*20)] += 1

for color, count in colors.most_common(20):
    print(color, count)

import urllib.request
import re

url = 'https://dishaforindia.org/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    img_urls = re.findall(r'<img[^>]+src=[\'"]([^\'"]+)[\'"]', html)
    for i in set(img_urls):
        print(i)
except Exception as e:
    print('Error:', e)

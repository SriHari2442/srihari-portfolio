import urllib.request
import re

folder_id = '1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc'
url = f"https://drive.google.com/embeddedfolderview?id={folder_id}"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8')
        print("Embedded folderview length:", len(html))
        # Search for filenames, thumbnails, or IDs
        items = re.findall(r'entry-doc-(.*?)"', html)
        print("Entry docs:", items)
        # Search for file names inside class or titles
        titles = re.findall(r'class="entry-name[^"]*">(.*?)</div>', html)
        print("Titles:", titles)

        # Print all drive file IDs and titles found
        matches = re.findall(r'id="entry-([a-zA-Z0-9_-]{20,50})".*?class="entry-name">(.*?)</div>', html, re.DOTALL)
        for fid, title in matches:
            print(f"File ID: {fid} | Title: {title.strip()}")
except Exception as e:
    print("Error:", e)

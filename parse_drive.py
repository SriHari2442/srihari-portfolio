import urllib.request
import re
import json

url = 'https://drive.google.com/drive/folders/1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Search for initial data
print("HTML length:", len(html))

# Let's find all AF_initDataCallback
for m in re.finditer(r'AF_initDataCallback\((.*?)\);</script>', html, re.DOTALL):
    cb_text = m.group(1)
    # Extract data key
    key_m = re.search(r"key:\s*'([^']+)'", cb_text)
    key = key_m.group(1) if key_m else 'unknown'
    print("Found callback key:", key)
    # find data payload
    data_m = re.search(r"data:(.*?), sideChannel:", cb_text, re.DOTALL)
    if data_m:
        raw_json = data_m.group(1)
        try:
            parsed = json.loads(raw_json)
            # Recursively walk parsed json to find items with file id / title
            def walk(obj, path=""):
                if isinstance(obj, list):
                    # Check if this list looks like a file item
                    if len(obj) > 2 and isinstance(obj[0], str) and len(obj[0]) in (33, 28, 32, 34):
                        if isinstance(obj[1], str) and ('.' in obj[1] or 'video' in obj[1].lower() or 'image' in obj[1].lower() or 'screenshot' in obj[1].lower() or 'quiet' in obj[1].lower() or 'mp4' in obj[1].lower() or 'png' in obj[1].lower() or 'jpg' in obj[1].lower()):
                            print(f"FILE ITEM: ID={obj[0]}, Title={obj[1]}")
                    for i, elem in enumerate(obj):
                        walk(elem, f"{path}[{i}]")
                elif isinstance(obj, dict):
                    for k, v in obj.items():
                        walk(v, f"{path}.{k}")
            walk(parsed)
        except Exception as e:
            print("Failed to parse json for key", key, e)


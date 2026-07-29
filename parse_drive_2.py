import urllib.request
import re
import json

url = 'https://drive.google.com/drive/folders/1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'})
html = urllib.request.urlopen(req).read().decode('utf-8')

for m in re.finditer(r'AF_initDataCallback\((.*?)\);</script>', html, re.DOTALL):
    cb_text = m.group(1)
    if "'ds:1'" in cb_text:
        data_m = re.search(r"data:(.*?), sideChannel:", cb_text, re.DOTALL)
        if data_m:
            parsed = json.loads(data_m.group(1))
            # Let's search all strings in parsed
            all_strings = []
            def collect_strings(obj):
                if isinstance(obj, str):
                    all_strings.append(obj)
                elif isinstance(obj, list):
                    for x in obj: collect_strings(x)
                elif isinstance(obj, dict):
                    for x in obj.values(): collect_strings(x)
            collect_strings(parsed)
            print("Total strings in ds:1:", len(all_strings))
            # Print unique strings longer than 3 chars
            unique_s = []
            for s in all_strings:
                if len(s) > 3 and s not in unique_s:
                    unique_s.append(s)
            print("Unique strings sample:", unique_s[:60])

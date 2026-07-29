import urllib.request
import urllib.parse
import json
import re

folder_id = '1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc'

# Method 1: Google Drive web endpoint / API query
# Google Drive API v3 public key or no key for public files
# Or Google Drive embedded folder query
url = f"https://drive.google.com/drive/v2internal/files?q='{folder_id}'+in+parents+and+trashed%3Dfalse&maxResults=100"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})

try:
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read().decode('utf-8'))
        print("v2internal Success! Items count:", len(data.get('items', [])))
        for item in data.get('items', []):
            print("Item:", item.get('id'), item.get('title'), item.get('mimeType'))
except Exception as e:
    print("v2internal error:", e)


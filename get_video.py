import urllib.request
import re
import os

file_id = '168rJjck1ZFMBBZH47GVDlbb_P2w72ndn'
dest = 'public/assets/quiet-mode/quiet-mode-concept.mp4'

# Step 1: Request initial download page to get session cookies and confirm token if needed
url = f'https://drive.usercontent.google.com/download?id={file_id}&export=download&confirm=t'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'})

print("Downloading video from Google Drive...")
with urllib.request.urlopen(req) as resp, open(dest, 'wb') as f:
    chunk_size = 1024 * 1024
    total = 0
    while True:
        chunk = resp.read(chunk_size)
        if not chunk:
            break
        f.write(chunk)
        total += len(chunk)
        print(f"Downloaded {total / (1024*1024):.2f} MB...", end='\r')

print(f"\nDownload complete! Final size: {os.path.getsize(dest)} bytes")

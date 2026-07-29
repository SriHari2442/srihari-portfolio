const https = require('https');
const fs = require('fs');

const folderId = '1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc';
const url = `https://drive.google.com/drive/folders/${folderId}`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('folder_html.txt', data);
    console.log("HTML saved. Length:", data.length);
    // Find all strings in data
    const strings = data.match(/\"([^\"]+)\"/g) || [];
    console.log("Total strings:", strings.length);
    
    // Look for file extensions or file titles or IDs
    const fileLike = strings.filter(s => {
      const lower = s.toLowerCase();
      return lower.includes('.mp4') || lower.includes('.png') || lower.includes('.jpg') || lower.includes('.jpeg') || lower.includes('.webm') || lower.includes('screenshot') || lower.includes('quiet') || lower.includes('whatsapp') || lower.includes('video') || lower.includes('demo');
    });
    console.log("File-like strings:", fileLike);

    // Find all alphanumeric strings of length 28-40
    const ids = strings
      .map(s => s.replace(/\"/g, ''))
      .filter(s => /^[a-zA-Z0-9_-]{28,35}$/.test(s));
    console.log("Unique potential IDs count:", new Set(ids).size);
    console.log("Potential IDs:", Array.from(new Set(ids)));
  });
});

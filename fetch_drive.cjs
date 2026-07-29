const https = require('https');

const folderId = '1UFWh27J2mL5h2NeXAGskwdWYAVPJFNSc';
const url = `https://drive.google.com/drive/folders/${folderId}`;

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36' } }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log("Response length:", data.length);
    // Search for drive file IDs (format: "id":"..." or ["id", ...])
    const matches = data.match(/\"([a-zA-Z0-9_-]{33})\"/g);
    if (matches) {
      console.log("Unique matches count:", new Set(matches).size);
      console.log("Matches:", Array.from(new Set(matches)).slice(0, 20));
    }
  });
});

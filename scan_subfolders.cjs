const https = require('https');
const fs = require('fs');

const subfolders = [
  { name: 'Case Study Video', id: '1MhqwVQbqY4cOMMS8PXUJPyMyzdetpRRC' },
  { name: 'UI Figma', id: '1gzQmL5UaeEZdbIDvLnFVDSGQ1fuyQhXv' }
];

subfolders.forEach(({ name, id }) => {
  const url = `https://drive.google.com/drive/folders/${id}`;
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log(`\n=== Subfolder: ${name} (${id}) ===`);
      console.log("HTML length:", data.length);
      
      // Match window['_DRIVE_ivd'] data
      const ivdMatch = data.match(/window\['_DRIVE_ivd'\]\s*=\s*'(.*?)';/);
      if (ivdMatch) {
        console.log("Found _DRIVE_ivd raw content!");
        // Unescape \x5b, \x22, etc.
        const unescaped = ivdMatch[1]
          .replace(/\\x5b/g, '[')
          .replace(/\\x5d/g, ']')
          .replace(/\\x22/g, '"')
          .replace(/\\x2f/g, '/');
        
        // Find file titles and IDs in unescaped string
        const files = unescaped.match(/\["([a-zA-Z0-9_-]{28,35})",\["[a-zA-Z0-9_-]{28,35}"\],"([^"]+)"/g);
        if (files) {
          files.forEach(f => console.log("FILE ENTRY:", f));
        } else {
          console.log("Raw unescaped snippet:", unescaped.slice(0, 1000));
        }
      } else {
        console.log("No _DRIVE_ivd found.");
      }
    });
  });
});

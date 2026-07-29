const https = require('https');
const fs = require('fs');

async function fetchFolder(id, name) {
  return new Promise((resolve) => {
    const url = `https://drive.google.com/drive/folders/${id}`;
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        fs.writeFileSync(`${name.replace(/\s+/g, '_')}.html`, data);
        const unescaped = data
          .replace(/\\x5b/g, '[')
          .replace(/\\x5d/g, ']')
          .replace(/\\x22/g, '"')
          .replace(/\\x2f/g, '/');
        
        // Find strings that match file entries
        const regex = /"([a-zA-Z0-9_-]{28,35})",\["[a-zA-Z0-9_-]{28,35}"\],"([^"]+)","([^"]+)"/g;
        let match;
        const results = [];
        while ((match = regex.exec(unescaped)) !== null) {
          results.push({ id: match[1], name: match[2], mimeType: match[3] });
        }
        resolve({ folderName: name, folderId: id, files: results, raw: unescaped });
      });
    });
  });
}

async function run() {
  const v = await fetchFolder('1MhqwVQbqY4cOMMS8PXUJPyMyzdetpRRC', 'Case Study Video');
  console.log(`Video folder files count: ${v.files.length}`);
  console.log(v.files);

  const f = await fetchFolder('1gzQmL5UaeEZdbIDvLnFVDSGQ1fuyQhXv', 'UI Figma');
  console.log(`Figma folder files count: ${f.files.length}`);
  console.log(f.files);
}

run();

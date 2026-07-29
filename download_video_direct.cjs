const fs = require('fs');
const https = require('https');

const fileId = '168rJjck1ZFMBBZH47GVDlbb_P2w72ndn';
const destPath = './public/assets/quiet-mode/quiet-mode-concept.mp4';

// Google Drive direct download URL for usercontent
const url = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;

console.log('Downloading video from:', url);
const file = fs.createWriteStream(destPath);

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' } }, (res) => {
  if (res.statusCode === 302 || res.statusCode === 301) {
    console.log('Redirecting to:', res.headers.location);
    https.get(res.headers.location, (res2) => {
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Finished video download! Size:', fs.statSync(destPath).size, 'bytes');
      });
    });
  } else {
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Finished video download! Size:', fs.statSync(destPath).size, 'bytes');
    });
  }
});

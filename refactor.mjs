import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./src', (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    const original = fs.readFileSync(filePath, 'utf8');
    const updated = original.replace(/ImageWithFallback/g, 'OptimizedImage');
    if (original !== updated) {
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});

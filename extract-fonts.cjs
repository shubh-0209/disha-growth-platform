const fs = require('fs');

const stylesPath = 'src/styles.css';
const fontsPath = 'public/fonts.css';

const content = fs.readFileSync(stylesPath, 'utf8');
const lines = content.split(/\r?\n/);

const fonts = lines.slice(0, 217).join('\n');
const rest = lines.slice(217).join('\n');

fs.writeFileSync(fontsPath, fonts, 'utf8');
fs.writeFileSync(stylesPath, rest, 'utf8');

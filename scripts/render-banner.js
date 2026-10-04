const { Resvg } = require('@resvg/resvg-js');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../public/brand/linkedin-banner-final.svg');
const svg = fs.readFileSync(svgPath, 'utf8');

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1584 },
  font: {
    fontFiles: [
      'C:/Windows/Fonts/georgia.ttf',
      'C:/Windows/Fonts/georgiab.ttf',
      'C:/Windows/Fonts/georgiai.ttf',
      'C:/Windows/Fonts/georgiaz.ttf',
      'C:/Windows/Fonts/segoeui.ttf',
      'C:/Windows/Fonts/segoeuib.ttf',
      'C:/Windows/Fonts/segoeuii.ttf',
      'C:/Windows/Fonts/segoeuiz.ttf',
      'C:/Windows/Fonts/arial.ttf',
      'C:/Windows/Fonts/arialbd.ttf'
    ],
    loadSystemFonts: true,
    defaultFontFamily: 'Georgia'
  }
});

const pngData = resvg.render();
const pngBuffer = pngData.asPng();

const out1 = path.join(__dirname, '../public/brand/idigdata-linkedin-banner-1584x396.png');
const out2 = path.join(__dirname, '../../brand-content/brand/idigdata-linkedin-banner-1584x396.png');

fs.writeFileSync(out1, pngBuffer);
fs.writeFileSync(out2, pngBuffer);

console.log('Successfully rendered crisp PNG with Georgia/Segoe UI fonts! File size:', pngBuffer.length);

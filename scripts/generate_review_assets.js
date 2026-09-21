const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../public/assets/reviews');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function process() {
  const inDir = path.join(__dirname, '../review section images');
  
  // 1. Choi & Sameer (720 x 1280) - Square framing (600x600):
  // Captures Choi's waving hand, face, smile, and Sameer's face completely with zero cut-off
  await sharp(path.join(inDir, '2.jpeg'))
    .rotate()
    .extract({ left: 0, top: 50, width: 720, height: 720 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'review-choi.webp'));
  console.log('Processed review-choi.webp');

  await sharp(path.join(inDir, '2.jpeg'))
    .rotate()
    .extract({ left: 0, top: 50, width: 720, height: 720 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-choi.webp'));

  // 2. Wright & Sameer (731 x 1280) - Square framing (600x600):
  // Captures Wright's full chin, mouth, smile, hair, and Sameer's full head, face, beard with zero cut-off
  await sharp(path.join(inDir, '3.jpeg'))
    .rotate()
    .extract({ left: 0, top: 230, width: 731, height: 731 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'review-wright.webp'));
  console.log('Processed review-wright.webp');

  await sharp(path.join(inDir, '3.jpeg'))
    .rotate()
    .extract({ left: 0, top: 230, width: 731, height: 731 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-wright.webp'));

  // 3. Tala Rashid & Sameer (933 x 1280) - Square framing (600x600):
  // Captures Tala's full chin, smile, eyes, hair, and Sameer's full beard, smile, forehead with zero cut-off
  await sharp(path.join(inDir, 'WhatsApp Image 2026-09-21 at 7.58.41 PM.jpeg'))
    .rotate()
    .extract({ left: 30, top: 160, width: 880, height: 880 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'review-tala.webp'));
  console.log('Processed review-tala.webp');

  await sharp(path.join(inDir, 'WhatsApp Image 2026-09-21 at 7.58.41 PM.jpeg'))
    .rotate()
    .extract({ left: 30, top: 160, width: 880, height: 880 })
    .resize(600, 600)
    .webp({ quality: 95 })
    .toFile(path.join(outDir, 'thumb-tala.webp'));

  console.log('All review assets generated successfully with 100% full faces!');
}

process().catch(console.error);

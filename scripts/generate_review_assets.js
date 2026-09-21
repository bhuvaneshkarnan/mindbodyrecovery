const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '../public/assets/reviews');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

async function process() {
  const inDir = path.join(__dirname, '../review section images');
  
  // 1. Choi (2.jpeg)
  await sharp(path.join(inDir, '2.jpeg'))
    .rotate()
    .resize(800, 1000, { fit: 'cover', position: 'center' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'review-choi.webp'));
  console.log('Processed review-choi.webp');

  // Also square snapshot for collage
  await sharp(path.join(inDir, '2.jpeg'))
    .rotate()
    .resize(600, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'thumb-choi.webp'));

  // 2. Wright (3.jpeg)
  await sharp(path.join(inDir, '3.jpeg'))
    .rotate()
    .resize(800, 1000, { fit: 'cover', position: 'top' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'review-wright.webp'));
  console.log('Processed review-wright.webp');

  await sharp(path.join(inDir, '3.jpeg'))
    .rotate()
    .resize(600, 600, { fit: 'cover', position: 'top' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'thumb-wright.webp'));

  // 3. Tala Rashid (WhatsApp Image...)
  await sharp(path.join(inDir, 'WhatsApp Image 2026-09-21 at 7.58.41 PM.jpeg'))
    .rotate()
    .resize(800, 1000, { fit: 'cover', position: 'top' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'review-tala.webp'));
  console.log('Processed review-tala.webp');

  await sharp(path.join(inDir, 'WhatsApp Image 2026-09-21 at 7.58.41 PM.jpeg'))
    .rotate()
    .resize(600, 600, { fit: 'cover', position: 'top' })
    .webp({ quality: 92 })
    .toFile(path.join(outDir, 'thumb-tala.webp'));

  console.log('All review assets generated successfully!');
}

process().catch(console.error);

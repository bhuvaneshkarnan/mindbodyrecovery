const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processImage({ src, extract, scaleW, scaleH, padX, padY, outPath, bgBrightness = 0.6 }) {
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let pipe = sharp(src);
  if (extract) {
    pipe = pipe.extract(extract);
  }
  const cropped = await pipe.resize(scaleW, scaleH).toBuffer();

  const bg = await sharp(src)
    .resize(600, 600, { fit: 'cover' })
    .blur(40)
    .modulate({ brightness: bgBrightness })
    .toBuffer();

  await sharp(bg)
    .composite([{ input: cropped, left: Math.round(padX), top: Math.round(padY) }])
    .webp({ quality: 90 })
    .toFile(outPath);

  console.log(`Generated: ${path.basename(outPath)}`);
}

async function run() {
  console.log('=== GENERATING RELAX NODES ===');
  const relaxDir = path.join(__dirname, '../public/assets/relax/nodes');

  // 1. Shirodhara
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/shirodhara.png'),
    extract: { left: 320, top: 0, width: 1050, height: 941 },
    scaleW: 500,
    scaleH: 448,
    padX: (600 - 500) / 2,
    padY: (600 - 448) / 2,
    outPath: path.join(relaxDir, 'node-shirodhara.webp')
  });

  // 2. Pulse Assessment
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/pulse.jpeg'),
    extract: { left: 0, top: 40, width: 900, height: 1450 },
    scaleW: 325,
    scaleH: 520,
    padX: (600 - 325) / 2,
    padY: (600 - 520) / 2,
    outPath: path.join(relaxDir, 'node-pulse.webp')
  });

  // 3. Podikizhi (Herbal Oil Scalp & Body Massage)
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/Podikizhi.png'),
    extract: { left: 0, top: 360, width: 1080, height: 1300 },
    scaleW: 435,
    scaleH: 524,
    padX: (600 - 435) / 2,
    padY: (600 - 524) / 2,
    outPath: path.join(relaxDir, 'node-podikizhi.webp')
  });

  // 4. Cupping Decompression
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/cupping.jpg'),
    extract: { left: 120, top: 15, width: 1050, height: 838 },
    scaleW: 520,
    scaleH: 415,
    padX: (600 - 520) / 2,
    padY: (600 - 415) / 2,
    outPath: path.join(relaxDir, 'node-cupping.webp')
  });

  // 5. Craniosacral Somatic Therapy
  await processImage({
    src: path.join(__dirname, '../public/assets/rethink/deeper-mind.jpg'),
    extract: { left: 0, top: 450, width: 1080, height: 1200 },
    scaleW: 460,
    scaleH: 511,
    padX: (600 - 460) / 2,
    padY: (600 - 511) / 2,
    outPath: path.join(relaxDir, 'node-craniosacral.webp')
  });

  // 6. Somatic Mat Movement
  await processImage({
    src: path.join(__dirname, '../Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png'),
    extract: { left: 200, top: 100, width: 1520, height: 980 },
    scaleW: 520,
    scaleH: 335,
    padX: (600 - 520) / 2,
    padY: (600 - 335) / 2,
    outPath: path.join(relaxDir, 'node-somatic.webp')
  });

  // 7. Acupuncture / Facial Care (Therapies table with Sameer & therapist)
  await processImage({
    src: path.join(__dirname, '../public/assets/rebuild/therapies.jpg'),
    extract: { left: 0, top: 220, width: 1080, height: 1280 },
    scaleW: 440,
    scaleH: 521,
    padX: (600 - 440) / 2,
    padY: (600 - 521) / 2,
    outPath: path.join(relaxDir, 'node-acupuncture.webp')
  });

  // 8. Joint Mobilization
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/joint-mobilization.webp'),
    extract: null,
    scaleW: 390,
    scaleH: 520,
    padX: (600 - 390) / 2,
    padY: (600 - 520) / 2,
    outPath: path.join(relaxDir, 'node-joint-mobilization.webp')
  });

  // 9. Sanctuary Garden Retreat
  await processImage({
    src: path.join(__dirname, '../public/assets/rebuild/center-sanctuary.jpg'),
    extract: { left: 100, top: 400, width: 2000, height: 2600 },
    scaleW: 415,
    scaleH: 540,
    padX: (600 - 415) / 2,
    padY: (600 - 540) / 2,
    outPath: path.join(relaxDir, 'node-sanctuary.webp')
  });

  // 10. Restorative Breathwork & Pranayama
  await processImage({
    src: path.join(__dirname, '../public/assets/rebuild/yoga-breath.jpg'),
    extract: { left: 0, top: 320, width: 1080, height: 1250 },
    scaleW: 450,
    scaleH: 520,
    padX: (600 - 450) / 2,
    padY: (600 - 520) / 2,
    outPath: path.join(relaxDir, 'node-yoga-breath.webp')
  });

  console.log('\n=== GENERATING RETHINK NODES ===');
  const rethinkDir = path.join(__dirname, '../public/assets/rethink/nodes');

  // 1. Screen Review / Cognitive Analysis
  await processImage({
    src: path.join(__dirname, '../public/assets/rebuild/0812 (2)(2).jpg'),
    extract: { left: 100, top: 800, width: 2000, height: 2300 },
    scaleW: 460,
    scaleH: 529,
    padX: (600 - 460) / 2,
    padY: (600 - 529) / 2,
    outPath: path.join(rethinkDir, 'node-screen-review.webp')
  });

  // 2. Mindful Journaling & Reflection
  await processImage({
    src: path.join(__dirname, '../public/assets/rethink/live-mindfully.jpg'),
    extract: { left: 0, top: 260, width: 1080, height: 1400 },
    scaleW: 415,
    scaleH: 538,
    padX: (600 - 415) / 2,
    padY: (600 - 538) / 2,
    outPath: path.join(rethinkDir, 'node-journaling.webp')
  });

  // 3. Sameer Clinical Focus (Portrait)
  await processImage({
    src: path.join(__dirname, '../public/assets/doctor/drsameer.jpg'),
    extract: { left: 50, top: 350, width: 980, height: 1250 },
    scaleW: 420,
    scaleH: 536,
    padX: (600 - 420) / 2,
    padY: (600 - 536) / 2,
    outPath: path.join(rethinkDir, 'node-sameer-focus.webp')
  });

  // 4. New Habits & Practice
  await processImage({
    src: path.join(__dirname, '../public/assets/rethink/new-habits.jpg'),
    extract: { left: 0, top: 300, width: 1080, height: 1400 },
    scaleW: 415,
    scaleH: 538,
    padX: (600 - 415) / 2,
    padY: (600 - 538) / 2,
    outPath: path.join(rethinkDir, 'node-habits.webp')
  });

  // 5. Foot Reflexology Diagnostic
  await processImage({
    src: path.join(__dirname, '../public/assets/relax/Foot Reflexology.jpg'),
    extract: { left: 0, top: 260, width: 1080, height: 1440 },
    scaleW: 405,
    scaleH: 540,
    padX: (600 - 405) / 2,
    padY: (600 - 540) / 2,
    outPath: path.join(rethinkDir, 'node-reflexology.webp')
  });

  // 6. Craniosacral Somatic Release
  await processImage({
    src: path.join(__dirname, '../public/assets/rethink/deeper-mind.jpg'),
    extract: { left: 0, top: 450, width: 1080, height: 1200 },
    scaleW: 460,
    scaleH: 511,
    padX: (600 - 460) / 2,
    padY: (600 - 511) / 2,
    outPath: path.join(rethinkDir, 'node-craniosacral.webp')
  });

  // 7. Balcony Somatic Rest
  // Existing 500x500 padded to 600x600 with matching blurred background
  {
    const balconySrc = path.join(__dirname, '../public/assets/rethink/nodes/node-balcony-somatic.webp');
    const inputBuf = fs.readFileSync(balconySrc);
    const scaled = await sharp(inputBuf).resize(440, 440).toBuffer();
    const bg = await sharp(inputBuf)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();
    const finalBuf = await sharp(bg)
      .composite([{ input: scaled, left: 80, top: 80 }])
      .webp({ quality: 90 })
      .toBuffer();
    fs.writeFileSync(balconySrc, finalBuf);
    console.log('Generated: node-balcony-somatic.webp');
  }

  // 8. 1-on-1 Consultation Dialogue
  await processImage({
    src: path.join(__dirname, '../public/assets/rethink/reconnect.jpg'),
    extract: { left: 0, top: 300, width: 1080, height: 1400 },
    scaleW: 415,
    scaleH: 538,
    padX: (600 - 415) / 2,
    padY: (600 - 538) / 2,
    outPath: path.join(rethinkDir, 'node-consultation.webp')
  });

  console.log('\nAll Relax and Rethink nodes successfully generated!');
}

run().catch(console.error);

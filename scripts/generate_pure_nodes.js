const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function cropPureSquare({ src, extract, outPath }) {
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  let pipe = sharp(src);
  if (extract) {
    pipe = pipe.extract(extract);
  }

  // Resize directly to 600x600 pure photo edge-to-edge
  await pipe
    .resize(600, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 92 })
    .toFile(outPath);

  console.log(`Generated pure photo: ${path.basename(outPath)}`);
}

async function run() {
  console.log('=== 1. GENERATING PURE RELAX NODES (Zero Blur / Edge-to-Edge) ===');
  const relaxDir = path.join(__dirname, '../public/assets/relax/nodes');

  // 1. Shirodhara
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/shirodhara.png'),
    extract: { left: 365, top: 0, width: 941, height: 941 },
    outPath: path.join(relaxDir, 'node-shirodhara.webp')
  });

  // 2. Pulse Assessment
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/pulse.jpeg'),
    extract: { left: 0, top: 50, width: 900, height: 900 },
    outPath: path.join(relaxDir, 'node-pulse.webp')
  });

  // 3. Podikizhi (Herbal Oil Scalp & Body Massage)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/Podikizhi.png'),
    extract: { left: 0, top: 350, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-podikizhi.webp')
  });

  // 4. Cupping Decompression
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/cupping.jpg'),
    extract: { left: 200, top: 0, width: 853, height: 853 },
    outPath: path.join(relaxDir, 'node-cupping.webp')
  });

  // 5. Craniosacral Somatic Therapy
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rethink/deeper-mind.jpg'),
    extract: { left: 0, top: 380, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-craniosacral.webp')
  });

  // 6. Somatic Mat Movement
  await cropPureSquare({
    src: path.join(__dirname, '../Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png'),
    extract: { left: 300, top: 0, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-somatic.webp')
  });

  // 7. Acupuncture / Facial Care (Therapies table with Sameer & therapist)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/therapies.jpg'),
    extract: { left: 0, top: 250, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-acupuncture.webp')
  });

  // 8. Joint Mobilization
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/joint-mobilization.webp'),
    extract: { left: 0, top: 50, width: 600, height: 600 },
    outPath: path.join(relaxDir, 'node-joint-mobilization.webp')
  });

  // 9. Sanctuary Garden Retreat
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/center-sanctuary.jpg'),
    extract: { left: 0, top: 400, width: 2160, height: 2160 },
    outPath: path.join(relaxDir, 'node-sanctuary.webp')
  });

  // 10. Restorative Breathwork & Pranayama
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/yoga-breath.jpg'),
    extract: { left: 0, top: 280, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-yoga-breath.webp')
  });

  console.log('\n=== 2. GENERATING PURE RETHINK NODES (Zero Blur / Edge-to-Edge) ===');
  const rethinkDir = path.join(__dirname, '../public/assets/rethink/nodes');

  // 1. Screen Review / Cognitive Analysis
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/0812 (2)(2).jpg'),
    extract: { left: 0, top: 600, width: 2160, height: 2160 },
    outPath: path.join(rethinkDir, 'node-screen-review.webp')
  });

  // 2. Mindful Journaling & Reflection
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rethink/live-mindfully.jpg'),
    extract: { left: 0, top: 240, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-journaling.webp')
  });

  // 3. Sameer Clinical Focus (Portrait)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/doctor/drsameer.jpg'),
    extract: { left: 0, top: 280, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-sameer-focus.webp')
  });

  // 4. New Habits & Practice
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rethink/new-habits.jpg'),
    extract: { left: 0, top: 280, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-habits.webp')
  });

  // 5. Foot Reflexology Diagnostic
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/Foot Reflexology.jpg'),
    extract: { left: 0, top: 240, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-reflexology.webp')
  });

  // 6. Craniosacral Somatic Release
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rethink/deeper-mind.jpg'),
    extract: { left: 0, top: 380, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-craniosacral.webp')
  });

  // 7. Balcony Somatic Rest
  {
    const balconyPath = path.join(rethinkDir, 'node-balcony-somatic.webp');
    const inputBuf = fs.readFileSync(balconyPath);
    const meta = await sharp(inputBuf).metadata();
    const minDim = Math.min(meta.width, meta.height);
    const pureBuf = await sharp(inputBuf)
      .extract({
        left: Math.round((meta.width - minDim) / 2),
        top: Math.round((meta.height - minDim) / 2),
        width: minDim,
        height: minDim
      })
      .resize(600, 600)
      .webp({ quality: 92 })
      .toBuffer();
    fs.writeFileSync(balconyPath, pureBuf);
    console.log('Generated pure photo: node-balcony-somatic.webp');
  }

  // 8. 1-on-1 Consultation Dialogue
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rethink/reconnect.jpg'),
    extract: { left: 0, top: 300, width: 1080, height: 1080 },
    outPath: path.join(rethinkDir, 'node-consultation.webp')
  });

  console.log('\n=== 3. GENERATING PURE REBUILD NODES (Zero Blur / Edge-to-Edge) ===');
  const rebuildDir = path.join(__dirname, '../public/assets/rebuild/nodes');

  // 1. Block A Entrance
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/0812 (2)(4).jpg'),
    extract: { left: 0, top: 200, width: 2160, height: 2160 },
    outPath: path.join(rebuildDir, 'node-block-a.webp')
  });

  // 2. Therapies (Facial & Herbal Oil)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/therapies.jpg'),
    extract: { left: 0, top: 250, width: 1080, height: 1080 },
    outPath: path.join(rebuildDir, 'node-therapies.webp')
  });

  // 3. Shirodhara Stream
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/shirodhara.png'),
    extract: { left: 365, top: 0, width: 941, height: 941 },
    outPath: path.join(rebuildDir, 'node-shirodhara.webp')
  });

  // 4. Pulse Assessment
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/pulse.jpeg'),
    extract: { left: 0, top: 50, width: 900, height: 900 },
    outPath: path.join(rebuildDir, 'node-pulse-assessment.webp')
  });

  // 5. Cupping Decompression
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/cupping.jpg'),
    extract: { left: 200, top: 0, width: 853, height: 853 },
    outPath: path.join(rebuildDir, 'node-cupping.webp')
  });

  // 6. Somatic Mat Movement
  await cropPureSquare({
    src: path.join(__dirname, '../Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png'),
    extract: { left: 300, top: 0, width: 1080, height: 1080 },
    outPath: path.join(rebuildDir, 'node-somatic-mat.webp')
  });

  // 7. Peaceful Sanctuary Suite Stay
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/peaceful-room.jpg'),
    extract: { left: 350, top: 380, width: 2250, height: 2250 },
    outPath: path.join(rebuildDir, 'node-peaceful-room.webp')
  });
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/peaceful-room.jpg'),
    extract: { left: 350, top: 380, width: 2250, height: 2250 },
    outPath: path.join(rebuildDir, 'node-outdoor-terrace.webp')
  });

  // 8. Pranayama Yoga Breath
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/yoga-breath.jpg'),
    extract: { left: 0, top: 280, width: 1080, height: 1080 },
    outPath: path.join(rebuildDir, 'node-yoga-breath.webp')
  });

  console.log('\nAll nodes for RELAX, RETHINK, and REBUILD successfully generated with 100% pure photographic fill and zero blur gaps!');
}

run().catch(console.error);

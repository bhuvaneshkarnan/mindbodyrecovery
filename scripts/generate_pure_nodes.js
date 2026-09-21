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

  // Resize directly to 600x600 pure photo edge-to-edge (no blur bars)
  await pipe
    .resize(600, 600, { fit: 'cover', position: 'center' })
    .webp({ quality: 92 })
    .toFile(outPath);

  console.log(`Generated pure photo: ${path.basename(outPath)}`);
}

async function run() {
  const newAssetsDir = path.join(__dirname, '../New image assets');

  console.log('=== 1. GENERATING PURE RELAX NODES (Zero Repetition / Edge-to-Edge) ===');
  const relaxDir = path.join(__dirname, '../public/assets/relax/nodes');

  // 1. Shirodhara
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/shirodhara.png'),
    extract: { left: 365, top: 0, width: 941, height: 941 },
    outPath: path.join(relaxDir, 'node-shirodhara.webp')
  });

  // 2. Pulse Assessment (Sameer with pen, handwriting on clipboard, and pulse check fully visible per user request)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/pulse.jpeg'),
    extract: { left: 0, top: 380, width: 900, height: 900 },
    outPath: path.join(relaxDir, 'node-pulse.webp')
  });

  // 3. Podikizhi (Herbal Oil Scalp & Body Massage)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/relax/Podikizhi.png'),
    extract: { left: 0, top: 350, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-podikizhi.webp')
  });

  // 4. Fire Cupping Decompression (NEW: 13.jpeg - Sameer applying glass flame cup to client's back)
  await cropPureSquare({
    src: path.join(newAssetsDir, '13.jpeg'),
    extract: { left: 0, top: 220, width: 720, height: 720 },
    outPath: path.join(relaxDir, 'node-fire-cupping.webp')
  });

  // 5. Craniosacral Somatic Therapy (NEW: 16.jpeg - peaceful touch on forehead, client resting in white)
  await cropPureSquare({
    src: path.join(newAssetsDir, '16.jpeg'),
    extract: { left: 0, top: 320, width: 720, height: 720 },
    outPath: path.join(relaxDir, 'node-craniosacral.webp')
  });

  // 6. Somatic Floor Movement
  await cropPureSquare({
    src: path.join(__dirname, '../Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png'),
    extract: { left: 300, top: 0, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-somatic.webp')
  });

  // 7. Clinical Vitals & Intake (NEW: WhatsApp Image... - blood pressure check during intake)
  await cropPureSquare({
    src: path.join(newAssetsDir, 'WhatsApp Image 2026-09-21 at 7.52.35 PM.jpeg'),
    extract: { left: 0, top: 260, width: 720, height: 720 },
    outPath: path.join(relaxDir, 'node-intake-vitals.webp')
  });

  // 8. Osteopathic Leg & Foot Mobilization (NEW: 17.jpeg - full legs on pillow, feet, Sameer mobilising fully visible per user request)
  await cropPureSquare({
    src: path.join(newAssetsDir, '17.jpeg'),
    extract: { left: 0, top: 180, width: 720, height: 720 },
    outPath: path.join(relaxDir, 'node-joint-mobilization.webp')
  });

  // 9. Restorative Breathwork & Pranayama (yoga-breath.jpg with top: 650 - both people centered, zero excess wall per user request)
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/yoga-breath.jpg'),
    extract: { left: 0, top: 650, width: 1080, height: 1080 },
    outPath: path.join(relaxDir, 'node-yoga-breath.webp')
  });

  // 10. Restorative Leg Cupping & Acupressure (NEW: 15.jpeg - cups and acupuncture on calves & feet on droni)
  await cropPureSquare({
    src: path.join(newAssetsDir, '15.jpeg'),
    extract: { left: 0, top: 320, width: 720, height: 720 },
    outPath: path.join(relaxDir, 'node-leg-cupping.webp')
  });

  console.log('\n=== 2. GENERATING PURE RETHINK NODES (Zero Repetition / Edge-to-Edge) ===');
  const rethinkDir = path.join(__dirname, '../public/assets/rethink/nodes');

  // 1. Brain Power Chart Analysis (NEW: 11.jpeg - Sameer & client analyzing Brain Power Chart on wall)
  await cropPureSquare({
    src: path.join(newAssetsDir, '11.jpeg'),
    extract: { left: 0, top: 200, width: 720, height: 720 },
    outPath: path.join(rethinkDir, 'node-brain-power.webp')
  });

  // 2. Cognitive Dialogue Consultation (NEW: 14.jpeg - Sameer in deep 1-on-1 dialogue with laptop & books)
  await cropPureSquare({
    src: path.join(newAssetsDir, '14.jpeg'),
    extract: { left: 0, top: 120, width: 576, height: 576 },
    outPath: path.join(rethinkDir, 'node-cognitive-dialogue.webp')
  });

  // 3. Meridian & Pathway Study (NEW: 10.jpeg - Clinician analyzing Acupuncture & Reflexology chart on wall)
  await cropPureSquare({
    src: path.join(newAssetsDir, '10.jpeg'),
    extract: { left: 0, top: 220, width: 720, height: 720 },
    outPath: path.join(rethinkDir, 'node-meridian-study.webp')
  });

  // 4. Screen Review / Cognitive Analysis
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/0812 (2)(2).jpg'),
    extract: { left: 0, top: 600, width: 2160, height: 2160 },
    outPath: path.join(rethinkDir, 'node-screen-review.webp')
  });

  // 5. Mindful Reading & Reflection (NEW: 7.jpeg - Doctor studying book in clinical library)
  await cropPureSquare({
    src: path.join(newAssetsDir, '7.jpeg'),
    extract: { left: 0, top: 320, width: 720, height: 720 },
    outPath: path.join(rethinkDir, 'node-mindful-study.webp')
  });

  // 6. Clinical Assessment Review (NEW: 2.jpeg - Doctor and client reviewing health assessment chart at desk)
  await cropPureSquare({
    src: path.join(newAssetsDir, '2.jpeg'),
    extract: { left: 0, top: 260, width: 720, height: 720 },
    outPath: path.join(rethinkDir, 'node-assessment-review.webp')
  });

  // 7. Balcony Somatic Inquiry
  {
    const balconyPath = path.join(rethinkDir, 'node-balcony-somatic.webp');
    if (fs.existsSync(balconyPath)) {
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
      console.log('Processed pure photo: node-balcony-somatic.webp');
    }
  }

  // 8. 1-on-1 Pulse Reading & Dialogue (NEW: 9.jpeg - Sameer conducting Nadi Pariksha across desk with patient)
  await cropPureSquare({
    src: path.join(newAssetsDir, '9.jpeg'),
    extract: { left: 0, top: 180, width: 591, height: 591 },
    outPath: path.join(rethinkDir, 'node-pulse-dialogue.webp')
  });

  console.log('\n=== 3. GENERATING PURE REBUILD NODES (Zero Repetition / Edge-to-Edge) ===');
  const rebuildDir = path.join(__dirname, '../public/assets/rebuild/nodes');

  // 1. Block A Entrance
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/0812 (2)(4).jpg'),
    extract: { left: 0, top: 200, width: 2160, height: 2160 },
    outPath: path.join(rebuildDir, 'node-block-a.webp')
  });

  // 2. Sensory Garden Sanctuary Walk (NEW: 12.jpeg - Sameer guiding client in outdoor garden retreat)
  await cropPureSquare({
    src: path.join(newAssetsDir, '12.jpeg'),
    extract: { left: 0, top: 320, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-sensory-garden.webp')
  });

  // 3. Peaceful Suite Stay
  await cropPureSquare({
    src: path.join(__dirname, '../public/assets/rebuild/peaceful-room.jpg'),
    extract: { left: 350, top: 380, width: 2250, height: 2250 },
    outPath: path.join(rebuildDir, 'node-peaceful-room.webp')
  });

  // 4. Sattvic Organic Nutrition
  {
    const sattvicSrc = path.join(__dirname, '../public/assets/rebuild/sattvic-meals.jpg');
    if (fs.existsSync(sattvicSrc)) {
      const meta = await sharp(sattvicSrc).metadata();
      const minDim = Math.min(meta.width, meta.height);
      await sharp(sattvicSrc)
        .extract({
          left: Math.round((meta.width - minDim) / 2),
          top: Math.round((meta.height - minDim) / 2),
          width: minDim,
          height: minDim
        })
        .resize(600, 600)
        .webp({ quality: 92 })
        .toFile(path.join(rebuildDir, 'node-sattvic-meals.webp'));
      console.log('Generated pure photo: node-sattvic-meals.webp');
    }
  }

  // 5. Restorative Balcony Movement (NEW: 8.jpeg - Somatic instructor guiding leg movement with lush green view)
  await cropPureSquare({
    src: path.join(newAssetsDir, '8.jpeg'),
    extract: { left: 0, top: 140, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-balcony-movement.webp')
  });

  // 6. Spinal & Osteopathic Alignment (NEW: 6.jpeg - Practitioner performing spine alignment on table)
  await cropPureSquare({
    src: path.join(newAssetsDir, '6.jpeg'),
    extract: { left: 0, top: 120, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-spine-mobilization.webp')
  });

  // 7. 1-on-1 Retreat Consultation & Care Plan (NEW: 5.jpeg - 1-on-1 consultation across desk with male client, medical books, case notes)
  await cropPureSquare({
    src: path.join(newAssetsDir, '5.jpeg'),
    extract: { left: 0, top: 280, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-retreat-consultation.webp')
  });

  // Also overwrite legacy node-sanctuary-campus.webp so no cached duplicate remains
  await cropPureSquare({
    src: path.join(newAssetsDir, '5.jpeg'),
    extract: { left: 0, top: 280, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-sanctuary-campus.webp')
  });

  // 8. Welcome Consultation & Chart Review (NEW: 4.jpeg - Practitioner smiling warmly with welcome chart & clipboard)
  await cropPureSquare({
    src: path.join(newAssetsDir, '4.jpeg'),
    extract: { left: 0, top: 150, width: 720, height: 720 },
    outPath: path.join(rebuildDir, 'node-doctor-welcome.webp')
  });

  console.log('\nAll nodes for RELAX, RETHINK, and REBUILD successfully generated with 100% pure photographic fill, zero repetitions, and unzoomed framing!');
}

run().catch(console.error);

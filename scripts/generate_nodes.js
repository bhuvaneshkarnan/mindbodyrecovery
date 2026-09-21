const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function run() {
  const outDir = path.join(__dirname, '../public/assets/rebuild/nodes');

  // 1. Pulse Assessment
  // Original pulse.jpeg is 900 x 1600.
  // Sameer head: top around y=100.
  // Hands/wrist pulse: around y=1100 to 1450.
  // We want to capture Sameer's head AND his hands taking the pulse on the patient's wrist.
  // Region: left: 0, top: 80, width: 900, height: 1400.
  // To keep it square without distorting, we pad 250px on left and right with replicate or blur.
  {
    const src = path.join(__dirname, '../public/assets/relax/pulse.jpeg');
    const cropped = await sharp(src)
      .extract({ left: 0, top: 60, width: 900, height: 1400 })
      .resize(386, 600) // ratio 900:1400 scaled to height 600 -> width is 386
      .toBuffer();

    // Create 600x600 square with subtle dark clinical background that matches surrounding page (#12180E)
    // or blurred background from the photo itself
    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: Math.round((600 - 386) / 2), top: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-pulse-assessment.webp'));
    console.log('Generated node-pulse-assessment.webp');
  }

  // 2. Therapies (Facial & Herbal Oil Massage)
  // Original therapies.jpg is 1080 x 1920
  // Sameer on left (white shirt), therapist in maroon on right massaging patient's face,
  // patient on droni table.
  // Head tops are at y=380, table/chest at y=1450.
  // Total span: top: 260, height: 1250, width: 1080.
  {
    const src = path.join(__dirname, '../public/assets/rebuild/therapies.jpg');
    const cropped = await sharp(src)
      .extract({ left: 0, top: 250, width: 1080, height: 1250 })
      .resize(518, 600) // ratio 1080:1250 scaled to height 600 -> width 518
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: Math.round((600 - 518) / 2), top: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-therapies.webp'));
    console.log('Generated node-therapies.webp');
  }

  // 3. Shirodhara Stream
  // Original shirodhara.png is 1672 x 941 (landscape)
  // Brass vessel, hanging chain, therapist holding it, cascading oil stream, client's forehead & table.
  // Left: 320, Top: 0, Width: 1100, Height: 941.
  {
    const src = path.join(__dirname, '../public/assets/relax/shirodhara.png');
    // Landscape 1100x941 fits well in 600x600 if scaled to fit or framed
    const cropped = await sharp(src)
      .extract({ left: 320, top: 0, width: 1050, height: 941 })
      .resize(600, 538)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: 0, top: Math.round((600 - 538) / 2) }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-shirodhara.webp'));
    console.log('Generated node-shirodhara.webp');
  }

  // 4. Somatic Movement (Mat)
  // Original is Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png (1920 x 1080)
  // Wide view of instructor crouching on mat + participant on red mat.
  // Left: 250, Top: 150, Width: 1400, Height: 930
  {
    const src = path.join(__dirname, '../Assets all/RELAX/vlcsnap-2026-08-28-12h16m43s490.png');
    const cropped = await sharp(src)
      .extract({ left: 240, top: 120, width: 1450, height: 960 })
      .resize(600, 397)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: 0, top: Math.round((600 - 397) / 2) }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-somatic-mat.webp'));
    console.log('Generated node-somatic-mat.webp');
  }

  // 5. Pranayama Yoga Breath
  // Original yoga-breath.jpg is 1080 x 1920.
  // Instructor and participant doing Nadi Shodhana breathwork.
  // Heads are around y=400 to 1100.
  {
    const src = path.join(__dirname, '../public/assets/rebuild/yoga-breath.jpg');
    const cropped = await sharp(src)
      .extract({ left: 0, top: 350, width: 1080, height: 1200 })
      .resize(540, 600)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: Math.round((600 - 540) / 2), top: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-yoga-breath.webp'));
    console.log('Generated node-yoga-breath.webp');
  }

  // 6. Cupping Decompression
  // Original cupping.jpg is 1280 x 853.
  // Therapist standing applying suction pump, cups on back of client lying down.
  {
    const src = path.join(__dirname, '../public/assets/relax/cupping.jpg');
    const cropped = await sharp(src)
      .extract({ left: 180, top: 40, width: 950, height: 813 })
      .resize(600, 513)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: 0, top: Math.round((600 - 513) / 2) }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-cupping.webp'));
    console.log('Generated node-cupping.webp');
  }

  // 7. Block A Entrance
  // Original 0812 (2)(4).jpg is 2160 x 3840.
  // Sign "BLOCK A" at top, Sameer and guest walking forward through door, floor tiles.
  {
    const src = path.join(__dirname, '../public/assets/rebuild/0812 (2)(4).jpg');
    const cropped = await sharp(src)
      .extract({ left: 100, top: 120, width: 1960, height: 2600 })
      .resize(452, 600)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: Math.round((600 - 452) / 2), top: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-block-a.webp'));
    console.log('Generated node-block-a.webp');
  }

  // 8. Outdoor Terrace / Sanctuary Grounds
  // Original center-sanctuary.jpg is 2160 x 3840.
  // Guest leaning on terrace balcony railing looking into green garden trees.
  {
    const src = path.join(__dirname, '../public/assets/rebuild/center-sanctuary.jpg');
    const cropped = await sharp(src)
      .extract({ left: 0, top: 500, width: 2160, height: 2600 })
      .resize(498, 600)
      .toBuffer();

    const bg = await sharp(src)
      .resize(600, 600, { fit: 'cover' })
      .blur(40)
      .modulate({ brightness: 0.6 })
      .toBuffer();

    await sharp(bg)
      .composite([{ input: cropped, left: Math.round((600 - 498) / 2), top: 0 }])
      .webp({ quality: 90 })
      .toFile(path.join(outDir, 'node-outdoor-terrace.webp'));
    console.log('Generated node-outdoor-terrace.webp');
  }
}

run().catch(console.error);

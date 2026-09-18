const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const assetDirs = [
  "public/assets/team",
  "public/assets/relax",
  "public/assets/rethink",
  "public/assets/rebuild",
  "public/assets/doctor",
  "public/assets/brand",
];

async function optimizeImages() {
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const dir of assetDirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (![".jpg", ".jpeg", ".png"].includes(ext)) continue;

      const inputPath = path.join(dir, file);
      const baseName = path.basename(file, ext);
      const outputPath = path.join(dir, `${baseName}.webp`);

      const origStat = fs.statSync(inputPath);
      totalOriginal += origStat.size;

      try {
        const img = sharp(inputPath);
        const meta = await img.metadata();

        let transform = sharp(inputPath);
        // Resize very large photos down to a web-optimized max dimension (1600px max width/height)
        if (meta.width > 1600 || meta.height > 1600) {
          transform = transform.resize({
            width: meta.width > meta.height ? 1600 : undefined,
            height: meta.height >= meta.width ? 1600 : undefined,
            withoutEnlargement: true,
          });
        }

        await transform
          .webp({ quality: 82, effort: 6 })
          .toFile(outputPath);

        const newStat = fs.statSync(outputPath);
        totalOptimized += newStat.size;

        const savings = (((origStat.size - newStat.size) / origStat.size) * 100).toFixed(1);
        console.log(`Optimized: ${inputPath} (${(origStat.size / 1024).toFixed(0)} KB) -> ${outputPath} (${(newStat.size / 1024).toFixed(0)} KB, -${savings}%)`);
      } catch (err) {
        console.error(`Error processing ${inputPath}:`, err.message);
      }
    }
  }

  console.log("\n=================================");
  console.log(`Total Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total Optimized: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Overall Savings: ${(((totalOriginal - totalOptimized) / totalOriginal) * 100).toFixed(1)}%`);
  console.log("=================================\n");
}

optimizeImages();

const fs = require('fs');
const path = require('path');

const relax = fs.readFileSync(path.join(__dirname, '../src/components/sections/RelaxStep.tsx'), 'utf8');
const rethink = fs.readFileSync(path.join(__dirname, '../src/components/sections/RethinkStep.tsx'), 'utf8');
const rebuild = fs.readFileSync(path.join(__dirname, '../src/components/sections/RebuildRetreat.tsx'), 'utf8');

function extractImages(content, name) {
  const matches = content.match(/\/assets\/[^"'`\s\)]+/g) || [];
  console.log(`=== ${name} ===`);
  matches.forEach(m => console.log('  ' + m));
  return matches;
}

const rImg = extractImages(relax, 'RELAX');
const rtImg = extractImages(rethink, 'RETHINK');
const rbImg = extractImages(rebuild, 'REBUILD');

const all = [...rImg, ...rtImg, ...rbImg];
const counts = {};
all.forEach(x => counts[x] = (counts[x] || 0) + 1);
console.log('\n=== DUPLICATE USAGES ACROSS SECTIONS ===');
for (const [k, v] of Object.entries(counts)) {
  if (v > 1) console.log(`${k}: ${v}`);
}

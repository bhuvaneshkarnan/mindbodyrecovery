const fs = require('fs');

function fixFile(filePath, replacements) {
  let content = fs.readFileSync(filePath, 'utf8');
  // Strip BOM
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  
  replacements.forEach(([from, to]) => {
    content = content.split(from).join(to);
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Fixed:', filePath);
}

// Hero.tsx - remove scale-105 from video background
fixFile('src/components/sections/Hero.tsx', [
  ['object-cover opacity-85 scale-105 filter saturate-100 contrast-105', 'object-cover opacity-90 filter saturate-100 contrast-105'],
]);

// MeetDoctor.tsx - portrait image, use object-contain
fixFile('src/components/sections/MeetDoctor.tsx', [
  ['object-cover filter saturate-95', 'object-contain filter saturate-95 bg-[#12140D]'],
]);

// ProofStats.tsx - team landscape photo, contain it
fixFile('src/components/sections/ProofStats.tsx', [
  ['object-cover filter saturate-90 contrast-110', 'object-contain filter saturate-90 contrast-110 bg-[#12140D]'],
]);

// PurposeHub.tsx - contain images
fixFile('src/components/sections/PurposeHub.tsx', [
  ['object-cover filter saturate-95 contrast-105', 'object-contain filter saturate-95 bg-[#12140D]'],
]);

// RealStories.tsx - no zoom, contain
fixFile('src/components/sections/RealStories.tsx', [
  ['object-cover filter saturate-95 group-hover:scale-105 transition-transform duration-500', 'object-contain filter saturate-95 bg-black'],
]);

// RelaxStep.tsx - all portrait images need contain
fixFile('src/components/sections/RelaxStep.tsx', [
  ['object-cover filter saturate-95 contrast-105', 'object-contain filter saturate-95 bg-[#0B0F07]'],
  ['w-full h-full object-cover"', 'w-full h-full object-contain bg-[#0B0F07]"'],
  ['h-[85px] object-cover rounded mb-1"', 'h-[85px] object-contain rounded mb-1 bg-[#0B0F07]"'],
]);

// RethinkStep.tsx
fixFile('src/components/sections/RethinkStep.tsx', [
  ['object-cover filter saturate-95 contrast-105', 'object-contain filter saturate-95 bg-[#0A0E12]'],
  ['w-full h-full object-cover"', 'w-full h-full object-contain bg-[#0A0E12]"'],
  ['h-[85px] object-cover rounded mb-1"', 'h-[85px] object-contain rounded mb-1 bg-[#0A0E12]"'],
]);

// RebuildRetreat.tsx
fixFile('src/components/sections/RebuildRetreat.tsx', [
  ['object-cover filter saturate-95 contrast-105', 'object-contain filter saturate-95 bg-[#0D120A]'],
  ['w-full h-full object-cover"', 'w-full h-full object-contain bg-[#0D120A]"'],
  ['h-[85px] object-cover rounded mb-1"', 'h-[85px] object-contain rounded mb-1 bg-[#0D120A]"'],
]);

console.log('All image zoom fixes applied successfully.');

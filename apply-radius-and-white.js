const fs = require('fs');

function updateFile(path, replacer) {
  let content = fs.readFileSync(path, 'utf8');
  if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
  content = replacer(content);
  fs.writeFileSync(path, content, 'utf8');
  console.log('Updated:', path);
}

// 1. BandageFrame.tsx
updateFile('src/components/ui/BandageFrame.tsx', c => {
  return c
    .replace(/rounded-\[1px\]/g, 'rounded-md')
    .replace(/rounded-\[2px\]/g, 'rounded-lg')
    .replace(/border-parchment-100\/30/g, 'border-parchment-100/40')
    .replace(/bg-parchment-100\/60/g, 'bg-white shadow-md');
});

// 2. RealStories.tsx
updateFile('src/components/sections/RealStories.tsx', c => {
  return c
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FAFAFA]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/20/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl');
});

// 3. ProofStats.tsx
updateFile('src/components/sections/ProofStats.tsx', c => {
  return c
    .replace(/rounded-\[1px\]/g, 'rounded-md')
    .replace(/border border-\[#C79A45\]\/40 overflow-hidden shadow-2xl/g, 'border border-[#C79A45]/40 overflow-hidden shadow-2xl rounded-xl')
    .replace(/p-6 bg-\[#1B1E15\]/g, 'p-6 bg-[#1B1E15] rounded-lg');
});

// 4. PurposeHub.tsx
updateFile('src/components/sections/PurposeHub.tsx', c => {
  return c
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FAFAFA]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/15/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/10/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/20/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-lg')
    .replace(/rounded-\[3px\]/g, 'rounded-xl');
});

// 5. RelaxStep.tsx
updateFile('src/components/sections/RelaxStep.tsx', c => {
  return c
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl')
    .replace(/p-1.5 bg-\[#12180E\] border border-\[#C79A45\]/g, 'p-1.5 bg-[#12180E] border border-[#C79A45] rounded-xl')
    .replace(/p-1.5 bg-\[#141A10\]/g, 'p-1.5 bg-[#141A10] rounded-lg');
});

// 6. RethinkStep.tsx
updateFile('src/components/sections/RethinkStep.tsx', c => {
  return c
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FAFAFA]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/20/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl')
    .replace(/p-1.5 bg-\[#FAF7F0\] border border-\[#C79A45\]/g, 'p-1.5 bg-[#FFFFFF] border border-[#C79A45] rounded-xl shadow-lg')
    .replace(/p-1.5 bg-\[#FAF7F0\] border border-\[#231F19\]\/20/g, 'p-1.5 bg-[#FFFFFF] border border-[#E5E7EB] rounded-lg shadow-sm');
});

// 7. ConcernPicker.tsx
updateFile('src/components/sections/ConcernPicker.tsx', c => {
  return c
    .replace(/bg-\[#EAE1CB\]/g, 'bg-[#F4F4F6]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/bg-\[#F6F1E4\]\/80/g, 'bg-[#FFFFFF]/90')
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#231F19\]\/15/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl');
});

// 8. RebuildRetreat.tsx
updateFile('src/components/sections/RebuildRetreat.tsx', c => {
  return c
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl')
    .replace(/p-1.5 bg-\[#141A10\] border border-\[#C79A45\]/g, 'p-1.5 bg-[#141A10] border border-[#C79A45] rounded-xl')
    .replace(/p-1.5 bg-\[#141A10\]/g, 'p-1.5 bg-[#141A10] rounded-lg');
});

// 9. FightingWithSection.tsx
updateFile('src/components/sections/FightingWithSection.tsx', c => {
  return c
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FAFAFA]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/bg-\[#EAE1CB\]\/60/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/15/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl');
});

// 10. MeetDoctor.tsx
updateFile('src/components/sections/MeetDoctor.tsx', c => {
  return c
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FAFAFA]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-lg')
    .replace(/rounded-\[2px\]/g, 'rounded-xl');
});

// 11. ContactSection.tsx
updateFile('src/components/sections/ContactSection.tsx', c => {
  return c
    .replace(/bg-\[#F6F1E4\]/g, 'bg-[#FAFAFA]')
    .replace(/bg-\[#FAF7F0\]/g, 'bg-[#FFFFFF]')
    .replace(/border-\[#EAE1CB\]/g, 'border-[#E5E7EB]')
    .replace(/border-\[#231F19\]\/20/g, 'border-[#E5E7EB]')
    .replace(/rounded-\[1px\]/g, 'rounded-md')
    .replace(/rounded-\[2px\]/g, 'rounded-lg');
});

console.log('All image border-radius and clean white palette updates applied!');

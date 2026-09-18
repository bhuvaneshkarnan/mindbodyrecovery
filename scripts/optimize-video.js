const { execSync } = require("child_process");
const ffmpeg = require("@ffmpeg-installer/ffmpeg").path;

const input = "public/assets/hero/hero-main.mp4";
const posterOut = "public/assets/hero/hero-poster.webp";
const opt1080 = "public/assets/hero/hero-main-opt.mp4";
const optMobile = "public/assets/hero/hero-mobile.mp4";

console.log("1. Extracting hero poster frame...");
execSync(`"${ffmpeg}" -y -ss 00:00:00.100 -i "${input}" -vframes 1 -q:v 2 "${posterOut}"`, { stdio: "inherit" });

console.log("2. Transcoding desktop 1080p web-optimized video...");
execSync(`"${ffmpeg}" -y -i "${input}" -c:v libx264 -crf 23 -preset fast -b:v 1800k -maxrate 2200k -bufsize 4400k -r 30 -c:a aac -b:a 64k -movflags +faststart "${opt1080}"`, { stdio: "inherit" });

console.log("3. Transcoding mobile 720p web-optimized video...");
execSync(`"${ffmpeg}" -y -i "${input}" -vf "scale=-2:720" -c:v libx264 -crf 26 -preset fast -b:v 850k -maxrate 1100k -bufsize 2200k -r 30 -c:a aac -b:a 48k -movflags +faststart "${optMobile}"`, { stdio: "inherit" });

console.log("Done transcoding videos!");

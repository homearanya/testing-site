const sharp = require(`sharp`);
const glob = require(`glob`);
const fs = require(`fs-extra`);

const matches = glob.sync(`static/jpg/**/*.{png,jpg,jpeg}`);
console.log(matches.length);
const MAX_WIDTH = 1800;
const QUALITY = 90;

Promise.all(
  matches.map(async match => {
    const stream = sharp(match);

    // const info = await stream.metadata();

    // if (info.width < MAX_WIDTH) {
    //   return;
    // }

    const optimizedName = match.replace(/(\..+)$/, (match, ext) => `.jpg`);
    console.log(optimizedName);

    await stream.jpeg({ quality: QUALITY }).toFile(optimizedName);

    // return fs.rename(optimizedName, match);
  })
);


import fs from "fs";
import path from 'path';
import sharp from "sharp";

export function checkingFolder(): void {
  if (!fs.existsSync("./src/edited-images")) {
    fs.mkdirSync("./src/edited-images");
  }
}

export  async function processingImage(name:string,height:number,width:number) {
  

  await sharp(path.resolve("./src") + `/images/${name}.jpg`)
  .resize(height, width)
  .toFile(
    path.resolve("./src") +
      `/edited-images/${name}-${height}-${width}.jpg`
  );
   

  
}
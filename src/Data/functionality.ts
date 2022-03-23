import fs from "fs";

export function checkingFolder(): void {
  if (!fs.existsSync("./src/edited-images")) {
    fs.mkdirSync("./src/edited-images");
  }
}

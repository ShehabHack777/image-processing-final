import fs from "fs";
import path from "path";
import rimraf from "rimraf";
import { processingImage } from "../Data/functionality";

const testName = "fjord";

const testHeight = 550;

const testWidth = 600;
async function resetEveryThing() {
  if (
    fs.existsSync(
      path.resolve("./src") +
        `/edited-images/${testName}-${testHeight}-${testWidth}.jpg`
    )
  ) {
    rimraf(path.resolve("./src") + `/edited-images`, () => {
      console.log("folder deleted");
    });
  }
}

describe("image processing test", async () => {
  it("creates a proccessed image and throw it in edited-images and delete the folder  after creation to reset ET", async () => {
    await processingImage(testName, testHeight, testWidth);
    expect(processingImage).not.toThrowError;
    await resetEveryThing();
  });
});

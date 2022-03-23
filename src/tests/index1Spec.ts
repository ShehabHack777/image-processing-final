import sharp from "sharp";


describe("image processing test",async () => {
it("sharp module can preform and processes on the images", async () => {
 const imgT= await sharp("./images/icelandwaterfall.jpg");
    expect(imgT).toBeDefined;


}
)
}  

);

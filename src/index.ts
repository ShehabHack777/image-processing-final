import express, { Request, Response, Application } from "express";
import imageRouter from "./routes/image";

const server: Application = express();

server.use(imageRouter);

server.get("/", (req: Request, res: Response): void => {
  res.send(`Hello Beautiful Reviewer 🌍
  Go to this path to check my work at  /app/?name=icelandwaterfall&height=200&width=300

  and you can check many images[fjord,icelandwterfull,encenadaport,palmtunnel,santamonica]   `);
});

server.listen(3000, (): void => {
  console.log(`Server is starting at prot:3000`);
});

export default server;

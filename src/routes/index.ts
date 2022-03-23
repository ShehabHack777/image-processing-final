import express from "express";
import imageRouter from "./image";

const routes = express.Router();

routes.use("/", imageRouter);

export default routes;

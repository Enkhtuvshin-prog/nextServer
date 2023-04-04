// const express = require("express");
import dotenv from "dotenv";
dotenv.config();
import express, { Application, Request, Response } from "express";
import movieRoutes from "./route/movieRoutes";
// import { connect } from "http2";

import connectDb from "./config";
const app: Application = express();
app.use(express.json());
const MONGO_URI = process.env.MONGO_URI || "";
// const connectDb = (uri:)
app.use("/movies", movieRoutes);
const port = 8009;
app.get("/", (req: Request, res: Response) => {
  res.send("hello TypeScript Server-TS");
});

connectDb(MONGO_URI);
app.listen(port, () => {
  console.log(` Server is running at ${port}`);
});

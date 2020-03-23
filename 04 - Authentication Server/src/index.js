import env from "dotenv";
env.config();

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import router from "./router";
import mongoose from "mongoose";

const app = express();

// DB Setup
mongoose.connect("mongodb://localhost/auth");

// App Setup
app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));
router(app);
// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server listening at port ${port}`);
});
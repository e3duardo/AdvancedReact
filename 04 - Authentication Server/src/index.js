import env from "dotenv";
env.config();

import express from "express";
import http from "http";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import router from "./router";
import "./database";

const app = express();

// App Setup
app.use(morgan("combined"));
app.use(cors());
app.use(bodyParser.json({ type: "*/*" }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`🚀 Server listening at port ${port}`);
});

import express from "express";
import routes from "./src/routes/routes";
import {ConnectDB}  from "./src/database/connect";

import { configDotenv } from "dotenv";

const dotenv = configDotenv()

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.use(routes)

ConnectDB()

app.listen(4000, () => {

});

import express from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";

const app = express();

dotenv.config({ path: "./backend/config/config.env" });

// Connecting to Database
connectDatabase();

// Import All Routes

import productsRoute from "./routes/productsRoute.js";

app.use("/api/v1/", productsRoute);

app.listen(process.env.PORT, () => {
  console.log(
    `The Server is listening on: http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

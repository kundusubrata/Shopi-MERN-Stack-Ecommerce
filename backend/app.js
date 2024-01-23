import express from "express";
const app = express();
import dotenv from "dotenv";
import { connectDatabase } from "./config/dbConnect.js";
import errorMiddleware from "./middlewares/error.js"


// Handled Uncaught Exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down due to Uncaught Exceptions");
  process.exit(1);
})

dotenv.config({ path: "./backend/config/config.env" });

// Connecting to Database
connectDatabase();

app.use(express.json());

// Import All Routes

import productsRoute from "./routes/productsRoute.js";

app.use("/api/v1/", productsRoute);

// Using error midleware
app.use(errorMiddleware);

const server = app.listen(process.env.PORT, () => {
  console.log(
    `The Server is listening on: http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle Unhandle Promise Rejections
process.on("unhandledRejection",(err) => {
  console.log(`Error: ${err}`);
  console.log("Shutting down sersver due to Unhandled Promimse Rejections");
  server.close(() => {
    process.exit(1);
  })
})

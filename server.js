import express from "express";
import connectDB from "./db/connect.js";
const app = express();

import taskRouter from "./routes/taskRouter.js";

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

app.use("/api/v1/task", taskRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

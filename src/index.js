import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./configs/db.config.js";
import { userRouter } from "./routes/user.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.use(userRouter)

app.listen(PORT, () => console.log("Listening from the port: " + PORT));

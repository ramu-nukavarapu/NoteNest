import express from "express";
import { deleteUser, getUser, login, refreshAccessToken, signup, updateUser } from "../controllers/user.controller.js";
import { validateRefreshToken, validateUser } from "../middlewares/auth.middleware.js";

export const userRouter = express.Router();

userRouter.post("/signup", signup)
userRouter.post("/login", login)
userRouter.post("/refresh", validateRefreshToken, refreshAccessToken)

userRouter.get("/getuserdetails", validateUser, getUser)

userRouter.put("/updateuser", validateUser, updateUser)

userRouter.delete("/deleteuser", validateUser, deleteUser)
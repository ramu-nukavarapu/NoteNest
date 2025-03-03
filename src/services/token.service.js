import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

const SECRET = process.env.JWT_SECRET || "SECR3T";
const SUPER_SECRET = process.env.JWT_SUPER_SECRET || "SUP3R";
export const accessToken = (payload) => {
    const token = jwt.sign(payload, SECRET, {expiresIn: "15m"});
    return token;
}

export const refreshToken = (payload) => {
    const token = jwt.sign(payload, SUPER_SECRET, {expiresIn: "7d"});
    return token;
}
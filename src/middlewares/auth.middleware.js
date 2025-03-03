import jwt from "jsonwebtoken";
import env from "dotenv";

env.config();

const SECRET = process.env.JWT_SECRET || "SECR3T";
const SUPER_SECRET = process.env.JWT_SUPER_SECRET || "SUP3R";

export const validateUser = (req, res, next) =>{
    const authHeader = req.headers.authorization?.split(" ")[1]
    if(!authHeader){
        return res.status(400).json({message: "Token not found."})
    }

    jwt.verify(authHeader, SECRET, (err, user)=>{
        if (err) {
            return res.status(400).json({message: err.message});
        }
        req.user = user;
        next();
    });
}

export const validateRefreshToken = (req, res, next) =>{
    const authHeader = req.headers.refreshtoken;
    if(!authHeader){
        return res.status(400).json({message: "Token not found."})
    }

    jwt.verify(authHeader, SUPER_SECRET, (err, user)=>{
        if (err) {
            return res.status(400).json({message: err.message});
        }
        req.user = user;
        next();
    });
}

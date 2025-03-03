import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { accessToken, refreshToken } from "../services/token.service.js";

export const signup = async(req, res) =>{
    try{
        const {name, email, password} = req.body;
        const existed = await User.findOne({email: email});
        if(existed){
            return res.status(400).json({message: "User already existed."});
        }

        const hashedpwd = await bcrypt.hash(password, 10)
        const user = await User.create({
            name: name,
            email: email,
            password: hashedpwd,
        });

        user.message = "user created successfully."
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

export const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email: email});

        if (!user) {
            return res.status(400).json({ message: "Invalid Credentials." });
        }

        if (!(await bcrypt.compare(password, user.password))){
            return res.status(400).json({message: "Invalid Credentials."})
        }

        const token = accessToken({id: user._id, email: user.email})
        const refresh = refreshToken({id: user._id, email: user.email})

        res.status(200).json({
            message: "Login successfully.",
            user: user,
            accessToken: token,
            refreshToken: refresh
        });
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
}

export const getUser = async (req, res) => {
    try{
        const {email} = req.user;
        const result = await User.findOne({email: email})
        if (!result) {
            res.status(400).json({message: "User not found."})
        } else {
            res.status(200).json(result)
        }
    }catch (err){
        res.status(500).json({message: err.message})
    }
}

export const updateUser = async (req, res) => {
    try{
        const {email} = req.user;
        if(req.body.password){
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }
        const result = await User.findOneAndUpdate({email: email}, req.body);
        if (!result) {
            res.status(400).json({message: "user not found."})
        }else{
            res.status(200).json({
                message: "Updated successfully.",
            })
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }    
}

export const deleteUser = async (req, res) => {
    try{
        const {email} = req.user;
        const result = await User.findOneAndDelete({email: email});
        if (!result) {
            res.status(400).json({message: "user not found."})
        }else{
            res.status(200).json({
                message: "Deleted successfully.",
            })
        }
    }catch(err){
        res.status(500).json({message: err.message})
    }    

}

export const refreshAccessToken = (req, res) => {
    const {id, email} = req.user;

    const token = accessToken({id: id, email: email});
    if (!token) {
        res.status(500).json({message: "something went wrong. Try Again."})
    } else {
        res.status(200).json({
            message: "token created successfully.",
            access: token
        })
    }
}
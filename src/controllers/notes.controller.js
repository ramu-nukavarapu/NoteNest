import { Note } from "../models/notes.model.js";

export const addNote = async (req, res) => {
    try{    
        const User = req.user.id;
        const {title, description, tag} = req.body;

        const result = await Note.create({
            User,
            title,
            description,
            tag,
        })

        if(!result){
            res.status(500).json({message: "Something went wrong. try again."})
        }else{
            res.status(200).json({
                message: "Add notes successfully.",
                notes: result
            })
        }
    }catch  (err){
        res.status(500).json({message: err.message})
    }
}

export const getAllNotes = async (req, res) => {
    try {
        const user = req.user.id;
        const result = await Note.find({User: user})
        if (!result.length) {
            res.status(200).json({message: "No data found."})
        } else {
            res.status(200).json(result)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Note.findOneAndUpdate({_id: id}, req.body)

        if (!result) {
            res.status(400).json({message: "notes not found."})
        }else{
            res.status(200).json({message: "updated successfully."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteNote = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Note.findOneAndDelete({_id: id})

        if (!result) {
            res.status(400).json({message: "notes not found."})
        }else{
            res.status(200).json({message: "deleted successfully."})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
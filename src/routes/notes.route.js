import express from "express";
import { addNote, deleteNote, getAllNotes, updateNote } from "../controllers/notes.controller.js";
import { validateUser } from "../middlewares/auth.middleware.js";

export const notesRouter = express.Router()

notesRouter.post("/addnotes", validateUser, addNote)
notesRouter.get("/notes", validateUser, getAllNotes)
notesRouter.put("/updatenotes/:id", validateUser, updateNote)
notesRouter.delete("/deletenotes/:id", validateUser, deleteNote)
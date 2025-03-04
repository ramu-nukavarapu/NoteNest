import mongoose, { Schema } from "mongoose";

const notesSchema = new Schema({
    User: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: [{
        type: String,
        required: true,
        default: "General"
    }],
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export const Note = mongoose.model("Note", notesSchema)
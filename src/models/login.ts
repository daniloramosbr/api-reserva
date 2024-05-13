import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
})

const login = mongoose.model("users", loginSchema)

export default login
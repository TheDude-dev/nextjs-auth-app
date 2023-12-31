import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Pleaseprovide a username"],
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})

// IF there's a user add, if not create

const User = mongoose.models.Users || mongoose.model("users", userSchema)

export default User

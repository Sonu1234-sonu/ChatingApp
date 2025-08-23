import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
        },
        password: {
            type: String,

        },
        googleId: {
            type: String,

        },
        photo: {
            type: String,
            default: "",

        },
        TwoFactorAuth: {
            type: String,
            default: "false",

        },
        type: {
            type: String,
            enum: ["normalUser", "googleUser"],

        },


    }, { timestamps: true });

const User = mongoose.model("User", UserSchema);
export default User;
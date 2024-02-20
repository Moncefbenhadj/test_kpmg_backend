import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required : true
    },
    password: {type :String, required : true},
    type : {
        type : String,
        enum : ['DZ','FR'],
        required : true }
 });
 
userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
    }
    next();
});
 
const user = mongoose.model("User", userSchema);
 
export default  user;
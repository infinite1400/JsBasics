import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    firstName : { type : String},
    lastName : { type : String }, 
    age : { type :  String}
});

const User=new mongoose.model('User',userSchema);
export default User
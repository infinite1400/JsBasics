// const express=require('express')
import express from 'express'
import usersRoutes from './routes/users.js'
import mongoose from 'mongoose';
import User from './models/UserSchema.js'
mongoose.connect('mongodb://127.0.0.1:27017',{dbName : "Learning_Database"})
    .then(() => console.log('Database Connected'))
    .catch((err) => console.log(err))

// const dummySchema = new mongoose.Schema({
//     name: { type: String },
//     email: { type: String }
// });

// const dummy = mongoose.model("Dummy", dummySchema);
// console.log(dummy);
// const userSchema=new mongoose.Schema({
//     firstName : { type : String},
//     lastName : { type : String }, 
//     age : { type :  Number}
// });

// const User=new mongoose.model('User',userSchema);

const app = express();
const PORT = 5000;
app.use(express.json());
app.use('/users', usersRoutes);
app.get("/", (req, res) => {
    // console.log('Test')
    res.send('Hello from HomePage')
})
app.listen(PORT, () => {
    console.log(`Server running on port : http://localhost:${PORT}`);
})


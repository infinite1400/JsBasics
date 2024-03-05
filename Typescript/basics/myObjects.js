"use strict";
// const user={
//     name : "Murari" , 
//     email : "abc@.com",
//     isActive : true
Object.defineProperty(exports, "__esModule", { value: true });
var myUser = {
    _id: "123",
    name: "h",
    email: "m@m.com",
    isActive: false
};
myUser.email = "newEmail";
// myUser._id="1234"; // can't done because it is read-only property
console.log(myUser);
var card = {
    cardnumber: "1234xx",
    carddate: "5th Mar",
    cvv: "xxx"
};
console.log(card);

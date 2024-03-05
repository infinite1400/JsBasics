// const user={
//     name : "Murari" , 
//     email : "abc@.com",
//     isActive : true

// }

// function createUser({name : string , isPaid : boolean}) : void{
//     console.log("createUser");
// }

// let newUser={name : "Murari", isPaid : false};
// createUser({name : "Murari", isPaid : false})

// function createCourse():{name : string , price : number}{
//     return {name : "react-js" , price : 499};
// }

// console.log(createCourse());

// type User={
//     name : string;
//     email : string;
//     isActive : boolean
// }

// function createUser(user : User) : User {
//     return user;
// }
// let mur:User=createUser({name : "",email : " ",isActive : false});
// console.log(mur);

type User={
    readonly _id : string
    name : string;
    email : string;
    isActive : boolean;
    credcardDetails ?: number
}

let myUser : User ={
    _id : "123",
    name : "h",
    email : "m@m.com",
    isActive : false
}
myUser.email= "newEmail";
// myUser._id="1234"; // can't done because it is read-only property
console.log(myUser);

type cardNumber={
    cardnumber : string
}

type cardDate={
    carddate : string
}

// combining two or more types
type cardDetails=cardNumber & cardDate & {
    cvv : string
}

let card : cardDetails={
    cardnumber : "1234xx",
    carddate : "5th Mar",
    cvv : "xxx"
}
console.log(card);



export {}
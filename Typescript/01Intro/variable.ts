// string
let greetings : string = "Hello Murari";

console.log(greetings);
console.log(greetings.toLowerCase())

// number
let userId=33453; // typescrpit automatically knows it is number
userId.toExponential(3);
console.log(userId);

//boolean

let isLoggedIn : boolean = false;
console.log(isLoggedIn);

// any 
let hero : string;
function getHero(){
    return "Murari";
}
hero=getHero();
console.log(hero);

export {}
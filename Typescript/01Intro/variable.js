"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string
var greetings = "Hello Murari";
console.log(greetings);
console.log(greetings.toLowerCase());
// number
var userId = 33453; // typescrpit automatically knows it is number
userId.toExponential(3);
console.log(userId);
//boolean
var isLoggedIn = false;
console.log(isLoggedIn);
// any 
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
console.log(hero);

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTow(num) {
    return num + 2;
    // return "Murari";
}
var value = addTow(5);
console.log(value);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("Murari");
function signUpUser(name, email, isPaid) { }
signUpUser("Murari", "@.com", false);
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("m", "m@m.com");
function getValue(myVal) {
    // multi type returning ! 
    if (myVal > 5) {
        return true;
    }
    else {
        return "200 OK";
    }
}
var getHello = function (s) {
    return "hello";
};
var heros = ["thor", "ironman", "spiderman"];
// const heros=[1,2,3,4];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}

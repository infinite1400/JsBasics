"use strict";
const func = (par) => {
    return par + par;
};
const func1 = (par) => {
    return par + par;
};
const func2 = (par) => {
    return par;
};
console.log(func("5"));
console.log(func1(5));
console.log(func2([1, 2, 3, 4]));
const func3 = (bootle) => {
    return bootle;
};
// <T,> uses to show that it is generic ! 
function getSearchProducts(products) {
    // do some database operations
    const myIndex = 0;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    return products[0];
};
function anotherFunc(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunc(4, { connection: "h", username: "t", password: "c" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

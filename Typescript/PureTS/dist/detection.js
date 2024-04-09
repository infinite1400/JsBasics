"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id !");
        return;
    }
    id.toLowerCase();
}
// it is not handling the case when string array object is empty ! 
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// this function return pet is Fish meaning it will return type Fish if return statement is true ! 
function isFish(pet) {
    return pet.swin !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "Fish Food";
    }
    else {
        pet;
        return "Bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        shape;
        console.log("Circle");
    }
    else {
        shape;
        console.log("Square");
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.breadth;
        // it is used to throw error in future if extra type in variable increase
        default:
            const _defaultforShape = shape;
            return _defaultforShape;
    }
}

"use strict";
// console.log("Using TypeScript ! instead of Javascript ")
// class User {
//   email: string;
//   private name: string; // can't access out of class
//   private readonly city : string= "Karnal"
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// Murari.city="Karnal";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        //   email: string;
        //   private name: string; // can't access out of class
        this._courseCount = 1;
        this.city = "Karnal";
        this.email = email;
        this.name = name;
    }
    // getter method
    get getEmail() {
        return this.email;
    }
    get courseCount() {
        return this._courseCount;
    }
    // can't have return type not even void
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("deleting token");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        // only public and protected members can be accessed here from the parent class
        this.isFamily = true;
    }
    changeCount(count) {
        this._courseCount = 11;
    }
}
const Murari = new User("m@m.com", "Murari");

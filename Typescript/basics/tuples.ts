
// const user : string[]= ["John","Jane"];

let user : [string,number,boolean];
user=["Murari",14,true];
console.log(user);

type User=[number,string];

const newUser : User=[101,"abc@gmail.com"];
console.log(newUser);
// can be changed ! 
newUser[1]="ABC@gmail.com";
console.log(newUser);

// tuple is having methods so we can add or remove items from it ! issue--
newUser.push("sample");
console.log(newUser);

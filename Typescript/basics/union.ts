// use it carefully
let score : number | string=33;

score=44;
console.log(score);
score="abc";
console.log(score);

type User={
    name : string;
    id : number
}

type Admin={
    username : string;
    id : number
}

let Murari :User | Admin= { name : "Murari" , id : 123};
console.log(Murari);
Murari= {username : "admin",id : 9};
console.log(Murari);

function getDbId(id : number | string){
    if (typeof id === "string") id=id.toUpperCase();
    console.log(`DB id is : ${id}`)
}

getDbId(3);
getDbId("abc");

const data : number[]=[1,2,3]
const data1 : string[]=["1","2","3"]
const data2 : (number | string)[]=[1,2,3,"4"]
console.log(data2);

let seat : "aisle" | "middle" | "window"= "aisle";
console.log(seat);
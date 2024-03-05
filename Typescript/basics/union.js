// use it carefully
var score = 33;
score = 44;
console.log(score);
score = "abc";
console.log(score);
var Murari = { name: "Murari", id: 123 };
console.log(Murari);
Murari = { username: "admin", id: 9 };
console.log(Murari);
function getDbId(id) {
    if (typeof id === "string")
        id = id.toUpperCase();
    console.log("DB id is : ".concat(id));
}
getDbId(3);
getDbId("abc");
var data = [1, 2, 3];
var data1 = ["1", "2", "3"];
var data2 = [1, 2, 3, "4"];
console.log(data2);
var seat = "aisle";
console.log(seat);

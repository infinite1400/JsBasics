
// function DoSomething() {
//     console.log("normal function");
// }

const { resolve } = require("scripts");

// const arrow = () => {
//     console.log("arrow function")
// }
// arrow();

// anonymous function
{/* <button onClick={() => {
    console.log("hello world")
}}></button> */}

// let age=15;
// let name=age>18 && "pedro";
// let name=age>18 ? "pedro" : "jack";
// console.log(name); // pedro
// age>=18 ? console.log("above 18") : console.log("below 18")
// const name="pedro";
// const person ={
//     name : "perdo",
//     age : 20,
//     isMarried :false
// };

// const name=person.name;
// const age=person.age;
// const isMarried=person.isMarried;

// destructuring the object and the same as above ! 
// const {name,age,isMarried}=person;

//same is person but with name change ! 
// const person1={...person,name : "jack"};
// console.log(person);
// console.log(person1);

// const names=["murari","chirag","dev","dev","dev"];
// const names1=[...names,"ashutosh"];
// console.log(names);
// console.log(names1);
// let modifiednames=names.map((name)=>{
//     // console.log(name);
//     return name+'1';
// })
// console.log(names);
// console.log(modifiednames);

// modifiednames=names.filter((name)=>{
//     return name!="dev";
//     // console.log(name);
// })
// console.log(modifiednames);

// const event=new Promise((resolve,reject)=>{
//     let name="Murari";
//     if(name=="Murari"){
//         resolve(name);
//     }
//     else{
//         reject("Name was not Murari");
//     }
// });
// event.then() // for resolve
// event.catch() // for reject
// event.then((name)=>{
//     console.log(name);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("Promise finished")
// })

const axios = require("axios");
// const data = axios.get("https://cat-fact.herokuapp.com/facts");
// data.then((res) => {
//     console.log(res.data);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     console.log("Promise Finished");
// })

const fetchData = async () => {
    try {
        const res = await axios.get("https://cat-fact.herokuapp.com/facts");
        let data = res.data;
        // console.log(data);
        let x = 1;
        data.map((obj) => {
            console.log(x + ":" + obj.text);
            x++;
        })
    }
    catch (err) {
        console.log(err);
    }
    finally{
        console.log("finally executed");
    }
}
fetchData();



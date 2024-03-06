function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }
  return val + 3;
}
function provideId(id: string | null) {
  if (!id) {
    console.log("Please provide id !");
    return;
  }
  id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}

interface User1 {
  name: string;
  email: string;
}
interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User1 | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
  
}

function logValue(x : Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

type Fish={swin:()=>void}
type Bird={fly:()=>void}

// this function return pet is Fish meaning it will return type Fish if return statement is true ! 
function isFish(pet : Fish | Bird) : pet is Fish{
    return (pet as Fish).swin !== undefined
}

function getFood(pet : Fish | Bird){
    if(isFish(pet)){
        pet
        return "Fish Food";
    }else{
        pet
        return "Bird Food"
    }
}

interface Circle{
    kind : "circle",
    radius : number
}

interface Square{
    kind : "square",
    side : number
}

interface Rectangle{
    kind : "rectangle",
    length : number,
    breadth : number
}

type Shape = Circle | Square | Rectangle 
function getTrueShape(shape : Shape){
    if(shape.kind==="circle"){
        shape
        console.log("Circle");
    }else{
        shape
        console.log("Square");
    }
}

function getArea(shape : Shape){
    switch(shape.kind){
        case "circle" : 
            return Math.PI * shape.radius ** 2 
        case "square" : 
            return shape.side ** 2;
        case "rectangle" : 
            return  shape.length * shape.breadth ; 
        // it is used to throw error in future if extra type in variable increase
        default : 
            const _defaultforShape : never=shape
            return _defaultforShape;
    }
}



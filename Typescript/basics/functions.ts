function addTow(num : number) : number{
    return num+2;
    // return "Murari";
}

let value=addTow(5);
console.log(value);

function getUpper(val : string){
    return val.toUpperCase();
}

getUpper("Murari");


function signUpUser(name :string,email : string,isPaid : boolean){}
signUpUser("Murari","@.com",false);

let loginUser=(name : string,email : string,isPaid : boolean = false)=>{}

loginUser("m","m@m.com")

function getValue(myVal : number){
    // multi type returning ! 
    if(myVal > 5 ){
        return true;
    }
    else{
        return "200 OK";
    }
}

const getHello=(s : string) : string=>{
    return "hello";
}

const heros=["thor", "ironman" , "spiderman"];
// const heros=[1,2,3,4];
heros.map((hero) :string=>{
        return `hero is ${hero}`;
})

function consoleError(errMsg : string) : void{
    console.log(errMsg);
}

function handleError(errMsg : string) : never{
    throw new Error(errMsg);
}

export {}
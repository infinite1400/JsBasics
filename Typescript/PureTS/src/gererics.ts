const func = (par: string): string => {
  return par + par;
};

const func1 = (par: any): any => {
  return par + par;
};

const func2 = <Type>(par: Type): Type => {
  return par;
};

console.log(func("5"));
console.log(func1(5));
console.log(func2([1, 2, 3, 4]));

interface Bootle {
  brand: string;
  type: number;
}

const func3 = <Bootle>(bootle: Bootle): Bootle => {
  return bootle;
};

// <T,> uses to show that it is generic ! 
function getSearchProducts<T,>(products : T[]) : T{
    // do some database operations
    const myIndex=0;
    return products[myIndex];
}

const getMoreSearchProducts=<T>(products : T[]) : T=>{
    return products[0];
}

interface Database{
    connection : string,
    username : string,
    password : string
}

function anotherFunc<T,U extends Database>(valOne : T,valTwo : U) : object{
    return{
        valOne,
        valTwo
    }
}

anotherFunc(4,{connection : "h",username : "t",password : "c"});

//     
interface Quiz{
    name : string,
    type : string
}

interface Course{
    name : string,
    author : string,
    subject : string
}

class Sellable<T>{
    public cart : T[]=[]

    addToCart(product : T){
        this.cart.push(product);
    }
}
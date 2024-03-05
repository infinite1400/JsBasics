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
    //   email: string;
    //   private name: string; // can't access out of class
    protected _courseCount=1;
    private readonly city : string= "Karnal"
    constructor(
        public email: string, 
        public name: string
        ) 
        {
            this.email = email;
            this.name = name;
        }

        // getter method
        get getEmail() : string {
            return this.email;
        }

        get courseCount() : number{
            return this._courseCount;
        }
        
        // can't have return type not even void
        set courseCount(courseNum: number){
            if(courseNum<=1){
                throw new Error("Course count should be more than 1");
            }
            this._courseCount=courseNum;
        }

        private deleteToken(){
            console.log("deleting token");
        }

    }

    class SubUser extends User{
        // only public and protected members can be accessed here from the parent class
        isFamily : boolean= true;
        changeCount(count : number){
            this._courseCount=11;
        }
    }
    
 const Murari=new User("m@m.com","Murari");


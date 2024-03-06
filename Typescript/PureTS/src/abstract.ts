abstract class TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string
    ){}

    abstract getSepia() : void
    getReelTime() : number{
        // operations
        return 8;
    }
}

// const mp=new TakePhoto("test","Test");// can't create it 
class Instagram extends TakePhoto{
    constructor(
        public cameraMode : string,
        public filter : string,
        public burst : number
    ){
        super(cameraMode,filter);
    }

    getSepia():void{
        console.log("Sepia");
    }
}

const mp1=new Instagram("front","normal",2);
mp1.getSepia();
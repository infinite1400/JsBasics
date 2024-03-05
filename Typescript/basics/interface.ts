interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrail : ()=> string
  startTrail(): string;
  getCoupon(coupanname: string, value: number): number;
}

// can redeclear to add functionality ! 
// reopening of interface 
interface User{
    gitHubToken : string
}

interface Admin extends User{
    role : "admin" | "ta" | "learner"
}
const mur: Admin = {
  dbId: 14,
  role : "admin",
  email: "m@m.com",
  userId: 12,
  startTrail: () => {
    return "trail started";
  },
  getCoupon: (name: "Murari", val: 145) => {
    return 10;
  },
  gitHubToken : "infi1400"
};
mur.email = "m@mp.com";
console.log(mur);



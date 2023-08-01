// interface point{
//     A:number;
//     B:number;
// }
// let p1:point={A:10,B:20};
// function displayPoint(p:point){
//     console.log(`x=${A} and y=${B}`);
// }

interface user{
    id:number;
    firstname:string;
    lastname:string;
    getFullname():string;
}
const user:user={
    id:101,
    firstname:"vinod",
    lastname:"sarwade",
    getFullname:()=>`name is ${firstname} ${lastname}`
}

class userImplements implements user
{
    id:number;
    firstname: string;
    lastname: string;
    constructor(id, firstname,lastname)
    {
        this.id=id;
        this.firstname=firstname;
        this.lastname=lastname;
    }
    getFullname(): string {
        return`${this.firstname} ${this.lastname} and id is ${this.id}`
    }
}
let u :user = new userImplements(101,"Sara","J");
console.log(u.getFullname());
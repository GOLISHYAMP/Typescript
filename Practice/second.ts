// Learning about export and inport

// export let msg : string = "Hello";
let msg : string = "Hello";

// export function sayHello():void
export default function sayHello():void

{
    console.log("Hello From TS");
}

// export class Person
class Person
{
    constructor(private name:string,private age:number)
    {
        this.name = name;
        this.age = age;
    }

    displayPerson():void{
        console.log(`${this.name} ${this.age}`);
    }
}

export{ msg, Person};
class Animal
{
    name :string;
    age : number;
    constructor(name:string,age:number)
    {
        this.name = name;
        this.age = age;
    }
    makeSound() : void{
        console.log("MAYYYYYY>>>>");
    }
}

class Dog extends Animal
{
    constructor(name : string, age : number){
        super(name,age);
    }
    makeSound() : void{
        console.log("I am Dog");
        console.log(`name = ${this.name} and age = ${this.age}`);
        console.log("BOW BOW!");
    }
}

class Cat extends Animal
{
    constructor(name : string, age : number){
        super(name,age);
    }
    makeSound() : void{
        console.log("I am Cat");
        console.log(`name = ${this.name} and age = ${this.age}`);
        console.log("MOW MOW!");
    }
}

let dog:Dog = new Dog("Vinod",22);
let cat:Cat = new Cat("Shyam",23);
dog.makeSound();
cat.makeSound();
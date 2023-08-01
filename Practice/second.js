"use strict";
// Learning about export and inport
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = exports.msg = void 0;
// export let msg : string = "Hello";
var msg = "Hello";
exports.msg = msg;
// export function sayHello():void
function sayHello() {
    console.log("Hello From TS");
}
exports.default = sayHello;
// export class Person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayPerson = function () {
        console.log("".concat(this.name, " ").concat(this.age));
    };
    return Person;
}());
exports.Person = Person;

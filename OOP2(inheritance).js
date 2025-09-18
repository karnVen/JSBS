// Prepared by:
// Name: Rishabh Singh
// R Id: 51078
// // Activity 17: OOP 2

class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log("Hello " + this.name);
    }
}

class Student extends Person {
    study() {
        console.log(this.name + " is studying");
    }
}

let s = new Student("Sameer");
s.greet();
s.study();

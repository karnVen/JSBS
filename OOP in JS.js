// Prepared by:
// Name: Rishabh Singh
// R Id: 51078
// // Activity 16: OOP in JS

class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(this.name, this.age);
    }
}

let s1 = new Student("Sameer", 20);
s1.display();

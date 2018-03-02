"use strict"

class Person {
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayWeight(){
        console.log(this.weight);
    }
}

let bucky = new Person("Bucky",29,123)
bucky.displayWeight();
let sally = new Person("Sally",22,90)
sally.displayWeight();

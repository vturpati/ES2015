"use strict"

class Person {
    constructor(name,age,weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }

    displayName(){
        console.log(this.name);
    }

    displayAge(){
        console.log(this.age);
    }

    displayWeight(){
        console.log(this.weight);
    }
}

class Programmer extends Person{
    constructor(name,age,weight,language){
        super(name,age,weight);
        this.language = language;
    }

    displayLanguage(){
        console.log(this.language);
    }
}

let bucky = new Person("Bucky",29,123)
bucky.displayWeight();
bucky.displayAge();
bucky.displayName();
let sally = new Programmer("Sally",22,90,"javascript")
sally.displayWeight();
sally.displayAge();
sally.displayName();
sally.displayLanguage();

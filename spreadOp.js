"use strict"

let addNumber = (a,b,c) => {return a+b+c};

let num = [3,3,4];
let num1 = [3,3,4,5];
console.log(addNumber(num[0],num[1],num[2]));
console.log(addNumber(...num));
console.log(addNumber(...num1)); // return 10

var meat = ["bacon","ham"];
var food = ["apple","kiwi",...meat,"rice"];

console.log(food);
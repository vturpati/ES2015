"use strict"

const PI = 3.14;

function circleArea1(r){
    return PI * r *r
}

let circleArea2 = (r) => {
    return PI * r *r ;
}

let circleArea3 = r => PI*r*r;

 console.log(circleArea1(7));
 console.log(circleArea2(7));
 console.log(circleArea3(7));

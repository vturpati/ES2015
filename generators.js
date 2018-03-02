"use strict"

function* sampleGenerators(){
    yield "apples";
    yield "banana";
    console.log("this codes is after banana");
    yield "corn"
}

var sample = sampleGenerators();
console.log(sample.next());
console.log(sample.next());
console.log(sample.next());
console.log(sample.next());
/*

{ value: 'apples', done: false }
{ value: 'banana', done: false }
this codes is after banana
{ value: 'corn', done: false }
{ value: undefined, done: true }

*/

function* nextId(){
    let id = 0 ;
    while(id < 3)
        yield id++;
}

var creatUserIds = nextId();
console.log(creatUserIds.next());
console.log(creatUserIds.next());
console.log(creatUserIds.next());
console.log(creatUserIds.next());

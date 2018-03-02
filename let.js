"use strict"

let movie = "The good will hunting";

function theNoteBook(){
    //Scope of movie is only in this function block
    let movie = "The Notebook";
    return movie;
}
function theGoodWillHuntings(){
    return movie;
}


console.log(movie); // returns "The good will hunting"
console.log(theNoteBook());// returns "The Notebok"
console.log(movie); // returns "The good will hunting"
console.log(theGoodWillHuntings()); // returns "The good will hunting"


function buckySay(){
    let isHorse = true;
    let saying = "Bacon is good"

    console.log("before if saying "+saying);

    if(isHorse){
        let saying = "I am a horse";
        console.log("Inside if saying "+saying);
    }
    console.log("after if saying "+saying);
}

buckySay();
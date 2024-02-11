"use strict";

let elements = ["rock", "paper", "scissors"];

function inputToValue(pInput){
    // Takes the input of the user and 
    // translates it to the value of the chosen element
    let input = pInput.toLowerCase();
    return elements.indexOf(input);
}

// Handle the jump between the end and the start of the array
function handleDif(pValueA, pValueB){
    // Takes index values
    if(Math.abs(pValueA - pValueB) >= elements.length - 1){
        let newValueA = (pValueA < pValueB) ? elements.length : pValueA;
        let newValueB = (pValueB < pValueA) ? elements.length : pValueB;
        return [newValueA, newValueB];
    } else {
        return [pValueA, pValueB];
    }
}

function getRandomValue(){
    // gets random int between 0 and the length of the table
    return Math.floor(Math.random() * elements.length);
}

// testing program
// user chooses a value
let userInput = prompt("Rock, paper or scissors?");
// computer chooses a value (should be random but hardcoded for the moment)
let computerInput = getRandomValue();
// handle the difference between both values
let values = handleDif(inputToValue(userInput), computerInput);
let userValue = values[0];
let computerValue = values[1];
// show the result in the console
console.log(`Userinput: ${userInput} of value ${userValue} // ComputerInput: ${elements[computerInput]} of value ${computerValue}`);

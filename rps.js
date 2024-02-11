"use strict";

function inputToValue(pInput){
    // Takes the input of the user and 
    // translates it to the value of the chosen element
    let elements = ["rock", "paper", "scissors"];
    let input = pInput.toLowerCase();
    return elements.indexOf(input);
}



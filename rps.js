"use strict";

const elements = ["rock", "paper", "scissors"];

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

// Ideally this function should only return a number
function playRound(){
    // Gather inputs
    let userInput = prompt("Rock, paper or scissors?");
    let computerInput = getRandomValue();
    
    // Handles values
    let values = handleDif(inputToValue(userInput), computerInput);
    let userValue = values[0];
    let computerValue = values[1];

    // Check the winner
    if(userValue > computerValue){
        return `You win ! ${userInput} beats ${elements[computerInput]}`
    } else if(userValue === computerValue) {
        return `It's a tie ! ${userInput} against ${elements[computerInput]}`
    } else {
        return `You lose ! ${elements[computerInput]} beats ${userInput}`
    }
}

// Create a function that takes care of the messages
// Create a playGame() function
function playGame(pNbRounds){
    // Gather inputs
    // Play round
    // Verify who wins (playRound returns a number: 1 win, 0 tie, -1 lose)
    // Display message
}

// testing program
console.log(playRound());

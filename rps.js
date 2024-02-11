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

function playRound(pUserInput, pComputerInput){
    // Handles values
    let values = handleDif(inputToValue(pUserInput), inputToValue(pComputerInput));
    let userValue = values[0];
    let computerValue = values[1];

    // Check the winner
    if(userValue > computerValue){
        return 1;
    } else if(userValue === computerValue) {
        return 0;
    } else {
        return -1;
    }
}

function getWinMessage(pWinValue){
    switch(pWinValue){
        case 1:
            return `You win !`
            break;
        case 0:
            return `It's a tie !`
            break;
        case -1:
            return `You lose !`
            break;
        default:
            return "There is a problem"
            console.error("Incorrect win value");
            break;
    }
}

// Create a function that takes care of the messages
// Create a playGame() function
function playGame(pNbRounds = 5){
    // Gather inputs
    let userInput = prompt("Rock, paper or scissors?");
    let computerInput = elements[getRandomValue()];
    // Play round
    let winValue = playRound(userInput, computerInput);
    // Verify who wins (playRound returns a number: 1 win, 0 tie, -1 lose)
    // Display message
    console.log(getWinMessage(winValue));
}

// testing program
playGame(1);

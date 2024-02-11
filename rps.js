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

function getWinMessage(pWinValue, pUserInput, pComputerInput){
    switch(pWinValue){
        case 1:
            return `You win ! ${pUserInput} beats ${pComputerInput}`
        case 0:
            return `It's a tie !`
        case -1:
            return `You lose ! ${pComputerInput} beats ${pUserInput}`
        default:
            return "There is a problem"
            console.error("Incorrect win value");
    }
}

function calculateScores(pScores, pWinValue){
    switch(pWinValue){
        case 1:
            pScores[0] += 1;
            return pScores;
        case 0:
            return pScores;
        case -1:
            pScores[1] += 1;
            return pScores;
    }
}

function playGame(pNbRounds = 5){
    // Initialize variables
    let scores = [0,0];

    for(let round = 1; round<= pNbRounds; round++){
        // Gather inputs
        let userInput = prompt("Rock, paper or scissors?");
        let computerInput = elements[getRandomValue()];

        // Play round
        let winValue = playRound(userInput, computerInput);

        // Handle score
        scores = calculateScores(scores, winValue);

        // Display message
        console.log(`Round: ${round}`);
        console.log(getWinMessage(winValue, userInput, computerInput));
        console.log(`You: ${scores[0]}, Computer: ${scores[1]}`);
        console.log("\n");
    }

}

// testing program
playGame(5);

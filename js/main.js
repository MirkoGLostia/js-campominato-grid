/*
Consegna
L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

Bonus
 Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

// variabili

const gameTable = document.getElementById("game-container");

const number = numberList(100);

console.log(number);


for (let i = 0; i < 100; i++) {

    const squareContainer = createSquare ("div", "square");

    const squareContent = document.createElement("span");

    squareContent.append(number[i]);

    squareContainer.append(squareContent);

    gameTable.append(squareContainer);

}










// funzioni

function randomNumber (minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

function arrayOfRandomNumber (min, max) {

    const containerNum = [];

    while ((containerNum.length) < max - min + 1) {
        
        const nuovoNum = Math.floor(Math.random() * (max - min + 1) + min);

        if (!containerNum.includes(nuovoNum)) {

            containerNum.push(nuovoNum);
            
        }
        
    }

    return containerNum;

}

function createSquare(tagType, classToAdd) {
    
    const newSquare = document.createElement(tagType);

    newSquare.classList.add(classToAdd);

    return newSquare;

}

// numbers from 1 to tot
function numberList(tot) {

    const numberArray = [];

    for (let i = 0; i < tot; i++) {
        const number = i + 1;

        numberArray.push(number)
        
    }
    
    return numberArray;

}





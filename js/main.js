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




// pulsante start
start.onclick = function() {

    // variabili

    let difficultyLvlValue = getTheDifficulty();

    let classNumberSquare = "square-" + difficultyLvlValue;
    
    const number = numberList(difficultyLvlValue);




    
    document.getElementById("game-container").innerText = "";
    
    // creation grid
    for (let i = 0; i < difficultyLvlValue; i++) {
        
        const squareContainer = createSquare ("div", classNumberSquare);
        
        const squareContent = document.createElement("span");
        
        squareContent.append(number[i]);
        
        squareContainer.append(squareContent);
        
        gameTable.append(squareContainer);


        
        // interazione con i quadrati
        squareContainer.addEventListener("click", 
        
            function () {
                
                this.classList.add("bk-blue");

                const thisSquare = document.querySelector("div.bk-blue span").value = number[i];

                console.log(thisSquare);
                
            }
        
        )

    }


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

// difficulty level value
function getTheDifficulty() {

    let levelValue = 0;

    const level = document.getElementById("dififculty-lvl-choices").value;

    if (level === "easy") {

        levelValue = 100;
        
    }
    else if (level === "normal") {

        levelValue = 81;
        
    }
    else if (level === "hard") {

        levelValue = 49;

    }


    return levelValue
    
}





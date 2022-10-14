/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
*/

//chiedere all'utente pari o dispari
//chiedere all'utente un numero da 1 a 10 
//creare funzione random numero
//generare numero random del pc da 1 a 10
//creare funzione isSumOddorEven


//INPUT UTENTE
const userOddEven = prompt("Scegli pari o dispari?");
let userNumber = parseInt(prompt("Dammi un numero da 1 a 10"));
if(userNumber > 10 || isNaN(userNumber)){
    userNumber = parseInt(prompt("Dammi un numero da 1 a 10"));
}
console.log(userOddEven, userNumber);

//RANDOM PC Num
const computerNumber = generateRndNum(1, 10);
console.log(computerNumber);

//const SUM with f(x)
const sumInput = sumIsOddOrEven(userNumber, computerNumber);
console.log(sumInput);


//OUTPUT
if(sumInput === userOddEven){
    console.log("Hai vinto!:)");
}else{
    console.log("Hai perso, ha vinto il pc!:(");
}



//FUNCTION
/**
 * Description Generare un numero random dandogli un range di numeri
 * @param {number} min numero minimo del range
 * @param {number} max numero massimo del range
 * @returns {any} 
 */
function generateRndNum(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
    return randomNumber;
}


/**
 * Description dati due numeri verificare se la loro somma è pari o dispari
 * se somma è pari message = "pari" altrimenti "dispari" 
 * @param {number} number1 
 * @param {number} number2
 * @returns {any}
 */
function sumIsOddOrEven(number1, number2){
    const sum = number1 + number2;
    let message = "";
    if (sum % 2 === 0 ){
        message = "pari";
    } else {
        message = "dispari";
    }
    return message;
}




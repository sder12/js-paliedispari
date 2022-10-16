/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

//INPUT
const userWord = prompt("Dimmi una parola");
console.log(userWord);

//PROCESSING
const userWordResult = isPalindroma(userWord);
console.log(userWordResult);

//OUTPUT
if (userWordResult) {
  alert("La parola inserita è palindroma");
} else {
  alert("La parola NON è palindroma");
}

/**
//  * Description Verificare se una parola è palindroma o meno
//  * Scomporre la parola 
//  * @param {string} word
//  * @returns {boolean} true se è palindroma 
//  */
function isPalindroma(word) {
  let arrayBack = [];
  for (let j = userWord.length - 1; j >= 0; j--) {
    arrayBack.push(word[j]);
  }
  let arrayBackJoin = arrayBack.join('');

  let isPalindroma = false;
  if (word === arrayBackJoin) {
    isPalindroma = true;
  }
  return isPalindroma;
}

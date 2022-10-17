/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

//INPUT
const userWord = prompt("Dimmi una parola");
console.log(userWord);

//PROCESSING
const userWordResult = isPalindromaII(userWord);
console.log(userWordResult);

//OUTPUT
if (userWordResult) {
  alert("La parola inserita è palindroma");
} else {
  alert("La parola NON è palindroma");
}

/**
//  * Description Verificare se una parola è palindroma o meno
//  * Scomporre la parola USO ARRAY
//  * @param {string} word
//  * @returns {boolean} true se è palindroma 
//  */
function isPalindroma(word) {
  let arrayBack = [];
  for (let j = word.length - 1; j >= 0; j--) {
    arrayBack.push(word[j]);
  }
  let arrayBackJoin = arrayBack.join('');

  let isPalindroma = false;
  if (word === arrayBackJoin) {
    isPalindroma = true;
  }
  return isPalindroma;
}



/**
//  * Description Verificare se una parola è palindroma o meno
//  * Scomporre la parola CONCATENO
//  * @param {string} word
//  * @returns {boolean} true se è palindroma 
//  */
function isPalindromaII(word) {
  let reverseWord = "";
  for (let j = word.length - 1; j >= 0; j--) {
    reverseWord += word[j]
  }
  let isPalindroma = false;
  if (word === reverseWord) {
    isPalindroma = true;
  }
  return isPalindroma;
}
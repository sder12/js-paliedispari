/*
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
*/

//chiedere all'utende una parola
//creare funzione isPalindroma
//check con parola utente

//INPUT UTENTE
const userWord = prompt("Scrivi una parola");
console.log(userWord);

const reverseWord = userWord.split('').reverse('').join('');
console.log(reverseWord);

const userPalindroma = isWordPalindroma(userWord);
console.log(userPalindroma);



//FUNCTION
/**
 * Description Controllare se parola è palindroma = se il suo riflesso è uguale
 * @param {string} word parola scelta 
 * trasformo la parola in riflesso e verifico se sono uguali 
 * @returns {any}
 */
function isWordPalindroma(word){
    const reverseWord = word.split('').reverse('').join('');
    if (word === reverseWord){
        return true;
    } else {
        return false;
    }
}





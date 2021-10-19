/* 
Nome esercizio: Palindroma
Richiesta esercizio: Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

Consigli del giorno: 
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
ricerchiamo gli strumenti e teniamo sotto mano la documentazione
Pushate man mano che lavorate

Bonus:
Assicurarsi che il nostro codice sia leggibile
scegliere attentamete i nomi delle variabili, e quelli delle funzioni (devo poter leggere e capire cosa contengono le variabili e cosa fa una funzione)
documentate il codice delle funzioni usando js docs come visto in classe
*/

// variabili
const wordPalindromeUser = prompt(
	"Inserire una parola, al fine di verificare se sia palindroma oppure no"
);
let result = document.getElementById("result");
let check = checkPalindrome(wordPalindromeUser);

// funzione
function checkPalindrome() {
	return (checkWord = wordPalindromeUser.split("").reverse().join(""));
}

// condizionale if
if (wordPalindromeUser == check) {
	result.innerHTML = "La parola inserita è palindroma";
} else {
	result.innerHTML = "La parola inserita non è palindroma";
}

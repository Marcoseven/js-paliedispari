/* 
Nome esercizio: Pari e dispari
Richiesta esercizio: 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.


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
const choice = prompt("Scelga tra pari o dispari");
const numberUser = Number(prompt("Inserire un numero da 1 a 5"));
const sum = numberUser + numberPc;
let result = document.getElementById("result");
let pc = numberPc();
let numbers = dispariPari();

// funzioni
function numberPc() {
	return (numberPcRandom = Math.floor(Math.random() * 5) + 1);
}

function dispariPari(num1, num2) {
	if (sum % 2 == 0) {
		return "pari";
	} else {
		return "dispari";
	}
}

// condizionale if
if (choice == dispariPari) {
	result.innerHTML = "Hai vinto!";
} else {
	result.innerHTML = "Mi dispiace, hai perso";
}

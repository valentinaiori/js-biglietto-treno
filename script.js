/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
*/

const etaPasseggero = prompt('Quanti anni hai?');
console.log('etaPasseggero', etaPasseggero);


const chilometriPercorsi = prompt('Quanti chilometri vuoi percorrere?');
console.log('chilometriPercorsi', chilometriPercorsi);

let prezzoBiglietto = chilometriPercorsi * 0.21;
console.log('prezzoBiglietto senza sconto', prezzoBiglietto);

if (etaPasseggero < 18) {
    prezzoBiglietto = prezzoBiglietto * 0.8;
} else if (etaPasseggero >= 65) {
    prezzoBiglietto = prezzoBiglietto * 0.6;
}


console.log('prezzoBiglietto con eventuale sconto', prezzoBiglietto);


prezzoBiglietto = prezzoBiglietto.toFixed(2);

console.log('prezzoBiglietto con toFixed(2)', prezzoBiglietto);
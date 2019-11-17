var name1 = prompt('Giocatore 1: inserisci il tuo nome');
console.log(name1);
var name2 = prompt('Giocatore 2: inserisci il tuo nome');
console.log(name2);

var min=1;
var max=6;
var g1random = Math.floor(Math.random() * (+max - +min)) + +min;
document.write("Random Number Generated : " + g1random );
var g2random = Math.floor(Math.random() * (+max - +min)) + +min;
document.write("Random Number Generated : " + g2random );


if (g1random==g2random)
console.log("Lancio PARI !");
else if (g1random>g2random)
{ console.log("Lancio vinto da " + name1 +" per " + g1random+ " a "+g2random); }
else { console.log("Lancio vinto da " + name2 +" per "+d2+" a "+d1); }

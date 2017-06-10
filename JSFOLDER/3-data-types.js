'use strict'
/*zmienne liczbowe*/
var liczba = 10.04;

console.log(liczba);

/*zmienne typu ciag znakow*/
var tekst = '         Dzień dobry! :)';
console.log(tekst);

console.log(tekst.split(" "));

console.log(tekst.trim());

/*Zmienne logiczne*/

var zmiennaLogiczna = (2+2 == 5);
console.log(zmiennaLogiczna);

if(zmiennaLogiczna){
    console.log('Warunek spelniony')
} 
else { 
console.log('warunek nie spelniony')
}

/*typy specjalne*/

var zmiennaNiezdefiniowana;
console.log(zmiennaNiezdefiniowana);

var tablica = [null, 'Łukasz', 'Michał'];
console.log(tablica[0]);

/*sprawdzanie typu zmiennej*/

console.log(typeof zmiennaLogiczna);
console.log(typeof liczba);



"use strict"

var tablicaImion = ['Kasia', 'Tonek', 'Robert'];


console.log(tablicaImion[2]);
console.log(tablicaImion);
tablicaImion[2]='Piotr';
console.log(tablicaImion[2]);

tablicaImion.push('Konrad'); //dodaje jako ostatni element tablicy
console.log(tablicaImion);

tablicaImion.pop(); //usuwa ostatni elemt tablicy
console.log(tablicaImion);

tablicaImion.unshift('Andrzej', 'Tomek');//dodaje na poczatek
console.log(tablicaImion);

tablicaImion.shift();//usuwa z poczatku
console.log(tablicaImion);


console.log(tablicaImion.length);

for(var i=0; i<tablicaImion.length; i++){
        console.log("Imie studenta to "+ tablicaImion[i]);
    }

console.log(tablicaImion.join());//wzraca stringa  


console.log(tablicaImion.reverse());//wzraca tablice z odwrocona kolejnoscia
console.log(tablicaImion.sort());//wzraca tablice posortowana

console.log(tablicaImion.sort().reverse());
console.log(tablicaImion.sort().reverse().join());

var noweImiona = ['Łukasz', 'Kamil'];

console.log(tablicaImion.concat(noweImiona));

console.log(tablicaImion.indexOf('Kasia'));


console.log(tablicaImion.slice(0,2));

tablicaImion.splice(2, 0, 'Ania', 'Karolina');

console.log(tablicaImion);














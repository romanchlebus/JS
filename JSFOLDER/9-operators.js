'use strict'

var liczbaPierwsza = 5;
var liczbaDruga = 2;



console.log(liczbaPierwsza % liczbaDruga);

/*inkrementacja*/
while(liczbaPierwsza > liczbaDruga){
   
    --liczbaPierwsza;
    console.log(liczbaPierwsza);
}

/*operatory przypisania*/
var liczbaTrzecia = 6

console.log(liczbaTrzecia);

liczbaTrzecia  += 3;
liczbaTrzecia  -= 1;
liczbaTrzecia  *= 2;
liczbaTrzecia  /= 4;
liczbaTrzecia  %= 4;

console.log(liczbaTrzecia);

/*operatory porownania*/
if('2'===2) {
    console.log('prawda');
}
else{
    console.log('Falsz');        
}


/*operatory logiczne*/
if('2'<=2 && 8>9) {
    console.log('prawda');
}
else{
    console.log('Falsz');        
}

if('2'<=2 || 8>9) {
    console.log('prawda');
}
else{
    console.log('Falsz');        
}

if('2'<=2 && 8>9 || 8<9) {
    console.log('prawda');
}
else{
    console.log('Falsz');        
}


if(!(2<2)) {
    console.log('prawda');
}
else{
    console.log('Falsz');        
}

/*Operator warunkowy*/

var zmienna = (2>3)?'Dwa jest mniejsze od trzech':'Tojest nieprawda';
console.log(zmienna);



































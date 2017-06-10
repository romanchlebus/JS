'use strict'
var num1 = 1;
function addNumbers(par1, par2) {
    
    var num1 = par1;
    var num2 = par2;
    var wynik = num1 + num2;
//    console.log('wynik dodawania '+ wynik);
    
    return wynik;
}
addNumbers(2,2);
addNumbers(7,5);
addNumbers('czesc ', 'kolego');
addNumbers(1);
addNumbers('cześć ');


console.log(num1);

var wynikFunkcji = addNumbers(6, 9);

console.log(wynikFunkcji);


function evenNumbersCount(par1){
    
    var evenNumbers = 0;
    
    for (var i=1; i<=par1; i++){
        if(i%2==0){
            evenNumbers++
        }
    }
    return evenNumbers;
}
console.log(evenNumbersCount(15));
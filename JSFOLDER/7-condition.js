'use strict'

/*warunek IF*/

var wzrostKasi = 167;
var wzrostPiotra = 170;

if (wzrostKasi < wzrostPiotra){
    console.log('To jest prawda');
}

/*warunek if-else*/

if (wzrostKasi > wzrostPiotra){
    console.log('To jest prawda');
} else {
     console.log('To jest falsz');
}

/*warunek else-if*/

if (wzrostKasi > wzrostPiotra){
    console.log('To jest prawda');
} else if(wzrostKasi == wzrostPiotra){
     console.log('Kasia i Piotr sa tego samego wzrostu');
} else {
     console.log('To jest falsz');
}

/*warunek switch*/

var kolor = 'zielony';

switch (kolor) {

    case 'czerwony':
        console.log('kolor jest czerwony');
        break;
    case 'zielony':
        console.log('kolor jest zielony');
        break;
    default:
        console.log('inny kolor');     
 }


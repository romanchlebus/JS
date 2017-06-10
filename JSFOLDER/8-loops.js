'use strict'

/*petla for*/

for (var i = 0; i<5; i++){
    
    console.log('wykonanie petli' + i);
}

var studenci = ['konrad', 'andrzej', 'artur'];

for (var i = 1; i<=studenci.length; i++){
    console.log('Student ' + i + 'ma na imie ' + studenci[i-1]);
}

/*petla while*/

var it=0;
while(it<10) {
    console.log(it);
    it++;
}

/*peta do while*/
var it = Math.floor(Math.random() * 10);
do {
    console.log(it);
    it = Math.floor(Math.random() * 10);
} while (it != 5);


/*instrukcja break*/

for (var i = 0; i<5; i++){
    if(i==3){
        break;
    }
    console.log(i);
}

/*instrukcja continue*/

for (var i = 0; i<50; i++){
    if (i%2 == 0){
        continue;
    }
    console.log(i);
}
















'use strict'

var student = {
    imie: 'Przemek',
    wzrost: 180,
    przedstawSie: function(){
        console.log('Cześć, mam na imie' + this.imie + 'i mam' + this.wzrost + 'cm wzrostu');
    }
}


student.przedstawSie();
console.log(student);
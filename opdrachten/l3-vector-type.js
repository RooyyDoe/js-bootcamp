 
function Vec(){
    return Vec;
}

 console.log(new Vec(1, 2).plus(new Vec(2, 3)));
 // → Vec{x: 3, y: 5}
 console.log(new Vec(1, 2).minus(new Vec(2, 3)));
 // → Vec{x: -1, y: -1}
 console.log(new Vec(3, 4).length);
 // → 5



var person = {
 name: ‘Pieter’,
 age:  21
 hobby: ['fun', 'lol']
}

console.log(person(person.hobby[0]));

var person2 = ['Pieter', 21];
console.log(person2[0]);

var string = 'bootcamp';

console.log(string.length);
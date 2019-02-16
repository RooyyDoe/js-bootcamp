// Hier maak ik een functie Vec aan met de parameters x en y
function Vec(x, y) {
    this.x = x;
    this.y = y;
}
// Hier gebruik ik de Vec.prototype.plus hiermee voeg ik een plus methode toe aan de constructor..
// Deze heeft de parameter vector mee gekregen.
Vec.prototype.plus = function (vector) {
    // Hier wordt de x van de constructor en de x van de parameter vector bij elkaar opgeteld. hetzelfde geld voor de y
    // Uiteindelijk returnt hij de een nieuwe Vec met de x bij elkaar opgeteld en de y bij elkaar opgeteld
    // en dit wordt een nieuwe value.
    return new Vec(this.x + vector.x, this.y + vector.y)
}

Vec.prototype.min = function (vector) {
    // Hier wordt de x van de constructor en de x van de methoden parameter "vector" van elkaar afgetrokken. hetzelfde geld voor de y
    // Uiteindelijk returnt hij de een nieuwe Vec met beide x van elkaar afgetrokken en ook beide y van elkaar afgetrokken.
    // en dit wordt een nieuwe value.
    return new Vec(this.x - vector.x, this.y - vector.y)
}
// Hier maak je een getter property met de naam "length" binnen de Vec
// de stelling van pythagoras wordt ook gebruikt bij deze code.
Object.defineProperty(Vec.prototype, "length", {
 // ik snap niet zo goed wat hier gebeurd...
 get: function() {
      // hier worden de square van de x value en de y value genomen van de vector
      // Er wordt dus de square genomen van hh deze values som en hiervan wordt de lengte gegeven
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
});


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).min(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5



/*var person = {
 name: ‘Pieter’,
 age:  21,
 hobby: ['fun', 'lol']
}

console.log(person(person.hobby[0]));

var person2 = ['Pieter', 21];
console.log(person2[0]);

var string = 'bootcamp';

console.log(string.length);*/

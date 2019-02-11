# Eloquent JavaScript

*Samenvatting Eloquent Javascript (Save Me)*.

## Values, Types, and Operators

**Bits** worden meestal beschreven als nullen en enen. Elk stukje discrete informatie kan worden teruggebracht tot een reeks van nullen en enen en dus worden weergeven in bits. Als voorbeeld heb ik een het getal 13 in bits uitgedrukt. Dit werkt hetzelfde als een decimaal getal, maar inplaats van 10 verschillende cijfers, heeft het slechts 2. 

hier een voorbeeld:

   0   0   0   0   1   1   0   1
 128  64  32  16   8   4   2   1

 het binary nummer = 00001101. Als je elke nummer waar 1 staat bij elkaar optelt kom je dus op 13 uit.

### Values

Elk **value** die bestaat zijn bits ( Denk hierbij aan: Numbers, Pieces of text, Functions, ect) 

### Numbers

Fractional Numbers worden geschreven met behulp van een punt: ( 9.81 )
Voor zeer grote of zeer kleine getallen kan er een wetenschappelijke notatie gebruikt worden doormiddel van **e** (Voor exponent) toe te voegen. gevolgd door de exponent van het nummer. (2.998e8) Dit is: 2.998 x10 8 = 299.800.000

De **fractional digital numbers** moet je zien als **Approximations** en niet als preciese waardes (values) dit komt omdat ze 64 bits hebben om mee te werken en dit kan nooit precies zijn.

### Arithmetic

De belangrijkste dingen om te doen met getallen is het __optellen__ of __vermenigvuldigen__ van twee getallen. (Reken vragen) 

Zo zien de sommen eruit in javascript.

100 + 4 * 11

De + en de * worden **operators** genoemd in javascript. Je moet denken aan rekenen, als eerst gebruikt het vermenigvuldigen en daarna word de som pas opgeteld. behalve als je bijvoorbeeld haakjes zet om de optel som zoals hieronder gebeurd.

(100 + 4) * 11

Voor het aftrekken is de operator - en voor het delen van een som is er /

Het % symbool wordt gebruikt om  de __restbewerking__ te weer geven. X % Y is the remainder of dividing X by Y. For example: 314 % 100 = 14, 144 % 12 = 0

Dit betekend dus hoevaal het tweede getal in het eerste getal kan en wat er overblijft is je antwoord.

"+ - / * %" dit zijn alle **arithmetic operators**


### Special Numbers

**Infinity** en **-Infinity**, die de positieve en negatieve oneindigheden voorstellen. vertrouw niet teveel op deze twee speciale nummers. omdat het niet wiskunde correct is om deze te gebruiken.

NaN staat voor: "Not a number"

### Strings

**String** word gebruikt om tekst in te weergeven. de teksten worden gezet tussen aanhalingstekens waardoor javascript automatisch een string hiervan zal maken. Wanneer een backslash (\) binnen geciteerde tekst wordt gevonden betekend tid dat er een speciale actie uitgevoerd gaat worden. ze noemen het "Escaping the character" Doormiddel van (\n) te verwerken in een string word er een **enter** toegevoegd in de string. Doormiddel van (/t) te verwerken in een string word er een **tab** toegevoegd in de string

Voorbeeld:

"This is the first line\nAnd this is the second"

Maakt:

This is the first line
And this is the second

Als je strings aan elkaar wil plakken wordt dat gedaan doormiddel van de + operator. Hier een voorbeeld dat het woord "concatenate" maakt:

"con" + "cat" + "e" + "nate"

**template literals**:

" half of 100 is ${100 / 2} "

Wanneer er iets in ${} wordt geschreven, wordt het resultaat hiervan berekend en omgezet in cijfers op dezelfde positie in de string. Dit voorbeeld hierboven maakt: "half of 100 is 50"

### Unary operators

**Typeof** operator: produceert een stringwaarde die het type van de waarde die eraan is gegeven benoemd.

Code voorbeeld:

```console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```
Operators die twee waarden gebruiken worden **binary operators** genoemd, maar degene die er één aaneemt worden **unary operators** genoemd.

### Boolean values

Het is vaak handig om een waarde te hebben die slechts twee mogelijkheden onderscheidt, zoals "ja" en "nee" voor dit doel heeft javascript een **boolean** type, dat slechts twee waardes heeft. (True and False)

Code voorbeeld:

```console.log(3 > 2) // 3 is greater than 2 what is correct
// → true
console.log(3 < 2) // 3 is less than 2 what is not correct
// → false
```

String code voorbeeld:

```console.log("Aardvark" < "Zoroaster")
// → true
```

Strings worden gerangschikt op alfabetische volgorde, hoofdletters zijn altijd "minder" dan kleine letters, dus "Z" < "a", en niet-alfabetische tekens (!, -, ect) horen hier dus ook bij.

Andere vergelijkbare operatos zijn: >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).

Code Voorbeeld:

```console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```

__Nan__ (Not a Number)is niet gelijk aan zichzelf

Code Voorbeeld:

```console.log(NaN == NaN)
// → false
```

### Logical operators

There are some operators that can be applied to boolean values themselves: And, Or, and Not.

The && is a binary operator, and its result is true only if both the values given to it are true.

Code Example:

console.log(true && false)
// → false
console.log(true && true)
// → true

The || operator produces true if either of the values given to it is true.

Code Example:

console.log(false || true)
// → true
console.log(false || false)
// → false

Not is written as an exclamation mark (!). It is a unary operator that flips the value given to it—!true produces false, and !false gives true.

Conditional operator: The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.

console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2

### Empty values

Null and Undefined both are values but dont carry any information.

They are both almost exactly the same doesn't matter most of the time which one you use.

### Automatic type conversion

Javascript accept almost any program you give it:

Code Example:

console.log(8 * null)
// → 0
console.log("5" - 1)
// → 4
console.log("5" + 1)
// → 51
console.log("five" * 2)
// → NaN
console.log(false == 0)
// → true

Type coercion: When an operator is applied to the “wrong” type of value, JavaScript will quietly convert that value to the type it needs, using a set of rules that often aren’t what you want or expect.

### Short-circuiting of logical operators

The || operator, for example, will return the value to its left when that can be converted to true and will return the value on its right otherwise.

Code Example:

console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes

The && operator works similarly but the other way around. When the value to its left is something that converts to false, it returns that value, and otherwise it returns the value on its right.

### Summary

We looked at four types of JavaScript values in this chapter: numbers, strings, Booleans, and undefined values.

Such values are created by typing in their name (true, null) or value (13, "abc"). You can combine and transform values with operators. We saw binary operators for arithmetic (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||), as well as several unary operators (- to negate a number, ! to negate logically, and typeof to find a value’s type) and a ternary operator (?:) to pick one of two values based on a third value.

## Program Structure

## Functions

## Data Structures: Objects and Arrays

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11

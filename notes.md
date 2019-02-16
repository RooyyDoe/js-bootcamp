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

De belangrijkste dingen om te doen met getallen is het _optellen_ of _vermenigvuldigen_ van twee getallen. (Reken vragen) 

Zo zien de sommen eruit in javascript.

100 + 4 * 11

De + en de * worden **operators** genoemd in javascript. Je moet denken aan rekenen, als eerst gebruikt het vermenigvuldigen en daarna word de som pas opgeteld. behalve als je bijvoorbeeld haakjes zet om de optel som zoals hieronder gebeurd.

(100 + 4) * 11

Voor het aftrekken is de operator - en voor het delen van een som is er /

Het % symbool wordt gebruikt om  de _restbewerking_ te weer geven. X % Y is the remainder of dividing X by Y. For example: 314 % 100 = 14, 144 % 12 = 0

Dit betekend dus hoevaal het tweede getal in het eerste getal kan en wat er overblijft is je antwoord.

"+ - / * %" dit zijn alle **arithmetic operators**


### Special Numbers

**Infinity** en **-Infinity**, die de positieve en negatieve oneindigheden voorstellen. vertrouw niet teveel op deze twee speciale nummers. omdat het niet wiskunde correct is om deze te gebruiken.

NaN staat voor: "Not a number"

### Strings

**String** word gebruikt om tekst in te weergeven. de teksten worden gezet tussen aanhalingstekens waardoor javascript automatisch een string hiervan zal maken. Wanneer een backslash ("\") binnen geciteerde tekst wordt gevonden betekend tid dat er een speciale actie uitgevoerd gaat worden. ze noemen het "Escaping the character" Doormiddel van (\n) te verwerken in een string word er een **enter** toegevoegd in de string. Doormiddel van (/t) te verwerken in een string word er een **tab** toegevoegd in de string

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

```
console.log(typeof 4.5)
// → number
console.log(typeof "x")
// → string
```
Operators die twee waarden gebruiken worden **binary operators** genoemd, maar degene die er één aaneemt worden **unary operators** genoemd.

### Boolean values

Het is vaak handig om een waarde te hebben die slechts twee mogelijkheden onderscheidt, zoals "ja" en "nee" voor dit doel heeft javascript een **boolean** type, dat slechts twee waardes heeft. (True and False)

Code voorbeeld:

```
console.log(3 > 2) // 3 is greater than 2 what is correct
// → true
console.log(3 < 2) // 3 is less than 2 what is not correct
// → false
```

String code voorbeeld:

```
console.log("Aardvark" < "Zoroaster")
// → true
```

Strings worden gerangschikt op alfabetische volgorde, hoofdletters zijn altijd "minder" dan kleine letters, dus "Z" < "a", en niet-alfabetische tekens (!, -, ect) horen hier dus ook bij.

Andere vergelijkbare operatos zijn: >= (greater than or equal to), <= (less than or equal to), == (equal to), and != (not equal to).

Code Voorbeeld:

```
console.log("Itchy" != "Scratchy")
// → true
console.log("Apple" == "Orange")
// → false
```

_Nan_ (Not a Number)is niet gelijk aan zichzelf

Code Voorbeeld:

```
console.log(NaN == NaN)
// → false
```

### Logical operators

Er zijn enkele operators die zelf kunnen worden toegepast op een boolean, Er worden drie verschillende operators door javascript ondersteunt: **And, Or and not**.

De _&&_ is een **binary operator**, het resultaat is alleen **True** als beide waarden **True** zijn.

Code voorbeeld:

```
console.log(true && false)
// → false
console.log(true && true)
// → true
```

De || operator produceert **True** als een van de waarden die eraan worden gegeven ook **True** is.

Code voorbeeld:

```
console.log(false || true)
// → true
console.log(false || false)
// → false
```

Not is geschreven als een uitroep teken (!). het is een **unary operator** die de waarde wat er aan is gegeven omdraait **!true maakt false**, en **!false geeft true**.

**Conditional operator**: De waarde aan de linkerkant van het vraagteken "kiest" welke van de andere twee waarden eruit zal komen. Wanneer het waaar is, kiest het de middelste waarde **(1)** en wanneer het onwaar is, kiest het de waarde rechts. **(2)**

```
console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2
```

### Empty values

Er zijn twee speciale **values**, dit zijn _Null_ en _Undefined_ deze twee **values** worden gebruikt bij afwezigheid van zinvolle waarde.

Ze zijn beide bijna exact hetzelfde het maakt de meeste van de tijd niet uit welke word gebruikt.

### Automatic type conversion

Javascript accepteerd bijna alles wat er word opgegeven door de gebruiker.

Code voorbeeld:
```
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
```

**Type coercion**: Wanneer een operator verkeerd wordt toegepast , zal javascript die waarde converteren naar het type dat het nodig heeft. Dit wordt gedaan met behulp van een reeks regels die vaak niet zijn wat u wilt of verwacht.

```console.log(null == undefined);
// → true
console.log(null == 0);
// → false
```
er wordt aangeraden om de defensieve vergelijkingsoperatoren (===) te gebruiken om te voorkomen dat onverwachte typeconversies u inhalen. maar als jij als programmeur het zeker weet dat de beide zijden hetzelfde zijn, is er geen probleem om de kortere te operators te gebruiken.

### Short-circuiting of logical operators

de || operator zal eerst naar de linker **value** kijken en als deze **True** is zal hij deze value laten zien maar wanneer deze **False** is en de rechter **True** zal hij de rechter laten zien:

Code voorbeeld:

```
console.log(null || "user")
// → user
console.log("Agnes" || "user")
// → Agnes
```

De && operator werkt op dezelfde manier maar andersom. Wanneer de value links naar **False** converteert, wordt die **value** laten zien en anders wordt de **value** rechts ervan gelaten zien.

### Summary

We hebben in dit hoofdstuk vier verschillende JavaScript values bekeken: numbers, strings, Booleans, and undefined values.

Deze values worden gemaakt door hun naam (True, Null) of waarde (13, "abc") in te voeren. De values kunnen gecombineerd en getransormeerd worden doormiddel van operators. Binary operators: (+, -, *, /, and %), string concatenation (+), comparison (==, !=, ===, !==, <, >, <=, >=), and logic (&&, ||) ook zijn er een paar unary operators: (- om een nummer te ontkennen, ! logisch ontkennen, en typeof om een value’s type te vinden) en de ternary operator (?:) om een van de twee waarden te kiezen op basis van een derde waarde.

## Program Structure

### Expressions and statements

Een **fragment** van code dat een **value** oplevert, wordt ook wel een **Expression** genoemt. Hiermee wordt dus bedoeld: (22, "psychoanalysis")

De eenvoudigste soort statement is een expression met een puntkomma erna.

```
1 ;
! false ;
```

De interne status van de machine kan veranderen op een manier die van invloed is op de **statements** die erna komen. dit noemen we **side effect**

### Bindings

```
let gevangen = 5 * 5;
```
_let_ geeft aan dat deze zin een **binding** gaat definiëren. het wordt gevolgd door de naam van de **binding** ("gevangen") we geven ook een **value** mee doormiddel van de **= operator** en daarna een **expression**

Nadat een **binding** is gedefinieerd, kan de naam ervan als een **expression** gebruikt worden: 

```
let ten = 10;
console.log( ten * ten);
// → 100
```

De **= operator** kan op elk moment een andere **value** geven aan een **binding** die is aangemaakt.

```
let mood = "light";
console.log(mood);
// → light

let mood = "dark";
console.log(mood);
// → dark
```

Bindings moeten **tentakels** voorstellen in plaats van dozen. ze hebben geen **values** maar die grijpen ze. 

Nogmaals een code voorbeeld:

```
let luigiDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105
```

Wanneer je een **binding** definieert zonder er een **value** aan te geven, heeft de **tentakel** niets om aan vast te houden. Wanneer je deze value wil opvragen zal hij dan ook de value: **undefined** terug teven.

een enkele let instructie kan meerder bindingen definiëren:

```
let one = 1, two = 2;
console.log(one + two);
// → 3
```

Inplaats van _let_ heb je ook _var_ en _const_ om bindings te maken:

```
var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda
```

**var**: Is de manier waarop bindingen zijn gedeclareerd in pre-2015 JavaScript

**const**: Definieert een constante binding, die wijst op dezelfde waarde zolang het leeft. Dit kan handig zijn voor bindingen met een naam aan een value.

### Binding names

Bindende namen kunnen elk woord zijn zelfs met cijfers. maar er mogen geen $ en _ in voor komen.

Woorden met een speciale betekenis zoals _let_ zijn **keywords** deze mogen niet gebruikt worden als binding namen.

Gereserveerde woorden:

> break case catch class const continue debugger default
delete do else enum export extends false finally for
function if implements import interface in instanceof let new package private protected public return static super switch this throw true try typeof var void while with yield

### The environment

De verzameling **bindingen** en hun **values** die op een bepaald moment bestaan wordt de **environment** genoemd.

### Functions

een functie is een stukje programma dat is ingepakt in een value. deze values kunnen worden toegepast om de functie te laten uitvoeren.

het uitvoeren van een functie wordt het invoking, calling, of applying ervan genoemd. een functie kun je aanroepen doormiddel van haakjes achter de expressie.

```
function test() {
  console.log();
}
```

### The console.log function

De console.log kan je gebruiken om te checken of je code werkt. dit is een functie van javascript zelf.

```
let x = 30;
console.log("the value of x is", x);
// → the value of x is 30
```

Het is een uitdrukking die de _log_ eigenschap ophaalt uit de value die van de console binding komt.

### Return values

De functie **Math.max** kijkt naar de ingevoerde getallen en neemt hiervan de grootste en die laat hij zien.

```
console.log(Math.max(2, 4));
// → 4
```

De functie **Math.min** doet het tegenover gestelde van Math.max hij pakt van de ingevoerde getallen de laagste.

```
console.log(Math.min(2, 4) + 100);
// → 102
```
### Control flow

Wanneer een programma meer dan één **statement** bevat, worden de statements uitgevoerd alsof je een verhaal leest, van boven naar beneden. 

```
let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " +
            theNumber * theNumber);
```

### Conditional execution

De **Conditional Execution** is gemaakt met het _if_ keyword in JavaScript. Je wilt hiet dat code wordt uitgevoerd als, en alleen als, een bepaalde voorwaarde geldt.

```
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
}
```
Als je hier een string in zal voeren geeft hij geen output weer. je moet een cijfer invullen voor een uitkomst.

De accolades worden hier gebruikt om een willekeurig aantal **statements** te groeperen in een enkele statement. dit noemen we een **block**

je zult niet vaak alleen code hebben die wordt uitgevoerd als een voorwaarde waar is, maar ook code die het andere geval behandelt. _if_ en _else_

```
let theNumber = Number(prompt("Pick a number"));
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}
```

Use case:

Het programma controleert eerst of het _num_ minder is dan 10. als dat het geval is, kiest het voor de eerste keuze en dan stopt de if statement. maar wanneer de _num_ tussen de 10 en 100 ligt zal hij de _else if_ pakken. wanneer de _num_ boven deze twee komt pakt hij de laatste _else_

```
let num = Number(prompt("Pick a number"));

if (num < 10) {           // branch 1
  console.log("Small");
} else if (num < 100) {   // branch 2
  console.log("Medium");
} else {                  // branch 3
  console.log("Large");
}
```

### while and do loops

Door de loopstroom in een lus te houden, kunnen we teruggaan naar een bepaald punt in het programma en deze herhalen  met onze huidige programmatoestand. Dit creeërt een loop.

```
let number = 0;
while (number <= 12) {
  console.log(number);
  number = number + 2;
}
// → 0
// → 2
//   … etcetera
```

een **statement** die begint met het **keyword** _while_ maakt een lus. het woord _while_ wordt gevolgd door een uitdrukking tussen haakjes.

Use case while(berekend 2 tot en met de 10e macht): 

```
let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024
```

We gebruiken twee bindingen: één om ons resultaat bij te houden en één om te tellen hoevaak we dit resultaat met 2 hebben vermenigvuldigd. De lus test of de tweede binding 10 al heeft bereikt en, indien niet, werkt deze beide bindingen bij.

### Indenting Code

Code inspringen is puur voor de structuur van de code en zodat je niet gek wordt als je het terug leest. Kunnen ook extensies voor worden gebruikt.

```
if (false != true) {
  console.log("That makes sense.");
  if (1 < 2) {
    console.log("No surprise there.");
  }
}
```

### for loops

Dit programma is exact hetzelfde als het eerdere voorbeeld met de while loop.

```
for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera
```

De haakjes achter een _for_ keyword moeten twee puntkomma's bevatten. het gedeelte vóór de eerste puntkomma _initialiseert_ de lus, meestal door een binding te definiëren. Het tweede deel is de expressie die controleert of de lus moet worden voortgezet. Het laatste deel updates de status van de lus bij na elke iteratie.

Use case for (berekend 2 tot en met de 10e macht):

```
let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024
```

### Breaking Out of a Loop

Dit programma illustreert de _break_ statement. het vindt het eerste getal groter dan of gelijk aan 20 en deelbaar door 7

```
for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21
```
met de **% operator** kan er eenvoudig getest worden of een getal deelbaar is door een ander getal.

### Updating bindings succinctly

Tijdens een **lus** moet het programma vaak een binding bijwerken om een **value** vast te houden op basis van de vorige waarde van deze binding.

```
counter = counter + 1;
```

Shortcute:

```
counter += 1;
```

werkt ook voor ***=** en **-=**. wanneer er **counter += 1;** of **counter -= 1;** wordt gebruikt kan je er ook **counter++** of **counter--** van maken.

### Dispatching on a value with switch

Use Case:

```
switch (prompt("What is the weather like?")) {
  case "rainy":
    console.log("Remember to bring an umbrella.");
    break;
  case "sunny":
    console.log("Dress lightly.");
  case "cloudy":
    console.log("Go outside.");
    break;
  default:
    console.log("Unknown weather type!");
    break;
}
```

[Switch MDN uitleg](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)

### Capitalization

De onderste van dit rijtje is hoe je Capitalization goed gebruikt.

* fuzzylittleturtle
* fuzzy_little_turtle
* FuzzyLittleTurtle
* fuzzyLittleTurtle **<- Goed**

### Comments

Comments kun je in code toevoegen om aan te geven wat een bepaalde lijn van code doet. Zodat als je de code later nog een keer terug kijkt je precies weet wat het doet.

Het is ook handig voor als je het moet uitleggen aan iemand.

### Summary

Het programma dat is opgebouwd bestaat uit statements, die soms zelf meer statements bevatten. statements bevatten meestal expressions die zelf uit kleinere expressions kunnen worden opgebouwd.

Door statements onder elkaar te zetten voert jou programma deze van boven naar beneden uit. De stroom kan bepaald worden met behulp van voorwaardelijke (if, else, switch) en looping (while, do en for) statements.

Bindingen kunnen worden gebruikt om stukjes data onder een naam te archiveren en ze zijn handig voor de trackingstatus in het programma.

Functies kun je oproepen door te schrijven: 

```
functionName(argument1, argument2)
```
## Functions

### Defining a function

Een functiedefinitie is een reguliere binding waarbij de waarde van de binding een functie is.

```
const square = function(x) {
  return x * x;
};

console.log(square(16));
// → 144
```

Er wordt een **functie** gemaakt met een uitdrukking die begint met het sleutelwoord function. Functies kunnen een aantal **parameters** hebben (in dit geval alleen x) en een hoofdtekst met hierin de instructies die moeten worden uitgevoerd wanneer de functie wordt aangeroepen. 

Een functie kan meerdere parameters hebben of helemaal geen parameters.

**Voorbeeld 1** (Geen parameters):
```
const  makeNoise  =  function () {
   console . log ( "Pling!" );
};

makeNoise ();
// → Pling!
```
**Voorbeeld 2** (met Parameters(base, exponent)):

```
const  power  =  function ( base , exponent ) {
   let  resultaat  =  1 ;
  for ( let  count  =  0 ; count  <  exponent ; count ++ ) {
     result  * =  base ;
  }
  terugkeer  resultaat ;
};

console . log ( vermogen ( 2 , 10 ));
// → 1024
```
een **return statement** bepaalt de value van de functie. Wanneer het programma de return statement leest springt hij direct uit deze **functie** en geeft de teruggestuurde value aan de code die de functie heeft aangeroepen.

### Bindings and scopes

elke binding heeft een **scope**, dit is het deel van het programma waarin de binding zichtbaar is. Wanneer een binding wordt gedefinieerd buiten een **functie** of **block** betekend dit dat deze binding _global_ is.

Bindings die zijn gemaakt voor functie parameters of die gedeclareerd zijn in een functie, kunnen alleen in die functie worden gebruikt.

Je kan dus wel vanuit een **if / functie / for** scope naar global bindings vragen maar andersom niet.

**Voorbeeld 1:**

```
let x = 10;
if (true) {
  let y = 20;
  var z = 30;
  console.log(x + y + z);
  // → 60
}
// y is not visible here
console.log(x + z);
// → 40
```
**Voorbeeld 2:**

```
const halve = function(n) {
  return n / 2;
};

let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10
```

### Nested scope

Javascript onderscheidt niet alleen globale en lokale bindingen. Blokken en functies kunnen in andere blokken en functies worden gemaakt en produceren meerdere graden van lokaliteit.

Voorbeeld:

```
const hummus = function(factor) {
  const ingredient = function(amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
```

De code binnen de _ingredient_ functie kan de _factor_ binding van de buitenfunctie zien. Maar de lokale bindingen, zoals _unit_ of _ingredientAmount_, zijn niet zichtbaar in de uiterlijke functie.

### Functions as values
>**(Ik snap niet echt waarom dit wordt gebruikt)**

Het is mogelijk om een functie value op te slaan in een nieuwe binding en deze door te geven als een argument aan een andere functie. Toch blijft een binding die een functie bevat, nogsteeds een normale binding en kan deze zo niet constant, een nieuwe waarde krijgen.

```
let launchMissiles = function() {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function() {/* do nothing */};
}
```

### Declaration notation

```
function square(x) {
  return x * x;
}
```
Dit is een functie **declaratie**. De code definieert de binding _square_ en wijst deze naar de gegeven functie. Dit is de makkelijke manier om een functie te schrijven.

```
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

Functie verklaringen maken geen deel uit van de reguliere regelstroom van boven naar beneden. ze worden conceptueel naar de top van hun scope verplaatst en kunnen door alle code in die scope worden gebruikt. 


### Arrow functions

De derde notatie van een functie wordt gemaakt door het vervangen van het _keyword_ functie in een **(=>)** teken. 

```
const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
```

Wanneer deze functie één parameter heeft kunnen de haakjes rondom de functie ook weg gelaten worden.

```
const square1 = (x) => { return x * x; };
const square2 = x => x * x;
```

Pijlfuncties maken onze code beknopter en vereenvoudigen het **scopen** van **functies** en het trefwoord _this_. Door pijlfuncties te gebruiken,hoeven we het **functions keyword**, het **return keyword** en de **accolades** niet te typen.

Use case (**Verschil tussen ES5 & ES6**):

```
// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };
```
>[arrowFunctions](https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/)

### The call stack

Dit is de workflow van de code. De manier hoe er door de code heen wordt gelezen.

```
function greet(who) {
  console.log("Hello " + who);
}
greet("Harry");
console.log("Bye");
```

De flow gaat op deze manier:

```
not in function
   in greet
        in console.log
   in greet
not in function
   in console.log
not in function
```

De plaats waar de computer deze informatie opslaat heet de _Call Stack_ Dus wanneer een functie wordt aangeroepen, wordt de huidige context boven op de stack opgeslagen. Wanneer de functie terugkeert wordt de bovenste van de stack verwijderd.

De stapel kan ook vol raken wanneer dit gebeurd krijg je een error te zien.
### Optional Arguments

Wanneer er een = operator na een parameter wordt geschreven gevolgd door een expression, wanneer er geen value wordt mee gegeven in het argument, pakt hij automatisch het gene wat achter de parameter staat.

```
function power(base, exponent = 2) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
}

console.log(power(4));
// → 16
console.log(power(2, 6));
// → 64
```

### Closure

Een functie _wrapValue_ wordt gedefinieert en deze creeërt een **local binding**. vervolgens wordt de functie gereturned waarmee deze **local binding** kan worden toegewezen en returned.

```
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2
```

Een **Closure** is een functie in JavaScript waarbij een innerlijke functie toegang heeft tot de variabelen van de buitenste (insluitende) functie - een _Scope Chain_.


>[Closure READ ME!!](https://medium.freecodecamp.org/javascript-closures-simplified-d0d23fa06ba4)

### Recursion

Een functie die zichzelf later weer noemt heet _Recursive_

```
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8
```



Voorbeeld (Recursieve oplossing):

```
function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)
```
Er zijn twee argumenten nodig: het huidige nummer en een _string_ die registreert hoe we dit nummer hebben bereikt.

1. Er kunnen drie verschillende dingen gebeuren. Als het nummer te vinden is doormiddel van de functie zal hij de weg naar dit nummer laten zien in de string. 
2. Als het nummer niet gevonden kan worden doormiddel van optellen en vermenigvuldigen keert hij _null_ terug.
3. Wanneer we nogsteeds onder het getal zitten kan het ook gemengd worden dat er een + en een * in een som worden gegooit. als op deze manier het getal wel bereikt kan worden.

De flow in deze functie ziet er als volgt uit:

```
find(1, "1")
  find(6, "(1 + 5)")
    find(11, "((1 + 5) + 5)")
      find(16, "(((1 + 5) + 5) + 5)")
        too big
      find(33, "(((1 + 5) + 5) * 3)")
        too big
    find(18, "((1 + 5) * 3)")
      too big
  find(3, "(1 * 3)")
    find(8, "((1 * 3) + 5)")
      find(13, "(((1 * 3) + 5) + 5)")
        found!
```


>[Recursive READ ME!!!](https://www.sitepoint.com/recursion-functional-javascript/)

### Growing functions

```
function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);
```

Doormiddel dat we de .length achter de expression hebben geschreven zal dat de lengte van de string geven. De while loop blijft _0_ toevoegen totdat er drie cijfers staan.

We voegen er nog een varken bij:

```
function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
```

Een functie met een mooie, voor de hand liggende naam, _zeroPad_ maakt het gemakkelijk voor iemand die de code leest om erachter te komen wat het doet. En zo'n functie is nuttig in meer situaties dan alleen dit specifieke programma.

### Functions and side effects

(Geen nuttige informatie)

### Summary

```
// Define f to hold a function value
const f = function(a) {
  console.log(a + 2);
};

// Declare g to be a function
function g(a, b) {
  return a * b * 3.5;
}

// A less verbose function value
let h = a => a % 3;
```

Een belangrijk aspect bij het begrijpen van functies is het begrijpen van scopes. Elk blok creëert een nieuw bereik. parameters en bindingen gedeclareerd in een gegeven scope zijn lokaal en niet zichtbaar van buitenaf. _Var_ bindingen gedragen zich anders. deze kunnen gebruikt worden in de dichtsbijzijnde functiemovang of de globale scope.

Doormiddel van de code te verdelen in verschillende functies hoef je jezelf niet zo vaak te herhalen. De functies helpen hier ook bij het organiserenen groeperen van het programma wat je aan het schrijven bent.

## Data Structures: Objects and Arrays

## Chapter 5

## Chapter 6

## Chapter 8

## Chapter 9

## Chapter 10

## Chapter 11

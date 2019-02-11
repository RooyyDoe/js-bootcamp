// Code van het internet toen ik vast liep

// een for loop van 1 t/m 100
/*for (let number = 1; number <= 100; number++) {
        // Dit is een lege string waar ik "Fizz" of "Buzz" ga toevoegen
        let output = "";
        if (number % 3 == 0) output += "Fizz";
        // Hier word gekeken naar de getallen die vermenigdvuldigt kunnen worden met 3 en daar word "Fizz" geplaatst
        if (number % 5 == 0) output += "Buzz";
        // Hier word gekeken naar de getallen die vermenigdvuldigt kunnen worden met 5 en daar word "Buzz" geplaatst
        console.log(output || number);
        // Snap alleen niet hoe FizzBuzz bij sommige komt. Ik denk doormiddel van (Output || Number).
    }*/



// Mijn eerste code die ik uiteindelijk weer werkend heb gekregen.
for (let number = 1; number <= 100; number++) {
    if (number % 5 == 0 && number % 3 == 0) {
        console.log("fizzBuzz");
    } else if (number % 5 == 0) {
        console.log("Buzz");
    } else if (number % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(number);
    }
}

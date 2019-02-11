function range(numbers) {
    //Identificeren van variabele array
    var array = [];
    //Identificeren van laagste getal in een array
    var low = Math.min(numbers[0], numbers[1]);
    //Identificeren van hoogste getal in een array
    var high = Math.max(numbers[0], numbers[1]);

    // Loop waarbij alle getallen op volgorde tussen het laagste en hoogste getal word gezet
    for (var i = low; i <= high; i++) {
        array.push(i);
    }
    // bepalen van de array om te gebruiken buiten de functie
    return array;
}


console.log(range([1, 10]));

function sum(array) {
    //identificeren van totaal sum beginnen met tellen bij 0
    var total = 0;
    //loop om alle tussen gelegen getallen in een array bij elkaar op te tellen
    for (var i = 0; i < array.length; i++) {
        // totaal is total[0] gehele array sum
        total = total + array[i];
    }
    //bepalen van de array total om te gebruiken buiten de functie
    return total;
}

console.log(range([5, 2, -1]));

console.log(sum(range([1, 10])));


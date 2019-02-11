
// Van een guide op stackoverflow. vond deze echt lastig.

// geeft grote aan van het bord
let size = 8;
// Dit is een lege string waar ik de " " of "#" gaan toevoegen
let board = "";


// for loop die kijkt wanneer er een nieuwe lijn moet komen
for (var w = 0; w < size; w++) {
     // Deze for loop moet de lijn voorstellen en die kijkt wanneer hij een " " of "#" moet gaan neerzetten doormiddel te kijken naar de laatste die is neergezet.
    for (var z = 0; z < size; z++) {
        // Kijkt of de  W en Z even of oneven zijn en print dan een spatie " " wit of "#" voor zwart.check
        if ((w + z) % 2 == 0) {
            // Voegt een spatie toe
            board += " ";
        } else {
            // Voegt een # toe
            board += "#";
        }
    }
    // Wanneer er 4 " " en 4 "#" zijn geplaatst
    board += "\n";
}

console.log(board);

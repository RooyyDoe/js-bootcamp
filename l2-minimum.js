// Hoe het boek het heeft gedaan

/*function min (a, b) {
    // Als a lager is dan b laat de console a zien.
    if (a < b) return a;
    // wanneer dit niet zo is laat hij b zien.
    else return b;
}*/

function min(low, high) {
    // Doormiddel van Math.min kijkt zij naar welke het laagste getal is en laat deze zien.
    return Math.min(low, high);
}

console.log(min(0, 10));
console.log(min(0, -10));


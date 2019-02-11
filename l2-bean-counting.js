// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// Functie voor het tellen van B's
/*function countBs (str) {
    // Hier word de gehele string geteld
    var lenghtString = str.length;
    // Tellen van de aantal Bs in de string
                       //Alle B's vervangt hij door "" hiet wordt de .length van gepakt.
    var lenghtBs = str.replace(/B/g,"").length;
    // Haalt de lengte van de aantal overgebleven B's af. en pushed hem door buiten de functie
    return lenghtString - lenghtBs;
}

console.log(countBs("BBC"));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

function countChar (str, char) {
    // Hier word de gehele string geteld
    var lenghtString = str.length;
    // regexp aanroepen op global
    var regexp = new RegExp(char, "g");
    // uitrekenen van de lengte op de matchende karakter
    var lenghtMatch = str.replace(regexp, "").length;
    // Haalt de lengte van de aantal overgebleven B's af. en pushed hem door buiten de functie
    return lenghtString - lenghtMatch;
}

console.log(countChar("kakkerlak", "k"));*/

// Function countChar aangemaakt met twee parameters string, char
function countChar(string, char) {
    // let aangemaakt genaamt counted met waarde: 0
    let counted = 0;
    // for loop gemaakt de lengte van de string word geteld
    for (let i = 0; i < string.length; i++) {
        // Wanneer de letters in de string hetzelfde zijn als de parameter char word er 1 bij opgeteld totdat de for loop door het woord heen is gegaan en dan post hij het resultaat. ( string[i] ->===<- char is voor stricte validatie )
        if (string[i] === char) {
            counted += 1;
        }
    }
    return counted;
}
// Functie countBs aangemaakt
function countBs(string) {
    // Doormiddel van de vorige functie kan deze kijken hoevaak B voorkomt in het woord.
    return countChar(string, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

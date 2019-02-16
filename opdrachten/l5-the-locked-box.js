const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    // box.unlock wordt uit de const box gehaald boven aan het programma.
    box.unlock();
    try {
        // Hier wordt de functie uitgevoerd onder aan het programma.
        body();
    } finally {
        // Hier haalt hij de box.lock op uit de const box boven aan het programma en sluit hij de box weer.
        box.lock();
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}

console.log(box.locked);
// → true

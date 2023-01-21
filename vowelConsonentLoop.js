function vowelsAndConsonants(s) {
    let vowel = [];
    let consonent = [];
    for (let i = 0; i < s.length; i++) {
        if (
            s[i] === "a" ||
            s[i] === "e" ||
            s[i] === "i" ||
            s[i] === "o" ||
            s[i] === "u"
        ) {
            vowel.push(s[i]);
        } else {
            consonent.push(s[i]);
        }
    }

    for (let i = 0; i < vowel.length; i++) {
        console.log(vowel[i]);
    }
    for (let i = 0; i < consonent.length; i++) {
        console.log(consonent[i]);
    }
}

vowelsAndConsonants("javascriptloops");

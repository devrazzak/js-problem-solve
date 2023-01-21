function checkStartEndVowel(s) {
    if (
        (s.startsWith("a") && s.endsWith("a")) ||
        (s.startsWith("e") && s.endsWith("e")) ||
        (s.startsWith("i") && s.endsWith("i")) ||
        (s.startsWith("o") && s.endsWith("o")) ||
        (s.startsWith("u") && s.endsWith("u"))
    ) {
        return true;
    } else {
        return false;
    }
}
console.log(checkStartEndVowel("aallaa"));

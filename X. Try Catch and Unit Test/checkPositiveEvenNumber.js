export function checkPositiveEvenNumber(n) {
    if(!(typeof n === "number")) {
        return false;
    }

    if (n <= 0) {
        return false;
    }

    return n % 2 === 0;

}
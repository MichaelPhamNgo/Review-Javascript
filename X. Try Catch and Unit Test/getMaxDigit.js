export function getMaxDigit(n) {
    // your code here
    if(!(typeof n === 'number')) {
        return -1;
    }

    if(n < 0 || n >= 1000) {
        return -1;
    }
    const str = n.toString();
    const arrDigits = [];
    for(let c of str) {
        arrDigits.push(Number.parseInt(c));
    }
    
    return Math.max(...arrDigits);
}
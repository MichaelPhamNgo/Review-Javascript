import { getMaxDigit } from "./getMaxDigit";

describe('getMaxDigit', () => {
    test('should return invalid arguments', () => {
        const paramIsTrue = getMaxDigit(true);
        expect(paramIsTrue).toBe(-1);
        const paramIsFalse = getMaxDigit(false);
        expect(paramIsFalse).toBe(-1);
        const paramIsAString = getMaxDigit("Hello World");
        expect(paramIsAString).toBe(-1);
        const paramIsNull = getMaxDigit(null);
        expect(paramIsNull).toBe(-1);
        const paramIsEmptyString = getMaxDigit("");
        expect(paramIsEmptyString).toBe(-1);
        const paramIsEmptyInput= getMaxDigit();
        expect(paramIsEmptyInput).toBe(-1);
        const paramIsUndefined= getMaxDigit(undefined);
        expect(paramIsUndefined).toBe(-1);
        const paramIsArray= getMaxDigit([]);
        expect(paramIsArray).toBe(-1);
        const paramIsObject= getMaxDigit({});
        expect(paramIsObject).toBe(-1);
    });

    test('should return a maximum number', () => {                
        expect(getMaxDigit(1)).toBe(1);        
        expect(getMaxDigit(12)).toBe(2);        
        expect(getMaxDigit(123)).toBe(3);        
        expect(getMaxDigit(921)).toBe(9);        
    });
});
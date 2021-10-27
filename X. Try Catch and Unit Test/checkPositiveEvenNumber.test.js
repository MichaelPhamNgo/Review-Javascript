import { checkPositiveEvenNumber } from "./checkPositiveEvenNumber";

describe('checkPositiveEvenNumber', () => {
    test('should return invalid arguments', () => {
        const paramIsTrue = checkPositiveEvenNumber(true);
        expect(paramIsTrue).toBe(false);
        const paramIsFalse = checkPositiveEvenNumber(false);
        expect(paramIsFalse).toBe(false);
        const paramIsAString = checkPositiveEvenNumber("Hello World");
        expect(paramIsAString).toBe(false);
        const paramIsNull = checkPositiveEvenNumber(null);
        expect(paramIsNull).toBe(false);
        const paramIsEmptyString = checkPositiveEvenNumber("");
        expect(paramIsEmptyString).toBe(false);
        const paramIsEmptyInput= checkPositiveEvenNumber();
        expect(paramIsEmptyInput).toBe(false);
        const paramIsUndefined= checkPositiveEvenNumber(undefined);
        expect(paramIsUndefined).toBe(false);
        const paramIsArray= checkPositiveEvenNumber([]);
        expect(paramIsArray).toBe(false);
        const paramIsObject= checkPositiveEvenNumber({});
        expect(paramIsObject).toBe(false);
    });

    test('should return a positive number', () => {        
        const paramIsNegative = checkPositiveEvenNumber(-1);
        expect(paramIsNegative).toBe(false);
        const paramIsZero = checkPositiveEvenNumber(0);
        expect(paramIsZero).toBe(false);
        const paramIsMinus100 = checkPositiveEvenNumber(-100);
        expect(paramIsMinus100).toBe(false);
    });

    test('should return a positive even number', () => {        
        const paramIs25 = checkPositiveEvenNumber(25);
        expect(paramIs25).toBe(false);
        const paramIs1 = checkPositiveEvenNumber(1);
        expect(paramIs1).toBe(false);
        const paramIs2 = checkPositiveEvenNumber(2);
        expect(paramIs2).toBe(true);
        const paramIs10 = checkPositiveEvenNumber(10);
        expect(paramIs10).toBe(true);
    });
});

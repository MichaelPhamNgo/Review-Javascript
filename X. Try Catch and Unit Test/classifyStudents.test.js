import {classifyStudentsV1, classifyStudentsV2} from './classifyStudents'

describe('classifyStudentsV1', () => {
    test('Check if mark is not valid', () => {
        const paramIsTrue = classifyStudentsV1(true);
        expect(paramIsTrue).toBe(-1);
        const paramIsFalse = classifyStudentsV1(false);
        expect(paramIsFalse).toBe(-1);
        const paramIsAString = classifyStudentsV1("Hello World");
        expect(paramIsAString).toBe(-1);
        const paramIsNull = classifyStudentsV1(null);
        expect(paramIsNull).toBe(-1);
        const paramIsEmptyString = classifyStudentsV1("");
        expect(paramIsEmptyString).toBe(-1);
        const paramIsEmptyInput = classifyStudentsV1();
        expect(paramIsEmptyInput).toBe(-1);
        const paramIsUndefined = classifyStudentsV1(undefined);
        expect(paramIsUndefined).toBe(-1);
        const paramIsArray = classifyStudentsV1([]);
        expect(paramIsArray).toBe(-1);
        const paramIsObject = classifyStudentsV1({});
        expect(paramIsObject).toBe(-1);
        const paramIs11 = classifyStudentsV1(11);
        expect(paramIs11).toBe(-1);
    });

    test('Check if mark is negative', () => {
        const paramIsMinus5 = classifyStudentsV1(-5);
        expect(paramIsMinus5).toBe(-1);
        const paramIsMinus1 = classifyStudentsV1(-1);
        expect(paramIsMinus1).toBe(-1);
        const paramIs11 = classifyStudentsV1(11);
        expect(paramIs11).toBe(-1);
    });

    test('Check if classifying students is correct', () => {        
        [9,10].forEach(function(value){            
            expect(classifyStudentsV1(value)).toBe("Excellent");
        });
        [7,8].forEach(function(value){            
            expect(classifyStudentsV1(value)).toBe("Good");
        });
        [4,5,6].forEach(function(value){            
            expect(classifyStudentsV1(value)).toBe("Not Good");
        });
        [0,1,2,3].forEach(function(value){            
            expect(classifyStudentsV1(value)).toBe("Bad");
        });
    });
});

describe('classifyStudentsV2', () => {
    test('Check if mark is not valid', () => {
        const paramIsTrue = classifyStudentsV2(true);
        expect(paramIsTrue).toBe(-1);
        const paramIsFalse = classifyStudentsV2(false);
        expect(paramIsFalse).toBe(-1);
        const paramIsAString = classifyStudentsV2("Hello World");
        expect(paramIsAString).toBe(-1);
        const paramIsNull = classifyStudentsV2(null);
        expect(paramIsNull).toBe(-1);
        const paramIsEmptyString = classifyStudentsV2("");
        expect(paramIsEmptyString).toBe(-1);
        const paramIsEmptyInput = classifyStudentsV2();
        expect(paramIsEmptyInput).toBe(-1);
        const paramIsUndefined = classifyStudentsV2(undefined);
        expect(paramIsUndefined).toBe(-1);
        const paramIsArray = classifyStudentsV2([]);
        expect(paramIsArray).toBe(-1);
        const paramIsObject = classifyStudentsV2({});
        expect(paramIsObject).toBe(-1);
        const paramIs11 = classifyStudentsV2(11);
        expect(paramIs11).toBe(-1);
    });

    test('Check if mark is negative', () => {
        const paramIsMinus5 = classifyStudentsV2(-5);
        expect(paramIsMinus5).toBe(-1);
        const paramIsMinus1 = classifyStudentsV2(-1);
        expect(paramIsMinus1).toBe(-1);
        const paramIs11 = classifyStudentsV2(11);
        expect(paramIs11).toBe(-1);
    });

    test('Check if classifying students is correct', () => {        
        [9,10].forEach(function(value){            
            expect(classifyStudentsV2(value)).toBe("Excellent");
        });
        [7,8].forEach(function(value){            
            expect(classifyStudentsV2(value)).toBe("Good");
        });
        [4,5,6].forEach(function(value){            
            expect(classifyStudentsV2(value)).toBe("Not Good");
        });
        [0,1,2,3].forEach(function(value){            
            expect(classifyStudentsV2(value)).toBe("Bad");
        });
    });
});
## try catch finally
> Catch error

***SYNTAX***
```javascript
try {
  Block of code to try
}
catch(err) {
  Block of code to handle errors
}
finally {
  Block of code to be executed regardless of the try / catch result
}
```
***USING***
- ***try:*** define a block of code to be tested for errors while it is being executed.
- ***catch:*** define a block of code to be executed, if an error occurs in the try block.
- ***finally:*** execute code, after try and catch, regardless of the result.

***NOTE***
<table> 
  <tr>
    <td colspan="2"><strong>Error Description</strong></td>
  </tr>
  <tr>
    <td>Error Name</td>
    <td>Description</td>
    <td>Example</td>
  </tr> 
  <tr>
    <td>RangeError</td>
    <td>
      A number "out of range" has occurred
    </td>
    <td>
      (3.14).toFixed(101) <br/>
      //output: Uncaught RangeError: toFixed() digits argument must be between 0 and 100
    </td>
  </tr>       
  <tr>
    <td>ReferenceError</td>
    <td>
      An illegal reference has occurred
    </td>
    <td>
      let x = 3.14;
      x = y + 1;      
      //output: Uncaught ReferenceError: y is not defined
    </td>
  </tr>
  <tr>
    <td>SyntaxError</td>
    <td>
      A syntax error has occurred
    </td>
    <td>
      1.toUpperCase();      
      //output: Uncaught SyntaxError: Invalid or unexpected token
    </td>
  </tr>
  <tr>
    <td>TypeError</td>
    <td>
      A type error has occurred
    </td>
    <td>
      let num = 1;
      num.toUpperCase();     
      //output: Uncaught TypeError: num.toUpperCase is not a function
    </td>
  </tr>
  <tr>
    <td>URIError</td>
    <td>
      An error in encodeURI() has occurred
    </td>
    <td>
      decodeURI("%%%");      
      //output: Uncaught URIError: URI malformed
    </td>
  </tr>
</table>

### X.2 throw
> custom exceptions

***USING***
- ***throw:*** create a custom error. The exception can be a string, number, boolean, or an object.

### X.3 Unit test
> Jest is a JavaScript test runner, that is, a JavaScript library for creating, running, and structuring tests. Jest is one of the most popular test runner these days, and the default choice for React projects.

#### Setup Jest
> Create a project test  (make sure you've already installed nodejs, yarn or npm package)

```code
#mkdir learning-test
#cd learning-test
#npm init -y
```

> Install Jest using npm

```code
#npm install --save-dev jest
```

> Create a test file. For example, if you want to test **sum.js** file, creating a **sum.test.js** file

```javascript
//sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

//sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

> Add the following section to your **package.json**

```code
{
  "scripts": {
    "test": "jest"
  }
}
```

> Run npm run test to run the test
```code
$npm run test
```

#### Common Jest Matchers
> test a value with exact equality

```javascript
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
```
> test the opposite of a matcher

```javascript
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
```

> test the value of an object

```javascript
test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  expect(data).toEqual({one: 1, two: 2});
});
```

> test truthiness (null, undefined, true, and false)

```javascript
test('zero', () => {
  const z = 0;
  expect(z).toBeNull();
  expect(z).not.toBeNull();
  expect(z).toBeUndefined();
  expect(z).toBeDefined();
  expect(z).toBeUndefined();
  expect(z).toBeTruthy();
  expect(z).toBeFalsy();
});
```

> test integer numbers

```javascript
test('two plus two', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);  
  expect(value).toBe(4);
  expect(value).toEqual(4);
});
```

> test float numbers

```javascript
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;  
  expect(value).toBeGreaterThan(0.3);
  expect(value).toBeGreaterThanOrEqual(0.5);
  expect(value).toBeLessThan(0.5);
  expect(value).toBeLessThanOrEqual(0.45);  
  expect(value).toBeCloseTo(0.3);
});
```

> test strings

```javascript
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/);
});
```

> test Arrays

```javascript
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'milk',
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
});
```

#### Setup and Teardown
> Mocking a database before each test and tear it down when each test has finished

```javascript

describe('tests with database', () => {
    beforeAll(() => {
        return createDBConnection()
    })

    afterAll(() => {
        return destroyDBConnection()
    })

    beforeEach(() => {
        initDB()
    })

    afterEach(() => {
        removeDB()
    })

    test('if country exists in database', () => {
        expect(isValidCountry('Belgium')).toBe(true)
    })

})
```

#### Jest report
> To get Jest report

```code
#jest --coverage
```

***CHECK KNOWLEDGE***
```javascript
//ex1
try {
   console.log("Hello");
   someFunction();
   console.log("World");
} catch (error) {   
   console.log(error.message);
} 
                                    //?

//ex2
try {
   console.log("Hello");
   someFunction();
   console.log("World");
} catch (error) {   
   console.log(error.message);
} finally {
  console.log("!");
}
                                    //?

//ex3
function foo() {
  try {
      'use strict';
       x = 2;
       return x;
  } catch {
      return true;
  } finally {
      return false;
  }
} 
console.log(foo());                 //?

//ex4: write a division function

//ex5: write a function if n is a positive even number

//ex6: write a function to get a random quote from https://github.com/JamesFT/Database-Quotes-JSON/blob/master/quotes.json

//ex7: write test case for a division function

//ex8: write test case for testing a positive even number
```



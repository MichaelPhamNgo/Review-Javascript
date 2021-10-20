# Table content of Javascript Basic
- [I. Declare variables](#i-declare-variables)
  - [I.1 var](#i1-var)
  - [I.2 let](#i2-let)
  - [I.3 const](#i3-const)
- [II. Prefix and Postfix](#ii-prefix-and-postfix)
  - [II.1 Prefix](#ii1-prefix)
  - [II.2 Postfix](#ii2-postfix)
- [III. String and String Methods](#iii-string-and-string-methods)
  - [III.1 for](#iii1-for)
  - [III.2 for..in](#iii2-forin)
  - [III.3 for..of](#iii3-forof)
  - [III.4 forEach](#iii4-foreach)
  - [III.5 slice](#iii5-slice)
  - [III.6 substring](#iii6-substring)
  - [III.7 substr](#iii7-substr)
  - [III.8 replace](#iii8-replace)
  - [III.9 charAt](#iii9-charat)
  - [III.10 indexOf](#iii10-indexof)
  - [III.11 lastIndexOf](#iii11-lastindexof)
  - [III.12 search](#iii12-search)
  - [III.13 match](#iii13-match)
  - [III.14 includes](#iii14-includes)
  - [III.15 startsWith](#iii15-startswith)
  - [III.16 endsWith](#iii16-endswith)
  - [III.17 concat](#iii17-concat)
  - [III.18 localeCompare](#iii18-localecompare)
  - [III.19 repeat](#iii19-repeat)
  - [III.20 split](#iii20-split)
  - [III.21 toLowerCase](#iii21-tolowercase)
  - [III.22 toUpperCase](#iii22-touppercase)
  - [III.23 trim](#iii23-trim)
- [IV. Number and Number Methods](#iv-number-and-number-methods)
  - [IV.1 isNaN](#iv1-isnan)
  - [IV.2 toString](#iv2-tostring)
  - [IV.3 toFixed](#iv3-tofixed)
  - [IV.4 toPrecision](#iv4-toprecision)
  - [IV.5 Convert variables to numbers](#iv5-convert-variables-to-numbers)
- [V. Array and Array Methods](#v-array-and-array-methods)
  - [V.1 Create an array](#v1-create-an-array)
  - [V.2 for](#v2-for)
  - [V.3 for..in](#v3-forin)
  - [V.4 for..of](#v4-forof)
  - [V.5 forEach](#v5-foreach)
  - [V.6 length](#v6-length)
  - [V.7 toString](#v7-tostring)
  - [V.8 join](#v8-join)
  - [V.9 pop](#v9-pop)
  - [V.10 push](#v10-push)
  - [V.11 shift](#v11-shift)
  - [V.12 unshift](#v12-unshift)
  - [V.13 splice](#v13-splice)
  - [V.14 concat](#v14-concat)
  - [V.15 slice](#v15-slice)
  - [V.16 Add elements to an array](#v16-add-elements-to-an-array)
  - [V.17 Delete elements from an array](#v17-delete-elements-from-an-array)
  - [V.18 Delete an element by using the JavaScript operator delete](#v18-delete-an-element-by-using-the-javascript-operator-delete)
  - [V.19 Sort](#v19-sort)
  - [V.20 Find min, max](#v20-find-min-max)
  - [V.21 forEach, reduce, indexOf, find](#v21-foreach-reduce-indexof-find)
  - [V.22 every, some, includes](#v22-every-some-includes)
  - [V.23 filter, map](#v23-filter-map)
- [VI. Object and more](#vi-object-and-more)
  - [VI.1 Create an object](#vi1-create-an-object)
  - [VI.2 Access JS object](#vi2-access-js-object)
  - [VI.3 Add new properties for the object](#vi3-add-new-properties-for-the-object)
  - [VI.4 Edit properties for the object](#vi4-edit-properties-for-the-object)
  - [VI.5 Delete properties of the object](#vi5-delete-properties-of-the-object)
  - [VI.6 Copy an object](#vi6-copy-an-object)
  - [VI.7 JS objects are mutable.](#vi7-js-objects-are-mutable)
  - [VI.8 for...in](#vi8-forin)
  - [VI.9 for...of](#vi9-forof)
  - [VI.10 forEach](#vi10-foreach)
  - [VI.11 Nested objects and function in an object](#vi11-nested-objects-and-function-in-an-object)
  - [VI.12 JSON.stringify](#vi12-jsonstringify)
  - [VI.13 JS Object constructor](#vi13-js-object-constructor)
- [VII. Set and Set methods](#vii-set-and-set-methods)
  - [VII.1 Create a set](#vii1-create-a-set)
  - [VII.2 Add an element in a set](#vii2-add-an-element-in-a-set)
  - [VII.3 Delete an element in a set](#vii3-delete-an-element-in-a-set)
  - [VII.4 Set methods](#vii4-set-methods)
- [VIII. Map and Map methods](#viii-map-and-map-methods)
  - [VIII.1 Create a map](#viii1-create-a-map)
  - [VIII.2 Add an element in a map](#viii2-add-an-element-in-a-map)
  - [VIII.3 Get an element in a map](#viii3-get-an-element-in-a-map)
  - [VIII.4 Delete an element in a map](#viii4-delete-an-element-in-a-map)
  - [VIII.5 Map methods](#viii5-map-methods)
- [IX. try catch](#ix-try-catch)
- [X. Scope, Closure and strict mode](#x-scope-closure-and-strict-mode)
  - [X.1 Scope](#x1-scope)
  - [X.2 Closure](#x2-closure)
  - [X.3 Strict mode](#x3-strict-mode)
- [XI. Hoisting](#xi-hoisting)
- [XII. Arrow Function and IIFE](#xii-arrow-function-and-iife)
  - [XII.1 Arrow Function](#xii1-arrow-function)
  - [XII.2 IIFE (Immediately Invoked Function Expression)](#xii2-iife-immediately-invoked-function-expression)
- [XIII. Callback, Promise, Async/Await](#xiii-callback-promise-asyncawait)
  - [XIII.1 Callback](#xiii1-callback)
  - [XIII.2 Promise](#xiii2-promise)
- [XIV. ECMAScript 6](#xiv-ecmascript-6)
  - [XIV.1 Template literals](#xiv1-template-literals)
  - [XIV.2 Default parameter](#xiv2-default-parameter)
  - [XIV.3 Enhanced object literals](#xiv3-enhanced-object-literals)
  - [XIV.4 Destructuring](#xiv4-destructuring)
  - [XIV.5 Spread Operator](#xiv5-spread-operator)
  - [XIV.6 Modules](#xiv6-modules)
# References
- https://fullstack.edu.vn/
- https://www.w3schools.com/
- https://developer.mozilla.org/


# I. Declare variables

> There are 3 ways to declare JS variables (var, let, const)

## I.1 var

> If we want to declare a variable, we can use "var" keyword

***SYNTAX***
```javascript
var a;
```

***EXAMPLE***
```javascript
//ex1: A variable declared without a value will have the value undefined
var carName;                  
console.log(carName);		//undefined
//ex2: If you re-declare a JavaScript variable, it will not lose its value.
var carName = "Volvo";
console.log(carName);		//Volvo
var carName;
console.log(carName);		//Volvo
```

## I.2 let

> Different from "var", let cannot be redeclared

***SYNTAX***
```javascript
let a;
```

***EXAMPLE***
```javascript
//ex: We cannot redeclare a variable using "let" keyword
let carName = "Volvo";
console.log(carName);		//Volvo
let carName = "Toyota";         
console.log(carName);		//SyntaxError: 'carName' has already been declared
```

## I.3 const

> A const variable cannot be reassigned. The variable must be assigned when declaring.

***SYNTAX***
```javascript
const a = value;
```

***EXAMPLE***
```javascript
//ex1: We cannot reassign value
const PI = 3.141592653589793;
PI = 3.14;                      // This will give an error

//ex2: const variables must be assigned a value when they are declared.
const PI;                      // This will give an error
PI = 3.14159265359;

//ex3: You can change the elements of a constant array.
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";	//edit
cars.push("Audi");	//add

//but

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];	// This will give an error

//ex4: You can change the properties of a constant object
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";	//edit
car.owner = "Johnson";	//add

//but

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};	// This will give an error
```

---
***MORE***
> we cannot use let or const to redeclare
```javascript
//ex1: We only use redeclare a variable with "var" keyword
var x = 2;                      // Allowed
var x = 3;                      // Allowed
{
  var x = 2;                    // Allowed
  var x = 3;                    // Allowed
}

//ex2: But we cannot use let or const to reclare
var x = 2;			// Allowed
let x = 3;			// Not allowed
{
  let x = 2;			// Allowed
  let x = 3;			// Not allowed
}

//or 

let x = 2;			// Allowed
var x = 3;			// Not allowed
{
  const x = 2;			// Allowed
  const x = 3;			// Not allowed
}

```
> Only "var" is able to access from outside the block.
```javascript
//ex1: let is not able to access from outside, but it can be accessed from inside
{
  let x = 2;
  console.log(x);               //2
}
console.log(x);                 //ReferenceError

//but
let x = 2;
{
  console.log(x);               //2
}

//ex2: var is able to access from outside
{
  var x = 2;
  console.log(x);               //2
}
console.log(x);                 //2
```
> Redeclare let and var outside the block.
```javascript
//ex1: Reclare let inside and outside the block
let x = 10;
console.log(x);                 //10
{
  let x = 2;
  console.log(x);               //2
}
console.log(x);                 //10

//ex2: Reclare let inside and outside the block
var x = 10;
console.log(x);                 //10
{
  var x = 2;
  console.log(x);               //2
}
console.log(x);                 //2
```
---

# II. Prefix and Postfix
## II.1 Prefix
> Increase variable one unit

***SYNTAX***
```javascript
++i;
```

***EXAMPLE***
```javascript
//ex1
var a = 6;
var output = ++a;
console.log('a: ', a);                        //a: 7
console.log('output: ', output);              //output: 7

//ex2
var a = 2;
a = ++a + a;                                  //output: 6 (Step 1: ++a -> result = 3, a = 3, 
                                              //            Step 2: a = result + a = 3 + 3 = 6)
```
## II.2 Postfix
> Increase variable one unit

***SYNTAX***
```javascript
i++;
```

***EXAMPLE***
```javascript
//ex1
var b = 6;
var output = b++;
console.log('b: ', b);                        //b: 7
console.log('output: ', output);              //output: 6

//ex2
var a = 2;
a = a++ + a;                                  //5 (Step 1: a++ -> result = 2, a = 3, 
                                              //            Step 2: a = result + a = 2 + 3 = 5)
```

---
***MORE***
```javascript
//ex1
var a = 2;
a = a++ + --a;                                //4 (Step 1: a++ -> result = 2, a = 3, 
                                              //           Step 2: --a --> result = 2, a = 2, 
                                              //            Step 3: a = 2 + 2 = 4)
//ex2
var a = 7;
a = a++ + a--                                 //15

//ex3
var a = 7;
a = a++ + ++a                                 //16

//ex4
var a = 4;
a = a-- + ++a - a++                           //4

//ex5
var a = 4;
a = a--*2 + ++a*2 - ++a*2                     //6
```
---

# III. String and String Methods

***SYNTAX***
```javascript
var str = "Hello World";
var str = new String("Hello World");
```

***EXAMPLE***
```javascript
//ex1: Compare strings
var x = "JOHN";
var y = "JOHN";
console.log(x==y);                            //true
console.log(x===y);                           //true

//ex2: Compare a string with an object string
var x = "JOHN";
var a = new String("JOHN");
console.log(x==a);                            //true
console.log(x===a);                           //false

//ex3: Compare object strings
var a = new String("JOHN");
var b = new String("JOHN");
console.log(a==b);                            //false
console.log(a===b);                           //false
```

## III.1 for
> Loop index in a string

***SYNTAX***
```javascript
for(let i = 0; i < str.length; i++){
	...do something
}
```

***EXAMPLE***
```javascript
//ex: 
var str = "Hello World!!!";
for(let i = 0; i < str.length; i++) {
  console.log(str[i]);
  //console.log(str.charAt(i));
}
```

## III.2 for..in
> Loop index in a string

***SYNTAX***
```javascript
for(let index in str){
	...do something
}
```

***EXAMPLE***
```javascript
//ex: 
var str = "Hello World!!!";
for(let index in str) {
  console.log(str[index]);
  //console.log(str.charAt(index));
}
```

## III.3 for..of
> Loop characters of a string

***SYNTAX***
```javascript
for(let c of str){
	...do something
}
```

***EXAMPLE***
```javascript
//ex: 
var str = "Hello World!!!";
for(let c of str) {
  console.log(c);  
}
```

## III.4 forEach
> Loop characters of a string

***SYNTAX***
```javascript
for(let c of str){
	...do something
}
```

***EXAMPLE***
```javascript
//ex: 
var str = "Hello World!!!";
for(let c of str) {
  console.log(c);  
}
[...str].forEach(function(c){
  console.log(c);
})
```

## III.5 slice

> Extracts parts of a string.

***SYNTAX***
```javascript
slice(start, end)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Required. First character is at position 0. </td>
  </tr>
  <tr>
    <td>end</td>
    <td>Optional. Up to, but not including.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = "Apple, Banana, Kiwi";
console.log(str.slice(0));                      //Apple, Banana, Kiwi
console.log(str.slice(7));                      //Banana, Kiwi
console.log(str.slice(0, 1));                   //A
console.log(str.slice(-1));                     //i
console.log(str.slice(7, 13));                  //Banana
console.log(str.slice(7, 5));                   //empty string
console.log(str.slice(-12, -6));                //Banana
console.log(str.slice(-4, -6));                 //empty string
console.log(str.slice(7, -6));                  //Banana
console.log(str.slice(-12))                     //Banana, Kiwi
```

---
***NOTE***
- The index from left to right, start = 0 and end = length - 1
- The index from right to left, start = -1 and end = length - 2
- end >= length of the string, return an extracted string from start to end of the string
---


## III.6 substring
> Extracts parts of a string.

***SYNTAX***
```javascript
substring(start,end)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Required. First character is at position 0. </td>
  </tr>
  <tr>
    <td>end</td>
    <td>Optional. Up to, but not including. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>
</table>


***EXAMPLE***
```javascript
//ex
var str = "Apple, Banana, Kiwi";
console.log(str.substring(7));         //Banana, Kiwi
console.log(str.substring(-3));        //Apple, Banana, Kiwi
console.log(str.substring(7, 13));     //Banana
console.log(str.substring(6, 0));      //Apple,
console.log(str.substring(-12, -6));   //empty string
```

---
***NOTE***
- If start < 0, then start = 0
- If start < end, then swith start and end
- end >= length of the string, return an extracted string from start to end of the string
---

## III.7 substr
> Extracts parts of a string.

***SYNTAX***
```javascript
substr(start,length)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Required. First character is at position 0.</td>
  </tr>
  <tr>
    <td>length</td>
    <td>Optional. The number of characters to extract. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 12));                 //Banana, Kiwi
console.log(str.substr(7, 33));                 //Banana, Kiwi
console.log(str.substr(-6, 5));                 //, Kiw
console.log(str.substr(-6, -5));                //empty string
console.log(str.substr(7, -5));                 //empty string
console.log(str.substr(7))                      //Banana,Kiwi
console.log(str.substr(-4))                     //Kiwi
```

---
***NOTE***
- The index from left to right, start = 0 and end = length - 1
- The index from right to left, start = -1 and end = length - 2
- end >= length of the string, return an extracted string from start to end of the string
- length <= 0, return empty string <br/>
---

## III.8 replace
> Searches a string for a specified value. And, returns a new string where the specified values are replaced.

***SYNTAX***
```javascript
replace(search_expression, replacement)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. A replaced string or <strong>regular expression</strong></td>
  </tr>
  <tr>
    <td>replacement</td>
    <td>Required. A string uses to replace. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>A new string after replacement</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'JS will, JS will rock you!';
console.log(str.replace('JS','JavaScript'));    //JavaScript will, JS will rock you!
```
---
***NOTE***
> search_expression can be a regular expression

| # | Value | Description | Sample String | Example | Output|
|---|-------|-----------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| 1 |   g   | Find all matches | var str = "JS will, JS will rock you!"; | str.replace(/JS/g, "Javascript");  |Javascript will, Javascript will rock you!|
| 2 |   i   | Matches case-insensitive  | var str = "JS will, js will rock you!"; | str.replace(/JS/gi, "Javascript");  |Javascript will, Javascript will rock you!|
| 3 |   \|   | Multiple replacements | var str = "Mr Blue has a blue house and a blue car"; | str.replace(/blue\|house\|car/gi, function (x) { return x.toUpperCase();});  |Mr BLUE has a BLUE HOUSE and a BLUE CAR.|
---

## III.9 charAt
> Returns the character at a specified index in a string.

***SYNTAX***
```javascript
charAt(index)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>index</td>
    <td>Required. The index of the character you want to return.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>The character at the index, or an empty string if the index is not found.</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'JS will, JS will rock you!';
console.log(str.charAt(9));         //J
console.log(str[9]);                //J
console.log(str.charAt(50));        //empty
console.log(str[50]);               //undefined
```

---
***NOTE***
- If index < 0 and using charAt, then return empty
- If index < 0 and using [], then return undefined
- If index > length and using charAt, then return empty
- If index > length and [], then return undefined
---

## III.10 indexOf
> Returns the position of the first occurrence of a specified value in a string.

***SYNTAX***
```javascript
indexOf(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Optional. Default 0. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The position of the searchvalue. Or, -1 if searchvalue does not occur</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'Please locate where "locate" occurs!';
console.log(str.indexOf('locate'));    //7
console.log(str.indexOf('locate',8));  //21
console.log(str.indexOf('data'));      //-1
```

## III.11 lastIndexOf
> Returns the position of the last occurrence of a specified value in a string.

***SYNTAX***
```javascript
lastIndexOf(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Optional. Searching backwards. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The position of the searchvalue. Or, -1 if searchvalue does not occur</td>
  </tr>  
</table>


***EXAMPLE***
```javascript
//ex
var str = 'Please locate where "locate" occurs!';
console.log(str.lastIndexOf('locate'));         //21
console.log(str.lastIndexOf('locate',20));      //7
```

## III.12 search
> Searches a string for a specified value, and returns the position of the match.

***SYNTAX***
```javascript
search(search_expression) 
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. A searching string or <strong>regular expression</strong>.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>The position of the search_expression. Or, -1 if search_expression does not occur</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.search(/javascript/i));         //4
```

## III.13 match
> Search a string.

***SYNTAX***
```javascript
match(search_expression)
```

***USING*** 
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. The value to search for, as a <strong>regular expression.</strong></td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>An Array, containing the matches, one item for each match, or null if no match is found</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/gi));    	//['ain', 'AIN', 'ain', 'ain']
console.log(str.match(/abc/gi));    	//null
```

## III.14 includes
> Check if a string includes a string.

***SYNTAX***
```javascript
includes(searchvalue, start)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>start</td>
    <td>Optional. Default 0.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.includes("javascript"));            	//true
console.log(str.includes("Javascript", 4));        	//true
console.log(str.includes("Javascript", 5));        	//false
console.log(str.includes("Will"));                  	//false
```

## III.15 startsWith
> Check if a string starts with a string.

***SYNTAX***
```javascript
startsWith(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>start</td>
    <td>Optional. Default 0.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.startsWith("Javascript"));            //false
console.log(str.startsWith("Javascript", 4));         //true
console.log(str.startsWith("Javascript", 5));         //false
```

## III.16 endsWith
> Check if a string ends with a string.

***SYNTAX***
```javascript
endsWith(searchvalue, length)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>length</td>
    <td>Optional. The length of the string to search.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str = 'Hello world, welcome to the universe';
console.log(str.endsWith("universe"));            //true
console.log(str.endsWith("welcome"));             //false
console.log(str.endsWith("world", 11));           //true
```

## III.17 concat
> Join strings.

***SYNTAX***
```javascript
concat(string1, string2, ..., stringX)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>string1, string2, ..., stringX</td>
    <td>Required. The strings to be joined.</td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>A new String, containing the text of the combined strings</td>
  </tr>  
</table>

***EXAMPLE***
```javascript
//ex
var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
console.log(str1.concat(str2, str3));            //Hello world! Have a nice day!
```

## III.18 localeCompare
> Compare two strings in the current locale.

***SYNTAX***
```javascript
localeCompare(compareString)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>compareString</td>
    <td>Required. The strings to be joined.</td>
  </tr>    
  <tr>
    <td>Return</td>    
    <td>
      <ul>
        <li>-1 if the reference string is sorted before the compareString</li>        
        <li>0 if the two strings are equal</li>        
        <li>1 if the reference string is sorted after the compareString</li>        
      </ul>      
    </td>
  </tr>
</table>

***EXAMPLE***
```javascript
//ex1
var str1 = 'a';
var str2 = 'b';
console.log(str1.localeCompare(str2));                //-1

//ex2
var str1 = 'b';                                 
var str2 = 'a';
console.log(str1.localeCompare(str2));                //1

//ex3
var str1 = 'abc';
var str2 = 'a';
console.log(str1.localeCompare(str2));                //1

//ex4
var str1 = 'A';
var str2 = 'a';
console.log(str1.localeCompare(str2));                //1
```

---
***NOTE***
- Sorted character in alphabetical order
'', ' ','0','1','2','3','4','5','6','7','8','9',
'a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I',
'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R',
's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'
---

## III.19 repeat
> Make a new string by copying a string count times.

***SYNTAX***
```javascript
repeat(count)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Required. The number of times the original string value should be repeated in the new string</td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>A new string containing copies of the original string</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var str = "Hello world!";
console.log(str.repeat(3));         //Hello world!Hello world!Hello world!
```

## III.20 split
> Split a string into an array of substrings.

***SYNTAX***
```javascript
split(separator, limit)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>Optional. Specifies the character, or <strong>the regular expression</strong>, to use for splitting the string.</td>
  </tr>    
  <tr>
    <td>limit</td>
    <td>Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array.</td>
  </tr> 
  <tr>
    <td>Return</td>
    <td>An Array, containing the splitted values</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var str = "How are you doing today?";
console.log(str.split());               //['How are you doing today?'] 
console.log(str.split(""));             //['H', 'o', 'w', ' ', 'a', 'r', 'e', ' ', 'y', 'o', 'u', 
                                        //' ', 'd', 'o', 'i', 'n', 'g', ' ', 't', 'o', 'd', 'a', 'y', '?']
console.log(str.split(" "));            //['How', 'are', 'you', 'doing', 'today?']
console.log(str.split(" "),3);          //['How', 'are', 'you']
```

## III.21 toLowerCase
> Convert a string to lowercase

***SYNTAX***
```javascript
toLowerCase()
```

***USING*** 
<table>  
  <tr>
    <td>Return</td>
    <td>A string converted to lowercase</td>
  </tr>    
</table>

## III.22 toUpperCase
> Convert a string to uppercase

***SYNTAX***
```javascript
toUpperCase()
```

***USING***
<table>  
  <tr>
    <td>Return</td>
    <td>A string converted to uppercase</td>
  </tr>    
</table>

## III.23 trim
> Remove white space both front and end of a string

***SYNTAX***
```javascript
trim()
```

***USING***
<table>  
  <tr>
    <td>Return</td>
    <td>the string with removed whitespace from both ends</td>
  </tr>    
</table>

# IV. Number and Number Methods
>  JS uses the + operator for both addition and concatenation.

***EXAMPLE***
```javascript
//ex
console.log(5 + "10");              //510
console.log("5" + 10);              //510
console.log(5 + 10 + "15");         //1515
console.log("5" + 10 + 15);         //51015
console.log(NaN + 15);              //NaN
console.log(NaN + "15");            //NaN15
```

>  substraction

***EXAMPLE***
```javascript
//ex
console.log(10 - "5");              //5
console.log("10" - 5);              //5
console.log("10" - "5");            //5
console.log("10" - "S");            //NaN -> Not a Number
console.log("S" - "5");             //NaN
```

>  division

***EXAMPLE***
```javascript
//ex
console.log(10 / "5");              //2
console.log("10" / 5);              //2
console.log("10" / "5");            //2
console.log(10 / 0);                //Infinity
console.log(-10 / 0);               //-Infinity
console.log(0 / 0);                 //NaN
console.log(10 / "S");              //NaN
console.log("S" / 0);               //NaN
```
>  multiplication

***EXAMPLE***
```javascript
//ex
console.log(10 * "5");              //50
console.log("10" * 5);              //50
console.log("10" * "5");            //50
console.log(10 * "S");              //NaN
console.log("S" * 10);              //NaN
```

---
***NOTE***
<table>  
  <tr>
    <td>Property</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Number.MAX_VALUE</td>
    <td>Returns the largest number possible in JavaScript</td>
  </tr>   
  <tr>
    <td>Number.MIN_VALUE</td>
    <td>Returns the smallest number possible in JavaScript</td>
  </tr>  
  <tr>
    <td>Number.POSITIVE_INFINITY</td>
    <td>Represents infinity</td>
  </tr> 
  <tr>
    <td>Number.NEGATIVE_INFINITY</td>
    <td>Represents negative infinity</td>
  </tr> 
  <tr>
    <td>Number.NaN</td>
    <td>Represents a "Not-a-Number" value</td>
  </tr> 
</table>
---

## IV.1 isNaN
> Determines whether a value is an illegal number.

***SYNTAX***
```javascript
isNaN(value)
```

***USING***
<table> 
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Required. The value to be tested</td>
  </tr>   
  <tr>
    <td>Return</td>
    <td>True if the given value is NaN; otherwise, false.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
console.log(isNaN("Hello World"));	//true
console.log(isNaN("001"));		//false
console.log(isNaN(1));			//false
```

## IV.2 toString
> Convert a number to a string

***SYNTAX***
```javascript
toString()
```

***USING***
<table>    
  <tr>
    <td>Return</td>
    <td>A number as a string</td>
  </tr>    
</table>

## IV.3 toFixed
> Convert a number into a string, rounding the number.

***SYNTAX***
```javascript
toFixed(digits)
```

***USING***
<table>    
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>digits</td>
    <td>Required. The number of digits to appear after the decimal point; this may be a value between 0 and 20.</td>
  </tr>   
  <tr>
    <td>Return</td>
    <td>A string representing a number written with a specified number of decimals.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var x = 9.656;
console.log(x.toFixed(0));           //10
console.log(x.toFixed(2));           //9.66
console.log(x.toFixed(4));           //9.6560
console.log(x.toFixed(6));           //9.656000
```

## IV.4 toPrecision
> Format a number into a specified length.

***SYNTAX***
```javascript
toPrecision(precision)
```

***USING***
<table>    
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>precision</td>
    <td>Optional. An integer specifying the number of significant digits.</td>
  </tr>   
  <tr>
    <td>Return</td>
    <td>A string representing a Number object in fixed-point</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var x = 9.656;
console.log(x.toPrecision());            //9.656
console.log(x.toPrecision(2));           //9.7
console.log(x.toPrecision(4));           //9.656
console.log(x.toPrecision(6));           //9.65600
```

## IV.5 Convert variables to numbers

There are 3 JavaScript methods that can be used to convert variables to numbers:

> Convert from the argument
***SYNTAX***
```javascript
Number(value)
```

***USING***
<table>    
   <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>value</td>
    <td>Optional. A JavaScript object. If no argument is provided, it returns 0.</td>
  </tr>   
  <tr>
    <td>Return</td>
    <td>A Number</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
console.log(Number());                //0
console.log(Number(true));            //1
console.log(Number(false));           //1
console.log(Number("10"));            //10
console.log(Number("  10"));          //10
console.log(Number("  10  "));        //10
console.log(Number("10.33"));         //10
console.log(Number("10,33"));         //NaN
console.log(Number("10 33"));         //NaN
```

> Use parseInt function

***SYNTAX***
```javascript
parseInt(string, radix)
```

***USING***
<table>    
   <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>string</td>
    <td>Required. The string to be parsed.</td>
  </tr>   
  <tr>
    <td>radix</td>
    <td>Optional. A number (from 2 to 36) that represents the numeral system to be used.</td>
  </tr> 
  <tr>
    <td>Return</td>
    <td>A Number. If the first character cannot be converted to a number, NaN is returned</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
console.log(parseInt("-10"));                //-10
console.log(parseInt("-10.33"));             //-10
console.log(parseInt("10 20 30"));           //10
console.log(parseInt("10 years"));           //10
console.log(parseInt("years 10"));           //NaN
```

> Use parseFloat function

***SYNTAX***
```javascript
parseFloat(string)
```

***USING***
<table>    
   <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>string</td>
    <td>Required. The string to be parsed.</td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>A Number. If the first character cannot be converted to a number, NaN is returned</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
console.log(parseFloat("-10"));                //-10
console.log(parseFloat("-10.33"));             //-10.33
console.log(parseFloat("10 20 30"));           //10
console.log(parseFloat("10 years"));           //10
console.log(parseFloat("years 10"));           //NaN
```

# V. Array and Array Methods

## V.1 Create an array

***EXAMPLE***
```javascript
//ex1
var cars = ["Saab", "Volvo", "BMW"];          
console.log(cars);                                   //["Saab", "Volvo", "BMW"]

//ex2
var cars = [
  "Saab",
  "Volvo",
  "BMW"
];
console.log(cars);                                    //["Saab", "Volvo", "BMW"]

//ex3
var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";                               
console.log(cars);                                    //["Saab", "Volvo", "BMW"]

//ex4
var cars = new Array("Saab", "Volvo", "BMW"); 
console.log(cars);                                    //["Saab", "Volvo", "BMW"]

//ex5
var cars = ["Saab", "Volvo", "BMW"];          
cars[5]= "Toyota";
console.log(cars);                                    //["Saab", "Volvo", "BMW", undefined, undefined, "Toyota"]
```

## V.2 for
***SYNTAX***
```javascript
for(let i = 0; i < arr.length; i++) {
	...do something
}
```

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## V.3 for..in
***SYNTAX***
```javascript
for(let index in arr) {
	...do something
}
```

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
for(var key in arr) {
  console.log(arr[key]);
}
```

## V.4 for..of
***SYNTAX***
```javascript
for(let e of arr) {
	...do something
}
```

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
for(var e of arr) {
  console.log(e);  
}
```

## V.5 forEach
***SYNTAX***
```javascript
arr.forEach(function(e){
	...do something
})
```

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
arr.forEach(function(e){
  console.log(e);
})
```

---
***NOTE***
> Array elements can be objects

***EXAMPLE***
```javascript
var myArray = [
  Date.now(),
  myFunction = function(){
    return "Hello World!!!";
  },
  ["Mon","Tue","Wed","Thur","Fri","Sat","Sun"]
];
```
---

## V.6 length
> Length of the array

***SYNTAX***
```javascript
length
```

***USING***
<table>    
  <tr>
    <td>Return</td>
    <td>the length of an array</td>
  </tr>      
</table>

## V.7 toString
> Convert array to string.

***SYNTAX***
```javascript
toString()
```

***USING***
<table>    
   <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>A string to be converted</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());      //Banana,Orange,Apple,Mango
```

## V.8 join
> Join arrays together.

***SYNTAX***
```javascript
join(separator)
```

***USING***
<table>    
   <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>  
  <tr>
    <td>separator</td>
    <td>Optional. The separator to be used. If omitted, the elements are separated with a comma</td>
  </tr>   
  <tr>
    <td>Return</td>
    <td>A String, representing the array values, separated by the specified separator</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join();
console.log(fruits);      //Banana,Orange,Apple,Mango

//ex2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
console.log(fruits);      //Banana * Orange * Apple * Mango
```

## V.9 pop
> Removes the last element of an array

***SYNTAX***
```javascript
pop()
```

***USING***
<table>      
  <tr>
    <td>Return</td>
    <td>The removed array item.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var fruits = [];
fruits.pop();
console.log(fruits);      //[]

//ex2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);      //["Banana", "Orange", "Apple"]
```

## V.10 push
> Adds a new element to an array at the end

***SYNTAX***
```javascript
push(item1, item2, ..., itemX)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>item1, item2, ..., itemX</td>
    <td>Required. The item(s) to add to the array.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>New array.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "Pineapple"]
```

## V.11 shift
> Removes the first array element

***SYNTAX***
```javascript
shift()
```

***USING***
<table>      
  <tr>
    <td>Return</td>
    <td>The removed array item.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var fruits = [];
fruits.shift();
console.log(fruits);      //[]

//ex2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);      //["Orange", "Apple", "Mango"]
```

## V.12 unshift
> Adds a new element to the beginning of the array.

***SYNTAX***
```javascript
unshift(item1, item2, ..., itemX)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>item1, item2, ..., itemX</td>
    <td>Required. The item(s) to add to the array.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>New array.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Kiwi", "Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]
```

## V.13 splice
> Adds and/or removes array elements.

***SYNTAX***
```javascript
splice(index, howmany, item1, ....., itemX)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>index</td>
    <td>Required. The position to add/remove items. Negative values a the position from the end of the array.</td>
  </tr>
  <tr>
    <td>howmany</td>
    <td>Optional. Number of items to be removed.</td>
  </tr>
  <tr>
    <td>item1, ..., itemX</td>
    <td>Optional. New elements(s) to be added</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>New Array.</td>
  </tr> 
</table>

***EXAMPLE***
```javascript
//ex1
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Kiwi", "Lemon", "Pineapple", "Banana", "Orange", "Apple", "Mango"]

//ex2
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Orange", "Kiwi", "Lemon", "Pineapple", "Apple", "Mango"]

//ex3
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(4, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "Pineapple"]

//ex4
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(10, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Orange", "Apple", "Mango", "Kiwi", "Lemon", "Pineapple"]

//ex5
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Orange", "Kiwi", "Lemon", "Pineapple"]

//ex6
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(-3, 2, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);      //["Banana", "Kiwi", "Lemon", "Pineapple", "Mango"]
```

## V.14 concat
> Joins two or more arrays.

***SYNTAX***
```javascript
concat(array2, array3, ..., arrayX)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>array2, array3, ..., arrayX</td>
    <td>Required. The arrays to be joined.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>An Array object, representing the joined array.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
console.log(hege.concat(stale, kai));     //["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin"]
console.log(hege.concat("Peter"));        //["Cecilie", "Lone", "Peter"]
```

## V.15 slice
> Returns selected elements in an array, as a new array.

***SYNTAX***
```javascript
slice(start, end)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>start</td>
    <td>Optional. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array.</td>
  </tr>
  <tr>
    <td>end</td>
    <td>Optional. An integer that specifies where to end the selection.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>A new Array, containing the selected elements.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));       //["Orange", "Lemon", "Apple", "Mango"]

//ex2
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(3));       //["Apple", "Mango"]

//ex3
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1,3));     //["Orange", "Lemon"]

//ex4
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3));      //["Lemon", "Apple", "Mango"]

//ex5
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1));  //["Lemon", "Apple"]
```

## V.16 Add elements to an array
> At the beginning of the array

***EXAMPLE***
```javascript
//ex1
var cars = ["Saab", "Volvo", "BMW"];
cars.unshift("Toyota", "Kia");
console.log(cars)                     //["Toyota", "Kia", "Saab", "Volvo", "BMW"]

//ex2
var cars = ["Saab", "Volvo", "BMW"];
cars.splice(0, 0, "Toyota", "Kia");
console.log(cars)                     //["Toyota", "Kia", "Saab", "Volvo", "BMW"]

//ex3
var car1 = ["Saab", "Volvo", "BMW"];
var car2= ["Toyota", "Kia"];
console.log(car2.concat(car1));       //["Toyota", "Kia", "Saab", "Volvo", "BMW"]
```

> At the end of the array

***EXAMPLE***
```javascript
//ex1
var cars = ["Saab", "Volvo", "BMW"];
cars.push("Toyota", "Kia")
console.log(cars)                       //['Saab', 'Volvo', 'BMW', 'Toyota', 'Kia']

//ex2
var cars = ["Saab", "Volvo", "BMW"];
cars.splice(cars.length, 0, "Toyota", "Kia")
console.log(cars);                      //['Saab', 'Volvo', 'BMW', 'Toyota', 'Kia']

//ex3
var car1 = ["Saab", "Volvo", "BMW"];
var car2= ["Toyota", "Kia"];
console.log(car1.concat(car2));         //['Saab', 'Volvo', 'BMW', 'Toyota', 'Kia']

//ex4
var cars = ["Saab", "Volvo", "BMW"];
cars[cars.length] = ["Toyota"];
console.log(cars);                      //['Saab', 'Volvo', 'BMW', 'Toyota']
```

> At a specific index in the array

***EXAMPLE***
```javascript
//ex
var cars = ["Saab", "Volvo", "BMW"];
cars.splice(2, 0, "Toyota", "Kia")
console.log(cars)                       //['Saab', 'Volvo', 'Toyota', 'Kia', 'BMW']
```

## V.17 Delete elements from an array
> At the beginning of the array

***EXAMPLE***
```javascript
//ex1
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
cars.shift();
console.log(cars)                     //["Kia", "Saab", "Volvo", "BMW"]

//ex2
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
cars.splice(0, 2);
console.log(cars);                    //['Saab', 'Volvo', 'BMW']

//ex3
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
console.log(cars.slice(2));           //['Saab', 'Volvo', 'BMW']
```

> At the end of the array

***EXAMPLE***
```javascript
//ex1
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
cars.pop();
console.log(cars)                       //['Toyota', 'Kia', 'Saab', 'Volvo']

//ex2
var cars = ["Saab", "Volvo", "BMW"];
cars.splice(cars.length, 0, "Toyota", "Kia")
console.log(cars)                       //['Saab', 'Volvo', 'BMW', 'Toyota', 'Kia']

//ex3
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
console.log(cars.slice(0, 3));          //['Toyota', 'Kia', 'Saab']
```

> At a specific index in the array

***EXAMPLE***
```javascript
//ex
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
cars.splice(2, 2)
console.log(cars)                       //['Toyota', 'Kia', 'BMW']
```

## V.18 Delete an element by using the JavaScript operator delete
> Using "delete" keyword
***EXAMPLE***
```javascript
//ex
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];
delete cars[0];
console.log(cars);                       //[undefined, "Kia", "Saab", "Volvo", "BMW"]
delete cars[10];
console.log(cars);                       //[undefined, "Kia", "Saab", "Volvo", "BMW"]
```

## V.19 Sort

***SYNTAX***
```javascript
sort()
```

***EXAMPLE***
```javascript
//ex1
var cars = ["Banana", "Orange", "Apple", "Mango"];
console.log(cars.sort());                //["Apple", "Banana", "Mango", "Orange"]

//ex2
var cars = ["Banana", "Orange", "Apple", "Mango"];
console.log(cars.reverse());             //["Mango", "Apple", "Orange", "Banana"]

//ex3
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000},{type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];
//sort cars through year
console.log(cars.sort(function(a, b){ return a.year - b.year }));   
//[{"type": "Saab", "year": 2001, "price": 6000}, {"type": "Saab", "year": 2002, "price": 6000}, 
//            {"type": "BMW", "year": 2005, "price": 9000}, {"type": "BMW", "year": 2010, "price": 20000}, 
//            {"type": "Toyota", "year": 2010, "price": 10000}, {"type": "Volvo", "year": 2011, "price": 11000},
//            {"type": "Volvo", "year": 2012, "price": 12000}, {"type": "BMW", "year": 2012, "price": 13000}, 
//            {"type": "Volvo", "year": 2014, "price": 15000}, {"type": "Volvo", "year": 2016, "price": 18000}, 
//            {"type": "Saab", "year": 20016, "price": 12500}
//          ];

//ex4
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000}, {type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];
//sort cars through car branches
console.log(cars.sort(function(a, b){ 
              if(a.type.localeCompare(b.type) === -1){
                return -1;
              } 
              else if(a.type.localeCompare(b.type) === 1) {
                return 1;
              } else {
                return 0;
              }
            }));   
//[{type: 'BMW', year: 2010, price: 20000}, {type: 'BMW', year: 2012, price: 13000}, 
//            {type: 'BMW', year: 2005, price: 9000}, {type: 'Saab', year: 2001, price: 6000}, 
//            {type: 'Saab', year: 2002, price: 6000}, {type: 'Saab', year: 20016, price: 12500},
//           {type: 'Toyota', year: 2010, price: 10000}, {type: 'Volvo', year: 2016, price: 18000}, 
//           {type: 'Volvo', year: 2012, price: 12000}, {type: 'Volvo', year: 2014, price: 15000}, 
//           {type: 'Volvo', year: 2011, price: 11000}];

//ex5
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000}, {type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];
//sort cars through year and car branches
console.log(cars.sort(function(a, b){ 
              if(a.type.localeCompare(b.type) === -1){
                return -1;
              } 
              else if(a.type.localeCompare(b.type) === 1) {
                return 1;
              } else {
                if(a.year < b.year) {
                  return -1;
                } else if(a.year > b.year) {
                  return 1;
                }
                return 0;
              }
            }));   
//[{type: 'BMW', year: 2005, price: 9000}, {type: 'BMW', year: 2010, price: 20000},
//            {type: 'BMW', year: 2012, price: 13000}, {type: 'Saab', year: 2001, price: 6000},
//            {type: 'Saab', year: 2002, price: 6000}, {type: 'Saab', year: 20016, price: 12500},
//            {type: 'Toyota', year: 2010, price: 10000}, {type: 'Volvo', year: 2011, price: 11000},
//            {type: 'Volvo', year: 2012, price: 12000}, {type: 'Volvo', year: 2014, price: 15000},
//            {type: 'Volvo', year: 2016, price: 18000}, {type: 'Kia', year: 1999, price: 3800}
//          ];
```

## V.20 Find min, max
> Find min, max

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
console.log(Math.max(...arr));        //10
console.log(Math.min(...arr));        //1
```

## V.21 forEach, reduce, indexOf, find
> The forEach method calls a function once for each element in an array, in order.

***SYNTAX***
```javascript
forEach(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>undefined</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
//iterate
arr.forEach(function(currentValue, index, arr){
      console.log(index, currentValue, arr);
    }
);
//0 6 [6, 9, 4, 8, 3, 10, 1, 2]
//1 9 [6, 9, 4, 8, 3, 10, 1, 2]
//2 4 [6, 9, 4, 8, 3, 10, 1, 2]
//3 8 [6, 9, 4, 8, 3, 10, 1, 2]
//4 3 [6, 9, 4, 8, 3, 10, 1, 2]
//5 10 [6, 9, 4, 8, 3, 10, 1, 2]
//6 1 [6, 9, 4, 8, 3, 10, 1, 2]
//7 2 [6, 9, 4, 8, 3, 10, 1, 2]

var arr = [6, 9, 4, 8, 3, 10, 1, 2];
//find sum
var sum = 0;
arr.forEach(function(currentValue){
      sum += currentValue;
    }
);
console.log(sum);                 //43
```

> Creates a new array with the results of calling a function for every array element.

***SYNTAX***
```javascript
reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(total,currentValue, index,arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>total:</strong> Required. The initialValue, or the previously returned value of the function <br/>
      b) <strong>currentValue:</strong> Required. The value of the current element  <br/>
      c) <strong>currentIndex:</strong> Optional. The array index of the current element <br/>
      d) <strong>arr:</strong> Optional. The array object the current element belongs to <br/>
      e) <strong>initialValue:</strong> Optional. A value to be passed to the function as the initial value
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns the accumulated result from the last call of the callback function.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
//find total
var total = arr.reduce(function(sum, currentValue, currentIndex, arr){
      return sum + currentValue;
    }, 0);
console.log(total);                 //43

//ex2
var shoppingCart = [{
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    }
];
//find total
var total = shoppingCart.reduce(function(sum, currentValue, currentIndex, arr){
      return sum + currentValue.qty * currentValue.price;
    }, 0);
console.log(total);                 //750.96
```

> Searches an array for a specified item and returns its position.

***SYNTAX***
```javascript
indexOf(item, start)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>item</td>
    <td>
      Required. The item to search for
    </td>
  </tr>  
  <tr>
    <td>start</td>
    <td>
      Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>A Number, representing the position of the specified item, otherwise -1.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits.indexOf("Apple"));                     //2
console.log(fruits.indexOf("Apple", 2));                  //2
console.log(fruits.indexOf("Apple", -2));                 //4
console.log(fruits.indexOf("Apple", -3));                 //2
```

> Returns the value of the array element that passes a test.

***SYNTAX***
```javascript
find(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns the first element in in the array pass the test, otherwise it returns undefined</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
//find the first element in the array greater than 9
var result = arr.find(function(currentValue, index, arr){
      return currentValue > 9;
    }
);
console.log(result);                 //10
```

## V.22 every, some, includes
> The every function returns true if all elements in an array pass a test.

***SYNTAX***
```javascript
every(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>A Boolean. Returns true if all the elements in the array pass the test, otherwise it returns false</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
// Check if all elements in array greater than zero
var result = arr.every(function(currentValue, index, arr){
      return currentValue > 0;
    }
);
console.log(result);          //true

//ex2
var survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];
//Check if the answers are the same
var result = survey.every(function(currentValue, index, arr){
                  if(index === 0) return true;
                  return currentValue.answer === survey[index - 1].answer;
                }
              );
console.log(result);          //false
```

> The some function checks if any of the elements in an array pass a test.

***SYNTAX***
```javascript
some(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>A Boolean. Returns true if any of the elements in the array pass the test, otherwise it returns false</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];
//Check if there is a "No" answer 
var result = survey.some(function(currentValue, index, arr){
                  if(index === 0) return true;
                  return currentValue.answer === "No";
                }
              );
console.log(result);          //true
```

> The include function returns true if an array contains a specified element, otherwise false.

***SYNTAX***
```javascript
includes(element, start)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>element</td>
    <td>
      Required. The element to search for
    </td>
  </tr>  
  <tr>
    <td>start</td>
    <td>
      Optional. Default 0. At which position in the array to start the search
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>A Boolean</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Banana"));           //true
console.log(fruits.includes("Banana", 3));        //false
console.log(fruits.includes("Apple", -2));        //true
```

## V.23 filter, map
> The filter function creates an array filled with all array elements that pass a test.

***SYNTAX***
```javascript
filter(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>An Array containing all the array elements that pass the test. If no elements pass the test it returns an empty array.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex
var cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];
//Get all cities having the population greater than 3 million 
var result = cities.filter(function(currentValue, index, arr){
                  return currentValue.population > 3000000;
                }
              );
console.log(result);          
//[{name: 'Los Angeles', population: 3792621},
//        {name: 'New York', population: 8175133}]
```

> The map function creates a new array with the results of calling a function for every array element.

***SYNTAX***
```javascript
map(function(currentValue, index, arr))
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr> 
  <tr>
    <td>function(currentValue, index, arr)</td>
    <td>
      Required. A function to be run for each element in the array. Function arguments: <br/>
      a) <strong>currentValue:</strong>  Required. The value of the current element <br/>
      b) <strong>index:</strong>  Optional. The array index of the current element  <br/>
      c) <strong>arr:</strong>  Optional. The array object the current element belongs to
    </td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>An Array containing the results of calling the provided function for each element in the original array.</td>
  </tr>    
</table>

***EXAMPLE***
```javascript
//ex1
var people = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
//Concat firtName and lastName and return to an array
var result = people.map(function(currentValue, index, arr){
                  return currentValue.firstname + " " + currentValue.lastname;
                }
              );
console.log(result);        //['Malcom Reynolds', 'Kaylee Frye', 'Jayne Cobb']

//ex2
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
var result = arr.map(function(currentValue, index, arr){
                  return currentValue * 10;
                }
              );
console.log(result);        //[60, 90, 40, 80, 30, 100, 10, 20]
```

## VI. Object and more

### VI.1 Create an object

***EXAMPLE***
```javascript
//ex1: create an object person on a line
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(person);		//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

//ex2: create an object person on multiple lines
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);		//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

//ex3: create an empty object and assign properties for that object
var person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);		//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}

//ex4: create an empty object and assign properties for that object with new keyword
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
console.log(person);		//{firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}
```

### VI.2 Access JS object
***EXAMPLE***
```javascript
//ex1: access directly through object's properties
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person.firstName + person.lastName);          //Steve Job
console.log(person["firstName"] + person["lastName"]);    //Steve Job

//ex2: access indirectly 
var fName = "firstName";
var lName = "lastName";
console.log(person[fName] + person[lName]);               //Steve Job
```

### VI.3 Add new properties for the object
***EXAMPLE***
```javascript
//ex: add nationality for person object
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
person.nationality = "English";
//or person["nationality"] = "English";
//or var n = "nationality"; person[n] = "English";
console.log(person);          //{firstName: "John", lastName: "Doe", age: 50, 
                              //eyeColor: "blue", nationality: "English"}
```

### VI.4 Edit properties for the object
***EXAMPLE***
```javascript
//ex: edit age for person object
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
person.age = 58;
//or person["age"] = 58;
//or var a = "age"; person[a] = "58;
console.log(person);          //{firstName: "John", lastName: "Doe", age: 58, eyeColor: "blue"}
```

### VI.5 Delete properties of the object
> To delete a property of an object, using "delete" keyword

***EXAMPLE***
```javascript
//ex: delete age property of person object
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
delete person.age;
//or delete person["age"];
//or var a = "age"; delete person[a];
console.log(person);          //{firstName: "John", lastName: "Doe", eyeColor: "blue"}
```

### VI.6 Copy an object
> There are 3 way to copy an object
> 1. Using three dots
> 2. Using Object.assign
> 3. Using JSON

***EXAMPLE***
```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex1: Using three dots
var x = {...person};
console.log(x);               //{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}

//ex2: Using object assign
var x = Object.assign({}, person);
console.log(x);               //{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}
/**
  * let first = {firstName: 'John'}; let last = {lastName: 'Doe'};
  * let person = Object.assign(first, last);
  * console.log(person);	//{firstName: 'John', lastName: 'Doe'}
  */


//ex3: Using JSON
var x = JSON.parse(JSON.stringify(person));
console.log(x);               //{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}
/**
  * JSON.stringify: convert an object to string
  * JSON.parse: convert text to JS object
  */
```

---
***NOTE***
> The Object.assign() method is used to copy the values of all enumerable own properties from one or more source objects to a target object. Objects are assigned and copied by reference. It will return the target object.

***SYNTAX***
```javascript
Object.assign(target, sources)   
```
***EXAMPLE***
```javascript
//ex: join two objects
const object1 = {  
  a: 1,  
  b: 2,  
  c: 3  
};  
const object2= {  
  g: 1,  
  h: 2,  
  i: 3  
};  
console.log(Object.assign(object1, object2));	//{a:1, b:2, c:3, g: 1, h:2, i: 3}  
```

> The Object.defineProperties() method defines new or modifies existing properties directly on an object, and returning the object.

***SYNTAX***
```javascript
Object.defineProperties(obj, props)    
```
***EXAMPLE***
```javascript
//ex: define a property for an object
const object1 = {};  
Object.defineProperties(object1, {  
  property1:{  
value: 44, }  
 });  
console.log(object1.property1);    	//44  
```

> The Object.freeze() method freezes an object that prevents new properties from being added to it. This method prevents the modification of existing property, attributes, and values.

***SYNTAX***
```javascript
Object.freeze(obj)    
```
***EXAMPLE***
```javascript
const object1 = {  
  property1: 22  
};  
const object2 = Object.freeze(object1);  
object2.property1 = 33;  
// Throws an error in strict mode  
console.log(object2.property1);        	//22  
```

> The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

***SYNTAX***
```javascript
Object.keys(obj)      
```
***EXAMPLE***
```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));         	//["a", "b", "c"] 
```

> The Object.values() returns an array which contains the given object's own enumerable property values, in the same order as that provided by a for...in loop.

***SYNTAX***
```javascript
Object.values(obj)      
```
***EXAMPLE***
```javascript
const object1 = {  
  a: 'Rahul',  
  b: 0,  
  c:false  
};  
console.log(Object.values(object1));          	//["Rahul", 0, false]  
```

> JavaScript Object.entries() method is used to return an array of a given object's own enumerable property [key, value] pairs. The ordering of the properties is the same as that given by looping over the property values of the object manually.

***SYNTAX***
```javascript
Object.entries(obj)  
```
***EXAMPLE***
```javascript
//ex: get the second property of an object
const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  
console.log(Object.entries(obj)[2]);	//["23", "carry"]  
```
---

### VI.7 JS objects are mutable. 
> If an object is mutable, modifying the copy also modifies the original. In JavaScript numbers, strings, null, undefined and booleans are primitive types which are immutable. Objects, arrays, functions, classes, maps, and sets are mutable.

***EXAMPLE***
```javascript
//ex: create a person, and change the value of properties and see what happens.
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);          //{firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}

var x = person;
x.firstName = "Steve";
x.lastName = "Job";
console.log(x);               //{firstName: "Steve", lastName: "Job", age: 50, eyeColor: "blue"}
console.log(person);          //{firstName: "Steve", lastName: "Job", age: 50, eyeColor: "blue"}
```

***Explain:*** the object x **is not a copy** of person. Both x and person are the same object. If changing person object, x is also changed, and so on.

### VI.8 for...in

***SYNTAX***
```javascript
for(let index in object) {
  ...do something
}
```

***EXAMPLE***
```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex: print properties in an object
for(let index in person) {
  console.log(key, ":" , person[index]);
}
```

### VI.9 for...of

***SYNTAX***
```javascript
for(let [key, value] of object) {
  ...do something
}
```

***EXAMPLE***

```javascript
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex: print properties in an object with for..of
for(var [key, value] of Object.entries(person)) {
  console.log(key, ":" , value);
}
```

### VI.10 forEach

***SYNTAX***
```javascript
for(let [key, value] of object) {
  ...do something
}
```

***EXAMPLE***

```javascript

//forEach
//Method 1
Object.keys(person).forEach(function(key){
  console.log(key, ":" , person[key]);
})

//Method 2
Object.values(person).forEach(function(value){
  console.log(value);
})

//Method 3
Object.entries(person).forEach(function([key, value]){
  console.log(key, ":" , value);
})
```

### VI.11 Nested objects and function in an object
> Nested objects

***EXAMPLE***
```javascript
//ex: access nested objects
var person = {
  name:"John",
  age:30,
  cars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

console.log(person.car.car2);                //BMW
console.log(person["car"].car2);             //BMW
console.log(person.car["car2"]);             //BMW
console.log(person["car"]["car2"]);          //BMW
var o = "car";
var o2 = "car2";
console.log(person[o][o2]);                  //BMW
```

> create a method to an object

***EXAMPLE***
```javascript
//ex1: create fullName method in person object
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,  
  fullName() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName());                //John Doe

//ex2: use get keyword to create fullName method
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName);                //John Doe

//ex3: use set keyword to set value age for person object
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  set pAge(age) {
    this.age = age;
  },
  get pDetail() {
    return this.firstName + " " + this.lastName + ", age: " + this.age;
  }
}
person.pAge = 50;
console.log(person.pDetail);                //John Doe, age: 50
```

 ### VI.12 JSON.stringify
> Convert an object to a string

***SYNTAX***
```javascript
JSON.stringify(object)
```

***EXAMPLE***
```javascript
//ex: convert object person to string
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30  
}
console.log(JSON.stringify(person));        //{"firstName":"John","lastName":"Doe","age":30} 
```

---
***NOTE***
> stringify cannot convert a function in an object

***EXAMPLE***
```javascript
//ex: show object person in term of string
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  fullName: function() { return this.firstName + " " + this.lastName; }
}
console.log(JSON.stringify(person));        //{"firstName":"John","lastName":"Doe","age":30} !!! doesn't show fullName

//To fix it
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  fullName: function() { return this.firstName + " " + this.lastName; }
}
person.fullName = person.fullName.toString();
console.log(JSON.stringify(person));      //{"firstName":"John","lastName":"Doe","age":30,
                                          //"fullName":"function() { return this.firstName + \" \" + this.lastName; }"}
```

> convert an object to an array

***EXAMPLE***
```javascript
//ex: convert to an array
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30  
}
console.log(Object.values(person))          //["John", "Doe", 30]
```
---
 
### VI.13 JS Object constructor
> create an object constructor

***EXAMPLE***
```javascript
//ex: create an object person with object constructor
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
  this.changeName = function(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
  };
}

var myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);                      //Person {firstName: 'John', lastName: 'Doe', age: 50, 
                                            //eyeColor: 'blue', fullName: ƒ}
console.log(myFather.fullName());           //John Doe

myFather.changeName("Steve", "Job");
console.log(myFather.fullName());           //Steve Job
 ```
 
> add a new property to an existing object constructor

***EXAMPLE***
```javascript
//ex
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
```
We ***cannot*** add a new property to the object constructor as the following coding
```javascript
Person.nationality = "English";
Person.fullName = function() {
  return this.firstName + " " + this.lastName;
};
```
We use ***PROTOTYPE INHERITANCE*** instead
```javascript
Person.prototype.nationality = "English";
Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
```

## VII. Set and Set methods
> A collection of unique values
> Each value can only occur once in a Set

***EXAMPLE***
```javascript
//ex
var number = new Set([0,1,2,3,0,1,2,3]);        
console.log(number);                        //{0, 1, 2, 3}
```

### VII.1 Create a set
***EXAMPLE***
```javascript
//ex: Create a set
var letters = new Set(["a","b","c"]);
console.log(letters);                        //{"a", "b", "c"}
//or
letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);                        //{"a", "b", "c"}
```

### VII.2 Add an element in a set
***EXAMPLE***
```javascript
//ex: Add elements to a set
var letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);                        //{"a", "b", "c"}
//or
var a = "a";
var b = "b";
var c = "c";
var letters = new Set();
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);                        //{"a", "b", "c"}
```

### VII.3 Delete an element in a set
***EXAMPLE***
```javascript
//ex: Delete an element in a set
var letters = new Set(["a","b","c"]);
letters.delete("a");
console.log(letters);                        //{"b", "c"}
```

### VII.4 size
> Size of a set

***SYNTAX***
```javascript
size
```

***EXAMPLE***
```javascript
//ex: get size of the set
var letters = new Set(["a","b","c"]);
console.log(letters.size);                    //3
```

### VII.5 has
> Check existing of an element in a set

***SYNTAX***
```javascript
has(element)
```

***EXAMPLE***
```javascript
//ex: Check "a" if it is in set
var letters = new Set(["a","b","c"]);
console.log(letters.has("a"));              //true
```

c
> Remove all elements in a set

***SYNTAX***
```javascript
clear()
```

***EXAMPLE***
```javascript
//ex: remove all elements
var letters = new Set(["a","b","c"]);
console.log(letters.clear());                 //undefined
```

### VII.7 for
***EXAMPLE***
```javascript
//ex1: loop all elements in set using keys
var letters = new Set(["a","b","c"]);
for(var key of letters.keys()) {
  console.log(key);
}

//ex2: loop all elements in set using values
var letters = new Set(["a","b","c"]);
for(var value of letters.values()) {
  console.log(value);
}

//ex3: loop all elements in set using entries
var letters = new Set(["a","b","c"]);
for(var [key, value] of letters.entries()) {
  console.log(key, value);
}
```

### VII.8 forEach
***EXAMPLE***
```javascript
//ex: loop all elements using forEach
var letters = new Set(["a","b","c"]);
letters.forEach(function(value){
  console.log(value);
})
```

## VIII. Map and Map methods
> A Map holds key-value pairs
> A Map remembers the original insertion order of the keys

### VIII.1 Create a map
***EXAMPLE***
```javascript
//ex: Create a new map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits);                //{'apples' => 500, 'bananas' => 300, 'oranges' => 200}
//or
var fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);                //{'apples' => 500, 'bananas' => 300, 'oranges' => 200}
```

### VIII.2 Add an element in a map
***EXAMPLE***
```javascript
//ex: Add a new element to a map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("grapes", 100);
console.log(fruits);                //{'apples' => 500, 'bananas' => 300, 'oranges' => 200, 'grapes' => 100}
```

### VIII.3 Get an element in a map
***EXAMPLE***
```javascript
//ex: Get a value by a key in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("bananas")); //300
```

### VIII.4 Delete an element in a map
***EXAMPLE***
```javascript
//ex: Delete an element in a map with a key
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.delete("oranges");
console.log(fruits);                //{'apples' => 500, 'bananas' => 300}
```

### VIII.5 size
> Size of a map

***SYNTAX***
```javascript
size
```

***EXAMPLE***
```javascript
//ex: get size of a map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.size);         //3
```

### VIII.6 has
> Check existing of an element in a map

***SYNTAX***
```javascript
has(key)
```

***EXAMPLE*** 
```javascript
//ex: check if apples in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.has("apples"));  //true
```

### VIII.7 clear
> Remove all elements in a set

***SYNTAX***
```javascript
clear()
```

***EXAMPLE*** 
```javascript
//ex: Remove all elements in a set
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.clear());      //undefined
```

### VIII.8 for
***EXAMPLE*** 
```javascript
//ex1: Iterate through the map using keys
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var key of fruits.keys()) {
  console.log(key);
}

//ex2: Iterate through the map using values
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var value of fruits.values()) {
  console.log(value);
}

//ex3: Iterate through the map using pair of keys and values
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var [key, value] of fruits.entries()) {
  console.log(key, value);
}
```

### VIII.9 forEach
***EXAMPLE*** 
```javascript
//ex: Iterate through the map using forEach
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.forEach(function(value, key){
  console.log(key, value);
})
```

## IX. try catch finally
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

***EXAMPLE***
```javascript
//ex1
try {
   console.log("Hello");
   someFunction();
   console.log("World");
} catch (error) {   
   console.log(error.message);
} 
//Hello someFunction is not defined

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
//Hello someFunction is not defined !

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
console.log(foo());             //false;
```

***USING***
- ***throw:*** create a custom error. The exception can be a string, number, boolean, or an object.

***EXAMPLE***
```javascript
//ex
let x = prompt("Please enter x");
try {
  if(x == "") throw "empty";
  if(isNaN(x)) throw "Not a Number";
  x = Number(x);
  if(x > 0) throw "Positive";
  if(x < 0) throw "Negative";
} catch (error) {
  console.log("error:", error);
}

//if x = 10, the output is "error: Positive";
//if x = -10, the output is "error: Negative";
//if x = "", the output is "error: empty";
//if x = string, the output is "error: Not a Number";
```

---
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
---

## X. Scope, Closure and strict mode
### X.1 Scope 
> There are 3 types of scopes:
>   Block scope
>   Function scope
>   Global  scope

#### Block scope
***EXAMPLE***
```javascript
//ex1: cannot access x out of block scope if using let
{
  let x = 2;
  console.log(x);           //2
}
console.log(x);             //Error

//ex2:
{
  var x = 2;
  console.log(x);           //output: 2
}
console.log(x);             //output: 2
```

#### Function scope
***EXAMPLE***
```javascript
//ex
function showX(){
  let x = 0;
  return x;
}
console.log(x);             //Error
```

#### Global scope
***EXAMPLE***
```javascript
//ex
let x = 2;
console.log(x);             //2
function showX(){
  console.log(x);           //2
}
console.log(x);             //2
```

***NOTE***
---
- With let, const, var, we are able to access from the inside code block
***EXAMPLE***
```javascript
let x = 2;
{
  {    
    console.log(x);       //2
  }
}
```
- We can declare the same variables
***EXAMPLE***
```javascript
let x = 2;
{
  {    
    let x = 10;
    console.log(x);       //10            
  }
}
```
- Even so
***EXAMPLE***
```javascript
let x = 2;
{
  {    
    console.log(x);     //Cannot access 'x' before initialization because hoisting     
    let x = 10;
  }    
}
```
---

### X.2 Closure 
> A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

***EXAMPLE***
```javascript
//ex
function counter()
{
  let i = 0;
  function increase() {
    return ++i;
  }
  return increase;
}

let c = counter();
console.log(c());         //1
console.log(c());         //2
console.log(c());         //3
```

***NOTE***
---
- Show private feature
***EXAMPLE***
```javascript
//Assuming we want to add, edit, or delete a person in a people array
const app = {
    people : [],    
    add(person)  {
      this.people.push(person);
    },
    edit(index, person) {
      this.people[index] = person;
    },
    delete(index) {
      this.people.splice(index,1);
    }
}
//but if we assign app.people = null, and we add a new person to array people
//> app.people = null
//> app.add({firstName:"John", lastName:"Doe"})       //Uncaught TypeError: Cannot read properties of null (reading 'push')

//To solve this problem, we use closure
function createApp() {
  const people = [];
  return {    
    get(index){
      return people[index];
    },
    add(person)  {
      people.push(person);
    },
    edit(index, person) {
      people[index] = person;
    },
    delete(index) {
      people.splice(index,1);
    }
  }  
};
//> app = createApp()
//> app.add({firstName:"John", lastName:"Doe"})       
//> app.add({firstName:"Steve", lastName:"Job"})       
//> app.add({firstName:"Bill", lastName:"Gate"})  
//> app.get(1)                                      //{firstName: 'Steve', lastName: 'Job'}
```
---
### X.3 Strict mode
> Prevent unsafe codes or potential errors when using global variables
>   must be used var, let, const to declare a new variable
>   cannot use private, protected, etc
>   cannot use the same properties in a function
>   cannot use a function out of a block code
***EXAMPLE***
```javascript
//ex1: must be used var, let, const to declare a new variable
'use strict';
x = 2;        //Uncaught ReferenceError: x is not defined
//or 
'use strict';
function showX() {
  x = 2;      //Uncaught ReferenceError: x is not defined
}

//ex2: cannot use private, protected, etc
'use strict';
var private = 2;  //Uncaught SyntaxError: Unexpected strict mode reserved word

//ex3: cannot use the same properties in a function
'use strict';
function sum(a, a) {    //Uncaught SyntaxError: Duplicate parameter name not allowed in this context
  return a + a; 
}

//ex4: cannot use a function out of a block code
'use strict';
{
	function sum(a, b) {
  		return a + b; 
  	}  
}
console.log(sum(6,9));		//Uncaught ReferenceError: sum is not defined
```

## XI. Hoisting
:triangular_flag_on_post: Features
> In JS, a variable can be declared after it has been used. Var, let, const, and function can be hoisted, but let and const are in Temporal Dead Zone.
```javascript
//ex
x = 5;
console.log(x);             //output: 5
var x;

//ex
var x;
console.log(x);             //output: undefined
x = 5;

//ex
x = 5;
console.log(x);             //ouput: Uncaught ReferenceError: Cannot access 'x' before initialization because x is in Temporal Dead Zone
let x;

//ex
x = 5;
console.log(x);             //ouput: Uncaught SyntaxError: Missing initializer in const declaration  because x is in Temporal Dead Zone
const x;

//ex
console.log(sum(2,3));      //ouput: 5
function sum(a, b) {
  return a + b;
}
```
***NOTE***
---
- Misunderstood
```javascript
//ex
let c = counter();
console.log(c());           //output: 1
function counter() {
  let i = 0;
  return increase;
  function increase() {
    return ++i;
  }
}
```
---
## XII. Arrow Function and IIFE
### XII.1 Arrow Function
Allow us to write shorter function syntax:
:triangular_flag_on_post: without parameters
```javascript
function hello() {
  return "Hello World!!!";
}
console.log(hello());

//or

hello = function() {
  return "Hello World!!!";
}
console.log(hello());

//or 

hello = () => {
  return "Hello World!!!";
}
console.log(hello());

//or 

hello = () => "Hello World!!!";
console.log(hello());
```

:triangular_flag_on_post: with parameters
```javascript
function hello(val) {
  return val + " World!!!";
}
console.log(hello("Hello"));

//or

hello = function(val) {
  return val + " World!!!";
}
console.log(hello("Hello"));

//or 

hello = (val) => {
  return val + " World!!!";
}
console.log(hello("Hello"));

//or 

hello = (val) => val + " World!!!";
console.log(hello("Hello"));

//or 

hello = val => val + " World!!!";
console.log(hello("Hello"));
```

:triangular_flag_on_post: More Examples
```javascript
//ex
myObject = (a, b) => ({a : a, b : b});

//ex
logger = log => console.log(log);
logger("Hello World!!!");
```

## XII.2 IIFE (Immediately Invoked Function Expression)
> A function is excuted after creation
```javascript
;(function(a, b){
      console.log(a + b);
})(10, 20);                                //output: 30

//or

;((a,b) => console.log(a + b))(10, 20);    //output: 30
```

***NOTE***
---
- Cannot call the outside of the IIFE function
```javascript
;(function myFunction(){
  console.log("Hello World");
})();
myFunction();                             //output: Uncaught ReferenceError: myFunction is not defined
```
- Show private feature
```javascript
//ex
//Assuming we want to add, edit, or delete a person in a people array
const app = {
    people : [],    
    add(person)  {
      this.people.push(person);
    },
    edit(index, person) {
      this.people[index] = person;
    },
    delete(index) {
      this.people.splice(index,1);
    }
}
//but if we assign app.people = null, and we add a new person to array people
//> app.people = null
//> app.add({firstName:"John", lastName:"Doe"})       //output: Uncaught TypeError: Cannot read properties of null (reading 'push')

//To solve this problem, we use IIFE
const app = (function() {
  const people = [];
  return {    
    get(index){
      return people[index];
    },
    add(person)  {
      people.push(person);
    },
    edit(index, person) {
      people[index] = person;
    },
    delete(index) {
      people.splice(index,1);
    }
  }  
})();
//> app.people = null
//> app.add({firstName:"John", lastName:"Doe"})       
//> app.add({firstName:"Steve", lastName:"Job"})       
//> app.add({firstName:"Bill", lastName:"Gate"})  
//> app.get(1)                                      //output: {firstName: 'Steve', lastName: 'Job'}
```
---

## XIII. Callback, Promise, Async/Await
### XIII.1 Callback
> A callback function is a function passed into another function as an argument.
```javascript
//ex
function myFunction(param) {
  param("Hello World!!!");
}

function myCallback(value) {
  console.log(value);
}

myFunction(myCallback);         //output: Hello World

//ex
function Calculator(param) {
  console.log(param(10, 2));
}

function multiplication(a, b) {
  return a * b;
}

function addition(a, b) {
  return a + b;
}

function substraction(a, b) {
  return a - b;
}

function division(a, b) {
  return a / b;
}

Calculator(multiplication);         //ouput: 20
Calculator(addition);               //ouput: 12
Calculator(substraction);           //ouput: 8
Calculator(division);               //ouput: 5
```

### XIII.2 Promise 
Let's imagine we're trying to make a burger. To make a burger, we need to go through the following steps:
1. Get beef
2. Cook the beef
3. Get burger buns
4. Put the cooked beef between the buns
5. Server the burger

- ***Synchronous JavaScript:*** every statement of the code gets executed one by one.
```javascript
//Make a burger in synchronus
const makeBurger = () => {
  const beef = getBeef();
  const cookedBeef = cookBeef(beef);
  const buns = getBuns();
  const burger = putBeefBetweenBuns(buns, cookedBeef);
  return burger;
};

// Make and serve the burger
const burger = makeBurger();
serve(burger);
```

- ***Asynchronous JavaScript:*** the program to be executed immediately where the synchronous code will block further execution of the remaining code until it finishes the current one.
```javascript
// Make a burger in asynchronous.
const makeBurger = nextStep => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, cookedBeef, function(burger) {
          nextStep(burger)
        })
      })
    })
  })
}

// Make and serve the burger
makeBurger(function (burger) => {
  serve(burger)
})
```
***Warning:*** meet ***the callback hell*** which is multiple functions are asynchronous. To solve the callback hell issue, using promises.

:triangular_flag_on_post: Promise syntax
```javascript
let promise = new Promise(              //Pending
  //Excutor
  function(resolve, reject){}           ///resolve -> success, reject -> error
);

promise
  .then(function(success){              //Fullfilled  
  })
  .catch(function(error){               //Rejected
  })
  .finally(function(){
  })
```
:triangular_flag_on_post: An example about promise
```javascript
//ex
let success = true;
let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    if(success) {
      resolve("Handle a successful action");
    } else {
      reject(new Error("Handle an error action"));
    }
  }, 2000)  
});

promise
  .then(function(success){
    console.log(success);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(function(){
    console.log('Done.');
  });
  
/**
  * output:
  * if success = true, the output is Handle a successful action
  *                                     Done.
  * if success = false, the output is Error: Handle an error action
*                                       Done.
  */
```
:triangular_flag_on_post: Promise chain
```javascript
//ex
let promise = new Promise(function(resolve, reject){
  resolve(1);
});

promise
  .then(function(success){              //receive 1
    setTimeout(function(){
      console.log(success);             //print 1
    }, 1000);
    return success;                     //return 1
  })
  .then(function(success){              //receive 1
    ++success;                          //increase 2
    setTimeout(function(){
      console.log(success);             //print 2
    }, 2000);
    return success;                     //return 2
  })
  .then(function(success){              //receive 2
    ++success;                          //increase 3
    setTimeout(function(){
      console.log(success);             //print 3
    }, 3000);
    return success;                     //return 3
  })
  .then(function(success){              //receive 3
    ++success;                          //increase 4
    setTimeout(function(){
      console.log(success);             //print 4
    }, 4000);
    return success;                     //return 4
  })
  .catch(function(error){
    console.log(error);
  })  
  .finally(function(){
    setTimeout(function(){
      console.log("Done");
    }, 5000);
  });
//output: 1 2 3 4 Done
```
:triangular_flag_on_post: Nested promise
```javascript
//ex
let promise = new Promise(function(resolve){
  resolve(1);
});

promise
  .then(function(success){              //receive 1
    console.log(success)                //print 1
    return new Promise(function(resolve){
      setTimeout(function(){
        resolve(++success);             //increase 2
      }, 1000)
    })  
  })
  .then(function(success){            //receive 2
    console.log(success)              //print 2
    return new Promise(function(resolve){      
      setTimeout(function(){
        resolve(++success);           //increase 3
      }, 1000)
    })  
  })
  .then(function(success){            //receive 3
    console.log(success)              //print 3
    return new Promise(function(resolve){      
      setTimeout(function(){
        resolve(++success);           //increase 4
      }, 1000)
    })  
  })
  .then(function(success){            //receive 4
    console.log(success)              //print 4
    return new Promise(function(resolve){      
      setTimeout(function(){
        resolve(++success);           //increase 5
      }, 1000)
    })  
  })
  .catch(function(error){
    console.log(error);
  })  
  .finally(function(){
    console.log("Done");
  });
//output: 1 2 3 4 Done
```
:triangular_flag_on_post: Shorter nested promise
```javascript
//ex
function sleep(value, ms) {
  return new Promise(function(resolve){    
    setTimeout(function() {
      resolve(value)
    }, ms);
  })
}

sleep(1, 1000)
  .then(function(success){
    console.log(success);
    return sleep(++success, 1000);
  })
  .then(function(success){
    console.log(success);
    return sleep(++success, 1000);
  })
  .then(function(success){
    console.log(success);
    return sleep(++success, 1000);
  })
  .then(function(success){
    console.log(success);
    return sleep(++success, 1000);
  })
  .catch(function(error){
    console.log(error);
  })  
  .finally(function(){
    console.log("Done");
  });
//output: 1 2 3 4 Done
```
:triangular_flag_on_post: Promise methods

:heavy_check_mark: Promise resolve
```javascript
//ex
let promise = new Promise(function(resolve){
  resolve(1);
});

promise
  .then(function(success){
    console.log("success", success)
});

//Equivalent
//Promise resolve
Promise.resolve(1)
  .then(function(success){
    console.log("success", success)
});
```
:heavy_check_mark: Promise reject
```javascript
//ex
let promise = new Promise(function(resolve, reject){
  reject(1);
});

promise
  .then(function(success){
    console.log("success", success);
  })
  .catch(function(error){
    console.log("error", error);
  });

//Equivalent
//Promise reject
Promise.reject(1)
  .catch(function(error){
    console.log("error", error);
});
```

:heavy_check_mark: Promise all
```javascript
//ex
let promise_1 = new Promise(function(resolve){
  setTimeout(function(){resolve([1, 2])}, 1000);
})
let promise_2 = new Promise(function(resolve){
  setTimeout(function(){resolve([3, 4, 5])}, 4000);
})
//Promise all
Promise.all([promise_1, promise_2])
.then(function(result){
  console.log(result[0].concat(result[1]));
})
//output: [1,2,3,4,5]
```
## XIV. ECMAScript 6
### XIV.1 Template literals

Use back-ticks (``) rather than the quotes ("") to define a string
```javascript
//ex
var text = `Hello World!`;

//ex
var text =
`The quick
brown fox
jumps over
the lazy dog`;

//ex
var firstName = "John";
var lastName = "Doe";
var text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);                //output: Welcome John, Doe!

//ex
var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);                //output: Total: 12.50
```
### XIV.2 Default parameter
Assign a default value to the parameter
```javascript
//ex
function sum(x = 1, y = 2) {
  console.log("Total: ", x + y);
}

sum();              //output: 3
```
### XIV.3 Enhanced object literals
Shorter way to define an object
```javascript
//ex
var firstName = "John";
var lastName = "John";
var person = {
  firstName: firstName,
  lastName: lastName,
  getFullName : function() {
    return firstName + " " + lastName;
  }
}

//rewrite 

var firstName = "John";
var lastName = "John";
var person = {
  firstName,
  lastName,
  getFullName() {
    return firstName + " " + lastName;
  }
}

//ex
var varName = 'first';
function computeNameType( type ) {
  return type + 'Name';
}

var person = {
  [ varName + 'Name' ] : 'John',
  [ computeNameType( 'last' ) ]: 'Smith'
};
```
### XIV.4 Destructuring
:triangular_flag_on_post: Destructing arrays
```javascript
//ex
var vehicles = ['mustang', 'f-150', 'expedition'];

//old way
var car = vehicles[0];
var truck = vehicles[1];
var suv = vehicles[2];
//new way
var [car, truck, suv] = vehicles;

//ex
function calculate(a, b) {
  var add = a + b;
  var subtract = a - b;
  var multiply = a * b;
  var divide = a / b;

  return [add, subtract, multiply, divide];
}

var [add, subtract, multiply, divide] = calculate(4, 7);
```
:triangular_flag_on_post: Destructing objects
```javascript
//ex
var vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

//old way
function myVehicle(vehicle) {
  var message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
}

//new way
function myVehicle({type, color, brand, model}) {
  var message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}
```
### XIV.5 Spread Operator
The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
```javascript
//ex
var numbersOne = [1, 2, 3];
var numbersTwo = [4, 5, 6];
var numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)                //output: [1, 2, 3, 4, 5, 6]

//ex
var numbers = [1, 2, 3, 4, 5, 6];
var [one, two, ...rest] = numbers;
console.log(rest);                          //output: 3, 4, 5, 6

//ex
var myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
};

var updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
};

var myUpdatedVehicle = {...myVehicle, ...updateMyVehicle};
console.log(myUpdatedVehicle);
```
### XIV.6 Modules 
[Read More](https://javascript.info/modules-intro)

Note: if(a), the value of variable a is empty string, 0, null, false, undefined, NaN

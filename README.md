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
- [V. Math and Math Methods](#v-math-and-math-methods)
  - [V.1 round](#v1-round)
  - [V.2 ceil](#v2-ceil)
  - [V.3 floor](#v3-floor)
  - [V.4 trunc](#v4-trunc)
  - [V.5 sign](#v5-sign)
  - [V.6 pow](#v6-pow)
  - [V.7 sqrt](#v7-sqrt)
  - [V.8 abs](#v8-abs)
  - [V.9 sin](#v9-sin)
  - [V.10 cos](#v10-cos)
  - [V.11 min](#v11-min)
  - [V.12 max](#v12-max)
  - [V.13 random](#v13-random)
  - [V.14 log](#v14-log)
  - [V.15 log2](#v15-log2)
  - [V.16 log10](#v16-log10)
- [VI. Array and Array Methods](#vi-array-and-array-methods)
  - [VI.1 Create an array](#vi1-create-an-array)
  - [VI.2 for](#vi2-for)
  - [VI.3 for..in](#vi3-forin)
  - [VI.4 for..of](#vi4-forof)
  - [VI.5 forEach](#vi5-foreach)
  - [VI.6 length](#vi6-length)
  - [VI.7 toString](#vi7-tostring)
  - [VI.8 join](#vi8-join)
  - [VI.9 pop](#vi9-pop)
  - [VI.10 push](#vi10-push)
  - [VI.11 shift](#vi11-shift)
  - [VI.12 unshift](#vi12-unshift)
  - [VI.13 splice](#vi13-splice)
  - [VI.14 concat](#vi14-concat)
  - [VI.15 slice](#vi15-slice)
  - [VI.16 Add elements to an array](#vi16-add-elements-to-an-array)
  - [VI.17 Delete elements from an array](#vi17-delete-elements-from-an-array)
  - [VI.18 Delete an element by using the JavaScript operator delete](#vi18-delete-an-element-by-using-the-javascript-operator-delete)
  - [VI.19 Sort](#vi19-sort)
  - [VI.20 Find min, max](#vi20-find-min-max)
  - [VI.21 forEach, reduce, indexOf, find](#vi21-foreach-reduce-indexof-find)
  - [VI.22 every, some, includes](#vi22-every-some-includes)
  - [VI.23 filter, map](#vi23-filter-map)
- [VII. Object and more](#vii-object-and-more)
  - [VII.1 Create an object](#vii1-create-an-object)
  - [VII.2 Access JS object](#vii2-access-js-object)
  - [VII.3 Add new properties for the object](#vii3-add-new-properties-for-the-object)
  - [VII.4 Edit properties for the object](#vii4-edit-properties-for-the-object)
  - [VII.5 Delete properties of the object](#vii5-delete-properties-of-the-object)
  - [VII.6 Copy an object](#vii6-copy-an-object)
  - [VII.7 JS objects are mutable.](#vii7-js-objects-are-mutable)
  - [VII.8 for...in](#vii8-forin)
  - [VII.9 for...of](#vii9-forof)
  - [VII.10 forEach](#vii10-foreach)
  - [VII.11 Nested objects and function in an object](#vii11-nested-objects-and-function-in-an-object)
  - [VII.12 JSON.stringify](#vii12-jsonstringify)
  - [VII.13 JS Object constructor](#vii13-js-object-constructor)
- [VIII. Set and Set methods](#viii-set-and-set-methods)
  - [VIII.1 Create a set](#viii1-create-a-set)
  - [VIII.2 Add an element in a set](#viii2-add-an-element-in-a-set)
  - [VIII.3 Delete an element in a set](#viii3-delete-an-element-in-a-set)
  - [VIII.4 size](#viii4-size)
  - [VIII.5 has](#viii5-has)
  - [VIII.6 clear](#viii6-clear)
  - [VIII.7 for](#viii7-for)
  - [VIII.8 forEach](#viii8-forEach)
- [IX. Map and Map methods](#ix-map-and-map-methods)
  - [IX.1 Create a map](#ix1-create-a-map)
  - [IX.2 Add an element in a map](#ix2-add-an-element-in-a-map)
  - [IX.3 Get an element in a map](#ix3-get-an-element-in-a-map)
  - [IX.4 Delete an element in a map](#ix4-delete-an-element-in-a-map)
  - [IX.5 size](#ix5-size)
  - [IX.6 has](#ix6-has)
  - [IX.7 clear](#ix7-clear)
  - [IX.8 for](#ix8-for)
  - [IX.9 forEach](#ix9-foreach)
- [X. try catch and Unit test](#x-try-catch-and-unit-test)
  - [X.1 try catch finally](#x1-try-catch-finally)
  - [X.2 throw](#x2-throw)
  - [X.3 Unit test](#x3-unit-test)
- [XI. Scope, Closure, Strict Mode, Hoisting, this keyword, and binding](#xi-scope-closure-and-strict-mode-hoisting-and-this-keyword)
  - [XI.1 Scope](#xi1-scope)
  - [XI.2 Closure](#xi2-closure)
  - [XI.3 Strict mode](#xi3-strict-mode)
  - [XI.4 Hoisting](#xi4-hoisting)
  - [XI.5 this keyword](#xi5-this-keyword)
  - [XI.6 binding](#xi6-binding)
- [XII. Function, Arrow Function, Callback and IIFE](#xii-function-arrow-function-callback-and-iife)
  - [XII.1 Function](#xii1-function)  
  - [XII.2 Arrow Function](#xii2-arrow-function)
  - [XII.3 Callback](#xii3-callback)
  - [XII.4 IIFE (Immediately Invoked Function Expression)](#xii4-iife-immediately-invoked-function-expression)
- [XIII. Promise, Async/Await](#xiii-callback-promise-asyncawait)
  - [XIII.1 Promise](#xiii1-promise)
  - [XIII.2 Asyn/Await](#xiii2-asyn-await)
- [XIX. ECMAScript 6](#xiv-ecmascript-6)
  - [XIX.1 Template literals](#xix1-template-literals)
  - [XIX.2 Default parameter](#xix2-default-parameter)
  - [XIX.3 Enhanced object literals](#xix3-enhanced-object-literals)
  - [XIX.4 Destructuring](#xix4-destructuring)
  - [XIX.5 Spread Operator](#xix5-spread-operator)
  - [XIX.6 Modules](#xix6-modules)
- [XX. HTML DOM](#xx-html-dom)  
  - [XX.1 Find HTML Elements](#xx1-find-html-elements)
    - [document.getElememtById](#document-getelememtbyid)
    - [document.getElementsByTagName](#document-getelementsbytagname)
    - [document.getElementsByClassName](#document-getelementsbyclassname)
    - [document.querySelector](#document-queryselector)
    - [document.querySelectorAll](#document-queryselectorall)
  - [XX.2 Handle on HTML elements]  
    - [element.id](#element-id)  
    - [element.attributes](#element-attributes) 
    - [element.attributes](#element-attributes)  
    - [element.tagName](#element-tagName)
    - [element.title](#element-title)  
    - [element.children](#element-children)
    - [element.classList](#element-classList)
    - [element.className](#element-className)
    - [element.innerText](#element-innerText) 
    - [element.outerText](#element-outerText)  
    - [node.innerHTML](#node-innerhtml)
    - [element.outerHTML](#element-outerHTML)
    - [element.nodeName](#element-nodeName)
    - [element.nodeValue](#element-nodeValue)
    - [element.matches](#element-matches)    
    - [element.textContent](#element-textContent)
    - [element.style.property ](#element-style-property)    
  - [XX.3 Add and delete Elements](#xx3-add-and-delete-elements)
    - [DOM nodes](#dom-nodes)
    - [Node Relationships](#node-relationships)    
    - [document.write](#document-write)
    - [element.focus](#element-focus)
    - [document.createElement](#document-createelement)    
    - [element.setAttribute](#element-setattribute)
    - [element.getAttribute](#element-getattribute)    
    - [element.hasAttribute](#element-hasattribute)
    - [element.removeAttribute](#element-removeAttribute)
    - [element.setAttributeNode](#element-setattributenode)
    - [element.getAttributeNode](#element-getattributenode)
    - [element.removeAttributeNode](#element-removeattributenode)
    - [node.appendChild ](#node-appendchild)
    - [node.removeChild](#node-removechild)
    - [node.replaceChild](#node-replacechild)
    - [node.firstChild](#node-firstchild)
    - [node.lastChild](#node-lastchild)    
    - [node.nextSibling](#node-nextSibling)
    - [node.previousSibling](#node-previousSibling)
    - [node.parentNode](#node-parentNode)
    - [node.parentElement](#node-parentElement)
    - [node.childNodes](#node-childNodes)
    - [node.insertBefore](#node-insertBefore)
    - [node.hasChildNodes](#node-hasChildNodes)
    - [element.append ](#element-append)
    - [element.remove ](#element-remove)
    - [element.prepend ](#element-prepend)
    - [element.before ](#element-before)
    - [element.after ](#element-after)
    - [element.firstElementChild](#element-firstElementChild)
    - [element.lastElementChild](#element-lastElementChild)
    - [element.previousElementSibling](#element-previousElementSibling)
    - [element.nextElementSibling](#nelement-extElementSibling)
  - [XX.4 Add Events Handlers](#xx4-add-events-handlers)  
    - [element.onclick](#element-onclick)
    - [element.addEventListener](#element-addeventlistener)    
    - [element.removeEventListener](#element-removeEventListener)    
- [XXI. jQuery](#xxi-jquery)  
- [XXII. AJAX, JSON, RestAPI, APIs](xvi-unit-test)
- [XXIII. JS Graphic]
# References
- https://udemy.com/
- https://fullstack.edu.vn/
- https://www.w3schools.com/
- https://developer.mozilla.org/

# Projects
- https://codepen.io/michaelphamngo/pen/XWajYKY

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
- length <= 0, return empty string

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

# V. Math and Math Methods
<table>  
  <tr>
    <td>Property</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>Math.PI</td>
    <td>Returns a Pi number</td>
  </tr>   
  <tr>
    <td>Math.SQRT2</td>
    <td>Returns the square root of 2</td>
  </tr> 
</table>

## V.1 round
> Returns the nearest integer.

***SYNTAX***
```javascript
Math.round(value)
```

***Example***
```javascript
//ex
Math.round(4.9);    //5
Math.round(4.7);    //5
Math.round(4.4);    //4
Math.round(4.2);    //4
Math.round(-4.2);   //-4
```

## V.2 ceil
> Returns the value of x rounded up to its nearest integer.

***SYNTAX***
```javascript
Math.ceil(value)
```

***Example***
```javascript
//ex
Math.ceil(4.7);     //5 
Math.ceil(-4.2);    //-4
Math.ceil(4.4);     //5
Math.ceil(4.2);     //5 
Math.ceil(4.9);     //5 
```

## V.3 floor
> Returns the value of x rounded down to its nearest integer.

***SYNTAX***
```javascript
Math.floor(value)
```

***Example***
```javascript
//ex
Math.floor(4.9);    //4 
Math.floor(4.7);    //4 
Math.floor(4.4);    //4 
Math.floor(4.2);    //4 
Math.floor(-4.2);   //-5
```

## V.4 trunc
> Returns the integer part of x.

***SYNTAX***
```javascript
Math.trunc(value)
```

***Example***
```javascript
//ex
Math.trunc(4.9);    //4
Math.trunc(4.7);    //4
Math.trunc(4.4);    //4
Math.trunc(4.2);    //4
Math.trunc(-4.2);   //-4
```

## V.5 sign
> Returns if x is negative, null or positive.

***SYNTAX***
```javascript
Math.sign(value)
```

***Example***
```javascript
//ex
Math.sign(-4);    //-1
Math.sign(0);     //0
Math.sign(4);     //1
```

## V.6 pow
> Returns the value of x to the power of y.

***SYNTAX***
```javascript
Math.pow(x, y)
```

***Example***
```javascript
//ex
Math.pow(8, 2);   //64
```

## V.7 sqrt
> Returns the square root of x.

***SYNTAX***
```javascript
Math.sqrt(value)
```

***Example***
```javascript
//ex
Math.sqrt(64);    //8
```

## V.8 abs
> Returns the absolute (positive) value of x.

***SYNTAX***
```javascript
Math.abs(value)
```

***Example***
```javascript
//ex
Math.abs(-4.7);   //4.7
```

## V.9 sin
> Returns the sine (a value between -1 and 1) of the angle x (given in radians).

***SYNTAX***
```javascript
Math.sin(value)
```

***Example***
```javascript
//ex
Math.sin(90 * Math.PI / 180);     //1 (the sine of 90 degrees)
```

## V.10 cos
> Returns the cosine (a value between -1 and 1) of the angle x (given in radians).

***SYNTAX***
```javascript
Math.cos(value)
```

***Example***
```javascript
//ex
Math.cos(0 * Math.PI / 180);     //1 (the cos of 0 degrees)
```

## V.11 min
> Find the lowest value in a list of arguments.

***SYNTAX***
```javascript
Math.min(...numsArray) 
//or
Math.min(num1, num2, ..., numn) 
```

***Example***
```javascript
//ex
Math.min(0, 150, 30, 20, -8, -200);  //-200
```

## V.12 max
> Find the largest value in a list of arguments.

***SYNTAX***
```javascript
Math.max(...numsArray) 
//or
Math.max(num1, num2, ..., numn) 
```

***Example***
```javascript
//ex
Math.min(0, 150, 30, 20, -8, -200);  //150
```

## V.13 random
> Returns a random number between 0 (inclusive), and 1 (exclusive) or in range [0, 1).

***SYNTAX***
```javascript
Math.random();
```

## V.14 log
> Returns the natural logarithm of value.

***SYNTAX***
```javascript
Math.log(value);
```

## V.15 log2
> Returns the base 2 logarithm of value.

***SYNTAX***
```javascript
Math.log2(value);
```

## V.16 log10
> Returns the base 10 logarithm of value.

***SYNTAX***
```javascript
Math.log10(value);
```

# VI. Array and Array Methods

## VI.1 Create an array

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

## VI.2 for
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

## VI.3 for..in
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

## VI.4 for..of
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

## VI.5 forEach
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

## VI.6 length
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

## VI.7 toString
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

## VI.8 join
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

## VI.9 pop
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

## VI.10 push
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

## VI.11 shift
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

## VI.12 unshift
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

## VI.13 splice
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

## VI.14 concat
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

## VI.15 slice
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

## VI.16 Add elements to an array
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

## VI.17 Delete elements from an array
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

## VI.18 Delete an element by using the JavaScript operator delete
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

## VI.19 Sort

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

## VI.20 Find min, max
> Find min, max

***EXAMPLE***
```javascript
//ex
var arr = [6, 9, 4, 8, 3, 10, 1, 2];
console.log(Math.max(...arr));        //10
console.log(Math.min(...arr));        //1
```

## VI.21 forEach, reduce, indexOf, find
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

## VI.22 every, some, includes
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

## VI.23 filter, map
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

## VII. Object and more

### VII.1 Create an object

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

### VII.2 Access JS object
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

### VII.3 Add new properties for the object
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

### VII.4 Edit properties for the object
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

### VII.5 Delete properties of the object
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

### VII.6 Copy an object
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

### VII.7 JS objects are mutable. 
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

### VII.8 for...in

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

### VII.9 for...of

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

### VII.10 forEach

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

### VII.11 Nested objects and function in an object
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

 ### VII.12 JSON.stringify
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
 
### VII.13 JS Object constructor
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

## VIII. Set and Set methods
> A collection of unique values
> Each value can only occur once in a Set

***EXAMPLE***
```javascript
//ex
var number = new Set([0,1,2,3,0,1,2,3]);        
console.log(number);                        //{0, 1, 2, 3}
```

### VIII.1 Create a set
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

### VIII.2 Add an element in a set
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

### VIII.3 Delete an element in a set
***EXAMPLE***
```javascript
//ex: Delete an element in a set
var letters = new Set(["a","b","c"]);
letters.delete("a");
console.log(letters);                        //{"b", "c"}
```

### VIII.4 size
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

### VIII.5 has
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

### VIII.6 clear
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

### VIII.7 for
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

### VIII.8 forEach
***EXAMPLE***
```javascript
//ex: loop all elements using forEach
var letters = new Set(["a","b","c"]);
letters.forEach(function(value){
  console.log(value);
})
```

## IX. Map and Map methods
> A Map holds key-value pairs
> A Map remembers the original insertion order of the keys

### IX.1 Create a map
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

### IX.2 Add an element in a map
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

### IX.3 Get an element in a map
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

### IX.4 Delete an element in a map
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

### IX.5 size
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

### IX.6 has
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

### IX.7 clear
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

### IX.8 for
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

### IX.9 forEach
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

## X. try catch and Unit test
### X.1 try catch finally
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

//ex4: check if dividing by zero
function division(numerator, denominator) {
  try {
    if(!(typeof numerator === 'number') || !(typeof denominator === 'number') ) {
      throw new TypeError('The inputs have to be numbers');
    }

    if(denominator === 0) {
      throw new RangeError('The denominator is not a zero');
    }

    console.log(`${numerator} / ${denominator} = ${ numerator/denominator}`);
  } catch (e) {
    console.log(e);
  }
}
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

### X.2 throw
> custom exceptions

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

### X.3 Unit test
  - Setup Jest (https://jestjs.io/docs/getting-started)
  - Common Jest Matchers (https://jestjs.io/docs/using-matchers#common-matchers)
  - Handle asynchronous code (https://jestjs.io/docs/setup-teardown#repeating-setup-for-many-tests)
  - Example (https://github.com/MichaelPhamNgo/Review-Javascript/tree/main/X.%20Try%20Catch%20and%20Unit%20Test)

## XI. Scope, Closure, Strict Mode, Hoisting, and this keyword
### XI.1 Scope 
- There are 5 types of scopes:
  - Block scope
  - Function scope
  - Module scope
  - Global  scope
  - Lexical scope

#### Block scope
> A code block in JavaScript defines a scope for variables declared using let and const

***EXAMPLE***
```javascript
//ex1: cannot access x out of block scope if using let
{
  const x = 2;
  console.log(x);           //2
}
console.log(x);             //ReferenceError

//ex2:
if (true) {  
  const message = 'Hello';
  console.log(message);     //Hello
}
console.log(message);       //ReferenceError
```

> but var keyword is not block scoped

***EXAMPLE***
```javascript
//ex
{
  var x = 2;
  console.log(x);           //2
}
console.log(x);             //2
```

#### Function scope
> A function in JavaScript defines a scope for variables declared using var, let and const

***EXAMPLE***
```javascript
//ex
function run() {  
  const two = 2;
  let count = 0;
  var message = 'Hello World';
  function run2() {}
  console.log(two);       //2
  console.log(count);     //0
  console.log(message);   //Hello World
  console.log(run2);      //function
}
run();
console.log(two);         //ReferenceError
console.log(count);       //ReferenceError
console.log(message);     //ReferenceError
console.log(run2);        //ReferenceError
```

#### Module scope
> The module scope makes the module encapsulated. It means we cannot access a "private" variable of a module from outside. The module scope protects the variables from being accessed outside except for export these variables. 

***EXAMPLE***
```javascript
//ex
//message.js
const message = "Hello World";
console.log(message);       //Hello World

//showMessage.js 
import './message';
console.log(message);       ///ReferenceError
```


#### Global scope
> The global scope is the outermost scope. It is accessible from any inner scope. let, const, and var are accessible from the inside code block.

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

#### Lexical scope
> Lexical scope means a nested group  of function (function within a function), the inner functions have to access to the variables and other resources of their parent scope.

***EXAMPLE***
```javascript
//ex
function outerFunction() {
  const message = 'Hello World';
  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();
```

### XI.2 Closure 
> A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

***EXAMPLE***
```javascript
//ex1:
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

//ex2:
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add2 = makeAdder(2);
add2(3);                   //5
add2(5);                   //7
const add5 = makeAdder(5);
add5(10);                  //15
add5(20);                  //25

//ex3:
function  createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }
  const message = `Current value is ${value}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement(1);
increment();      //1
increment();      //2
increment();      //3
log();            //0

//to fix the state closure
function  createIncrement(incBy) {
  let value = 0;
  function increment() {
    value += incBy;
    console.log(value);
  }  
  function log() {
    const message = `Current value is ${value}`;
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement(1);
increment();      //1
increment();      //2
increment();      //3
log();  
```

---
***NOTE***

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

### XI.3 Strict mode
> Prevent unsafe codes or potential errors when using global variables
>   must be used var, let, const to declare a new variable
>   cannot use reversed keywords such as private, protected, etc to assgin variables
>   cannot use the same parameters in a function
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

//ex3: cannot use the same parameters in a function
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

## XI.4 Hoisting
> In JS, a variable can be declared after it has been used. Var, let, const, and function can be hoisted, but let and const are in Temporal Dead Zone.

***EXAMPLE***
```javascript
//ex1
x = 5;
console.log(x);           //5
var x;

//ex2
var x;
console.log(x);           //undefined
x = 5;

//ex3
x = 5;
console.log(x);           //Uncaught ReferenceError: Cannot access 'x' before initialization 
let x;						        //because x is in Temporal Dead Zone, we cannot use x to assign 5

//ex4
x = 5;
console.log(x);           //Uncaught SyntaxError: Missing initializer in const declaration 
const x;

//ex5
greeting();
function greeting() {
	console.log("Hello World!");
}

//ex6
console.log(sum(2,3));      //5
function sum(a, b) {
  return a + b;
}

//ex7
let x = 2;
{
  {    
    console.log(x);     //Cannot access 'x' before initialization because hoisting     
    let x = 10;
  }    
}
```

---
***NOTE***
> make us Misunderstood

***EXAMPLE***
```javascript
//ex
let c = counter();
console.log(c());           //1
function counter() {
  let i = 0;
  return increase;
  function increase() {
    return ++i;
  }
}
```

## XI.5 this keyword
### this in global context
> 'this' in global context is a global object in both strict mode and non strict mode

***EXAMPLE***
```javascript
//ex1
console.log(this)           //window object

//ex2
this.message = "Hello World";
console.log(this.message);  //Hello World
console.log(window.message);//Hello World
```

### this in function context
> 'this' in function context is a global object in non strict mode or an undefined in strict mode

***EXAMPLE***
```javascript
//ex1
function helloWorld() {
  console.log(this);        //window object
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //Hello World
console.log(window.message);//Hello World

//ex2
'use strict';
function helloWorld() {
  console.log(this);            //undefined
  this.message = "Hello World"; //TypeError
}
helloWorld();

//ex3
function hello() {
  this.mess = "Hello";
  console.log(this);        //window object
  function world() {
    this.world = "World";
    console.log(this);      //window object
  }
  world();
}
hello();
console.log(this.mess);   //Hello
console.log(window.mess); //Hello

console.log(this.world);  //World
console.log(window.world);//World

//ex4
'use strict';
function hello() {
  this.mess = "Hello";      //TypeError
  console.log(this);        //undefined
  function world() {
    this.world = "World";   //TypeError
    console.log(this);      //undefined
  }
  world();
}
hello();

//except for non strict mode and strict mode are the same
[1,2,3].forEach((item) => {
    console.log(this);        //window object
    this.mess = "Hello World";
  }); 

console.log(this.mess);       //Hello World
console.log(window.mess);     //Hello World
```

### this in an arrow function
> 'this' in an arrow function is the same as 'this' from outer normal function

***EXAMPLE***
```javascript
//ex1
const helloWorld = () => {
  console.log(this);         //window object
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //Hello World
console.log(window.message);//Hello World

//ex2
'use strict';
const helloWorld = () => {
  console.log(this)         //window object
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //Hello World
console.log(window.message);//Hello World

//ex3
function hello() {  
  this.mess = "Hello";
  console.log(this);        //window
  const world = () => {
    this.world = "World";
    console.log(this);      //window
  }
  world();
}
hello();
console.log(this.mess);   //Hello
console.log(window.mess); //Hello

console.log(this.world);  //World
console.log(window.world);//World

//ex4
'use strict';
function hello() {  
  this.mess = "Hello";      //TypeError
  console.log(this);        //undefined
  const world = () => {
    this.world = "World";   //TypeError
    console.log(this);      //undefined
  }
  world();
}
hello();
```

### this in a method
> 'this' of a method is the object of that method
***EXAMPLE***
```javascript
//ex1
const app = {
  people : [],
  set : function(person) {
    console.log(this === app);      //true
    this.people.push(person);
  },
  get : function(index) {
    console.log(this === app);      //true
    return this.people.slice(index, index + 1);
  },
  size : function() {
    console.log(this === app);      //true
    return this.people.length;
  }
}

app.set({firstName: "Doe", lastName: "Joe"})
app.set({firstName: "Steve", lastName: "Job"})
app.set({firstName: "Michelle", lastName: "Joe"})
console.log(app.get(0));

//ex2
const hi = {
  message : "Hello World",
  sayXinChao : function() {
    console.log(this === hi);       //true
    console.log(this.message);      //Hello World
  },  
  sayHi() {
    console.log(this === hi);       //true
    console.log(this.message);      //Hello World
  },  
  sayHello : () => {
    console.log(this === hi);       //true
    console.log(this.message);      //Hello World
  }
}

hi.sayXinChao();
hi.sayHi();
hi.sayHello();
```


## XII. Callback, Arrow Function and IIFE
### XII.1 Callback
> A callback function is a function passed into another function as an argument.

***EXAMPLE***
```javascript
//ex1: Show Hello World using callback function
function myFunction(param) {
  param("Hello World!!!");
}

function myCallback(value) {
  console.log(value);
}

myFunction(myCallback);         //Hello World

//ex2: Calculate using callback functions
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

Calculator(multiplication);         //20
Calculator(addition);               //12
Calculator(substraction);           //8
Calculator(division);               //5
```
### XII.2 Arrow Function
> Allow us to write shorter function syntax

***EXAMPLE***
```javascript
//ex1: without parameters
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

//ex2: with parameters
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

---
***MORE***
```javascript
//ex1: Create a new object
myObject = (a, b) => ({a : a, b : b});

//ex2: Show Hello World
logger = log => console.log(log);
logger("Hello World!!!");
```

## XII.2 IIFE (Immediately Invoked Function Expression)
> A function is excuted after creation

***EXAMPLE***
```javascript
;(function(a, b){
      console.log(a + b);
})(10, 20);                                //30
//or
;((a,b) => console.log(a + b))(10, 20);    //30
```
---
***NOTE***
> Cannot call the outside of the IIFE Function

***EXAMPLE***
```javascript
;(function myFunction(){
  console.log("Hello World");
})();
myFunction();                             //Uncaught ReferenceError: myFunction is not defined
```

> Show private feature

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
//> app.get(1)                                      //{firstName: 'Steve', lastName: 'Job'}
```

## XIII. Promise, Async/Await
### XIII.1 Promise 
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

***SYNTAX***
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

***EXAMPLE***
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
  * if success = true, the output is Handle a successful action
  *                                     Done.
  * if success = false, the output is Error: Handle an error action
*                                       Done.
  */
```

#### Promise chain
***EXAMPLE***
```javascript
//ex: print 1 2 3 4 Done in every one second
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
//1 2 3 4 Done
```

#### Nested promise
***EXAMPLE***
```javascript
//ex: print 1 2 3 4 Done in every one second
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
//1 2 3 4 Done
```

#### Shorter nested promise
***EXAMPLE***
```javascript
//ex: print 1 2 3 4 Done in every one second
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
//1 2 3 4 Done
```

#### Promise methods
> Promise resolve

***EXAMPLE***
```javascript
//ex: promise resolve
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

> Promise reject

***EXAMPLE***
```javascript
//ex: promise reject
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

> Promise all

***EXAMPLE***
```javascript
//ex: promise all
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
//[1,2,3,4,5]
```
## XIX. ECMAScript 6
### XIX.1 Template literals
> Use back-ticks (``) rather than the quotes ("") to define a string

***EXAMPLE***
```javascript
//ex1
var text = `Hello World!`;

//ex2
var text =
`The quick
brown fox
jumps over
the lazy dog`;

//ex3
var firstName = "John";
var lastName = "Doe";
var text = `Welcome ${firstName}, ${lastName}!`;
console.log(text);                	//Welcome John, Doe!

//ex4
var price = 10;
var VAT = 0.25;
var total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);                	//Total: 12.50
```

### XIX.2 Default parameter
> Assign a default value to the parameter

***EXAMPLE***
```javascript
//ex1
function sum(x = 1, y = 2) {
  console.log("Total: ", x + y);
}

sum();              				//3
```
### XIX.3 Enhanced object literals
> Shorter way to define an object

***EXAMPLE***
```javascript
//ex1
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

//ex2
var varName = 'first';
function computeNameType( type ) {
  return type + 'Name';
}

var person = {
  [ varName + 'Name' ] : 'John',
  [ computeNameType( 'last' ) ]: 'Smith'
};
```

### XIX.4 Destructuring
> Destructing arrays

***EXAMPLE***
```javascript
//ex1
var vehicles = ['mustang', 'f-150', 'expedition'];

//old way
var car = vehicles[0];
var truck = vehicles[1];
var suv = vehicles[2];
//new way
var [car, truck, suv] = vehicles;

//ex2
function calculate(a, b) {
  var add = a + b;
  var subtract = a - b;
  var multiply = a * b;
  var divide = a / b;

  return [add, subtract, multiply, divide];
}

var [add, subtract, multiply, divide] = calculate(4, 7);

//ex3
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

### XIX.5 Spread Operator
> The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

***EXAMPLE***
```javascript
//ex1
var numbersOne = [1, 2, 3];
var numbersTwo = [4, 5, 6];
var numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined)                //[1, 2, 3, 4, 5, 6]

//ex2
var numbers = [1, 2, 3, 4, 5, 6];
var [one, two, ...rest] = numbers;
console.log(rest);                          //3, 4, 5, 6

//ex3
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

### XIX.6 Modules 
[Read More](https://javascript.info/modules-intro)

Note: if(a), the value of variable a is empty string, 0, null, false, undefined, NaN

## XX. HTML DOM
> When a webpage is loaded, the browser will create a **Document Object Model** called DOM. The HTML elements are ***object***. Each HTML element contains properties and events and is managed by DOM, so the HTML DOM can *get, change, add, or delete* HTML elements. HTML DOM methods are actions. HTML DOM properties are values.

***EXAMPLE***
```javascript
<script>
    document.getElementById("demo").innerHTML = "Hello World!";     //getElementById is a method, innerHTML is a property
</script>
```
### XX.1 Find HTML Elements

#### document.getElememtById
> Find an element by element id

***SYNTAX***
```javascript
document.getElementById("id")
```

***EXAMPLE***
```html
<div id="ex-id"></div>
```
```javascript
//ex: show "Hello getElementById" text into div
document.getElementById("ex-id").innerHTML = "Hello getElementById";
```

#### document.getElementsByTagName
> Find an element by class name

***SYNTAX***
```javascript
document.getElementsById("class name")
```

***EXAMPLE***
```html
<div class="ex-class"></div>
<div class="ex-class"></div>
<div class="ex-class"></div>
```
```javascript
//ex: show "Hello getElementsByClassName" text into div class dom
var exClasses = document.getElementsByClassName("ex-class");
for(let exClass of exClasses){
    exClass.innerHTML = "Hello getElementsByClassName";
}        
```

#### document.getElementsByClassName
> Find an element by tag name

***SYNTAX***
```javascript
document.getElementsByTagName("tag name")
```

***EXAMPLE***
```html
<h4></h4>
<h4></h4>
<h4></h4>
```
```javascript
//ex: show "Hello getElementsByTagName" text into h4
var h4s = document.getElementsByTagName("h4");
for(let h4 of h4s){
    h4.innerHTML = "Hello getElementsByTagName";
}     
```

#### document.querySelector
> Find an element by CSS Selector
***SYNTAX***
```javascript
document.querySelector("selector")		//selector can be id, tag, or class
```

***EXAMPLE***
```html
<div class="selector1"></div>
<div class="selector"></div>
<div class="selector2"></div>
```
```javascript
//ex: show "Hello querySelector"
document.querySelector(".selector").innerHTML = "Hello querySelector";
``` 

#### document.querySelectorAll
> Find an element by CSS Selectors
***SYNTAX***
```javascript
document.querySelectorAll("selectors")		//selector can be id, tag, or class
```

***EXAMPLE***
```html
<p></p>
<p></p>
<p></p>
```
```javascript
//ex: show "Hello querySelectorAll"
var ps = document.querySelectorAll("p");
for(let p of ps){
	p.innerHTML = "Hello querySelectorAll";
}   
``` 

***NOTE***
<table>
    <tr>
        <th>Method</th>
        <th>Description</th>        
    </tr>
    <tr>
        <td>getelememtbyid</td>
        <td>Find an element by element id</td>        
    </tr>
    <tr>
        <td>getelementsbytagname</td>
        <td>Find elements by tag name</td>        
    </tr>
    <tr>
        <td>getelementsbyclassname</td>
        <td>Find elements by class name</td>        
    </tr>
    <tr>
        <td>queryselector</td>
        <td>Find a selector</td>        
    </tr>
    <tr>
        <td>queryselectorall</td>
        <td>Find all selectors</td>        
    </tr>
</table>


### XX.2 Handle on HTML elements

#### element.id
> Sets or getss the id of an element

***SYNTAX***
```javascript
//gets the id property
element.id
//sets the id property
element.id = id
```

***EXAMPLE***
```css
#red {
  color: red;
}

#blue {
  color: blue;
}

#green {
  color: green;
}
```
```html
<button onclick="changeColor('red')">Red</button>
<button onclick="changeColor('blue')">Blue</button>
<button onclick="changeColor('green')">Green</button>   
```
```javascript
function changeColor(color) {
  const htmlTag = document.querySelector('h3');
  htmlTag.id = color;
}
```

> OUTPUT: 

```html
<!-- when you click on Red button -->
<h3 id="red">Hello World!!!</h3>
<!-- when you click on Blue button -->
<h3 id="blue">Hello World!!!</h3>
<!-- when you click on Green button -->
<h3 id="green">Hello World!!!</h3>
```

#### element.attribute
> Change the value of an HTML attribuite

***SYNTAX***
```javascript
// Sets the attribute property:
element.attribute = text
// Gets the attribute property
element.attribute;
```

***EXAMPLE***
```html
<img id="helloAttribute" src="smiley.gif"/>
```
```javascript
//ex: set source for image
document.getElementById("helloAttribute").src = "helloworld.jpg";
```

#### element.attributes
> Returns a collection of the specified node's attributes

***SYNTAX***
```javascript
element.attributes
```

***EXAMPLE***
```html
<img src="" alt="hello" width="1120" height="870"/>
```
```javascript
const htmlTag = document.querySelector("img");
console.log(htmlTag.attributes);    //{0:src, 1:alt, 2:width, 3:height}
htmlTag.attributes[0].value = "./img/photo.jpeg";  
```

> OUTPUT: 

```html
<img src="./img/photo.jpeg" alt="hello" width="1120" height="870">
```

#### element.tagName
> Returns the tag name of the element

***SYNTAX***
```javascript
element.tagName
```

***EXAMPLE***
```html
<div id="hello">Hello World!!!</div>
```
```javascript
const helloId = document.getElementById("hello");
console.log(helloId.tagName);       //DIV
```

#### element.title
> Sets or gets the value of the title attribute of an element

***SYNTAX***
```javascript
//gets the title property
element.title
//sets the title property
element.title = x
```

***EXAMPLE***
```html
<div id="hello">Hello World!!!</div>
```
```javascript
const helloId = document.getElementById("hello");
helloId.title = "Hello World!!!"
```

> OUTPUT: 

```html
<div id="hello" title="Hello World!!!">Hello World!!!</div>
```

#### element.children
> A collection of an element's child elements, as an HTMLCollection object

***SYNTAX***
```javascript
element.children
```

***EXAMPLE***
```html
<ul>
  <li>Coffee</li>
  <p>Coca-Cola</p>
  <li>Milk</li>
</ul>
```
```javascript
const list = document.querySelector("ul");
const children = list.children;        //[li, p, li]
list.removeChild(children[1]);
```

> OUTPUT: 

```html
<ul>
  <li>Coffee</li>
  
  <li>Milk</li>
</ul>
```

#### element.classList
> Show the class name(s) of an element, as a DOMTokenList object

***SYNTAX***
```javascript
element.classList
```

***Methods***
<table>
    <tr>
        <td>Method</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>add(class1, class2, ...)</td>
        <td>Adds one or more class names to an element</td>
    </tr>
    <tr>
        <td>contains(class)</td>
        <td>Returns a Boolean value, indicating whether an element has the specified class name</td>
    </tr>
    <tr>
        <td>item(index)</td>
        <td>Returns the class name with a specified index number from an element. Index starts at 0</td>
    </tr>
    <tr>
        <td>remove(class1, class2, ...)</td>
        <td>Removes one or more class names from an element</td>
    </tr>
    <tr>
        <td>toggle(class, true|false)</td>
        <td>Toggles between a class name for an element</td>
    </tr>
</table>

***EXAMPLE***
```css
.image {
  margin-top: 10px;
  background-image: url(img/photo.jpeg);
  width: 0;
  height: 0;
  background-repeat: none;
  background-size: cover;
  transition: all 0.2s ease-in-out;
}

.show {
  width: 1170px;
  height: 840px;
}
```
```html
<button>Hide/Show Image</button>    
<div class="image"></div>
```
```javascript
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("click", function(){
    const img = document.querySelector(".image").classList;        
    if(img.contains("show")) {                
        img.remove("show");
    } else {                
        img.add("show");
    }
    //or img.toggle("show");
});
```

> OUTPUT: After click button

```html
<button>Hide/Show Image</button>    
<div class="image show"></div>
```

#### element.className
> Sets or gets the class name of an element

***SYNTAX***
```javascript
// Set the className property
element.className = class
// Return the className property
element.className
```

***EXAMPLE***
```css
.image {
  margin-top: 10px;
  background-image: url(img/photo.jpeg);
  width: 0;
  height: 0;
  background-repeat: none;
  background-size: cover;
  transition: all 0.2s ease-in-out;
}

.show {
  width: 1170px;
  height: 840px;
}
```
```html
<button>Hide/Show Image</button>    
<div class="image"></div>
```
```javascript
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("click", function(){
    const classList = document.querySelector(".image");              
    if(classList.className.endsWith("show")) {
        classList.className = "image";
    } else {
        classList.className = "image show";
    }
});
```

> OUTPUT: After click button

```html
<button>Hide/Show Image</button>    
<div class="image show"></div>
```

#### node.innerText
> Sets or gets the text content of the specified node, and all its descendants

***SYNTAX***
```javascript
//Sets the text content of a node
node.innerText = text
//Gets the text content of a node
node.innerText
```

***EXAMPLE***
```html
<button onclick="getInnerText()">Get InnerText</button>
<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
```
```javascript
function getInnerText() {
  console.log(document.querySelector("p").innerText);   //This element has extra spacing and contains a span element.
}
```

#### element.outerText

> Sets or gets the HTML element and all it's content

***SYNTAX***
```javascript
//Sets the outerHTML property
element.outerHTML = text
//Gets the outerHTML property
element.outerHTML
```

***EXAMPLE***
```html
<button onclick="getOuterText()">Get OuterText</button>
<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
```
```javascript
function getOuterText() {
  console.log(document.querySelector("p").outerHTML);   //This element has extra spacing and contains a span element.
}
```

#### element.innerHTML
> Sets or gets the HTML content (inner HTML) of an element

***SYNTAX***
```javascript
// Sets the innerHTML property:
element.innerHTML = text

// Gets the innerHTML property
element.innerHTML;
```

***EXAMPLE***
```html
<button>Get InnerHTML</button>
<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
```
```javascript
document.querySelector("button").addEventListener('click', function(){
  console.log(document.querySelector("p").innerHTML);     //   This element has extra spacing   and contains <span>a span element</span>.
})
```

#### element.outerHTML

> Sets or gets the HTML element and all it's content, including the start tag, it's attributes, and the end tag

***SYNTAX***
```javascript
// Sets the outerHTML property:
element.outerHTML = text

// Gets the outerHTML property
element.outerHTML;
```

***EXAMPLE***
```html
<button>Get outerHTML</button>
<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
```
```javascript
document.querySelector("button").addEventListener('click', function(){
  console.log(document.querySelector("p").outerHTML);     //<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
})
```

#### element.nodeName

> Returns the name of the specified node.

***SYNTAX***
```javascript
node.nodeName
```

***EXAMPLE***
```html
<div class="container">
  <p>This is a paragraph</p>
  <h1>This is a paragraph</h1>
  <h2>This is a paragraph</h2>
  <h3>This is a paragraph</h3>
</div>
```
```javascript
const innerContainer = document.querySelector(".container").children;
for(let i = 0; i < innerContainer.length; ++i) {
  console.log(innerContainer[i].nodeName);  //P H1 H2 H3
}
```

#### node.nodeValue

> Sets or gets the node value of the specified node

***SYNTAX***
```javascript
// Sets the nodeValue property:
node.nodeValue = value

// Gets the nodeValue property
node.nodeValue
```

***EXAMPLE***
```html
<div class="container">
  <p>This is a paragraph</p>
  <h1>This is a h1</h1>
  <h2>This is a h2</h2>
  <h3>This is a h3</h3>
</div>
```
```javascript
const innerContainer = document.querySelector(".container").children;
for(let i = 0; i < innerContainer.length; ++i) {
  console.log(innerContainer[i].childNodes[0].nodeValue);
}
/*
 * This is a paragraph
 * This is a h1
 * This is a h2
 * This is a h3
 * /
```

#### element.matches

> Returns a Boolean value indicating whether an element is matched by a specific CSS selector or not.

***SYNTAX***
```javascript
element.matches(selectors)  //selectors: id, classes, types, attributes, values of attributes
```

***EXAMPLE***
```html
<div class="container">
  <p class="red">This is a paragraph</p>
  <h1 class="green">This is a h1</h1>
  <h2 class="blue">This is a h2</h2>
  <h3 class="orange">This is a h3</h3>
</div>
```
```javascript
const innerContainer = document.querySelector(".container").children;
for(let i = 0; i < innerContainer.length; ++i) {
  if(innerContainer[i].matches('.red')) {
    innerContainer[i].style.color = 'red';
  } else if(innerContainer[i].matches('.green')) {
    innerContainer[i].style.color = 'green';
  } else if(innerContainer[i].matches('.blue')) {
    innerContainer[i].style.color = 'blue';
  } else if(innerContainer[i].matches('.orange')) {
    innerContainer[i].style.color = 'orange';
  }
}
```

> OUTPUT: 

```html
<div class="container">
  <p class="red" style="color: red;">This is a paragraph</p>
  <h1 class="green" style="color: green;">This is a h1</h1>
  <h2 class="blue" style="color: blue;">This is a h2</h2>
  <h3 class="orange" style="color: orange;">This is a h3</h3>
</div>
```

#### node.textContent

> Sets or gets the text content of the specified node, and all its descendants

***SYNTAX***
```javascript
// Sets the text content of a node
node.textContent = text

// Gets the text content of a node
node.outerHTML;
```

***EXAMPLE***
```html
<button>Get textContent</button>
<p>   This element has extra spacing   and contains <span>a span element</span>.</p>
```
```javascript
document.querySelector("button").addEventListener('click', function(){
  console.log(document.querySelector("p").textContent);     //   This element has extra spacing   and contains a span element.
})
```

#### element.style.property
> Change HTML style

***SYNTAX***
```javascript
// Set style properties
element.style.property = value

// Return style properties
element.style.property
```

***EXAMPLE***
```html
<div>Hello Property</div>
```
```javascript
document.querySelector("div").style.color = "blue";
```

### XX.3 Add and delete Elements

#### DOM nodes
- Everything in an HTML document is a node:
  - The entire document is a document node
  - Every HTML element is an element node
  - The text inside HTML elements are text nodes
  - Every HTML attribute is an attribute node (deprecated)
  - All comments are comment nodes

#### Node Relationships
- The nodes in the node tree have a hierarchical relationship to each other. The terms parent, child, and sibling are used to describe the relationships.
  - In a node tree, the top node is called the root (or root node)
  - Every node has exactly one parent, except the root (which has no parent)
  - A node can have a number of children
  - Siblings (brothers or sisters) are nodes with the same parent

***EXAMPLE***
```html
<html>

  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
```
> &lt;html&gt; is the root node <br/>
> &lt;html&gt; has no parents <br/>
> &lt;html&gt; is the parent of &lt;head&gt; and &lt;body&gt; <br/>
> &lt;head&gt; is the first child of &lt;html&gt; <br/>
> &lt;body&gt; is the last child of &lt;html&gt; <br/>
> &lt;head&gt; has one child: &lt;title&gt; <br/>
> &lt;title&gt; has one child (a text node): "DOM Tutorial" <br/>
> &lt;body&gt; has two children: &lt;h1&gt; and &lt;p&gt; <br/>
> &lt;h1&gt; has one child: "DOM Lesson one" <br/>
> &lt;p&gt; has one child: "Hello world!" <br/>
> &lt;h1&gt; and &lt;p&gt; are siblings <br/>

#### Navigating Between Nodes
- You can use the following node properties to navigate between nodes with JavaScript:
  - parentNode
  - childNodes[nodenumber]
  - firstChild
  - lastChild
  - nextSibling
  - previousSibling

***EXAMPLE***
```html
<html>  
  <head>
    <title>DOM Tutorial</title>
  </head>

  <body>
    <h1>DOM Lesson one</h1>
    <p>Hello world!</p>
  </body>

</html>
```
> <html> is parentNode of <head> and <body>
> h1, #text, p, #text are childNodes of <body>
> <head> is firstChild of <html>
> <body> is lastChild of <html>
> <body> is nextSibling of <head>
> <head> is previousSibling of <body>

#### document.write
> writes HTML expressions or JavaScript code to a document

***SYNTAX***
```javascript
document.write(exp1, exp2, exp3, ...)
```

***EXAMPLE***
```javascript
document.open();
document.write("<h1>Hello</h1>","<h2>Hello</h2>","<p>Hello</p>");
document.close();
```

> OUTPUT: 

```html
<h1>Hello</h1>
<h2>Hello</h2>
<p>Hello</p>
```

#### element.focus
> Gives focus to an element

***SYNTAX***
```javascript
element.focus()
```

***EXAMPLE***
```html
<input type="text" class="username" placeholder="Username..."/>
<input type="password" class="password" placeholder="Password..."/>
<button>Focus on input password</button>
```
```javascript
const buttonEvent = document.querySelector("button");
const passwordInput = document.querySelector(".password");
buttonEvent.addEventListener("click", function(){
  passwordInput.focus();
});
```

#### document.createElement
> Create an element

***SYNTAX***
```javascript
//Create an attribute
document.createElement(attributename)
```

***EXAMPLE***
```html
<div class="container"></div>
```
```javascript
const paragraph = document.createElement("p");
const content = document.createTextNode("Hello World");
paragraph.appendChild(content);
const container = document.querySelector(".container");
container.appendChild(paragraph);
```

> OUTPUT: 

```html
<div class="container">
  <p>Hello World</p>
</div>
```

#### element.setAttribute
> Sets a value of the attribute for a specified name, of an element

***SYNTAX***
```javascript
// Set attribute
element.setAttribute(attributename, attributevalue)
```

***EXAMPLE***
```css
.image {
  margin-top: 10px;
  background-image: url(img/photo.jpeg);
  width: 0;
  height: 0;
  background-repeat: none;
  background-size: cover;
  transition: all 0.2s ease-in-out;
}

.show {
  width: 1170px;
  height: 840px;
}
```
```html
<button>Hide/Show Image</button> 
<div class="image"></div>
```
```javascript
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("click", function(){
    const img = document.querySelector(".image");              
    if(img.getAttribute("class").endsWith("show")) {
      img.setAttribute("class","image");
    } else {
      img.setAttribute("class","image show");      
    }
});
```

> OUTPUT: After click button

```html
<button>Hide/Show Image</button>    
<div class="image show"></div>
```

#### element.getAttribute
> Gets the value of the attribute with the specified name, of an element

***SYNTAX***
```javascript
element.getAttribute(attributename)
```

***EXAMPLE***
```css
.image {
  margin-top: 10px;
  background-image: url(img/photo.jpeg);
  width: 0;
  height: 0;
  background-repeat: none;
  background-size: cover;
  transition: all 0.2s ease-in-out;
}

.show {
  width: 1170px;
  height: 840px;
}
```
```html
<button>Hide/Show Image</button> 
<div class="image"></div>
```
```javascript
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("click", function(){
    const img = document.querySelector(".image");              
    if(img.getAttribute("class").endsWith("show")) {
      img.setAttribute("class","image");
    } else {
      img.setAttribute("class","image show");      
    }
});
```

> OUTPUT: After click button

```html
<button>Hide/Show Image</button>    
<div class="image show"></div>
```

#### element.hasAttribute

#### element.removeAttribute

#### element.setAttributeNode

#### element.getAttributeNode
> Gets the attribute node with the specified name of an element, as an Attr object

***SYNTAX***
```javascript
element.getAttributeNode(attributename)
```

***EXAMPLE***
```css
.image {
  margin-top: 10px;
  background-image: url(img/photo.jpeg);
  width: 0;
  height: 0;
  background-repeat: none;
  background-size: cover;
  transition: all 0.2s ease-in-out;
}

.show {
  width: 1170px;
  height: 840px;
}
```
```html
<button>Hide/Show Image</button> 
<div class="image"></div>
```
```javascript
const buttonEvent = document.querySelector("button");
buttonEvent.addEventListener("click", function(){
    const img = document.querySelector(".image");                          
    if(img.getAttributeNode("class").value.endsWith("show")) {
        img.getAttributeNode("class").value = "image";
    } else {
        img.getAttributeNode("class").value = "image show";
    }
});
```

> OUTPUT: After click button

```html
<button>Hide/Show Image</button>    
<div class="image show"></div>
```

#### element.removeAttributeNode

#### node.appendChild
> Appends a node as the last child of a node

***SYNTAX***
```javascript
node.appendChild(node)  //node not a string
```

***EXAMPLE***
```html
<div class="container">
  <p>Hello</p>
</div>
```
```javascript
const container = document.querySelector(".container");

//<h3 style='color:red;'>Hello World</h3>
const node = document.createElement("h3");        
const innerText = document.createTextNode(" World!!!");
node.style.color = 'red';        
node.appendChild(innerText);

container.appendChild(node);    
```

> OUTPUT: 

```html
<div class="container">
  <p>Hello</p>
  <h3 style="color: red;"> World!!!</h3>
</div>
```

#### node.removeChild
> Removes a specified child node of the specified element

***SYNTAX***
```javascript
node.removeChild(node)  //node not a string
```

***EXAMPLE***
```html
<div class="container">
  <p>Hello</p>
  <h4>World</h4>
  <h5>World</h5>
</div>
```
```javascript
const container = document.querySelector(".container");        
const childrenNodes = container.childNodes;     //[p, text, h4, text, h5, text]
container.removeChild(childrenNodes[5]);    
```

> OUTPUT: 

```html
<div class="container">
  <p>Hello</p>
  <h4>World</h4>
  
</div>
```

#### node.replaceChild
> replaces a child node with a new node

***SYNTAX***
```javascript
node.replaceChild(newnode, oldnode) //node not a string
```

***EXAMPLE***
```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```
```javascript
const list = document.querySelector("ul");        
const childrenNodes = list.childNodes;     //[li, text, li, text, li, text]
const paragraph = document.createElement("p");
const innerText = document.createTextNode("Coca-Cola");
paragraph.appendChild(innerText);
list.replaceChild(paragraph, childrenNodes[3]);
```

> OUTPUT: 

```html
<ul>
  <li>Coffee</li>
  <p>Coca-Cola</p>
  <li>Milk</li>
</ul>
```

#### node.firstChild

#### node.lastChild

#### node.nextSibling

#### node.previousSibling

#### node.parentNode

#### node.parentElement

#### element.childNodes
> A NodeList object, representing a collection of nodes

***SYNTAX***
```javascript
element.childNodes
```

***EXAMPLE***
```html
<ul>
    <li>Coffee</li>
    <p>Coca-Cola</p>
    <li>Milk</li>
</ul>
```
```javascript
const list = document.querySelector("ul");
const childrenNodes = list.childNodes;     //[li, text, p, text, li, text]
list.removeChild(childrenNodes[3]);
```

> OUTPUT: 

```html
<ul>
  <li>Coffee</li>
  
  <li>Milk</li>
</ul>
```

#### node.insertBefore
> Inserts a node as a child, right before an existing child, which you specify

***SYNTAX***
```javascript
node.insertBefore(newnode, existingnode)
```

***EXAMPLE***
```html
<button type="button" id="demo-insertBefore">Add A Node Before Node 2</button>
<ul id="myList-insertBefore">
    <li>Node 1</li>
    <li>Node 2</li>
</ul>
```
```javascript
//ex: add li node to ul#myList-appendChild
document.getElementById("demo-insertBefore").addEventListener("click", function(){
    //create node li
    let node = document.createElement("li");
    //create text for li node
    let textNode = document.createTextNode("Node");
    //add text to li node
    node.appendChild(textNode);
    //get list
    let list = document.getElementById("myList-insertBefore");
    //Insert Node at index 0
    document.getElementById("myList-insertBefore").insertBefore(node,list.childNodes[0]);
});
```

#### node.hasChildNodes

#### element.append

#### element.remove

#### element.prepend

#### element.before

#### element.after

#### element.firstElementChild

#### element.lastElementChild

#### element.previousElementSibling

#### element.nextElementSibling

### XX.4 Add Events Handlers

#### element.onclick

#### element.addEventListener
> Adds an event handler to the specified element

***SYNTAX***
```javascript
element.addEventListener(event, function, useCapture)
```

***EXAMPLE***
```html
<button type="button" id="demo-addEventListener">Click Me</button>
```
```javascript
//ex: change the text of the button
document.getElementById("demo-addEventListener").addEventListener("click", function(){
    this.innerHTML = "Hello addEventListener";
});
```

#### element.removeEventListener
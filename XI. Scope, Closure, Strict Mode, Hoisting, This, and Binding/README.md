## Scope, Closure, Strict Mode, Hoisting, and this keyword
### Scope 
- There are 5 types of scopes:
    - Block scope
    - Function scope
    - Module scope
    - Global  scope
    - Lexical scope

#### Block scope
> A code block in JavaScript defines a scope for variables declared using let and const

#### Function scope
> A function in JavaScript defines a scope for variables declared using var, let and const

#### Module scope
> The module scope makes the module encapsulated. It means we cannot access a "private" variable of a module from outside. The module scope protects the variables from being accessed outside except for export these variables. 

#### Global scope
> The global scope is the outermost scope. It is accessible from any inner scope. let, const, and var are accessible from the inside code block.

#### Lexical scope
> Lexical scope means a nested group  of function (function within a function), the inner functions have to access to the variables and other resources of their parent scope.

### Closure 
> A closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

### Strict mode
-  Prevent unsafe codes or potential errors when using global variables
    - must be used var, let, const to declare a new variable
    - cannot use reversed keywords such as private, protected, etc to assgin variables
    - cannot use the same parameters in a function
    - cannot use a function out of a block code

## Hoisting
> In JS, a variable can be declared after it has been used. Var, let, const, and function can be hoisted, but let and const are in Temporal Dead Zone.

## this keyword
### this in global context
> 'this' in global context is a global object in both strict mode and non strict mode

### this in function context
> 'this' in function context is a global object in non strict mode or an undefined in strict mode

### this in an arrow function
> 'this' in an arrow function is the same as 'this' from outer normal function

### this in a method
> 'this' of a method is the object of that method

***CHECK KNOWLEDGE***
```javascript
//ex1:
{
  const x = 2;
  console.log(x);           //?
}
console.log(x);             //?

//ex2:
if (true) {  
  const message = 'Hello';
  console.log(message);     //?
}
console.log(message);       //?

//ex3
{
  var x = 2;
  console.log(x);           //?
}
console.log(x);             //?

//ex4
function run() {  
  const two = 2;
  let count = 0;
  var message = 'Hello World';
  function run2() {}
  console.log(two);       //?
  console.log(count);     //?
  console.log(message);   //?
  console.log(run2);      //?
}
run();
console.log(two);         //?
console.log(count);       //?
console.log(message);     //?
console.log(run2);        //?

//ex5
let x = 2;
console.log(x);           //?
function showX(){
  console.log(x);         //?
}
console.log(x);           //?

//ex6
function outerFunction() {
  const message = 'Hello World';
  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const inner = outerFunction();
inner();        //?
inner();        //?
inner();        //?

//ex7
function buildName(name) { 
    var greeting = "Hello, " + name + "!"; 
    var sayName = function() {
        var welcome = greeting + " Welcome!";
        console.log(greeting); 
    };
    return sayName; 
}

var sayMyName = buildName("John");
sayMyName();    //?
sayMyName();    //?
sayMyName();    //?

//ex8:
function counter()
{
  let i = 0;
  function increase() {
    return ++i;
  }
  return increase;
}

let c = counter();
console.log(c());           //?
console.log(c());           //?
console.log(c());           //?

//ex9:
function buildContor(i) { 
    var contor = i;
    var displayContor = function() {
        console.log(contor++);
        contor++;
    };
    return displayContor; 
}

let myContor = buildContor(1);
myContor();                 //?
myContor();                 //?
myContor();                 //?
let myOtherContor = buildContor(10);
myOtherContor();            //?
myOtherContor();            //?
myContor();                 //?

//ex10:
function makeAdder(x) {
  return function(y) {
    return x + y;
  }
}

const add2 = makeAdder(2);
add2(3);                   //?
add2(5);                   //?
const add5 = makeAdder(5);
add5(10);                  //?
add5(20);                  //?

//ex11:
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
increment();      //?
increment();      //?
increment();      //?
log();            //?

//ex12: write a function to add a person to array of people (closure)

//ex13: write a function to multiply two numbers (closure)

//ex14: write a function to multiply three numbers (closure)

//ex15: use the below function to display logger (Error, Warning, Finished)
function createLogger(namespace) {
    return function(message) {
        return `${namespace} ${message}`;
    }
}

//ex16: use closure to write get, set, remove functions to get, store, and delete a car in an array cars

//ex17: use closure to write get, set, remove functions to get, store, and delete an object in localStorage

//ex18
x = 5;
console.log(x);           //?
var x;

//ex19
var x;
console.log(x);           //?
x = 5;

//ex20
x = 5;
console.log(x);           //?

//ex21
x = 5;
console.log(x);           //?
const x;

//ex22
greeting();
function greeting() {
	console.log("Hello World!");
}

//ex23
console.log(sum(2,3));      //?
function sum(a, b) {
  return a + b;
}

//ex24
let x = 2;
{
  {    
    console.log(x);         //?
    let x = 10;
  }    
}

//ex25
let c = counter();
console.log(c());           //?
function counter() {
  let i = 0;
  return increase;
  function increase() {
    return ++i;
  }
}

//ex26
console.log(this)           //?

//ex27
this.message = "Hello World";
console.log(this.message);  //?
console.log(window.message);//?

//ex28
function helloWorld() {
  console.log(this);        //?
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //?
console.log(window.message);//?

//ex29
'use strict';
function helloWorld() {
  console.log(this);            //?
  this.message = "Hello World"; //?
}
helloWorld();

//ex30
function hello() {
  this.mess = "Hello";
  console.log(this);        //?
  function world() {
    this.world = "World";
    console.log(this);      //?
  }
  world();
}
hello();
console.log(this.mess);   //?
console.log(window.mess); //?

console.log(this.world);  //?
console.log(window.world);//?

//ex31
'use strict';
function hello() {
  this.mess = "Hello";      //?
  console.log(this);        //?
  function world() {
    this.world = "World";   //?
    console.log(this);      //?
  }
  world();
}
hello();

//ex32
[1,2,3].forEach((item) => {
    console.log(this);        //?
    this.mess = "Hello World";
  }); 

console.log(this.mess);       //?
console.log(window.mess);     //?

//ex33
const helloWorld = () => {
  console.log(this);         //?
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //?
console.log(window.message);//?

//ex34
'use strict';
const helloWorld = () => {
  console.log(this)         //?
  this.message = "Hello World";
}
helloWorld();
console.log(this.message);  //?
console.log(window.message);//?

//ex35
function hello() {  
  this.mess = "Hello";
  console.log(this);        //?
  const world = () => {
    this.world = "World";
    console.log(this);      //?
  }
  world();
}
hello();
console.log(this.mess);   //?
console.log(window.mess); //?

console.log(this.world);  //?
console.log(window.world);//?

//ex36
'use strict';
function hello() {  
  this.mess = "Hello";      //?
  console.log(this);        //?
  const world = () => {
    this.world = "World";   //?
    console.log(this);      //?
  }
  world();
}
hello();

//ex37
const app = {
  people : [],
  set : function(person) {
    console.log(this === app);      //?
    this.people.push(person);
  },
  get : function(index) {
    console.log(this === app);      //?
    return this.people.slice(index, index + 1);
  },
  size : function() {
    console.log(this === app);      //?
    return this.people.length;
  }
}

app.set({firstName: "Doe", lastName: "Joe"})
app.set({firstName: "Steve", lastName: "Job"})
app.set({firstName: "Michelle", lastName: "Joe"})
console.log(app.get(0));

//ex38
const hi = {
  message : "Hello World",
  sayXinChao : function() {
    console.log(this === hi);       //?
    console.log(this.message);      //?
  },  
  sayHi() {
    console.log(this === hi);       //?
    console.log(this.message);      //?
  },  
  sayHello : () => {
    console.log(this === hi);       //?
    console.log(this.message);      //?
  }
}

hi.sayXinChao();
hi.sayHi();
hi.sayHello();
```
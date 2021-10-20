> There are 3 ways to declare JS variables (var, let, const)

## VAR
***SYNTAX***
```javascript
var a;
```
## LET
***SYNTAX***
```javascript
let a;
```
## CONST
***SYNTAX***
```javascript
const a = value;
```

---
***CHECK KNOWLEDGE***
```javascript
//ex1:
var carName;                  
console.log(carName);		//?

//ex2:
var carName = "Volvo";
console.log(carName);		//?
var carName;
console.log(carName);		//?

//ex3:
let carName = "Volvo";
console.log(carName);		//?
let carName = "Toyota";         
console.log(carName);		//?

//ex4:
const PI = 3.141592653589793;
PI = 3.14;                  //?

//ex5:
const PI;                   //?
PI = 3.14159265359;

//ex6:
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";	        //?
cars.push("Audi");	        //?
//but
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];	    //?

//ex7:
const car = {type:"Fiat", model:"500", color:"white"};
car.color = "red";	        //?
car.owner = "Johnson";	    //?
//but
const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};	//?


//ex8:
var x = 2;              //?
var x = 3;              //?
{
  var x = 2;            //?
  var x = 3;            //?
}

//ex9:
var x = 2;              //?
let x = 3;              //?
{
  let x = 2;            //?
  let x = 3;            //?
}
//or 
let x = 2;              //?
var x = 3;              //?
{
  const x = 2;          //?
  const x = 3;          //?
}

//ex10:
{
  let x = 2;
  console.log(x);       //?
}
console.log(x);         //?
//but
let x = 2;
{
  console.log(x);       //?
}

//ex11:
{
  var x = 2;
  console.log(x);       //?
}
console.log(x);         //?

//ex12:
let x = 10;
console.log(x);         //?
{
  let x = 2;
  console.log(x);       //?
}
console.log(x);         //?

//ex13:
var x = 10;
console.log(x);         //?
{
  var x = 2;
  console.log(x);       //?
}
console.log(x);         //?
```
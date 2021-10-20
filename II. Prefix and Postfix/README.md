## Prefix
> Increase variable one unit

***SYNTAX***
```javascript
++i;
```

## Postfix
> Increase variable one unit

***SYNTAX***
```javascript
i++;
```

---
***CHECK KNOWLEDGE***
```javascript
//ex1
var a = 6;
var output = ++a;
console.log('a: ', a);                        //?
console.log('output: ', output);              //?

//ex2
var a = 2;
a = ++a + a;                                  //? 

//ex3
var b = 6;
var output = b++;
console.log('b: ', b);                        //?
console.log('output: ', output);              //?

//ex4
var a = 2;
a = a++ + a;                                  //?       

//ex5
var a = 2;
a = a++ + --a;                                //?

//ex6
var a = 7;
a = a++ + a--                                 //?

//ex7
var a = 7;
a = a++ + ++a                                 //?

//ex8
var a = 4;
a = a-- + ++a - a++                           //?

//ex9
var a = 4;
a = a--*2 + ++a*2 - ++a*2                     //?
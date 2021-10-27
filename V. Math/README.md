## MATH
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

## MATH Methods
### round
> Returns the nearest integer.

***SYNTAX***
```javascript
Math.round(value)
```

### ceil
> Returns the value of x rounded up to its nearest integer.

***SYNTAX***
```javascript
Math.ceil(value)
```

### floor
> Returns the value of x rounded down to its nearest integer.

***SYNTAX***
```javascript
Math.floor(value)
```

### trunc
> Returns the integer part of x.

***SYNTAX***
```javascript
Math.trunc(value)
```

### sign
> Returns if x is negative, null or positive.

***SYNTAX***
```javascript
Math.sign(value)
```

### pow
> Returns the value of x to the power of y.

***SYNTAX***
```javascript
Math.pow(x, y)
```

### sqrt
> Returns the square root of x.

***SYNTAX***
```javascript
Math.sqrt(value)
```

### abs
> Returns the absolute (positive) value of x.

***SYNTAX***
```javascript
Math.abs(value)
```

### sin
> Returns the sine (a value between -1 and 1) of the angle x (given in radians).

***SYNTAX***
```javascript
Math.sin(value)
```

### cos
> Returns the cosine (a value between -1 and 1) of the angle x (given in radians).

***SYNTAX***
```javascript
Math.cos(value)
```

### min
> Find the lowest value in a list of arguments.

***SYNTAX***
```javascript
Math.min(...numsArray) 
//or
Math.min(num1, num2, ..., numn) 
```

### max
> Find the largest value in a list of arguments.

***SYNTAX***
```javascript
Math.max(...numsArray) 
//or
Math.max(num1, num2, ..., numn) 
```

### random
> Returns a random number between 0 (inclusive), and 1 (exclusive) or in range [0, 1).

***SYNTAX***
```javascript
Math.random();
```

### log
> Returns the natural logarithm of value.

***SYNTAX***
```javascript
Math.log(value);
```

### log2
> Returns the base 2 logarithm of value.

***SYNTAX***
```javascript
Math.log2(value);
```

### log10
> Returns the base 10 logarithm of value.

***SYNTAX***
```javascript
Math.log10(value);
```

***CHECK KNOWLEDGE***
```javascript
//ex1
Math.round(4.9);    //?
Math.round(4.7);    //?
Math.round(4.4);    //?
Math.round(4.2);    //?
Math.round(-4.2);   //?

//ex2
Math.ceil(4.7);     //? 
Math.ceil(-4.2);    //?
Math.ceil(4.4);     //? 
Math.ceil(4.2);     //? 
Math.ceil(4.9);     //? 

//ex3
Math.floor(4.9);    //? 
Math.floor(4.7);    //? 
Math.floor(4.4);    //? 
Math.floor(4.2);    //? 
Math.floor(-4.2);   //?

//ex4
Math.trunc(4.9);    //?
Math.trunc(4.7);    //?
Math.trunc(4.4);    //?
Math.trunc(4.2);    //?
Math.trunc(-4.2);   //?

//ex5
Math.sign(-4);    //?
Math.sign(0);     //? 
Math.sign(4);     //?

//ex6: Find min, max of [0, 150, 30, 20, -8, -200]


//ex7: a) Returns a random integer from 0 to 9 
//      b) Returns a random integer from 0 to 10
//      c) Returns a random integer from 0 to 100
//      d) Returns a random integer from 1 to 10
//      e) Returns a random integer from a range min, max

```
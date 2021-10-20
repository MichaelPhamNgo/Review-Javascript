## Number 
>  JS uses the + operator for both addition and concatenation
>  substraction
>  division
>  multiplication

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

## Number Methods
### isNaN
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

***CHECK KNOWLEDGE***
```javascript
//ex1
console.log(isNaN("Hello World"));	    //?
console.log(isNaN("001"));		        //?
console.log(isNaN(1));			        //?

//ex2
var x = 9.656;
console.log(x.toFixed(0));              //?
console.log(x.toFixed(2));              //?
console.log(x.toFixed(4));              //?
console.log(x.toFixed(6));              //?

//ex3
var x = 9.656;
console.log(x.toPrecision());            //?
console.log(x.toPrecision(2));           //?
console.log(x.toPrecision(4));           //?
console.log(x.toPrecision(6));           //?

//ex4
console.log(Number());                  //?
console.log(Number(true));              //?
console.log(Number(false));             //?
console.log(Number("10"));              //?
console.log(Number("  10"));            //?
console.log(Number("  10  "));          //?
console.log(Number("10.33"));           //?
console.log(Number("10,33"));           //?
console.log(Number("10 33"));           //?

//ex5
console.log(parseInt("-10"));           //?
console.log(parseInt("-10.33"));        //?
console.log(parseInt("10 20 30"));      //?
console.log(parseInt("10 years"));      //?
console.log(parseInt("years 10"));      //?

//ex6
console.log(parseFloat("-10"));         //?
console.log(parseFloat("-10.33"));      //?
console.log(parseFloat("10 20 30"));    //?
console.log(parseFloat("10 years"));    //?
console.log(parseFloat("years 10"));    //?
```
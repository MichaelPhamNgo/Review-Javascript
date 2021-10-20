## Array 
### Create an array

***EXAMPLE***
```javascript
//ex1
var cars = ["Saab", "Volvo", "BMW"];          

//ex2
var cars = [
  "Saab",
  "Volvo",
  "BMW"
];

//ex3
var cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";                               

//ex4
var cars = new Array("Saab", "Volvo", "BMW"); 

//ex5
var cars = ["Saab", "Volvo", "BMW"];          
cars[5]= "Toyota";
```

## Array Methods
### for
***SYNTAX***
```javascript
for(let i = 0; i < arr.length; i++) {
	...do something
}
```

### for..in
***SYNTAX***
```javascript
for(let index in arr) {
	...do something
}
```

### for..of
***SYNTAX***
```javascript
for(let e of arr) {
	...do something
}
```

### forEach
***SYNTAX***
```javascript
arr.forEach(function(e){
	...do something
})
```
### length
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

### toString
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

### join
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

### pop
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

### push
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

### shift
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

### unshift
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

### splice
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

### concat
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

### slice
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

### Sort

***SYNTAX***
```javascript
sort()
```

### Find min, max
> Find min, max
```javascript
Math.max(..array)
Math.min(..array)
```


### forEach, reduce, indexOf, find
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

### every, some, includes
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

### filter, map
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

***CHECK KNOWLEDGE***
```javascript
//ex1
var cars = ["Saab", "Volvo", "BMW"];          
cars[5]= "Toyota";
console.log(cars);                //?

//ex2: Use for, for..in, for..of, forEach to print elements in array
var arr = [6, 9, 4, 8, 3, 10, 1, 2];

//ex3
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());   //?

//ex4
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join();
console.log(fruits);              //?

//ex5
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.join(" * ");
console.log(fruits);              //?

//ex6
var fruits = [];
fruits.pop();
console.log(fruits);              //?

//ex7
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);              //?

//ex8
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex9
var fruits = [];
fruits.shift();
console.log(fruits);               //?

//ex10
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits);              //?

//ex11
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex12
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex13
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex14
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(4, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex15
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(10, 0, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex16
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex17
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(-3, 2, "Kiwi", "Lemon", "Pineapple");
console.log(fruits);              //?

//ex18
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var kai = ["Robin"];
console.log(hege.concat(stale, kai));   //?
console.log(hege.concat("Peter"));      //?

//ex19
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));           //?

//ex20
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(3));           //?

//ex21
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1,3));         //?

//ex22
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3));          //?

//ex23
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(-3, -1));      //?

//ex24: Add "Toyota", "Kia" to the beginning of the array (3 ways) hint: unshift, splice, concat
var cars = ["Saab", "Volvo", "BMW"];

//ex25: Add "Toyota", "Kia" to the end of the array (4 ways) hint: push, splice, concat, ...
var cars = ["Saab", "Volvo", "BMW"];

//ex26: Add "Toyota", "Kia" to index 2 of the array hint: splice
var cars = ["Saab", "Volvo", "BMW"];

//ex27: Delete an element at the begining of the array (3 ways) hint: shift, splice, slice
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];

//ex28: Delete an element at the end of the array hint: pop, splice, slice
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];

//ex29: Delete 2 elements at index 2 of the array hint: splice
var cars = ["Toyota", "Kia", "Saab", "Volvo", "BMW"];

//ex30: Sort array cars through alphabetical order
var cars = ["Banana", "Orange", "Apple", "Mango"];

//ex31: Reverse the array
var cars = ["Banana", "Orange", "Apple", "Mango"];

//ex32: Sort cars through year
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000},{type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];

//ex33: Sort cars through car branches
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000}, {type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];

//ex34: Sort cars through year and car branches
var cars = [{type:"Volvo", year:2016, price: 18000}, {type:"Saab", year:2001, price: 6000}, 
            {type:"Volvo", year:2012, price: 12000}, {type:"Volvo", year:2014, price: 15000}, 
            {type:"Saab", year:2002, price: 6000}, {type:"BMW", year:2010, price: 20000},
            {type:"Saab", year:20016, price: 12500}, {type:"BMW", year:2012, price: 13000}, 
            {type:"BMW", year:2005, price: 9000}, {type:"Toyota", year:2010, price: 10000}, 
            {type:"Volvo", year:2011, price: 11000},
           ];

//ex35: Find min, max of the array
var arr = [6, 9, 4, 8, 3, 10, 1, 2];

//ex36: Use forEach and reduce to find sum of the array
var arr = [6, 9, 4, 8, 3, 10, 1, 2];

//ex37: Use forEach and reduce to find sum of the array
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

//ex38
var fruits = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruits.indexOf("Apple"));             //?
console.log(fruits.indexOf("Apple", 2));          //?
console.log(fruits.indexOf("Apple", -2));         //?
console.log(fruits.indexOf("Apple", -3));         //?

//ex39: Find the first element in the array greater than 9
var arr = [6, 9, 4, 8, 3, 10, 1, 2];

//ex40: Check if all elements in array greater than zero
var arr = [6, 9, 4, 8, 3, 10, 1, 2];

//ex41: Check if the answers are the same
var survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];

//ex42: Check if there is a "No" answer 
var survey = [
  { name: "Steve", answer: "Yes"},
  { name: "Jessica", answer: "Yes"},
  { name: "Peter", answer: "Yes"},
  { name: "Elaine", answer: "No"}
];

//ex43
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Banana"));           //?
console.log(fruits.includes("Banana", 3));        //?
console.log(fruits.includes("Apple", -2));        //?

//ex44: Get all cities having the population greater than 3 million 
var cities = [
    {name: 'Los Angeles', population: 3792621},
    {name: 'New York', population: 8175133},
    {name: 'Chicago', population: 2695598},
    {name: 'Houston', population: 2099451},
    {name: 'Philadelphia', population: 1526006}
];

//ex45: Concat FirtName and LastName of people and return an array
var people = [
  {firstname : "Malcom", lastname: "Reynolds"},
  {firstname : "Kaylee", lastname: "Frye"},
  {firstname : "Jayne", lastname: "Cobb"}
];
```
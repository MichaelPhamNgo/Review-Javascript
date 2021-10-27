## Map 
> A Map holds key-value pairs
> A Map remembers the original insertion order of the keys

### Create a map
***EXAMPLE***
```javascript
//ex1
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits);

//ex2
var fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);
```

### Add an element in a map
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("grapes", 100);
console.log(fruits);
```

### Get an element in a map
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("bananas"));
```

### Delete an element in a map
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.delete("oranges");
console.log(fruits);
```

## Map methods
### size
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.size);
```

### has
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.has("apples"));
```

### clear
***EXAMPLE***
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.clear());
```

### for
***EXAMPLE***
```javascript
//ex1: print key of elements of a map using for..of
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var key of fruits.keys()) {
  console.log(key);
}

//ex2: print value of elements of a map using for..of
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var value of fruits.values()) {
  console.log(value);
}

//ex3: print a pair of key and value of a map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var [key, value] of fruits.entries()) {
  console.log(key, value);
}
```

### forEach
***EXAMPLE***
```javascript
//ex: print a pair of key and value of a map using forEach
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.forEach(function(value, key){
  console.log(key, value);
});
```

***CHECK KNOWLEDGE***
```javascript
//ex1: create a new map with pair of keys ("apples", 500), ("bananas", 300), ("oranges", 200)

//ex2: add a new pair of key ("grapes", 100)

//ex3: get value with key 'bananas' in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex4: delete an element with key 'oranges' in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex5: check if apples in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex6: remove all elements in map
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex7: print key of elements of a map using for..of
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex8: print value of elements of a map using for..of
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex9: print a pair of key and value of a map using for
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

//ex10: print a pair of key and value of a map using forEach
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
```


## VII. Set and Set methods
:triangular_flag_on_post: Features
- A collection of unique values
- Each value can only occur once in a Set
```javascript
//ex
var number = new Set([0,1,2,3,0,1,2,3]);        
console.log(number);                        //output: {0, 1, 2, 3}
```

### VII.1 Create a set
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters);                        //output: {"a", "b", "c"}

//ex
letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);                        //output: {"a", "b", "c"}
```

### VII.2 Add an element in a set
```javascript
//ex
var letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);                        //output: {"a", "b", "c"}

//ex
var a = "a";
var b = "b";
var c = "c";
var letters = new Set();
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);                        //output: {"a", "b", "c"}
```

### VII.3 Delete an element in a set
```javascript
//ex
var letters = new Set(["a","b","c"]);
letters.delete("a");
console.log(letters);                        //output: {"b", "c"}
```
### VII.4 Set methods
:triangular_flag_on_post: size of a set
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.size);                    //output: 3
```

:triangular_flag_on_post: check existing of an element in a set
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.has("a"));              //output: true
```

:triangular_flag_on_post: remove all elements in a set
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.clear());                 //output: undefined
```

:triangular_flag_on_post: forEach, for
```javascript
//ex
//forEach
var letters = new Set(["a","b","c"]);
letters.forEach(function(value){
  console.log(value);
})

//for with keys
var letters = new Set(["a","b","c"]);
for(var key of letters.keys()) {
  console.log(key);
}

//for with values
var letters = new Set(["a","b","c"]);
for(var value of letters.values()) {
  console.log(value);
}

//for with keys, values
var letters = new Set(["a","b","c"]);
for(var [key, value] of letters.entries()) {
  console.log(key, value);
}
```

## VIII. Map and Map methods
:triangular_flag_on_post: Features
- A Map holds key-value pairs
- A Map remembers the original insertion order of the keys

### VIII.1 Create a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits);                        //output: {'apples' => 500, 'bananas' => 300, 'oranges' => 200}

//ex
var fruits = new Map();
// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);
console.log(fruits);                        //output: {'apples' => 500, 'bananas' => 300, 'oranges' => 200}
```

### VIII.2 Add an element in a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.set("grapes", 100);
console.log(fruits);                        //output: {'apples' => 500, 'bananas' => 300, 'oranges' => 200, 
                                            //'grapes' => 100}
```

### VIII.3 Get an element in a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.get("bananas"));       //output: 300
```

### VIII.4 Delete an element in a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.delete("oranges");
console.log(fruits);                        //output: {'apples' => 500, 'bananas' => 300}
```

### VIII.5 Map methods
:triangular_flag_on_post: size of a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.size);                   //output: 3
```

:triangular_flag_on_post: check existing of an element in a map
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.has("apples"));           //output: true
```

:triangular_flag_on_post: remove all elements in a set
```javascript
//ex
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
console.log(fruits.clear());                 //output: undefined
```

:triangular_flag_on_post: forEach, for
```javascript
//ex
//forEach
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
fruits.forEach(function(value, key){
  console.log(key, value);
})

//for with keys
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var key of fruits.keys()) {
  console.log(key);
}

//for with values
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var value of fruits.values()) {
  console.log(value);
}

//for with keys, values
var fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for(var [key, value] of fruits.entries()) {
  console.log(key, value);
}
```

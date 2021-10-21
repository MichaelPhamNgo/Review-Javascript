## Set
> A collection of unique values
> Each value can only occur once in a Set

***EXAMPLE***
```javascript
//ex
var number = new Set([0,1,2,3,0,1,2,3]);        
console.log(number);
```

### Create a set
***EXAMPLE***
```javascript
//ex1:
var letters = new Set(["a","b","c"]);
console.log(letters);

//ex2:
letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);
```

### Add an element in a set
***EXAMPLE***
```javascript
//ex1:
var letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);

//ex2:
var a = "a";
var b = "b";
var c = "c";
var letters = new Set();
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);
```

### Delete an element in a set
***EXAMPLE***
```javascript
//ex1
var letters = new Set(["a","b","c"]);
letters.delete("a");
console.log(letters);
```

## Set methods
### size
***EXAMPLE***
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.size);
```

### has
***EXAMPLE***
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.has("a"));
```

### clear
***EXAMPLE***
```javascript
//ex
var letters = new Set(["a","b","c"]);
console.log(letters.clear());
```

### for
***EXAMPLE***
```javascript
//ex1: print all elements of a set using keys
var letters = new Set(["a","b","c"]);
for(var key of letters.keys()) {
  console.log(key);
}

//ex2: print all elements of a set using values
var letters = new Set(["a","b","c"]);
for(var value of letters.values()) {
  console.log(value);
}

//ex3: print all elements of a set using pair of keys and values
var letters = new Set(["a","b","c"]);
for(var [key, value] of letters.entries()) {
  console.log(key, value);
}
```

### forEach
***EXAMPLE***
```javascript
//ex: print all elements of a set using forEach
var letters = new Set(["a","b","c"]);
letters.forEach(function(value){
  console.log(value);
});
```

***CHECK KNOWLEDGE***
```javascript
//ex1: check if "a" in a set letters
var letters = new Set(["a","b","c"]);

//ex2: remove all elements in a set letters
var letters = new Set(["a","b","c"]);

//ex3: print all elements of a set using keys
var letters = new Set(["a","b","c"]);

//ex4: print all elements of a set using values
var letters = new Set(["a","b","c"]);

//ex5: print all elements of a set using pair of keys and values
var letters = new Set(["a","b","c"]);

//ex6: print all elements of a set using forEach
var letters = new Set(["a","b","c"]);
```
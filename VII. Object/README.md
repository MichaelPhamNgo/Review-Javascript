## Object and more

### Create an object

***EXAMPLE***
```javascript
//ex1: create an object person on a line
var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//ex2: create an object person on multiple lines
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex3: create an empty object and assign properties for that object
var person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//ex4: create an empty object and assign properties for that object with new keyword
var person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
```

### VI.2 Access JS object
***EXAMPLE***
```javascript
//ex1: access directly through object's properties
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person.firstName + person.lastName);
console.log(person["firstName"] + person["lastName"]);

//ex2: access indirectly 
var fName = "firstName";
var lName = "lastName";
console.log(person[fName] + person[lName]);
```

### VI.3 Add new properties for the object
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
console.log(person);
```

### VI.4 Edit properties for the object
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
console.log(person);
```

### VI.5 Delete properties of the object
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
console.log(person);
```

### VI.6 Copy an object
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
console.log(x);

//ex2: Using object assign
var x = Object.assign({}, person);
console.log(x);

//ex3: Using JSON
var x = JSON.parse(JSON.stringify(person));
console.log(x);
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
console.log(Object.assign(object1, object2));
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
console.log(object1.property1);
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
console.log(object2.property1);
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

console.log(Object.keys(object1));
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
console.log(Object.values(object1));
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
console.log(Object.entries(obj)[2]);
```
---

### VI.7 JS objects are mutable. 
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
console.log(person);

var x = person;
x.firstName = "Steve";
x.lastName = "Job";
console.log(x);
console.log(person);
```

***Explain:*** the object x **is not a copy** of person. Both x and person are the same object. If changing person object, x is also changed, and so on.

### VI.8 for...in

***SYNTAX***
```javascript
for(let index in object) {
  ...do something
}
```

### VI.9 for...of

***SYNTAX***
```javascript
for(let [key, value] of object) {
  ...do something
}
```

### VI.10 forEach

***SYNTAX***
```javascript
for(let [key, value] of object) {
  ...do something
}
```

### VI.11 Nested objects and function in an object
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

console.log(person.car.car2);
console.log(person["car"].car2);
console.log(person.car["car2"]);
console.log(person["car"]["car2"]);
var o = "car";
var o2 = "car2";
console.log(person[o][o2]);
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
console.log(person.fullName());

//ex2: use get keyword to create fullName method
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}
console.log(person.fullName);

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
console.log(person.pDetail);
```

 ### VI.12 JSON.stringify
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
console.log(JSON.stringify(person));
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
console.log(JSON.stringify(person));

//To fix it
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30,
  fullName: function() { return this.firstName + " " + this.lastName; }
}
person.fullName = person.fullName.toString();
console.log(JSON.stringify(person));
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
console.log(Object.values(person));
```
---
 
### VI.13 JS Object constructor
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
console.log(myFather);
console.log(myFather.fullName());
myFather.changeName("Steve", "Job");
console.log(myFather.fullName());
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

***CHECK KNOWLEDGE***
```javascript
//ex1: show a string 'John Doe' by 3 ways
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex2: add English nationality for person John Doe by 3 ways
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex3: change age for person John Doe by 3 ways
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex4: delete age property of person by 3 ways
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex5: Copy a new object and change firstName to be Michael and 
//lastName to be Pham, make sure the old object doesn't changed by 3 ways
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex6: Merge two objects
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

//ex7: Define a new object = {property : 44}

//ex8: get keys of an object
const obj = {a: 'somestring', b: 42, c: false};

//ex9: get values of an object
const obj = {a: 'somestring', b: 42, c: false};

//ex10: get pair key and value of an object
const obj = { 10: 'arry', 21: 'barry', 23: 'carry' };  

//ex11:
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
console.log(person);          //?

var x = person;
x.firstName = "Steve";
x.lastName = "Job";
console.log(x);               //?
console.log(person);

//ex12: use for..in, for..of, forEach (Object.keys, Object.values, Object.entries) to print data an object
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

//ex13: create fullName method in person object
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30  
}

//ex14: use get keyword to create fullName method
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30  
}

//ex14: use set keyword to set value age for person object
var person = {
  firstName:"John",
  lastName:"Doe",
  age:30
}

//ex15: create an object person(firstName, lastName, age, eyeColor, fullName) with object constructor

//ex16: assgin English nationality for person 
```
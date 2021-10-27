## String

***SYNTAX***
```javascript
var str = "Hello World";
var str = new String("Hello World");
```

## String Methods
### for
> Loop index in a string
***SYNTAX***
```javascript
for(let i = 0; i < str.length; i++){
	...do something
}
```

### for..in
> Loop index in a string

***SYNTAX***
```javascript
for(let index in str){
	...do something
}
```

### for..of
> Loop characters of a string

***SYNTAX***
```javascript
for(let c of str){
	...do something
}
```

### forEach
> Loop characters of a string

***SYNTAX***
```javascript
for(let c of str){
	...do something
}
```

### slice
> Extracts parts of a string.

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
    <td>Required. First character is at position 0. </td>
  </tr>
  <tr>
    <td>end</td>
    <td>Optional. Up to, but not including.</td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>  
</table>

---
***NOTE***
- The index from left to right, start = 0 and end = length - 1
- The index from right to left, start = -1 and end = length - 2
- end >= length of the string, return an extracted string from start to end of the string
---

### substring
> Extracts parts of a string.

***SYNTAX***
```javascript
substring(start,end)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Required. First character is at position 0. </td>
  </tr>
  <tr>
    <td>end</td>
    <td>Optional. Up to, but not including. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>
</table>

---
***NOTE***
- If start < 0, then start = 0
- If start < end, then swith start and end
- end >= length of the string, return an extracted string from start to end of the string
---

### substr
> Extracts parts of a string.

***SYNTAX***
```javascript
substr(start,length)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Required. First character is at position 0.</td>
  </tr>
  <tr>
    <td>length</td>
    <td>Optional. The number of characters to extract. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The extracted part of string</td>
  </tr>  
</table>

---
***NOTE***
- The index from left to right, start = 0 and end = length - 1
- The index from right to left, start = -1 and end = length - 2
- end >= length of the string, return an extracted string from start to end of the string
- length <= 0, return empty string <br/>
---

### replace
> Searches a string for a specified value. And, returns a new string where the specified values are replaced.

***SYNTAX***
```javascript
replace(search_expression, replacement)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. A replaced string or <strong>regular expression</strong></td>
  </tr>
  <tr>
    <td>replacement</td>
    <td>Required. A string uses to replace. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>A new string after replacement</td>
  </tr>  
</table>

---
***NOTE***
> search_expression can be a regular expression

| # | Value | Description | Sample String | Example | Output|
|---|-------|-----------------------------------|-----------------------------------------|-----------------------------------------|-----------------------------------------|
| 1 |   g   | Find all matches | var str = "JS will, JS will rock you!"; | str.replace(/JS/g, "Javascript");  |Javascript will, Javascript will rock you!|
| 2 |   i   | Matches case-insensitive  | var str = "JS will, js will rock you!"; | str.replace(/JS/gi, "Javascript");  |Javascript will, Javascript will rock you!|
| 3 |   \|   | Multiple replacements | var str = "Mr Blue has a blue house and a blue car"; | str.replace(/blue\|house\|car/gi, function (x) { return x.toUpperCase();});  |Mr BLUE has a BLUE HOUSE and a BLUE CAR.|
---

### charAt
> Returns the character at a specified index in a string.

***SYNTAX***
```javascript
charAt(index)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>index</td>
    <td>Required. The index of the character you want to return.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>The character at the index, or an empty string if the index is not found.</td>
  </tr>  
</table>

---
***NOTE***
- If index < 0 and using charAt, then return empty
- If index < 0 and using [], then return undefined
- If index > length and using charAt, then return empty
- If index > length and [], then return undefined
---

### indexOf
> Returns the position of the first occurrence of a specified value in a string.

***SYNTAX***
```javascript
indexOf(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Optional. Default 0. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The position of the searchvalue. Or, -1 if searchvalue does not occur</td>
  </tr>  
</table>

### lastIndexOf
> Returns the position of the last occurrence of a specified value in a string.

***SYNTAX***
```javascript
lastIndexOf(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>
  <tr>
    <td>start</td>
    <td>Optional. Searching backwards. </td>
  </tr>
  <tr>
    <td>Return</td>
    <td>The position of the searchvalue. Or, -1 if searchvalue does not occur</td>
  </tr>  
</table>

### search
> Searches a string for a specified value, and returns the position of the match.

***SYNTAX***
```javascript
search(search_expression) 
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. A searching string or <strong>regular expression</strong>.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>The position of the search_expression. Or, -1 if search_expression does not occur</td>
  </tr>  
</table>

### match
> Search a string.

***SYNTAX***
```javascript
match(search_expression)
```

***USING*** 
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>search_expression</td>
    <td>Required. The value to search for, as a <strong>regular expression.</strong></td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>An Array, containing the matches, one item for each match, or null if no match is found</td>
  </tr>    
</table>

### includes
> Check if a string includes a string.

***SYNTAX***
```javascript
includes(searchvalue, start)
```

***USING***
<table>   
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>start</td>
    <td>Optional. Default 0.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

### startsWith
> Check if a string starts with a string.

***SYNTAX***
```javascript
startsWith(searchvalue, start)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>start</td>
    <td>Optional. Default 0.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

### endsWith
> Check if a string ends with a string.

***SYNTAX***
```javascript
endsWith(searchvalue, length)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>searchvalue</td>
    <td>Required. The string to search for.</td>
  </tr>  
  <tr>
    <td>length</td>
    <td>Optional. The length of the string to search.</td>
  </tr>  
  <tr>
    <td>Return</td>
    <td>Returns true if the string contains the value, otherwise it returns false.</td>
  </tr>  
</table>

### concat
> Join strings.

***SYNTAX***
```javascript
concat(string1, string2, ..., stringX)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>string1, string2, ..., stringX</td>
    <td>Required. The strings to be joined.</td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>A new String, containing the text of the combined strings</td>
  </tr>  
</table>

### localeCompare
> Compare two strings in the current locale.

***SYNTAX***
```javascript
localeCompare(compareString)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>compareString</td>
    <td>Required. The strings to be joined.</td>
  </tr>    
  <tr>
    <td>Return</td>    
    <td>
      <ul>
        <li>-1 if the reference string is sorted before the compareString</li>        
        <li>0 if the two strings are equal</li>        
        <li>1 if the reference string is sorted after the compareString</li>        
      </ul>      
    </td>
  </tr>
</table>

---
***NOTE***
- Sorted character in alphabetical order
'', ' ','0','1','2','3','4','5','6','7','8','9',
'a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I',
'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R',
's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'
---

### repeat
> Make a new string by copying a string count times.

***SYNTAX***
```javascript
repeat(count)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>count</td>
    <td>Required. The number of times the original string value should be repeated in the new string</td>
  </tr>    
  <tr>
    <td>Return</td>
    <td>A new string containing copies of the original string</td>
  </tr>    
</table>

***EXAMPLE***
```javascript

```

### split
> Split a string into an array of substrings.

***SYNTAX***
```javascript
split(separator, limit)
```

***USING***
<table>  
  <tr>
    <td>Parameter</td>
    <td>Description</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>Optional. Specifies the character, or <strong>the regular expression</strong>, to use for splitting the string.</td>
  </tr>    
  <tr>
    <td>limit</td>
    <td>Optional. An integer that specifies the number of splits, items after the split limit will not be included in the array.</td>
  </tr> 
  <tr>
    <td>Return</td>
    <td>An Array, containing the splitted values</td>
  </tr>    
</table>

### toLowerCase
> Convert a string to lowercase

***SYNTAX***
```javascript
toLowerCase()
```

***USING*** 
<table>  
  <tr>
    <td>Return</td>
    <td>A string converted to lowercase</td>
  </tr>    
</table>

### toUpperCase
> Convert a string to uppercase

***SYNTAX***
```javascript
toUpperCase()
```

***USING***
<table>  
  <tr>
    <td>Return</td>
    <td>A string converted to uppercase</td>
  </tr>    
</table>

### trim
> Remove white space both front and end of a string

***SYNTAX***
```javascript
trim()
```

***USING***
<table>  
  <tr>
    <td>Return</td>
    <td>the string with removed whitespace from both ends</td>
  </tr>    
</table>

***CHECK KNOWLEDGE***
```javascript
//ex1: Compare strings
var x = "JOHN";
var y = "JOHN";
console.log(x==y);                            //?
console.log(x===y);                           //?

//ex2: Compare a string with an object string
var x = "JOHN";
var a = new String("JOHN");
console.log(x==a);                            //?
console.log(x===a);                           //?

//ex3: Compare object strings
var a = new String("JOHN");
var b = new String("JOHN");
console.log(a==b);                            //?
console.log(a===b);                           //?

//ex4: Use for, for..in, for..of,  forEach to print every letter of string Hello World!!!

//ex5
var str = "Apple, Banana, Kiwi";
console.log(str.slice(0));                      //?
console.log(str.slice(7));                      //?
console.log(str.slice(0, 1));                   //?
console.log(str.slice(-1));                     //?
console.log(str.slice(7, 13));                  //?
console.log(str.slice(7, 5));                   //?
console.log(str.slice(-12, -6));                //?
console.log(str.slice(-4, -6));                 //?
console.log(str.slice(7, -6));                  //?
console.log(str.slice(-12))                     //?

//ex6
var str = "Apple, Banana, Kiwi";
console.log(str.substring(7));                  //?
console.log(str.substring(-3));                 //?
console.log(str.substring(7, 13));              //?
console.log(str.substring(6, 0));               //?
console.log(str.substring(-12, -6));            //?

//ex7
var str = "Apple, Banana, Kiwi";
console.log(str.substr(7, 12));                 //?
console.log(str.substr(7, 33));                 //?
console.log(str.substr(-6, 5));                 //?
console.log(str.substr(-6, -5));                //?
console.log(str.substr(7, -5));                 //?
console.log(str.substr(7))                      //?
console.log(str.substr(-4))                     //?

//ex8
var str = 'JS will, JS will rock you!';
console.log(str.replace('JS','JavaScript'));    //?
var str = "JS will, JS will rock you!";
console.log(str.replace(/JS/g, "Javascript"));  //?
var str = "JS will, js will rock you!";
console.log(str.replace(/JS/gi, "Javascript")); //?
var str = "Mr Blue has a blue house and a blue car";
console.log(str.replace(/blue\|house\|car/gi, function (x) { return x.toUpperCase();}));     //?

//ex9
var str = 'JS will, JS will rock you!';
console.log(str.charAt(9));                     //?
console.log(str[9]);                            //?
console.log(str.charAt(50));                    //?
console.log(str[50]);                           //?

//ex10
var str = 'Please locate where "locate" occurs!';
console.log(str.indexOf('locate'));             //?
console.log(str.indexOf('locate',8));           //?
console.log(str.indexOf('data'));               //?

//ex11
var str = 'Please locate where "locate" occurs!';
console.log(str.lastIndexOf('locate'));         //?
console.log(str.lastIndexOf('locate',20));      //?

//ex12
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.search(/javascript/i));         //?

//ex13
var str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/gi));    	        //?
console.log(str.match(/abc/gi));    	        //?

//ex14
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.includes("javascript"));        //?
console.log(str.includes("Javascript", 4));     //?
console.log(str.includes("Javascript", 5));     //?
console.log(str.includes("Will"));              //?

//ex15
var str = 'Mr. Javascript will, Mr. javascript will rock you!';
console.log(str.startsWith("Javascript"));      //?
console.log(str.startsWith("Javascript", 4));   //?
console.log(str.startsWith("Javascript", 5));   //?
console.log(str.startsWith("Javascript", 4));   //?
console.log(str.startsWith("Javascript", 5));   //?

//ex16
var str = 'Hello world, welcome to the universe';
console.log(str.endsWith("universe"));          //?
console.log(str.endsWith("welcome"));           //?
console.log(str.endsWith("world", 11));         //?

//ex17
var str1 = "Hello ";
var str2 = "world!";
var str3 = " Have a nice day!";
console.log(str1.concat(str2, str3));           //?

//ex18
var str1 = 'a';
var str2 = 'b';
console.log(str1.localeCompare(str2));          //?

//ex19
var str1 = 'b';                                 
var str2 = 'a';
console.log(str1.localeCompare(str2));          //?

//ex20
var str1 = 'abc';
var str2 = 'a';
console.log(str1.localeCompare(str2));          //?

//ex21
var str1 = 'A';
var str2 = 'a';
console.log(str1.localeCompare(str2));          //?

//ex22
var str = "Hello world!";
console.log(str.repeat(3));                     //?

//ex23
var str = "How are you doing today?";
console.log(str.split());                       //?
console.log(str.split(""));                     //?                                        
console.log(str.split(" "));                    //?
console.log(str.split(" "),3);                  //?
```

***PRACTICE***
1. Remove vowel in a string
2. 
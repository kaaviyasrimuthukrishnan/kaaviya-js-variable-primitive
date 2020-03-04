//Primitive-string,number,boolean,symbol
//Reference-object(array)
//Values-Null,Not null,NaN

//Returns the value of the string
//Output:5
let a='Hello';
console.log(a.length);

//return the string
//output:hello
console.log(a.concat());

//returns whether the string ends with specified character or Not
//output:true
console.log(a.endsWith('o'));

//returns whether the string contains specified character or Not
//output:true
console.log(a.includes('e'));

//returns index of the first occurance of specified character
//output:1
console.log(a.indexOf('e'));

//returns the index of last occurance of specified character
//output:1
console.log(a.lastIndexOf('e'));

//returns the string specified no of times
//output:hellohello
console.log(a.repeat(2));

//replaces the character
//output:hillo
console.log(a.replace('e','i'));

//searches the value,if it is present it returns the index
//output:4
console.log(a.search('o'));

//extracts the part of the string
//output:hel
console.log(a.slice(0,3));

//returns the string as splitted
//output:"h","e"."l","l","o" 
console.log(a.split(''));

//returns whether the string starts with specified character or Not
//output:false
console.log(a.startsWith('e'));

//returns the part of the string
//output:ell
console.log(a.substr(1,3));

//returns the part of the string
//does not include end index
//output:el
console.log(a.substring(1,3));

//returns the string as lower case
//output:hello
console.log(a.toLowerCase());

//returns the string as upper case
//output:HELLO
console.log(a.toUpperCase());

//removes the white space from both the ends
//output:hello
console.log(a.trim());


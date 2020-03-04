//Primitive-string,number,boolean,symbol
//Reference-object(array)
//Values-Null,Not null,NaN

//STRING METHODS

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
//---------------------------------------------------------------

//NUMBER METHODS

let b=24;

//returns the number with specified decimal digits
//output:24.00
console.log(b.toFixed(2));

//returns the exponential form of the NUMBER
//output:2.40e+1
console.log(b.toExponential(2));

//returns the string value of the NUMBER
//output:30,24,11000
console.log(b.toString(8));
console.log(b.toString(10));
console.log(b.toString(2));

//----------------------------------------------------------------

//GLOBAL METHODS

//Displays the text
//output:hello
console.info("hello");

//Displays the text with a warning in yellow
//output:no
console.warn("N0");

//Displays the text with error in red
//output:no
console.error("No");

//Displays the text
//output:hi
console.log("Hi");

//Displays in table format
//output:(index)Value(index)Value0"hello"1"Hi"Array(2)
console.table(["hello","Hi"]);

//displays alert message
//alert("hi");

//displays the prompt dialog box
//prompt("Hi")

//displays confirm dialog box
//confirm("Press here")

//Displays the equivalent number value
//output:99,null,1,0,99,98
console.log(Number(99));
console.log(Number('99 99'));
console.log(Number(true));
console.log(Number(false));
console.log(Number(99.98));

//checks whether it is a number or Not
//output:false
console.log(isNaN(54));
//output:true
console.log(isNaN("uhu"));

//returns the floating point number
//output:787.989
console.log(parseFloat("787.989"));

//returns the integer
//output:76
console.log(parseInt("76.989"));

//returns the equivalent string Value
//output:878
console.log(String(878));

//checks the condition
//output:false
console.log(Boolean(87<8));


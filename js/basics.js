// single-line-comments: only appears in a single line. More use in the document

/* multiline comments: Used in the top od the document */

// To view the debug
console.log('<3');

// Create an alert using the alert method
// alert('oh noes!');

// THE VARIABLES
// if we don't specified a value it's going to be undefined.

var theMeaningOfLife = 42, // numeric value
	foo = 'bar', //string
	baz, quux; //mix declared variables with assigned variables

// the value of foo is a string will be overwritten by an undefined value which is what variable baz contains
foo = baz; 

// DATA TYPES
/*************
1. Numbers
2. String 
   Simple
   With Quotes
   Escaped
   Concatenate
3. Array
4. Object
**************/
var number = 1;
var string = 'hello';
var quotes = '"Hello", said the man';
var escaped = '"Oh no you didn\'t" she said';
var joined = 'wait, '+'what?';
var array = [5, "something", true] 
//length of 3 to 
//get a value - array[0] this will get the value of 5
var object = {
	myNumber: 10,
	myString: "woohoo!"
};

object.myNumber; // will return 10
object['myString']; // woohoo!
// The second one it's very useful when we want to use the value of a variable to choose which value we want to get from the objects
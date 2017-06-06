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

// BASIC OPERATORS
// 1. Basics
var addition = 1 + 1; // addition = 2
var subtraction = 1 - 1; // subtraction = 0
var multiplication = 5 * 2; // multiplication = 10 
var division = 5 / 2.5; // division = 2

//2. Modulus
var remainder = 5 % 2 // remainder = 1

var postfix = 5;
var prefix = 5; 

//3. Assignment operators
var additionAssignment = 1;
additionAssignment += 1; // addictionAssigment = 2
var subtractionAssignment = 1;
subtractionAssignment -=1 // subtractionAssignment = 0

var multiplicationAssignment = 2;
multiplicationAssignment *=2; //multiplicationAssignment = 4
var divisionAssignment = 5;
divisionAssignment /= 2.5; //divisionAssignment = 2
var modulusAssignment = 5;
modulusAssignment  %=2; //modulusAssignment = 1

//4. Comparison operators

// OPERATOR PRECEDENCE
var precedence = 1 + 4 * 2; // precedence = 9 the multiplication cames first then the addiction so 4*2+1
var precedence2 = (1+4) * 2; // precedence2 = 10 put in parenthisis to get the result that was expected
var precedence3 = 2 + 10 - 2; // precedence2 = 10 same precedence 

//OBJECTS
//1. Object literal syntax
var object = {
	property1 : true,
	property2 : 'hello'
}

// string literal syntax
var string = 'hello';
var stringObject = new String ('An object string');

function getThingByColour(colour) {
	var things = {
		red:'a-red-thing',
		green: 'a-green-thing',
		blue: 'a-blue-thing' 
	};
	return things[colour] || 'Sorry, no thing of that colour exists';
} 

// declare literal object
/*
var obj = {};
var obj2 = {name: 'Silvia'};

obj2.name = 'Silvia';
obj2['name'] = 'Silvia';

var person = {};

person.name = Anna;
person.sayMyName = function() {
	return this.name;
}

person.sayMyName()
person.name
*/
// 2.7 FUNCTIONS
/* 
function declaration:
- name: myFunction
- accepts no parameters because the parenthesis are empty
- function body: statement to execute when the function is invoked are inside the curly braces
*/
function myFunction() {
	console.log('Hello from the function');
}

// to call the function we use the function's name followed by a single set of parentheses

function mySecondFunction(message) {
	console.log(message);

	return true;
}

var myOtherFunction = function myOtherFunction() {
	console.log('function expression');
}

// call the myFunction('woohoo!') it will return 'woohoo!' undefined
// we specify the return so when we call the function she will return true

console.log(hoistedVariable);
var hoistedVariable = 'test';
// This is exactly as if we had declared a variable before the console log statement

// console.log(undeclaredVariable);
// Try to log a variable never declare we get a reference error and will halts program execution

(function invokedImmediatly(){
	console.log('invoked automatically')
}());

!function alsoInvokedAutomatically() {
	console.log('invoked automatically too')
}();

//SCOPE

var global = 1;
function aFunction() {
	var local = 2;
	console.log(global);
	console.log(local);
} 
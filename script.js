// This is a SINGLE LINE COMMENT

/* This is a MULTI LINE COMMENT 
The code below is an example STATEMENT (instruction/command)
Statements end with a SEMICOLON
*/
console.log("Welcome to JS!");

/* A VARIABLE is a named storage container for data (information) 
*/

// DECLARE a new variable (make space, give it a name/label)
let username;

// ASSIGN a value (data) to the var
username = "Arian";

// see the value stored in the var
console.log(username);

// DECLARE + ASSIGN in one step
let luckyNum = 7;
console.log(luckyNum);
// CHANGE the value stored in a variable (don't repeat LET)
luckyNum = 8;
console.log(luckyNum);

// MATH OPERATORS (+, -, *, /)
let age = 15;
console.log(age);
let ageInTen = age + 10;
console.log(ageInTen);
let ageDogYears = age / 7;
console.log(ageDogYears);
// Can also do math with just numbers
let zeusHumanAge = 7 * 7;

// Combine 2 "literal" Strings (CONCATENATION)
console.log("hello " + " world");
// OR concatenate a literal String with a VARIABLE!
console.log("My age is " + age);
console.log("My age in ten years is " + ageInTen);
console.log("My age in dog years is " + ageDogYears);

//* operatori aritmetici*//
undefined
let firstNumber;
undefined
firstNumber;
undefined
firstNumber = 50;
50
let secondNumber = 20;
undefined
let sum = firstNumber + secondNumber;
undefined
sum
70
console.log("First number is : " + firstNumber , " Second number is : " + secondNumber , "And the Sum is :" + sum ); 
VM912:1 First number is : 50  Second number is : 20 And the Sum is :70
undefined
//*media a 3 numere*//
undefined
let thirdNumber = 100;
undefined
let average = (firstNumber + secondNumber + thirdNumber ) / 3; 
undefined
average
56.666666666666664
console.log("The average is : " + average);
VM1490:1 The average is : 56.666666666666664
undefined 
//*operatori de atribuire*//
undefined
let variableX =100;
undefined
let variableX = variableX + 5;
undefined
console.log ( "The value of  variable X is now :" + variableX);
VM2060:1 The value of  variable X is now :105
VM2469:5 Uncaught SyntaxError: Identifier 'variableX' has already been declared
let variableY =10;

variableY +=2;
12
console.log ("The value of variable Y is now : " + variableY);
VM2749:1 The value of variable Y is now : 12
undefined
//*operatori de comparare*//
undefined
const valueA = 5;
undefined
const valueB =10;
undefined
if (valueA > valueB) {
  console.log("valueA is greater than valueB");
} else {
  console.log("valueB is greater than or equal to valueA");
}
 valueB is greater than or equal to valueA

const personAge = 15;

if (personAge >= 18) {
  console.log("The person is an adult.");
} else {
  console.log("The person is a minor.");
}
The person is a minor.
undefined
//*operatori logici*//
undefined
const condition1 = true;
const condition2 = false;

if (condition1 && condition2) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one of the conditions is not true.");
}

const condition = true;

if (!condition) {
  console.log("The condition is true.");
} else {
  console.log("The condition is not true.");
}
 At least one of the conditions is not true.
 The condition is not true.

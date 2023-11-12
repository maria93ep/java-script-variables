//* operatori aritmetici*//

let firstNumber;
firstNumber = 50;
50
let secondNumber = 20;
let sum = firstNumber + secondNumber;
sum
70
console.log("First number is : " + firstNumber , " Second number is : " + secondNumber , "And the Sum is :" + sum ); 
First number is : 50  Second number is : 20 And the Sum is :70

//*media a 3 numere*//
let thirdNumber = 100;
let average = (firstNumber + secondNumber + thirdNumber ) / 3; 
average
56.666666666666664
console.log("The average is : " + average);
The average is : 56.666666666666664

//*operatori de atribuire*//

let variableX =100;
let variableX = variableX + 5;
console.log ( "The value of  variable X is now :" + variableX);
 The value of  variable X is now :105

let variableY =10;
variableY +=2;
12
console.log ("The value of variable Y is now : " + variableY);
 The value of variable Y is now : 12


//*operatori de comparare*//

const valueA = 5;
const valueB =10;

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


//*operatori logici*//

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

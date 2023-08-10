// You are given three number 13, 79, 45.Now write a program that will print the largest number using if else.

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2 && num1 > num3) {
    console.log('num1 is large');
}
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is large');
}
else {
    console.log('num3 is large');
}
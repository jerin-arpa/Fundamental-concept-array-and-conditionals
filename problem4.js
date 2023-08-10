// You are given  a triangle with three sides 9, 8, 9. Now write a program to check whether a triangle is Isosceles or not using if else.


var num1 = 9;
var num2 = 8;
var num3 = 9;

if (num1 == num2 || num1 == num3 || num2 == num3) {
    console.log('triangle is Isosceles');
}
else {
    console.log('triangle is not Isosceles');
}
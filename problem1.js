/* 
you are given an array:
var fruits = ['Apple', 'Banana','Orange'];

a) Find the index of 'Banana' and replace 'Banana' with 'Mango'

b Remove 'Orange' and add 'Watermelon'
*/

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits);

fruits.indexOf('Banana');
console.log(fruits);
fruits[2] = 'Mango';
console.log(fruits);


fruits.pop()
console.log(fruits);
fruits.push('Watermelon')
console.log(fruits);
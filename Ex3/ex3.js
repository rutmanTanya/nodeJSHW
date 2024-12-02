/*Submitted by: Tanya Rotman
Class 48/6
Exercise 3
*/
//Method to count the amount of zeroes in an array of numbers

const arr = [123,0,456,32,0,12,0,0,34,67,870,100,0,1]
let count = 0;

//Arrow function that runs over each element of the array and checks if it equals by value to zero.
arr.forEach((num) => (count += num === 0 ? 1 : 0));

console.log(count);
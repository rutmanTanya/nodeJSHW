/*Submitted by: Tanya Rotman
Class 48/6
Exercise 1
*/
//Method to check the number for divisibility by 2,3,5
const num = 137
a = num%2 == 0
b = num%3 == 0
c = num%5 == 0 
// Check if the number is divisible by at least one of the three (2, 3, or 5)
numA = Number(a || b || c)
// Check if the number is divisible by exactly two of the three numbers
numB = Number((a && b) || (b && c) || (a && c))
// Check if the number is divisible by all three numbers (2, 3, and 5)
numC = Number(a && b && c)
res = numA + numB + numC
console.log(res)
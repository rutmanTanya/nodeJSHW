/*Submitted by: Tanya Rotman
Class 48/6
Exercise 2
*/
//Method to print out all the prime numbers less than number 237
const num = 237
// Function to check if a number is prime

function isPrime(num){
    if (num<=1) return false

// Check divisibility from 2 up to the square root of the number, if divisible, the number is not prime

    for (let i = 2; i<=Math.sqrt(num); i++){
        if (num % i === 0) return false;
    } 
    return true;
    }
    
for (let i = 2; i < num; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
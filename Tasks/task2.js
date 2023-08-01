//Task 2: Data Manipulation
// Write a function in Node.js that takes an array of integers as input and returns the sum of all the numbers.

const sumOfIntegers = (inputArray) => {
    let sum =0 // Initialize sum value to 0

    // Check if the inputArray is an array or not
    if (!Array.isArray(inputArray)) {
        console.log('Input is not an array');
      }
      else{
        // Calculate the sum of all integers of inputArray
        inputArray.map(item => sum += Number.isInteger(item) ? item : 0)
        console.log("Task 2: Sum of all integers of the array:", sum)
      }
    
}

module.exports = {sumOfIntegers};
// <!-- Fundamentals To Do 2



// Countdown

// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

// function countDown(num) {
//     let arr = [];
//     for (let i = num; i >= 0; i--) {
//         arr.push(i);
//     }
//     console.log("Length of Array:" + " " + arr.length);
//     return arr;
// }
// console.log(countDown(20));

// console.log("hello");

// Print and Return

// Your function will receive an array with two numbers. Print the first value, and return the second.

//  function printAndReturn([num1, num2]) {
//      console.log(printAndReturn([num1])); {
//          return (printAndReturn(num2));
//      }
//  }




// First Plus Length

// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).


// arr = [1 , 3, 5, 7, 9]
// arr = ["true","true",1,2]
// arr = [false,5,6]

// function firstPlusLength(arr) {
//     return arr[0] + arr.length;
// }
// console.log(firstPlusLength(arr));

 

// Values Greater than Second

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

// arr = [1,3,5,7,9,13]
// function greaterThanSecond(arr) {
//     let count = 0;
//     newArr = []
//     for ( let i = 0; i < arr.length; i++ ) {
//         if (arr[i] > arr[1]) {
//             newArr.push(arr[i])
//             count++;
//         }
//     }
//     console.log(greaterThanSecond([1,3,5,7,9,13]));
//     return newArr
// }
// console.log("hello");

// function GreaterThanSecond(arr) {
//     var count = 0;
//     newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[1]) {
//             newArr.push(arr[i])
//             count++;
//         }
//     }
//     console.log(newArr);
//     return newArr
// }
// GreaterThanSecond([1,3,4,5,2,1,4,5]);

// Values Greater than Second, Generalized

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

 

// This Length, That Value

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.



// Fit the First Value

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

 

// Fahrenheit to Celsius

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.



// Celsius to Fahrenheit

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns the equivalent temperature expressed in Fahrenheit degrees.

// (Optional): Do Fahrenheit and Celsius values equate at a certain number? The scientific calculation can be complex, so for this challenge just try a series of Celsius integer values starting at 200, going downward (descending), checking whether it is equal to the corresponding Fahrenheit value. -->
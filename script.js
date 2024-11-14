// 1. Write a range function that takes two arguments, start and end, and returns an array
// containing all the numbers from start up to (and including) end.

function range(start, end) {
    let result = []; // Creates an empty array to store the numbers
    for (let i = start; i <= end; i++) { // Starts a loop from 'start' to 'end'
        result.push(i); // Adds the current number 'i' to the result array
    }
    return result; // Returns the filled array after the loop ends
}

// Example output:

console.log(range(1, 10)); // outputs [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Next, write a sum function that takes an array of numbers and returns the sum of
// these numbers. Run the example program and see whether it does indeed return 55.

function sum(numbers) {
    let total = 0; // Initializes a total variable at 0 to hold the sum
    for (let number of numbers) { // Loops through each number in the numbers array
        total += number; // Adds each number to the total
    }
    return total; // Returns the final total after the loop
}

// Example output:

console.log(sum(range(1, 10))); // returns 55

// 3. Arrays have a reverse method that changes the array by inverting the order in which
// its elements appear. For this exercise, write two functions, reverseArray and
// reverseArrayInPlace. The first, reverseArray, takes an array as an argument and
// produces a new array that has the same elements in the inverse order. 

function reverseArray(array) {
    let reversed = []; // Creates an empty array to store the reversed items
    for (let i = array.length - 1; i >= 0; i--) { // Starts a loop from the last item to the first
        reversed.push(array[i]); // Adds each item from the end to the beginning
    }
    return reversed; // Returns the new reversed array
}

// Example output for reverseArray:

console.log(reverseArray(["A", "B", "C"])); // outputs ["C", "B", "A"]

// The second,
// reverseArrayInPlace, does what the built-in reverse method does: it modifies the array
// given as an argument by reversing its elements. Neither may use the standard reverse
// method.

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) { // Loops halfway through the array
        let temp = array[i]; // Temporarily stores the current element
        array[i] = array[array.length - 1 - i]; // Sets the current element to its opposite end
        array[array.length - 1 - i] = temp; // Sets the opposite end element to the temp value
    }
}

// Example output for reverseArrayInPlace:

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue); // outputs [5, 4, 3, 2, 1]

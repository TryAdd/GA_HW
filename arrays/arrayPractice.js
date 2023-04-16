// ## Array Practice
​
​
​
// 1. Using `push` and `unshift`, make this array contain the numbers from zero through seven:
​
// ```js
const arr = [2, 3, 4];
// ​
// your code here
​
// arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
// ```
​
// 2. What is *returned* by `push`? Before throwing this into the console, form a hypothesis about what you think the return value will be:
​
// ```js
const arr = [5, 7, 9];
arr.push(6); // returns ???
```
​
3. Change all numbers to be those numbers multiplied by two:
```js
const numbers = [4, 9, 7, 2, 1, 8];
​
  // your code here
​
numbers; // => [8, 18, 14, 4, 2, 16]
```
​
4. Change all **odd** numbers to be those numbers multiplied by two:
```js
const numbers = [4, 9, 7, 2, 1, 8];
​
  // your code here
​
numbers; // => [4, 18, 14, 2, 2, 8]
```
​
5.  Create an array to hold your favorite colors.  For each choice, log to the screen a string like: `My #1 choice is blue.`
​
1.  Create an array of ages.  Loop through and log only the ages that are over 21.
​
1.  Starting with an empty array called `rainbowColors`:
​
    * Add "orange" to the end of the array
    * Add "red" to the start of the array
    * Add "yellow" to the end
    * Add "green", "blue", "indigo", and "violet" to the end of the array
      * Try and do this using _one_ method
    * Print the length of the array
    * Print the second item
    * Print the last item (make this flexible/dynamic!)
    * Print the index of the string "blue"
​
1. Find out the difference between `.slice` and `.splice`
    * Create an array called `twoColors` using one method - don't change the `rainbowColors` array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
    * Starting with this array `var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];`, remove the duplicates *destructively* using _slice_ or _splice_ (whichever one is appropriate)
​
1. Work with arrays of arrays
    * Starting with this array `var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];`
    * Access "inner array first item" and print it out"
    * Print "third" by using a dynamic index
  
  
1. Create an array to hold your top five choices of something (music, books, movies, whatever).
​
    - For each choice, log to the screen a string like: "My #1 choice is blue."
    - **Bonus:** Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
// Remember to invoke your functions, and Test Regularly

// ? write a function that returns "Hello World!" if no argument is given, or "Hello <argument>!" otherwise
// ? eg: hello()  "Hello World!"; hello("Mike") => "Hello Mike!"
function hello(string) {
    let output = 'World'
    if(string){
         output = "Hello" + output
    }return 'hello world!'
}
console.log(hello(''))

// ? write a function that will calculate the area of a circle, given the radius
function areaOfCircle(radius) {
     return radius * 3.14
}

 console.log(areaOfCircle(14))

// ? write a function to convert celcius to farenheit
function celciusToFarenheit(celcius) {
    return celcius + 32 * 5/9
}
console.log(celciusToFarenheit(14))

// ? write a function that will reverse a number (eg. 456733 become 337654)
function numberReverse(number) {
    return (
        parseFloat(
            number
            .toString()
            .split('')
            .reverse()
            .join('')
            )* Math.sign(number)
        )
}

console.log(numberReverse(456733))

// ? write a function to check if a word or phrase is a palindrome returning a boolean
// ? eg. palindromeCheck('dad') => true, palindrome('nonsense') => false
function palindromeCheck(string) {
    var re = /[^A-Za-z0-9]/g;
    string = string.toLowerCase().replace(re, '');
    var len = string.length;
    for (var i = 0; i < len/2; i++) {
      if (string[i] !== string[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(palindromeCheck('nonsense'))
   console.log(palindromeCheck('dad'))
   
// ? write a function that returns the letters of a word or phrase in alphabetical order case insensitive
// ? eg. orderStringAlphabetically('javascript is cool') => 'aacciijlooprsstv'
function orderStringAlphabetically(string) {
    return string.split("").sort().join("");
}
console.log(orderStringAlphabetically('javascript is cool'))

// ? write a function that capitalizes the first letter of each word
// ? eg. titleCase('the lord of the rings') => 'The Lord Of The Rings'
function titleCase(string) {
    var splitStr = string.toUpperCase().split(" ");

  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr.length[i] < splitStr.length) {
      splitStr[i].charAt(0).toUpperCase();
    }

    string = splitStr.join(" ");
  }

  return string;
}
console.log(titleCase("the lord of the rings"))

// ? write a function that frames a string in asterisks (*)
// ?                            ***************
// ? eg: frame('Hello Kitty') => * Hello Kitty *
//  ?                           ***************
function frame(string) {
    let border = '*'.repeat(string.length + 4)
    return `${border}\n* ${string} *\n${border}`
}

console.log(frame('Hello Kitty'))

// ? write a function to remove all empty values (null, undefined, '', NaN, false) EXCEPT 0 from an array.
// ? It should handle complex data types eg: {}, [] etc.
// ? eg: [0, false, [], undefined, {}, NaN, 'Kevin'] => [0, [], {}, 'Kevin'];
function removeBlank(array) {
    var newArray = new Array();
    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        newArray.push(array[i]);
      }
    }
    return newArray;
}
console.log(removeBlank([1, 2,, 3,, 3,,,,,, 4,, 4,, 5,, 6,,,,]))

// ? write a function to return a random element from an array
// ? eg: [1,"elephant", "apple", 67] => "elephant"
function randomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);

const item = array[randomIndex];

return item;
}
console.log(randomElement(["elephant",67, "apple", 1 ]))

// ? write a function that returns the second lowest and second highest number in an array
// ? eg: [1,2,3,4,5,6,7,8] => [2,7]
function secondLowestSecondHighest(array) {
    array.sort(function(x,y)
    {
    return x-y;
    });
        var uniqa = [array[0]];
        var result = [];

        for(var j=1; j < array.length; j++)
        {
        if(array[j-1] !== array[j])
        {
        uniqa.push(array[j]);
        }
        }
        result.push(uniqa[1],uniqa[uniqa.length-2]);
        return result.join(',');
}
console.log(secondLowestSecondHighest([1,2,3,4,5,6,7,8]));

// ? write a function that will convert a price into coins needed to make up that price
// ? the coins available are 1, 2, 5, 10, 20, 50, 100
// ? the function should use the smallest number of coins possible
// ? eg: coins(1.99) => [100, 50, 20, 20, 5, 2, 2]
function coin(amount,coins) {
    if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat(coin(left, coins) );
        } 
      else
        {
         coins.shift();
         return coin(amount, coins);
        }
    }
} 
console.log(coin(2, [1, 2, 5, 10, 20, 50, 100]));
// ​
// ? write a function to merge two arrays and remove duplicates
// ? eg: mergeUnique([9,8,8,9], [7,8,8,7]) => [9,8,7]
function mergeUnique(arr1, arr2) {
    if(!arr2.push || !arr2.length)
      return arr1;    
     if(!arr1.length) 
      return arr2.concat();     
     for(var i = 0; i < arr2.length; i++)
     {
         if(arr1.indexOf(arr2[i]) == -1) 
         arr1.push(arr2[i]);
     }
     return arr1;
}
console.log(mergeUnique([9,8,8,9],[7,8,8,7]));

// ? write a function to find the first n fibonacci numbers
// ? the fibonacci sequence is a series of numbers, each number is the sum of the last two
// ? 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 etc...
// ? eg: fibonacci(4) => [0,1,1,2]; fibonacci(8) => [0, 1, 1, 2, 3, 5, 8, 13];
function fibonacci(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

console.log(fibonacci([8]))

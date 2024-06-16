console.log (`1: Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.`);
const ages = [3, 9, 23, 64, 2, 8, 28, 93];          // array of ages
console.log(ages);

console.log (` a: Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    !!!Do not use numbers to reference the last element, find it programmatically.!!!
    !!!ages[7] - ages[0] is not allowed!!!!` );
    console.log(ages[ages.length - 1] - ages[0]);     // last element using length to find- first element
    
    console.log (` b: Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).`);
    console.log(ages.push(75));   
    console.log (ages);                // add a new age to the array using push
    console.log(ages[ages.length - 1] - ages[0]);             // last element using length to find- first element
    
    console.log(`Use a loop to iterate through the array and calculate the average age.`);
    let sum = 0;  // sum of all elements in the array      
    {for (let i = 0; i < ages.length; i++) {                     
        sum += ages[i]; // sum of all elements in the array
    }   
    console.log(sum / ages.length);} // average age
    
    
    console.log(`2: Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.`);
    const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // array of names
    console.log(names);     
    
    console.log(`A: Use a loop to iterate through the array and calculate the average number of letters per name.`);
    let sumLetters = 0;  // sum of all letters in the array
    {for (let i = 0; i < names.length; i++) {
        sumLetters += names[i].length; 
        console.log(sumLetters)// sum of all letters in the array
    }
    console.log(sumLetters / names.length);} // average number of letters per name
    
    console.log(`B: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.`);
    let allNames = '';  // all names concatenated together
    {for (let i = 0; i < names.length; i++) {
        allNames += names[i] + ' '; // all names concatenated together
    }       
    console.log(allNames);} // all names concatenated together


console.log(`3: How do you access the last element of any array?`);
console.log(`array[array.length - 1]  this takes the length of the array and subtracts 1 to get the last element`);

console.log(`4: How do you access the first element of any array?`);
console.log(`array[0]  this accesses the first element of the array by using index which 0 is the first`);

console.log(`5: Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
For example:

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array`);

let nameLengths = [];  // array of name lengths
console.log(names); // array of names
{for (let i = 0; i < names.length; i++) {                          
    nameLengths.push(names[i].length); // add the length of each name to the nameLengths array
}
console.log(nameLengths);} // array of name lengths



console.log(`6: Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.`);

let sumNameLengths = 0;  // sum of all elements in the array
{for (let i = 0; i < nameLengths.length; i++) {
    sumNameLengths += nameLengths[i]; // sum of all elements in the array
}       

console.log(sumNameLengths);} // sum of all elements in the array

console.log(`7: Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').`);


const wordConcatenated = (word, n)=>  { // function that takes two parameters, word and n
    let concatenatedWord = ''; // concatenated word
    for (let i = 0; i < n; i++) {
        concatenatedWord += word; // word concatenated to itself n number of times
    }
    return concatenatedWord; // return concatenated word
}
console.log(`('Hello', 3) = 'HelloHelloHello'`);
console.log(wordConcatenated('Hello', 3)); // 'HelloHelloHello'
console.log(`('Goodbye', 4) = 'GoodbyeGoodbyeGoodbyeGoodbye'`);
console.log(wordConcatenated('Goodbye', 4)); // 'GoodbyeGoodbyeGoodbyeGoodbye'
console.log(`('Jasmine', 7) = 'JasmineJasmineJasmineJasmineJasmineJasmineJasmine'`);
console.log(wordConcatenated('Jasmine', 7)); // 'JasmineJasmineJasmineJasmineJasmineJasmineJasmine'

console.log(`8: Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.`);
const fullName = (firstName, lastName) => `${firstName} ${lastName}`; // full name separated by a space

console.log(`('Jasmine', 'joseph') = 'Jasmine  joseph'`);
console.log(fullName('Jasmine', 'joseph')); // 'Jasmine Joseph'
console.log(`('John', 'Doe') = 'John Doe'`);
console.log(fullName('John', 'Doe')); // 'John Doe'
console.log(`('Jane', 'Smith') = 'Jane Smith'`);    
console.log(fullName('Jane', 'Smith')); // 'Jane Smith'

console.log(`9: Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.`);
const sumGreaterThan100 = (numbers) => { // function that takes an array of numbers
    let sum = 0; // sum of all the numbers in the array
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]; // sum of all the numbers in the array
        
    }
    

    
    if (sum > 100 === true) {   
        return true; // sum of all the numbers in the array is greater than 100
} else {
    return false; // sum of all the numbers in the array is not greater than 100      
}
}

console.log(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] = false`);
console.log(sumGreaterThan100([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // false
console.log(`[10, 20, 30, 40, 50, 60, 70, 80, 90, 100] = true`);    
console.log(sumGreaterThan100([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // true
console.log(`[10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110] = true`);
    
    

console.log(`10: Write a function that takes an array of numbers and returns the average of all the elements in the array.`);
const average = (numbersArray) => { // function that takes an array of numbers
    let sum = 0; // sum of all the numbers in the array
    for (let i = 0; i < numbersArray.length; i++) {
        sum += numbersArray[i]; // sum of all the numbers in the array
    }
    return sum / numbersArray.length; // average of all the elements in the array
}       

console.log(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10] = 5.5`);
console.log(average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(`[71, 41, 21, 3, 54, 12, 6, 8, 9, 10] = 23.5`);
console.log(average([71, 41, 21, 3, 54, 12, 6, 8, 9, 10])); // 23.5
console.log(`[10, 20, 30, 40, 50, 60, 70, 80, 90, 100] = 55`);
console.log(average([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // 55


console.log(`11: Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.`);

const averageGreaterThan = (array1, array2) => { // function that takes two arrays of numbers
    let sum1 = 0; // sum of all the numbers in the first array
    for (let i = 0; i < array1.length; i++) {
        sum1 += array1[i]; // sum of all the numbers in the first array
    }
    console.log(sum1);
    let average1 = sum1 / array1.length; // average of the elements in the first array
    console.log(average1);
    
    let sum2 = 0; // sum of all the numbers in the second array
    for (let i = 0; i < array2.length; i++) {
        sum2 += array2[i]; // sum of all the numbers in the second array
    }
    console.log(sum2);
    let average2 = sum2 / array2.length; // average of the elements in the second array
    console.log(average2);
    
    if (average1 > average2) {
        return true; // average of the elements in the first array is greater than the average of the elements in the second array
    } else {
        return false; // average of the elements in the first array is not greater than the average of the elements in the second array
    }
}

console.log(`[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] = false`);
console.log(averageGreaterThan([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 20, 30, 40, 50, 60, 70, 80, 90, 100])); // false
console.log(`[10, 20, 36, 73, 53], [7, 32, 45, 67, 89] = false`);
console.log(averageGreaterThan([10, 20, 36, 73, 53], [7, 32, 45, 67, 89])); // false
console.log(`[34, 45, 67, 89], [10, 23, 12, 23, 53] = true`);
console.log(averageGreaterThan([34, 45, 67, 89], [10, 23, 12, 23, 53])); // true


console.log(`Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.`);


const willBuyDrink = (isHotOutside, moneyInPocket) => { // function that takes a boolean isHotOutside, and a number moneyInPocket

    
    if (isHotOutside >= 76 && moneyInPocket > 10.50) {
        return true; // it is hot outside and moneyInPocket is greater than 10.50
    } else {
        return false; // it is not hot outside or moneyInPocket is not greater than 10.50
    }
}

console.log(`(76, 11) = true`);
console.log(willBuyDrink(76, 11)); // true
console.log(`(75, 10) = false`);
console.log(willBuyDrink(75, 10)); // false
console.log(`90, 20 = true`);
console.log(willBuyDrink(90, 20)); // true
console.log(`(50, 11) = false`);
console.log(willBuyDrink(50, 11)); // false

console.log(`13: Create a function of your own that solves a problem. In comments, write what the function does and why you created it.`);
console.log(`This function takes an array of wall measurements and calculates the total square footage of a room.`);  //plenty of people need quick calculations

const roomSquareFootage = (walls) => { // function that takes an array of wall measurements

    let sum = 0; // sum of all the wall measurements
    for (let i = 0; i < walls.length; i++) {
        sum += walls[i]; // sum of all the wall measurements
    }
    return sum; // total square footage of a room
}

console.log(`[10, 20, 10, 20] = 60`);
console.log(roomSquareFootage([10, 20, 10, 20])); // 60 
console.log(`[15, 25, 15, 25] = 80`);
console.log(roomSquareFootage([15, 25, 15, 25])); // 80
console.log(`[20, 30, 20, 30] = 100`);
console.log(roomSquareFootage([20, 30, 20, 30])); // 100

// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

//FIRST EXAMPLE!
// const str = 'the quick brown fox';
// const newStr = str
// .split('')
// .reverse()
// .join('');
// console.log(newStr);

//SECOND EXAMPLE!!
const str = 'the quick brown fox';

let newStr = '';
for (let i = str.length - 1; i >= 0; i--){
    newStr += str[i]; 
}

console.log(newStr);

//MY EXAMPLE!!!
// const str = prompt('What is your first name?');

// let newStr = '';
// for (let i = str.length - 1; i >= 0; i--){
//     newStr += str[i]; 
// }

// console.log(newStr);
// alert(newStr);

//MY EXAMPLE2!!
// const str = prompt('What is your first name?');
// const newStr = str
// .split('')
// .reverse()
// .join('');
// console.log(newStr);
// alert(newStr);
// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result


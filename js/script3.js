// Ask for the user's first name
// const fname=prompt('Enter your first name', 'Corinne');
// Ask for the user's last name
// const lname=prompt('Enter you last name', 'Padilla');
// Log the user's first name to the console
// console.log('Corinne');
// Alert the user's last name
// alert(lname);

// *BONUS* 
// Ask for the user's birthday
// const birthdate=prompt('Enter your birthday', 'dd/mm/yyyy');
// Ask the user to confirm their birthday input
// confirm('Confirm your birthday: ${date}');
// Alert the user's birthday
// alert('Thank you ${fname} ${lname}. Your birthday is ${date}.');
// *Bonus**Bonus*






// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
let num1=prompt('Enter a number', '14');
let num2=prompt('Enter another number', '24');
// Convert the values to integers
// Store the two integers as variables
let parsedNum1=parseInt(num1);
if (Number.isNaN(parsedNum1)) {  
   num1=prompt('Enter a number', '14');
   parsedNum1=parseInt(num1);
}
console.log('num1: ', num1)
let parsedNum2=parseInt(num2);
if (Number.isNaN(parsedNum2)) {
    num2=prompt('Enter another number', '24');
    parsedNum2=parseInt(num2);
}
console.log('num2: ', num2)
// Compare the two numbers
// Alert the larger number
if (num1 === num2) {
    alert('the values are equal.');
}
else if (parsedNum1 > parsedNum2) {
  alert(parsedNum1)
}
else {
  alert(parsedNum2)
}



// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number
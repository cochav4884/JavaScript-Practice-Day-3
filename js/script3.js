// Ask for the user's first name
const fname=prompt('Enter your first name', 'Corinne');
// Ask for the user's last name
const lname=prompt('Enter you last name', 'Padilla');
// Log the user's first name to the console
console.log('Corinne');
// Alert the user's last name
alert(lname);

// *BONUS* 
// Ask for the user's birthday
const birthdate=prompt('Enter your birthday', 'dd/mm/yyyy');
// Ask the user to confirm their birthday input
confirm('Confirm your birthday: ${date}');
// Alert the user's birthday
alert('Thank you ${fname} ${lname}. Your birthday is ${date}.');
// *Bonus**Bonus*






// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
const num1=prompt('Enter a number', '14')
const num2=prompt('Enter anothr number', '24')
// Convert the values to integers
// Store the two integers as variables
const parsedNum1=parseInt(num1);
const parsedNum2=parseInt(num2);
// Compare the two numbers
if (parsedNum1 > parsedNum2) {
  alert(parsedNum1)
}
else {
  alert(parsedNum2)
}
// Alert the larger number
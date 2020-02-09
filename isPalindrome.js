/*
Given a string, return true or false depending if the string
 is a palindrome. Palindromes are words tht read the same 
 backwards and forwards. Make sure it is case insensitive.

 Examples:

 input: 'Madam'
 output: true

 input:'love'
 output: false
*/

const input = 'Madam';

//Solution 1
const isPalindrome1 = input =>
  input.toLowerCase() ===
  input
    .toLowerCase()
    .split('')
    .reverse()
    .join('')
    ? true
    : false;

//Solution 2
const isPalindrome2 = input => {
  const splitInput = input.split('');

  for (let i = 0; i <= Math.floor((splitInput.length - 2) / 2); i++) {
    if (
      splitInput[i].toLowerCase() !==
      splitInput[splitInput.length - 1 - i].toLowerCase()
    )
      return false;
  }

  return true;
};

console.log(`Solution 1: ${isPalindrome1(input)}`);
console.log(`Solution 2: ${isPalindrome2(input)}`);

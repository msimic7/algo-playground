/*
Return a string with the order of characters reversed

Example:

input: 'string'
output: 'gnirts'

input: 'Dose'
output: 'esoD'

*/

const input1 = 'string';
const input2 = 'string';

//Solution 1
const reverseString1 = input =>
  input
    .split('')
    .reverse()
    .join('');

//Solution 2
const reverseString2 = input => {
  input = input.split('');

  for (let i = 0; i <= Math.floor((input.length - 2) / 2); i++) {
    let tmp = input[i];
    input[i] = input[input.length - 1 - i];
    input[input.length - 1 - i] = tmp;
  }

  return input.join('');
};

console.log(`Solution 1: ${reverseString1(input1)}`);
console.log(`Solution 2: ${reverseString2(input2)}`);

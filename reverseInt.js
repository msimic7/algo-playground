/*
Given a integer, return an integer with digits
reversed.

 Examples:

 input: 31
 output: 13

 input: 404
 output: 404

 input: -17
 output: -71

 input: -100
 output: -1

*/

const input = -10010;

//Solution 1
const reverseInt1 = input => {
  const reversedInput = input
    .toString()
    .split('')
    .reverse()
    .join('');

  return input < 0 ? parseInt(reversedInput) * -1 : parseInt(reversedInput);
};
//Solution 2
const reverseString = input => {
  input = input.split('');

  for (let i = 0; i <= Math.floor((input.length - 2) / 2); i++) {
    let tmp = input[i];
    input[i] = input[input.length - 1 - i];
    input[input.length - 1 - i] = tmp;
  }

  return input.join('');
};

const reverseInt2 = input =>
  input < 0
    ? parseInt(reverseString(input.toString())) * -1
    : parseInt(reverseString(input.toString()));

console.log(
  `Solution 1: ${reverseInt1(input)} -> ${typeof reverseInt1(input)}`
);
console.log(
  `Solution 2: ${reverseInt2(input)} -> ${typeof reverseInt2(input)}`
);

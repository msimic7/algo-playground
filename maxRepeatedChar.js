/*
Return the character with the most repetitions
in a given string. If there are characters with 
the same amount of repetitions return the first one.

Example:

input: 'striiing'
output: 'i'

input: 'sheeeeet'
output: 'e'

input: 'cuurrent'
output: 'u'

input: 'l888trr g8888trr'
output: '8'

*/

const input = 'l888trr g8888trr';

//Solution
const maxRepeatedChar = input => {
  const charCount = {};

  input.split('').forEach(el => {
    if (el === ' ') return;

    charCount[el] = charCount[el] + 1 || 1;
  });

  return Object.keys(charCount).reduce((a, b) =>
    charCount[a] >= charCount[b] ? a : b
  );
};

console.log(`Solution: ${maxRepeatedChar(input)}`);

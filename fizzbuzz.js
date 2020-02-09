/*
Print numbers from 1 to n while for multiples 
of 3 print 'fizz', for multiples of 5 print 'buzz' 
and for multiples of both 3 and 5 print 'fizzbuzz'.

Example:

input: 17
output:
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
16
17

*/

const input = 17;

//Solution
const fizzbuzz = input => {
  for (let i = 1; i <= input; i++) {
    i % 15 === 0
      ? console.log('fizzbuzz')
      : i % 5 === 0
      ? console.log('buzz')
      : i % 3 === 0
      ? console.log('fizz')
      : console.log(i);
  }
};

console.log('Solution:');
fizzbuzz(input);

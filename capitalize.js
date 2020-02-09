/*
Given an input string return provided string with 
the first letter of each word capitalized and the rest 
of the word in lower case and extra spaces should 
be removed.

Example:

input: 'I'M a unicoRn'
output: 'I'm A Unicorn'

input: 'plata o plomo'
output: 'Plata O Plomo'

input: "I'M BAMBOOZLED"
output: 'I'm Bamboozled'

input: 'eXtRa   SpAcE    in bEEtWeeN'
output: 'Extra Space In Beetween'

*/

const input = "I'M BAMBOOZLED";

//Solution
const capitalize = input =>
  input
    .replace(/\s+/g, ' ')
    .split(' ')
    .map(el => {
      el = el.toLowerCase().split('');

      for (let i = 0; i < el.length; i++)
        if (/^[A-Za-z]{1,1}$/.test(el[i])) {
          el[i] = el[i].toUpperCase();
          break;
        }

      return el.join('');
    })
    .join(' ');

console.log(`Solution: ${capitalize(input)}`);

const input = "Ocean Echo";
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
  const letter = input[i];

  
  if (letter.toLowerCase() === 'u') {
    resultArray.push(letter);  
    resultArray.push(letter); 
  } else {
   
    for (let j = 0; j < vowels.length; j++) {
      const vowel = vowels[j];

      if (letter.toLowerCase() === vowel) {
        resultArray.push(letter);
      }
    }
  }
}

console.log('First Phrase:');
console.log(input);
console.log("\nResult Phrase:");
console.log(resultArray.join('').toUpperCase());
console.log(resultArray);

let resultString = resultArray.join().toUpperCase();c

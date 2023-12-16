// const firstWord = prompt("Enter a word");
// const secondWord = prompt("Enter another word");

// const firstWordChars = firstWord.split("");
// const secondWordChars = secondWord.split("");

// if (firstWordChars.length === secondWordChars.length) {
//   let isAnagram = false;

//   for (let i = 0; i < secondWordChars.length; i++) {
//     let oldValue = secondWordChars[i];
//     secondWordChars[i] = secondWordChars[i + 1];
//     secondWordChars[i + 1] = oldValue;

//     let newValue = secondWordChars.join("");

//     if (newValue === firstWord) {
//       isAnagram = true;
//       break;
//     } else {
//       let oldValue = secondWordChars[i + 1];
//       secondWordChars[i + 1] = secondWordChars[i];
//       secondWordChars[i] = oldValue;
//     }
//   }

//   if (isAnagram) {
//     alert("Words are anagrams");
//   } else {
//     alert("Words are not anagrams");
//   }
// } else {
//   alert("Words are not anagrams (different lengths)");
// }

const firstWord = prompt("Enter a word");
const secondWord = prompt("Enter another word");

function isAnagram(word1, word2) {
  const sortedWord1 = word1.split("").sort().join("");
  const sortedWord2 = word2.split("").sort().join("");

  return sortedWord1 === sortedWord2;
}

if (isAnagram(firstWord, secondWord)) {
  alert("Words are anagrams");
} else {
  alert("Words are not anagrams");
}

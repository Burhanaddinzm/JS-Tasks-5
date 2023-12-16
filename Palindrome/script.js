const word = prompt("Enter a word").toLowerCase();
const reverseWord = word.split("").reverse().join("");
if (reverseWord == word) {
  alert("Word is palindrome");
} else {
  alert("Word is not palindrome");
}

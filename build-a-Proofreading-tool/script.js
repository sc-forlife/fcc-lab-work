export function isPalindrome(word) {
  const splitWord = word.toLowerCase().split("");
  const reverseWord = splitWord.reverse().join("");
  return reverseWord === word.toLowerCase();
}

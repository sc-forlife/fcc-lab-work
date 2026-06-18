export function isPalindrome(word) {
  const splitWord = word.toLowerCase().split("");
  const reverseWord = splitWord.reverse().join("");
  return reverseWord === word.toLowerCase();
}

export function findPalindromeBreaks(wordsArr) {
  const indices = [];
  for (let i = 0; i < wordsArr.length; i++) {
    if (!isPalindrome(wordsArr[i])) {
      indices.push(i);
    }
  }
  return indices;
}

export function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];
}

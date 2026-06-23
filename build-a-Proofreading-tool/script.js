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

function repeatingWords(words, length) {
  const phraseLength = "";
  const wordsArr = [];
  for (let i = 0; i < words.length - 1; i++) {
    wordsArr.push(words.slice(i, i + length).join(" "));
  }

  return wordsArr;
}

export function findRepeatedPhrases(phrasesArr, phraseLength) {
  if (phraseLength >= phrasesArr.length) return [];
  const words = repeatingWords(phrasesArr, phraseLength);
  const repeatingIndex = [];

  for (let y = 0; y < words.length; y++) {
    innerLoop: for (let i = 0; i < words.length; i++) {
      if (y === i) {
        continue;
      } else {
        if (words[y] === words[i]) {
          repeatingIndex.push(i);
        }
      }
    }
  }
  const sortedIndex = repeatingIndex.sort((a, b) => a - b);
  const noRepeatIndex = sortedIndex.filter(
    (num, index) => num !== repeatingIndex[index + 1],
  );
  return noRepeatIndex;
}

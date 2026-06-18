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

function repeatingWords(words) {
  const repeatingCheck = [];
  const indices = [];
  for (let i = 0; i < words.length - 1; i++) {
    if (!repeatingCheck) {
      repeatingCheck.push(words[i]);
    } else {
      if (repeatingCheck.includes(words[i])) {
        indices.unshift(i);
        indices.unshift(repeatingCheck.indexOf(words[i]));
      } else {
        repeatingCheck.push(words[i]);
      }
    }
  }

  return indices;
}

export function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length || phraseLength === 1) return [];
  const arrPhrases = [];
  for (let i = 0; i < words.length - 1; i++) {
    arrPhrases.push(`${words[i]} ${words[i + 1]}`);
  }
  console.log(arrPhrases);
  console.log(repeatingWords(arrPhrases).sort());
  return repeatingWords(arrPhrases).sort();
}

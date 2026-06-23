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
    console.log(i);

    if (repeatingCheck.length === 0) {
      repeatingCheck.push(words[i]);
    } else {
      if (repeatingCheck.includes(words[i])) {
        indices.unshift(i);
        console.log("inserting ", i);
        indices.unshift(repeatingCheck.indexOf(words[i]));
        console.log("inserting first index ", repeatingCheck.indexOf(words[i]));
      } else {
        repeatingCheck.push(words[i]);
      }
    }
  }

  return indices;
}

export function findRepeatedPhrases(words, phraseLength) {
  if (phraseLength >= words.length) return [];
  const arrPhrases = [];
  for (let i = 0; i < words.length - 1; i++) {
    arrPhrases.push(`${words[i]} ${words[i + 1]}`);
  }
  console.log(arrPhrases);
  console.log(repeatingWords(arrPhrases).sort());
  return repeatingWords(arrPhrases).sort();
}

function groupedWords(words, length) {
  const phraseLength = "";
  const wordsArr = [];
  for (let i = 0; i < words.length - 1; i++) {
    wordsArr.push(words.slice(i, i + length).join(" "));
  }

  return wordsArr;
}

console.log(groupedWords(["the", "cat", "sat", "the", "cat"], 3));

// const word = ["S", "a", "l", "e", "m"];

// console.log(word.slice(0, 3).join(" "));
// console.log(word.slice(2, 3).join(" "));
// console.log(word.slice(2, 4).join(" "));
// console.log(word.slice(3, 5).join(" "));

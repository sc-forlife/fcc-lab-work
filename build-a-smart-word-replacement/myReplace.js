function myReplace(string, word, replaceWord) {
  return string.replace(word, (match) => {
    return /^[A-Z]/.test(match)
      ? `${replaceWord.slice(0, 1).toUpperCase()}${replaceWord.slice(1)}`
      : replaceWord.toLowerCase();
  });
}

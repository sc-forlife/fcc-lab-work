function translatePigLatin(string) {
  const regexCons = /^[^aeiou]+/i;
  const regexVow = /^[aeiou]/i;
  if (regexCons.test(string)) {
    const match = string.match(regexCons);

    return `${string.slice(match[0].length)}${match[0]}ay`;
  } else if (regexVow.test(string)) {
    return string + "way";
  }
}

function spinalCase(string) {
  const regexSpace = /\s+/gi;
  const regexCasing = /[a-z](?=[A-Z])/g;
  const regexUnderScore = /_/gi;
  let newSpinalCase = "";

  if (regexSpace.test(string)) {
    newSpinalCase = string.replace(regexSpace, "-");
  }
  if (regexCasing.test(string)) {
    const replaceString = newSpinalCase ? newSpinalCase : string;
    newSpinalCase = replaceString.replace(regexCasing, (matched) => {
      return `${matched}-`;
    });
  }
  if (regexUnderScore.test(string)) {
    const replaceString = newSpinalCase ? newSpinalCase : string;
    newSpinalCase = replaceString.replace(regexUnderScore, "-");
  }

  return newSpinalCase.toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));

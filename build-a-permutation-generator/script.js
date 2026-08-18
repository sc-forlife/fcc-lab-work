const permuteString = (string, preValue = "", arr = []) => {
  if (string.length === 0) {
    console.log(preValue);
    return;
  } else {
    for (const char of string) {
      newString = string.replace(char, "");
      console.log(newString);
      permuteString(newString, (preValue += char));

      // console.log(preValue);
    }
  }
};

console.log(permuteString("act"));

//string

//c + at
//c + ta
//a + ct
//a + tc
//t + ac
//t + ca

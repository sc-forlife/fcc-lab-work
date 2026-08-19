const permuteString = (string, preValue = "", arr = []) => {
  if (string.length === 0) {
    console.log(preValue, "Pre Value ");
    arr.push(preValue);
    return arr;
  } else {
    for (const char of string) {
      const newString = string.replace(char, "");
      let newPreValue = preValue + char;
      arr.push(permuteString(newString, newPreValue));
      newPreValue = "";
    }
    return arr.flat();
  }
};

console.log(permuteString("fcc"));

//string

//c + at
//c + ta
//a + ct
//a + tc
//t + ac
//t + ca

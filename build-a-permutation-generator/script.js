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
    arr = new Set(arr.flat());
    return [...arr];
  }
};

console.log(permuteString(""));

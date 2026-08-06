function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else if (startNum === endNum) {
    return [startNum];
  }

  let countArr = [];
  countArr = rangeOfNumbers(startNum + 1, endNum);
  countArr.unshift(startNum);
  return countArr;
}

console.log(rangeOfNumbers(3, 9));

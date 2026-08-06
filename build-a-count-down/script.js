const countdown = (n) => {
  let countdownArr = [];
  if (n < 1) {
    return [];
  } else {
    countdownArr = countdown(n - 1);
    countdownArr.push(n);
    return countdownArr;
  }
};

console.log(countdown(5));

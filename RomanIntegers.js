var romanToInt = function (s) {
  let romanInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    M: 1000,
    D: 500,
  };

  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentInt = romanInt[s.charAt(i)];
    let nextInt = romanInt[s.charAt(i + 1)];
    if (nextInt) {
      if (currentInt >= nextInt) {
        total += currentInt;
      } else {
        total += nextInt - currentInt;
        i++;
      }
    } else {
      total += currentInt;
    }
  }
  console.log(total);
  return total;
};
romanToInt("IV");

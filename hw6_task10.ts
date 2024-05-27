const numbersSecond = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];
console.log(numbersSecond.find((element) => {
    return element % 2 == 0;
}));
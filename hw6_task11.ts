const numbersThird = [5, 9, 13, 24, 45, 10, 13, 99, 1, 16];
console.log(numbersThird.some((element) => {
    return element % 15 == 0;
}));
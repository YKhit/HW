const fibonacciSecond = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
console.log(fibonacciSecond.reduce((element, accum) => {
    return element + accum;
}));
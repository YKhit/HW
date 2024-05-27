const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];
const newArr = evenNumbers.concat(oddNumbers);
console.log(newArr.sort((min, max) => {return min - max}));
console.log(newArr.findIndex((element) => {
    return element === 8;
}));
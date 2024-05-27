const numbers = [7, -4, 32, -90, 54, 32, -21];
const filter = numbers.filter((element) => {
    return element >= 0;
})
console.log(filter);
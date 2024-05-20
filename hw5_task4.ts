let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    alexandra: 199
};
let sum = 0;
for (let salary of Object.values(salaries)){
    sum += salary;
}
console.log(sum);
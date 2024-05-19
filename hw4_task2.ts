function getSumNumbers(num: number){
    const numToString = num.toString();
    let result = 0;
    for (let i = 0; i < numToString.length; i++){
        result += Number(numToString[i]);
    }
    return result;
}
console.log(getSumNumbers(2021));
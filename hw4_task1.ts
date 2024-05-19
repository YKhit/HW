function sumOfNum(secondNum: number){
    let incNum = 0;
    let result = 0;
    while (incNum <= secondNum){
        result += incNum;
        incNum++;
    }
    return result;
}
console.log(sumOfNum(6));
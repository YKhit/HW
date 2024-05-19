function getSum(firstNum: number, secNum: number){
    let result = 0;
    while (firstNum<=secNum){
        result+=firstNum;
        firstNum++;
    }
    return result;
}
console.log(getSum(-1, 2));
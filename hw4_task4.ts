function factorial(num: number){
    if (num != 1){
        return num * factorial(num - 1)
    } else {
        return 1;
    }
}
console.log(factorial(6));
const strName = "I'm learning typescript!";
const givenWord = "typescript";

if (strName.includes(`${givenWord}`)){
    console.log(strName.substring(0,12));
} else {
    console.log('There is no given substring');
}
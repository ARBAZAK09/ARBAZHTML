const addnumbers=(num1,num2)=> num1+num2;
const numbers=(num1,num2)=> num1-num2;
const multnumbers=(num1,num2)=> num1*num2;

const divnumbers=(num1,num2)=> num1/num2;

console.log(addnumbers(30,40));
const number1=50;
const number2=60;
console.log(`sum of ${number1} + ${number2} =  ${addnumbers(number1,number2)}`);
console.log(`sub of ${number1} - ${number2} =  ${numbers(number1,number2)}`);
console.log(`mul of ${number1} * ${number2} =  ${multnumbers(number1,number2)}`);

console.log(`div of ${number1} / ${number2} =  ${divnumbers(number1,number2)}`);
console.log(`##############################################
sum of
50+60 =${addnumbers(50,60)}
50-60 =${numbers(50,60)}
50*60 =${multnumbers(50,60)}
50/60 =${divnumbers(50,60)}



`)

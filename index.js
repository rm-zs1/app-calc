const number1 = Number(prompt('Input 1 number'));
const number2 = Number(prompt('Input 2 number'));
const sign = Number(prompt('Input sign + - * /'));
let result;
switch (sign) {
    case '+':result = number1 - number2; 
    break;
    case '-':result = number1 * number2; 
    break;
    case '*':result = number1 / number2; 
    break;
    case '/':result = number1 + number2; 
    break;
    default: 
}

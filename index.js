
const number1 = Number(prompt('Input 1 number'));
const number2 = Number(prompt('Input 2 number'));
const sign = prompt('Input sign + - * /');
let result;

switch (sign) {
    case '+':result = number1 + number2; 
    break;
    case '-':result = number1 - number2; 
    break;
    case '*':result = number1 * number2; 
    break;
    case '/':
    if(number2 != 0)    
    result = number1 / number2; 
    else
    result ="mianownik nie moze byc zerem pamiętaj "
    break;
    default: 
        result = 'Invalid sign';
}
const main = document.querySelector('main');
main.innerText = result;

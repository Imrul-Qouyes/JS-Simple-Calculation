const addition = (a=0,b=0) => {
  let sum = a + b;
  return sum;
}
const subtraction = (a=0,b=0) => {
  let sum = a - b;
  return sum;
}
const multiplication = (a=0,b=0) => {
  let sum = a * b;
  return sum;
}
const division = (a=0,b=0) => {
  let sum = a / b;
  return sum;
}
const modulus = (a=0,b=0) => {
  let sum = a % b;
  return sum;
}
const exponent = (a=0,b=0) => {
  let sum = a ** b;
  return sum;
}

// =====================================
//  Storing All Function Into An Array
// =====================================

const allFunctionsArray = [addition,subtraction,multiplication,division,modulus,exponent];

// console.log(allFunctionsArray[5](3,3));


// =====================================
//         Getting Inputs
// =====================================
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const button = document.getElementById('btn');
const display = document.getElementById('result')

button.addEventListener('click', () => {
  const firstInput = +input1.value;
  const secondInput = +input2.value;

  for(let i = 0; i < allFunctionsArray.length; i++){
    if(i == 0){
      display.innerHTML += `The result of Addition is = ${allFunctionsArray[i](firstInput,secondInput)} <br><br>`;
    } else if(i == 1){
      display.innerHTML += `The result of Subtraction is = ${allFunctionsArray[i](firstInput,secondInput)} <br><br>`;
    } else if(i == 2){
      display.innerHTML += `The result of Multiplication is = ${allFunctionsArray[i](firstInput,secondInput)} <br><br>`;
    } else if(i == 3){
      display.innerHTML += `The result of Division is = ${allFunctionsArray[i](firstInput,secondInput)} <br><br>`;
    } else if(i == 4){
      display.innerHTML += `The result of Modulus is = ${allFunctionsArray[i](firstInput,secondInput)} <br><br>`;
    } else if(i == 5){
      display.innerHTML += `The result of Exponent is = ${allFunctionsArray[i](firstInput,secondInput)}<br>`;
    }
  }
});



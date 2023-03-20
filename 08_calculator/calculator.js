const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	for(let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let ans = arr[0];
  for(let i = 1; i < arr.length; i++){
    ans *= arr[i];
  }
  return ans;
};

const power = function(num, power) {
  let ans = num;
  for(let i = 0; i < power - 1; i++){
    ans *= num;
  }
  return ans;
};

const factorial = function(num) {
	let ans = 1;
  for(let i = 1; i < num+1; i++){
    ans *= i;
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

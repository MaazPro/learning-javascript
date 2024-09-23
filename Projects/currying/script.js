// Multiplication
let multiply = (x) => {
  return (y) => {
    return x * y;
  };
};
let multiplyByTwo = multiply(2);
console.log("Multiplication: " + multiplyByTwo(3));

// Addition
function add(x){
    return function f2(y){
        return function f3(z){
            console.log(x + y + z);

        }
    }
}
const addition = (x) => (y) => (z) => x + y + z;
console.log("Addition: " + addition(1)(2)(3));

// Division
function divide(x) {
  return function f2(y) {
    return x / y;
  };
}
const division = divide(10);
console.log("Division: " + division(2));

// Subtraction
function substract(x){
    return function (y){
        return (x - y)
    }
}
const substraction = substract(5)(2)
console.log("Subtraction: "+substraction);

function run() {
  var a = 1;
  console.log(a); // 1
}
run();

console.log(a); // undefined
var a = 3;

b = 1;
console.log(b); // 1
var b;

{
  var c = 3;
}
console.log(c); //3

function calAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    // FirstName is present in the global and can be looked up because the function is called after it.
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);
    if (birthYear >= 1981 && birthYear <= 1996) {
      // block scope
      var millenial = true; // function scoped variable and they ignore the block
      const firstName = "Steven";
      const str = `Oh and you're a millenial, ${firstName}`;
      console.log(str);
      output = "NEW OUTPUT"; // redefining it in the child scope

      function add(a, b) {
        console.log(a + b);
      }
    }
    console.log(millenial);
    add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Jonas"; // global scope
calAge(1991);

console.log(me); // undefined
// console.log(job);
// console.log(year);

var me = "Jonas";
let job = "teacher";
const year = 1991;

console.log(addDecl(2, 3)); //5
// console.log(addExpr(2, 3)); // Reference Error
// console.log(addArrow(2,3)); // TypeError: is not a function
 

function addDecl(a, b) {
  return a + b;
}

// This function can't be hoisted
const addExpr = function (a, b) {
  return a + b;
}

var addArrow = (a, b) => a + b;

// Example
console.log("numProducts: " + numProducts); // undefined which is a falsy value
// This is why it is recommended to not use var
if(!numProducts) deleteShoppingCart()

var numProducts = 10
function deleteShoppingCart(){
    console.log('All products deleted!');    
}

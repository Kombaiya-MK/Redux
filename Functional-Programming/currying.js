// Traditional function
function add(a) {
  return function (b) {
    return a + b;
  };
}

const result = add(5)(4); //currying
console.log(result);

// Arrow function
const add1 = (a) => (b) => {
  return a + b;
};
console.log(add1(5)(5));

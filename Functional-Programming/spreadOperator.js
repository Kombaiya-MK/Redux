const person = {
  name: "John",
};
// Method 1 => using Object.assign()
const updated = Object.assign({}, person, { name: "Jane" });
console.log(person);
console.log(updated);

// Method 2 => using spread operator

const updated1 = { ...person, name: "jane", age: 22 };
console.log(person);
console.log(updated1);

function composeFunctions(functions) {
  return function (...args) {
    return functions.map((fn) => fn(...args));
  };
}
function addOne(x) {
  return x + 1;
}

function square(x) {
  return x * x;
}

function subtractThree(x) {
  return x - 3;
}

const composedFn = composeFunctions([addOne, square, subtractThree]);
const results = composedFn(5);
console.log(results);

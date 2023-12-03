function outFunction(outVariable) {
  function innerFunction() {
    console.log(outVariable);
  }

  return innerFunction;
}
const closure = outFunction("Some text");

closure();

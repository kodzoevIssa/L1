function invokeFunctions(functions, index) {
  if (index >= functions.length) {
    return;
  }

  const currentFunctions = functions[index];
  currentFunctions(index);

  setTimeout(() => {
    invokeFunctions(functions, index + 1);
  }, 0);
}

const functions = [
  (index) => console.log(`Вызвана функция ${index + 1}`),
  (index) => console.log(`Вызвана функция ${index + 1}`),
  (index) => console.log(`Вызвана функция ${index + 1}`),
];

invokeFunctions(functions, 0);

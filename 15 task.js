async function asyncFunction() {
  try {
    const result1 = await asyncOperation1(); // Ожидание выполнения асинхронной операции 1
    console.log(result1); // Результат выполнения асинхронной операции 1

    const result2 = await asyncOperation2(); // Ожидание выполнения асинхронной операции 2
    console.log(result2); // Результат выполнения асинхронной операции 2

    // Другие асинхронные операции...

    return "Завершение функции"; // Возврат результата выполнения функции
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

// Пример асинхронных операций

function asyncOperation1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Результат асинхронной операции 1");
    }, 2000);
  });
}

function asyncOperation2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Результат асинхронной операции 2");
    }, 1000);
  });
}

// Вызов асинхронной функции

asyncFunction().then((result) => {
  console.log(result); // Вывод результата выполнения асинхронной функции
});

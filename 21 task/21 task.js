function getCallStackSize() {
  try {
    return 1 + getCallStackSize();
  } catch (err) {
    return 1;
  }
}

function testCallStackSize() {
  let size = getCallStackSize();
  console.log("Call stack size:", size);
}

testCallStackSize();
//В JavaScript нет прямого способа получить размер коллстека в браузере из кода.
//Но можно оценить максимальную глубину вызовов функций, симулируя рекурсивные вызовы и
// отслеживая количество итераций до переполнения стека.

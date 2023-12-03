function strangeNumbers(num) {
  let sum = 0;
  // Итерируемся по всем делителям числа

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      sum += i; // Добавляем делитель к сумме
    }
  }
  // Если сумма делителей равна числу, то число является странным
  if (sum === num) {
    return true;
  } else {
    return false;
  }
}

let num = 28;
console.log(strangeNumbers(num));

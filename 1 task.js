function palindrome(str) {
  str = str.toLowerCase().replace(/\s/g, "");
  return str === str.split("").reverse().join("");
}

console.log(palindrome("аргентина манит негра"));

// Решаем задачу с помощью методов js. toLowerCase приравнивает текст к единому регистру, replace заменяет пробелы пустыми строками.
// split reverse и join разделяет переварачивает и соединяет слова.

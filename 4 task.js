let WordEndings = (function () {
  // Функция для изменения окончания слова в зависимости от числа
  function changeEnding(number, endings) {
    let cases = [2, 0, 1, 1, 1, 2];
    return (
      number +
      " " +
      endings[
        number % 100 > 4 && number % 100 < 20
          ? 2
          : cases[number % 10 < 5 ? number % 10 : 5]
      ]
    );
  }

  // Открываем публичный интерфейс модуля
  return {
    // Функция для изменения окончания слова "сообщение"
    changeMessageEnding: function (number) {
      let endings = ["сообщение", "сообщения", "сообщений"];
      return changeEnding(number, endings);
    },

    // Функция для изменения окончания слова "пользователь"
    changeUserEnding: function (number) {
      let endings = ["пользователь", "пользователя", "пользователей"];
      return changeEnding(number, endings);
    },
  };
})();

console.log(WordEndings.changeMessageEnding(123));
console.log(WordEndings.changeMessageEnding(12));
console.log(WordEndings.changeMessageEnding(1));

console.log(WordEndings.changeUserEnding(1024));
console.log(WordEndings.changeUserEnding(1026));
console.log(WordEndings.changeUserEnding(121));

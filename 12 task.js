const book = {
  name: "",
  author: "",
  year: 0,

  // Метод для установки значения свойства "name"
  setname: function (name) {
    this.name = name;
  },

  // Метод для получения значения свойства "name"
  getname: function () {
    return this.name;
  },

  // Метод для установки значения свойства "author"
  setauthor: function (author) {
    this.author = author;
  },

  // Метод для получения значения свойства "author"
  getauthor: function () {
    return this.author;
  },

  // Метод для установки значения свойства "year"
  setyear: function (year) {
    this.year = year;
  },

  // Метод для получения значения свойства "year"
  getyear: function () {
    return this.year;
  },
};

// Использование методов для работы с объектом "book"
book.setname("JavaScript: The Good Parts");
book.setauthor("Douglas Crockford");
book.setyear(2008);

console.log(book.getname());
console.log(book.getauthor());
console.log(book.getyear());

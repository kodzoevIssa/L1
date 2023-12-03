const array = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 20 },
  { name: "John", age: 20 },
];

array.sort((a, b) => {
  if (a.age === b.age) {
    // Если возрасты равны, сортируем по алфавиту, по полю name
    return a.name.localeCompare(b.name);
  } else {
    // Если возрасты различны, сортируем по возрастанию возраста
    return a.age - b.age;
  }
});

console.log(array);

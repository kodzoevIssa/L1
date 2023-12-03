function convertJsonToLinkedList(json) {
  // Парсим JSON и получаем список объектов
  const listData = JSON.parse(json);

  // Создаем голову связного списка
  let head = null;
  let currentNode = null;

  // Проходимся по каждому объекту списка данных
  for (let i = 0; i < listData.length; i++) {
    // Создаем узел связного списка
    const newNode = {
      data: listData[i],
      next: null,
    };

    // Если это первый узел, то делаем его головой списка
    if (i === 0) {
      head = newNode;
      currentNode = newNode;
    } else {
      // Если не первый узел, то связываем текущий узел с предыдущим
      currentNode.next = newNode;
      currentNode = newNode;
    }
  }

  // Возвращаем голову связного списка
  return head;
}
const json = '[{"name": "Alice"}, {"name": "Bob"}, {"name": "Jhon"}]';
const linkedList = convertJsonToLinkedList(json);
console.log(linkedList);

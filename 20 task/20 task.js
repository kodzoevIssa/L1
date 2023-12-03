function getLocalStorageSize() {
  let totalSize = 0;

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      totalSize += localStorage.getItem(key).length;
    }
  }

  return totalSize;
}

// Пример использования
console.log(getLocalStorageSize());
// на JavaScript можно определить только примерный обьём занимаемой памяти

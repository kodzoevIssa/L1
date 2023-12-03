let maxLocalStorageSize = 0;
try {
  localStorage.setItem("test", "");
  maxLocalStorageSize = localStorage.getItem("test").length;
  localStorage.removeItem("test");
} catch (e) {}

console.log(
  "Максимальный объем данных localStorage: " + maxLocalStorageSize + " байт"
);

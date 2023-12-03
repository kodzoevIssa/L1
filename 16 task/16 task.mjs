import moment from "./moment.js";

// Функция для форматирования даты
export function formatDate(date, format) {
  console.log(moment(date).format(format));
}

// Функция для добавления времени к дате
export function addTimeToDate(date, amount, unit) {
  console.log(moment(date).add(amount, unit));
}

// Функция для вычисления разницы между двумя датами
export function diffDates(date1, date2, unit) {
  console.log(moment(date1).diff(date2, unit));
}
formatDate();
addTimeToDate();
diffDates();

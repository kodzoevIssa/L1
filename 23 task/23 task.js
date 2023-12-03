function passwordStrength(password) {
  // Оценка сложности пароля по критериям
  let length = password.length;
  let hasLowerCase = /[a-z]/.test(password);
  let hasUpperCase = /[A-Z]/.test(password);
  let hasNumbers = /\d/.test(password);
  let hasSymbols = /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(password);

  // Подсчет баллов за критерии
  let score = 0;
  if (length >= 8) score++;
  if (hasLowerCase) score++;
  if (hasUpperCase) score++;
  if (hasNumbers) score++;
  if (hasSymbols) score++;

  // Оценка сложности пароля
  let strength;
  if (score === 5) {
    strength = "Очень сильный";
  } else if (score >= 3) {
    strength = "Сильный";
  } else if (score >= 2) {
    strength = "Средний";
  } else {
    strength = "Слабый";
  }

  return strength;
}

let userPassword = prompt("Введите пароль:");
let passwordRating = passwordStrength(userPassword);
console.log(`Оценка сложности пароля: ${passwordRating}`);

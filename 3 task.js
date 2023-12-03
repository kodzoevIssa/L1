let MathX = (function () {
  let privateCache = {};

  function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (privateCache[n]) return privateCache[n];

    let result = fibonacci(n - 1) + fibonacci(n - 2);
    privateCache[n] = result;
    return result;
  }

  function fibonacciSeries(n) {
    if (n <= 0) return [];

    let series = [0, 1];
    for (let i = 2; i < n; i++) {
      series[i] = series[i - 1] + series[i - 2];
    }

    return series;
  }

  function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (privateCache[number]) return privateCache[number];

    if (number % 2 === 0 || number % 3 === 0) {
      privateCache[number] = false;
      return false;
    }

    let sqrt = Math.floor(Math.sqrt(number));
    for (let i = 5; i <= sqrt; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) {
        privateCache[number] = false;
        return false;
      }
    }

    privateCache[number] = true;
    return true;
  }

  function primesUpToN(n) {
    if (n < 2) return [];

    let primes = [];
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }

    return primes;
  }

  return {
    fibonacci: fibonacci,
    fibonacciSeries: fibonacciSeries,
    isPrime: isPrime,
    primesUpToN: primesUpToN,
  };
})();

console.log(MathX.fibonacci(6));
console.log(MathX.fibonacciSeries(10));
console.log(MathX.isPrime(13));
console.log(MathX.primesUpToN(20));

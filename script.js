function generatePrimes() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const result = document.getElementById('result');
  let primes = [];

  for (let i = start; i <= end; i++) {
    if (i < 2) continue;
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        prime = false;
        break;
      }
    }
    if (prime) primes.push(i);
  }

  result.value = primes.join(', ');
}

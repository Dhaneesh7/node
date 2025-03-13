function isPrime(n) {
    if (n < 2) return false; 

    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true; 
}

function findPrimes(max) {
    let primes = [];
    for (let i = 2; i <= max; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}


console.log("Prime numbers up to 50:", findPrimes(50));

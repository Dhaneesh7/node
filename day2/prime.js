function isPrime(n) {
    if (n < 2) return false; 

    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) return false; 
    }
    return true; 
}


let num = 29; 
if (isPrime(num)) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}

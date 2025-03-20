  const http = require('http');
 function isPrime(num) {
    if (num < 2) return false; // 0 and 1 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // If divisible, not prime
    }
    return true;
}
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        
    }

    else {
        let num = req.url.slice(req.url.indexOf("=") + 1);
        let result = isPrime(num) ? `${num} is a Prime Number` : `${num} is NOT a Prime Number`;
      

        res.write(result);
        res.end(result);
    }
}).listen(4000);

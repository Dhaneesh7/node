function sumNumbers(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}


let result = sumNumbers(100);
console.log("Sum of the first 100 natural numbers:", result);

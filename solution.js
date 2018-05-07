// O(1) "algorithm" LOL

function fibonacci(n) {
    return parseInt(((1 + Math.sqrt(5))**n - (1 - Math.sqrt(5))**n) / (Math.sqrt(5) * 2**n))
}

console.log(fibonacci(process.argv[2]));

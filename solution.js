// O(1) "algorithm" LOL

function fibonacci(n) {
    if (parseInt(n) != n || parseInt(n) < 0) {
        return 'Trying to be funny?';
    };
    return parseInt(((1 + Math.sqrt(5))**n - (1 - Math.sqrt(5))**n) / (Math.sqrt(5) * 2**n));
};

console.log(fibonacci(process.argv[2]));

function fibonacci_dynamic(n) {
    const data = [1, 1];
    let i, result = 1;
    if (n > 2) {
        while (n > 2) {
            i = data.length - 1;
            data.push(data[i] + data[i-1]);
            n--;
        }
    };
    return data;
}

console.log(fibonacci_dynamic(process.argv[2]));
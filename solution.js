// O(1) "algorithm" LOL

function fibonacci(n) {
    if (parseInt(n) != n || parseInt(n) < 0) {
        return 'Trying to be funny?';
    };
    return parseInt(((1 + Math.sqrt(5))**n - (1 - Math.sqrt(5))**n) / (Math.sqrt(5) * 2**n));
};

// console.log(fibonacci(process.argv[2]));

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

// console.log(fibonacci_dynamic(process.argv[2]));

function fibonacci_tail_actual(i, j, n) {
    if (n <= 2) {
        return j;
    } else {
        return fibonacci_tail_actual(j, i+j, n-1);
    };
};

function fibonacci_tail_recursive(n) {
    return fibonacci_tail_actual(1, 1, n);
};

console.log(fibonacci_tail_recursive(process.argv[2]));
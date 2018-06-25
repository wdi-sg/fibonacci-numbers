// Iterative function
function fibonacci_iterative(number, fibonacci_list) {
  var previous_first = 0,
    previous_second = 1,
    next = 1;

  if (number < 2) return n;

  for (var i = 2; i <= number; i++) {
    next = previous_first + previous_second;
    fibonacci_list.push(next);
    previous_first = previous_second;
    previous_second = next;
  }
  console.log("Fibonacci of " + number + " is " + next);
  console.log(fibonacci_list);
  return next;
}

// Recursive function
function fibonacciRecursion(n) {
  if (n === 1) {
    return [0, 1];
  } else {
    var s = fibonacciRecursion(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

// Cache function
var cache = {};
function fibonacci_memorization(number) {

  if (number < 1) return 0;

  if (number <= 2) return 1;

  if (number in cache) return cache[number];

  var value = fibonacci_memorization(number - 1) + fibonacci_memorization(number - 2);

  cache[number] = value;

  return value;
}

let fibonacci_list = [0, 1];
fibonacci_iterative(4, fibonacci_list);

console.log(fibonacciRecursion(4));

console.log(fibonacci_memorization(4));

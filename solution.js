// recursive
function fib(n) {
  // base case
  if (n == 2) return 1;
  if (n <= 2) return 0;
  
  sum += fib(n-1) + fib(n-2);
  return sum;
}
console.log(fib(8));

// iterative
function fibList(n) {
  let result = [0, 1];
  
  if (n < 2) return result;

  for (let i = 0; i < n - 2; i++) {
    let sum = result[i] + result[i+1];
    result.push(sum);
  }
  return result;
}
console.log(fibList(8));


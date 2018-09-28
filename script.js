//returns the nth number
function fibonacci (n) {
    let t0 =new Date().getTime();
    console.log('t0: ' + t0);

    let arr = [];

    for(let i=0; i<n; i++) {
        if(arr.length < 2) {
            arr.push(1)
        } else {
            arr.push(arr[i-1]+arr[i-2]);
        }
    }

    let t1 =new Date().getTime();
    console.log('t1: ' + t1);
    console.log("Finbo took " + (t1 - t0) + " milliseconds.");
    return arr[arr.length-1];
}


//returns the list
function fibonacciList (n, returnList) {
    let arr = [];

    for(let i=0; i<n; i++) {
        if(arr.length < 2) {
            arr.push(1)
        } else {
            arr.push(arr[i-1]+arr[i-2]);
        }
    }

    if(returnList) {
        return arr;  
    } else {
        return arr[arr.length-1];  
    }  
}


var count = 0;
//recursion
function fibonacciRecur (n) {
    count ++;
    console.log(count);
    // let x = parseInt()
    // console.log(n);
    if (n === 1 || n === 2) return 1;
    if (n === 0) return 0;

    // console.log('n-2: ' + fibonacciRecur(n - 2));
    // console.log('n-1: ' + fibonacciRecur(n - 1));
    return fibonacciRecur(n - 2) + fibonacciRecur(n - 1);
}


var memory = [];
var t0;
//recursion
function fibonacciDyna (num, n) {
    if(memory.length == 0) t0 = new Date().getTime();
    if(n == null) n = 1;
    if (n < 0) return;
    if (n === 1 || n === 2) memory.push(1);  

    if (n > 2) {
        let first = memory [1];
        let second = memory[0] + memory[1];
        
        memory[0] = first;
        memory[1] = second;
    }

    if(n == num) {
        var t1 =new Date().getTime();
        console.log("FinboDyna took " + (t1 - t0) + " milliseconds.");
        return memory[1];
    } else if (n != 1 && n != 2) {
        return fibonacciDyna(num, n + 1);
    } else {
        return fibonacciDyna(num, n + 1);
    }
}


function fibonacci_tail_recursion(n, i = 1, j = 1) {
    if (n === 1 || n === 2) {
        return j;
    }
    return fibonacci_tail_recursion(n-1, j, i+j);
}



console.log(fibonacci(1400));
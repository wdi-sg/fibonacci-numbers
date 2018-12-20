function fibonacci (num) {

    var fibo = [];

    if (num === 1) {
        fibo.push(1)
    } else if (num === 2) {
        fibo.push(1);
        fibo.push(1);
    } else {
        fibo.push(1);
        fibo.push(1);
        for (var i = 2; i < num; i++) {
            fibo.push(fibo[i-2]+fibo[i-1])
        }
    }

    return fibo
}

var fiboList = fibonacci(parseInt(process.argv[2]));

// for (var i = 0; i < fiboList.length; i++) {
//     console.log(fiboList[i]);
// }

console.log(fiboList)
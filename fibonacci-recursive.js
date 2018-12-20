function fibonacci (n) {

    if (n === 1 || n === 2) return 1;

    return fibonacci(n - 2) + fibonacci(n - 1);

}

var fiboList = fibonacci(parseInt(process.argv[2]));

// for (var i = 0; i < fiboList.length; i++) {
//     console.log(fiboList[i]);
// }

console.log(fiboList)
const fibStart = [0, 1];
var solutionArray = [1, 1];

function calcFib(returnIndex, returnList) {

      solutionArray = [1, 1];
      for (let i = 2; i < returnIndex; i++) {
            solutionArray.push(solutionArray[i - 2] + solutionArray[i - 1])
      }

      if (returnList) {
            console.log(solutionArray);
      } else {
            console.log(solutionArray[solutionArray.length - 1]);
      }
      
}

calcFib(100, true);

function fibonacci(n) {
      if (n === 0) return 0;
      if (n === 1) return 1;
  
      return fibonacci(n - 2) + fibonacci(n - 1);
  }

function dynamicFib(m, storage) {
      storage = storage || {};

      if (storage[m]) return storage[m];
      if (m <= 1) return 1;

      return storage[m] = dynamicFib(m - 1, storage) + dynamicFib(m - 2, storage);
}

console.log(dynamicFib(100))
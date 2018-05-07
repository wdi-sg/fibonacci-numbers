class Fibonacci {
	constructor(input,listChoice){
		this.input = input,
		this.output = [],
		this.choice = listChoice
		this.fibonacci = (n) => {
			if (n === 0) return 0;
			if (n === 1) return 1;
			return this.fibonacci(n - 2) + this.fibonacci(n - 1);
		}
	}

	generate(){
		if (this.choice){
			for(let i=0; i<this.input; i++){
				this.output.push(this.fibonacci(i))
			}
			console.log("list: " + this.output);
		}
		console.log(this.input + "-th: " + this.fibonacci(this.input-1));
	}
}

if (process.argv[1] && process.argv[2] && process.argv[3]){
	let newFib = new Fibonacci(process.argv[2],process.argv[3]);
	newFib.generate();
}
else{
	console.log("HINT: process.argv[0]:node; process.argv[1]:fibonacci.js; process.argv[2]:n-th fibonacii number; process.argv[3]:true or false to generate list of numbers")
}
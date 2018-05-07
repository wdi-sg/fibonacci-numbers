class Fibonacci {
	constructor(input,choice){
		this.input = input,
		this.output = [],
		this.choice = choice
		this.fibonacci = (n) => {
			for(let i=2; i<n; i++){
				this.output.push((this.output[i-2])+(this.output[i-1]));
			}
		}
	}

	generate(){
		if(this.input >= 0) this.output.push(0);
		if(this.input >= 1) this.output.push(1);
		if(this.input >= 2)this.fibonacci(this.input);
		console.log("last number: " + this.output[this.output.length-1]);
		if (this.choice) console.log("list: " + this.output);
	}
}

let newFib = new Fibonacci(process.argv[2],process.argv[3]);
newFib.generate();
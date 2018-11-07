var Reverse = {
	inputString: '', // private
	set input(str) {
		this.inputString = str;
	},
	get input() {
		return this.inputString;
	},
	reverse() {
		let stackSize = this.input.length;
		Reverse.maxSize = stackSize;
		for(let j = 0; j < stackSize; j++) {
			let ch = this.input[j];
			Reverse.push(ch);
		}
		var output = '';
		while(!Reverse.isEmpty()) {
			let ch = Reverse.pop();
			output += ch;
		}
		return output;
	}
}

Reverse.__proto__ = Object.create(StackX)
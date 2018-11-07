var Brackets = {
	inputString: '', // private
	set input(str) {
		this.inputString = str;
	},
	get input() {
		return this.inputString;
	},
	check() {
		let stackSize = this.input.length;
		Brackets.maxSize = stackSize;
		for(let j = 0; j < stackSize; j++) {
			let ch = this.input[j];
			switch(ch) {
                case '{':
				case '[':
				case '(':
				Brackets.push(ch);
				break;
				case ')':
				case ']':
				case '}':
				if(!Brackets.isEmpty()) {
					let chx = Brackets.pop();
					if( (ch == '}' && chx != '{') || (ch == ']' && chx != '[') || (ch == ')' && chx != '(') ) {
						return 'Error: ' + ch + ' doesn\'t match to ' + chx;
					}
				} else {
					return 'Error: ' + ch + ' hasn\'t a pair';
				}
				break;
                default:
				break;
			}
		}
		if(!Brackets.isEmpty()) return 'Error: not enought brackets';
	}
}

Brackets.__proto__ = Object.create(StackX)
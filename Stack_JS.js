var StackX = {
	set maxSize(n) {
		this.stackArr = new Array(n);
		this.top = -1;
	},
	get maxSize() {
		return this.stackArr.length;
	},
	stackArr: [],
	top: null,
	
	push(j) {
		if(this.isFull()) return 'Stack is full';
		this.stackArr[++this.top] = j;
	},
	pop() {
		if(this.isEmpty()) return 'Stack is empty';
		return this.stackArr[this.top--];
	},
	peek() {
		return this.stackArr[this.top];
	},
	isEmpty() {
		return this.top == -1;
	},
	isFull() {
		return this.top == this.maxSize - 1;
	}
}
var Queue = {
	set maxSize(n) {
		this.queArr = new Array(n);
		this.front = 0;
		this.rear = -1;
		this.ni = 0;
	},
	get maxSize() {
		return this.queArr.length;
	},
	queArr: [],

	insert(j) {
		if(this.isFull()) return 'Queue is full';
		if(this.rear == this.maxSize - 1) this.rear = -1;
		this.queArr[++this.rear] = j;
		this.ni++;
	},
	eject() {
		if(this.isEmpty()) return 'Queue is empty';
		let temp = this.queArr[this.front++];
		if(this.front == this.maxSize) this.front = 0;
		this.ni--;
		return temp;
	},
	peekf() {
		return this.queArr[this.front];
	},
	peekr() {
		return this.queArr[this.rear];
	},
	isEmpty() {
		return this.ni == 0;
	},
	isFull() {
		return this.ni == this.maxSize;
	},
	get size() {
		return this.ni;
	}
}
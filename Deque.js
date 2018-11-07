var Deque = {
	set maxSize(n) {
		this.dequeArr = new Array(n);
		this.front = 0;
		this.rear = -1;
		this.ni = 0;
	},
	get maxSize() {
		return this.dequeArr.length;
	},
	dequeArr: [],

	insert(j) {
		if(this.isFull()) return 'Queue is full';
		if(this.rear == this.maxSize - 1) this.rear = -1;
		this.dequeArr[++this.rear] = j;
		this.ni++;
	},
	eject() {
		if(this.isEmpty()) return 'Queue is empty';
		let temp = this.dequeArr[this.front++];
		if(this.front == this.maxSize) this.front = 0;
		this.ni--;
		return temp;
	},
	insertAtBegin(j) {
		if(this.isFull()) return 'Queue is full';
		if(this.front - 1 < 0) this.front = this.maxSize;
		this.dequeArr[--this.front] = j;
		this.ni++;
	},
	ejectFromEnd() {
		if(this.isEmpty()) return 'Queue is empty';
		if(this.rear == -1) this.rear = this.maxSize - 1;
		let temp = this.dequeArr[this.rear--];
		this.ni--;
		return temp;
	},
	peekf() {
		return this.dequeArr[this.front];
	},
	peekr() {
		return this.dequeArr[this.rear];
	},
	isEmpty() {
		return this.ni == 0;
	},
	isFull() {
		return this.ni == this.maxSize;
	},
	displayDeque() {
		let outerF = '', outerR = '';
		if(this.front <= this.rear) {
            for(let i = this.front; i <= this.rear; i++) {
                outerF += this.dequeArr[i] + ' - ';
            }
        } else {
			for(let i = 0, j = this.front; i <= this.rear || j < this.maxSize; i++, j++) {
                outerF += this.dequeArr[j] + ' - ';
				if(i <= this.rear) outerR += this.dequeArr[i] + ' - ';
            }
			outerF += outerR;
		}
		return outerF;
	}
}
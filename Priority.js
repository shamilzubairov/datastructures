var QueuePriority = {
	set maxSize(n) {
		this.queArr = new Array(n);
		this.ni = 0;
	},
	get maxSize() {
		return this.queArr.length;
	},
	queArr: [],

	insert(i) {
		if(this.isFull()) return 'Queue is full';
		
		let j;
		if(this.ni == 0) {
			this.queArr[this.ni++] = i;
		} else {
			for(j = this.ni - 1; j >= 0; j--) {
				if(i > this.queArr[j]) this.queArr[j + 1] = this.queArr[j];
				else break;
			}
			this.queArr[j + 1] = i;
			this.ni++;
		}
	},
	eject() {
		if(this.isEmpty()) return 'Queue is empty';
		return this.queArr[--this.ni];
	},
	peekmin() {
		return this.queArr[this.ni - 1];
	},
	isEmpty() {
		return this.ni == 0;
	},
	isFull() {
		return this.ni == this.maxSize;
	}
}
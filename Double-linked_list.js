var DoubleLinkedList = {
	first: null,
	last: null,
	isEmpty() {
		return this.first == null;
	},
	insertFirst(obj) {
		let newLink = Object.create(Link);
		newLink.init = obj;
		if(this.isEmpty()) {
			this.last = newLink;
        } else {
			this.first.previous = newLink;
		}
		newLink.next = this.first;
		this.first = newLink;
	},
	insertLast(obj) {
		let newLink = Object.create(Link);
		newLink.init = obj;
		if(this.isEmpty()) {
			this.first = newLink;
        } else {
			this.last.next = newLink;
			newLink.previous = this.last;
        }
		newLink.next = null;
		this.last = newLink;
	},
	deleteFirst() {
		if(this.isEmpty()) return 'The element is ' + this.first;
		var temp = this.first.data;
		//
		if(this.first.next == null) {
			this.last = null;
        } else {
			this.first.next.previous = null;
		}
		this.first = this.first.next;
		//
		return temp;
	},
	deleteLast() {
		if(this.isEmpty()) return 'The element is ' + this.first;
		var temp = this.last.data;
		//
		if(this.first.next == null) {
			this.first = null;
        } else {
			this.last.previous.next = null;
		}
		this.last = this.last.previous;
		//
		return temp;
	},
	// Не продумана логика сохранения ключа
	insertAfter(data) {
		var current = this.first;
		while(current.data.key != data.key) {
			current = current.next;
			if(current == null) return false;
		}
		let newLink = Object.create(Link);
		newLink.init = data;
		if(current.data.key == this.last.data.key) {
			newLink.next = null;
			this.last = newLink;
		} else {
			newLink.next = current.next;
			current.next.previous = newLink;
		}
		newLink.previous = current;
		current.next = newLink;
		//
		return true;
	},
	deleteByKey(key) {
		var current = this.first;
		while(current.data[key] != key) {
			current = current.next;
			if(current == null) return false;
		}
		if(current.data[key] == this.first.data[key]) {
			this.first = current.next;
		} else if(current.data[key] == this.last.data[key]) {
			this.last = current.previous;
		} else {
			current.previous.next = current.next;
		}
		return current;
	},
	/*
	displayForward() {
		
	},
	displayBackward() {
		
	}
	*/
}
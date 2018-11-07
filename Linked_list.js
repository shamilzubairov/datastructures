var Link = {
	data: {},
	next: null,
	set init(obj) {
		this.data = obj;
	},
	display() {
		console.log(this.data);
	}
}

var LinkList = {
	first: null,
	insertFirst(obj) {
		let firstLink = Object.create(Link);
		firstLink.init = obj;
		firstLink.next = this.first;
		this.first = firstLink;
	},
	find(key) {
		var current = this.first;
		while(current.data.key != key) {
			if(current.next == null) return null;
			current = current.next;
		}
		return current;
	},
	deleteByKey(key) {
		if(this.isEmpty()) return 'The element is ' + this.first;
		var current = this.first;
		var previous = this.first;
		while(current.data.key != key) {
			if(current.next == null) return null;
			previous = current;
			current = current.next;
		}
		if(current == this.first) this.first = current.next;
		else previous.next = current.next;
		return current;
	},
	deleteFirst() {
		if(this.isEmpty()) return 'The element is ' + this.first;
		var temp = this.first;
		this.first = this.first.next;
		return temp;
	},
	displayList() {
		var current = this.first;
		while(current != null) {
			current.display();
			current = current.next;
		}
		return 'done';
	},
	isEmpty() {
		return this.first == null;
	}
}

// Реализация стека на базе связанного списка
var LinkStack = {
	push(ob) {
		return LinkList.insertFirst(ob);
	},
	pop() {
		return LinkList.deleteFirst();
	},
	front() {
		return LinkList.first;
	}
}
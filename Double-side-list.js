var DoubleSideList = {
	first: null,
	last: null,
	isEmpty() {
		return this.first == null;
	},
	insertFirst(obj) {
		let newLink = Object.create(Link);
		newLink.init = obj;
		if(this.isEmpty()) this.last = newLink;
		newLink.next = this.first;
		this.first = newLink;
	},
	insertLast(obj) {
		let newLink = Object.create(Link);
		newLink.init = obj;
		if(this.isEmpty()) {
			this.first = this.last = newLink;
        }
        else {
			this.last.next = newLink;
			this.last = newLink;
			newLink.next = null;
        }
	},
	deleteFirst() {
		if(this.isEmpty()) return 'The element is ' + this.first;
		var temp = this.first.data;
		if(this.first.next == null) this.last = null;
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
	}
}

// Реализация очереди на базе связанного списка
var LinkQueue = {
	insert(ob) {
		return DoubleSideList.insertLast(ob);
	},
	remove() {
		return DoubleSideList.deleteFirst();
	}
}
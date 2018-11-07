var Link = {
	data: 0,
	next: null,
	set init(n) {
		this.data = n;
	},
	display() {
		console.log(this.data);
	}
}

var SortedList = {
	first: null,
	isEmpty() {
		return this.first == null;
	},
	insert(key) {
		var firstLink = Object.create(Link);
		firstLink.init = key;
		var prev = null, curr = this.first;
		while(curr != null && key > curr.data) {
			prev = curr;
			curr = curr.next;	
		}
		if(prev == null) {
			this.first = firstLink;
        } else {
			prev.next = firstLink;
		}
		firstLink.next = curr;
	},
	remove() {
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
	}
}

// Сортировка методом вставки в список

var arr = [14, 2, 3, 7, 1, 0, 15];
// Добавляем массив в список
for(var i = 0; i < arr.length; i++) {
	SortedList.insert(arr[i]);
}
// Извлекаем из списка упорядоченные данные и добавляем в массив
for(var i = 0; i < arr.length; i++) {
	arr[i] = SortedList.remove().data;
}
// arr = [0, 1, 2, 3, 7, 14, 15]
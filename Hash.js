class DataItem {
	constructor(int) {
		this.iData = int;
	}
	getKey() {
		return this.iData;
	}
}

class HashTable {
	constructor(size) {
		this.arraySize = size;
		this.hashArray = new Array(size);
		this.nonItem = -1;
	}
	hashFunc(key) {
		return key % this.arraySize;
	}
	find(key) {
		let hashVal = this.hashFunc(key);

		while(this.hashArray[hashVal] != null) {
			if(this.hashArray[hashVal].getKey() == key) return this.hashArray[hashVal];
			++hashVal;
			hashVal %= this.arraySize;
		}
		return null;
	}
	insert(item) {
		let key = item.getKey();
		let hashVal = this.hashFunc(key);

		while(this.hashArray[hashVal] != null && this.hashArray[hashVal].iData != -1) {
			++hashVal;
			hashVal %= this.arraySize;
		}
		this.hashArray[hashVal] = item;
	}
	delete(key) {
		let hashVal = this.hashFunc(key);

		while(this.hashArray[hashVal] != null) {
			if(this.hashArray[hashVal].getKey() == key) {
				let temp = this.hashArray[hashVal];
				this.hashArray[hashVal] = this.nonItem;
				return temp;
			}
			++hashVal;
			hashVal %= this.arraySize;
		}
		return null;
	}
}


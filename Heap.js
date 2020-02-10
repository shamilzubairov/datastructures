insert(key) {
	if(currentSize == maxSize) return false;
	let newNode = new Node(key);
	heapArray[currentSize] = newNode;
	trickleUp(currentSize++);
	return true;
}

trickleUp(index) {
	let parent = (index - 1) / 2;
	let bottom = heapArray[index];
	while(index > 0 && heapArray[parent].getKey() < bottom.getKey()) {
		heapArray[index] = heapArray[parent];
		index = parent;
		parent = (parent - 1) / 2;
	}
	heapArray[index] = bottom;
}
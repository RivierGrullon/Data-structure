class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//** add at the end of the linked list */
	append(value) {
		// if empty
		if (!this.tail) {
			this.tail = { value };
			this.head = this.tail;
		} else {
			let oldTail = this.tail;
			this.tail = { value };
			oldTail.next = this.tail;
			this.tail.prev = oldTail;
		}
		this.length++;
	}

	//** add to the beggining  */
	prepend(value) {
		if (!this.head) {
			this.tail = { value };
			this.head = this.tail;
		} else {
			let oldHead = this.head;
			this.head = { value };
			oldHead.prev = this.head;
			this.head.next = oldHead;
		}
		this.length++;
	}
	removeFirst() {
		if (!this.head) {
			throw new Error("The list is empty");
		} else {
			let tempHead = this.head;
			// ** when theres only one node
			if (this.head === this.tail) {
				this.head = null;
				this.tail = null;
			} else {
				this.head = this.head.next;
				this.head.prev = null;
			}
			this.length--;
			return tempHead.value;
		}
	}
	removeLast() {
		if (!this.tail) {
			return null;
		} else {
			let tempTail = this.tail;
			if (this.tail === this.head) {
				this.tail = null;
				this.head = null;
				this.length--;
			} else {
				this.tail = this.tail.prev;
				this.tail.next = null;
				this.length--;
				return tempTail.value;
			}
		}
	}
	search(value) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === value) {
				return currentNode;
			}
			currentNode = currentNode.next;
		}
		return null;
	}
	remove(value) {
		let tempNode = this.search(value);

		if (tempNode === this.tail) {
			this.removeLast();
			return;
		} else if (tempNode === this.head) {
			this.removeFirst();
			return;
		} else {
			tempNode.prev.next = tempNode.next;
			tempNode.next.prev = tempNode.prev;
		}
		this.length--;
	}
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(23);
list.append(3);
list.prepend(55);
list.append(2);
list.append(22);
// a.remove(55)
list.remove(22);

// a.removeLast();
console.log(list);

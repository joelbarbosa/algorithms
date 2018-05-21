import Node from "./Node.js";

export default class UnorderedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    add(item) {
        const newNode = new Node(item);
        newNode.setNext(this.head);
        this.head = newNode;
    }

    size() {
        let current = this.head;
        let count = 0;
        while(current !== null) {
            count = count + 1;
            current = current.getNext();
        }

        return count;
    }

    search(item) {
        let current = this.head;
        let found = false;
        while (current !== null && !found) {
            if (current.getData() === item) {
                found = true;
            } else {
                current = current.getNext();
            }
        }

        return found;
    }

    remove(item) {
        let current = this.head;
        let previous = null;
        let found = false;

        while(!found) {
            if (current.getData() === item) {
                found = true;
            } else {
                previous = current;
                current = current.getNext();
            }
        }

        if (previous === null) {
            this.head = current.getNext();
        } else {
            previous.setNext(current.getNext());
        }
    }
}
export default class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }

    getData() {
        return this.data;
    }

    setData(data) {
        return this.next;
    }

    getNext() {
        return this.next;
    }

    setNext(nextNode) {
        this.next = nextNode;
    }
    
}
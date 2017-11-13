export default class Stack {
  constructor() {
  	this.items = [];
  }

  isEmpty() {
  	return !Boolean(this.items.length);
  }
  
  // the end is peek
  push(item) {
  	this.items[this.items.length] = item;
  }

  peek() {
  	return this.items[this.items.length -1];
  }

  size() {
  	return this.items.length;
  }

  pop() {
  	return this.items.pop();
  }
}
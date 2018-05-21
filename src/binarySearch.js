// Binary Search

const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

function binarySearch(array, target) {
  
  if (array.length <= 0) {
    return -1;
  }
  
  let start = 0;
  let end = array.length -1;
  
  const middle = Math.floor((start + end)/2);
  
  
  if (array[middle] === target) {
    return array[middle];
  }
  
  if (array[end] === target) {
    return array[end];
  }
  
  if (array[start] === target) {
    return array[start];
  }
  
  if (target > array[middle]) {    
    const nArr = array.splice(middle+1, end);
    return binarySearch(nArr, target);
  } else {
    const nArr = array.splice(start, middle);
    return binarySearch(nArr, target);
  }
  
  return -1;
  
}

const test = binarySearch(items, 'q');
console.log(test)
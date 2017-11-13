module.exports = {
 
 /**
  * mess your array
  * @param {[]} array - array to mess.
  */
  messArray: (array) => {    
    let arrayMess = [];
    for(let i = 0; i < array.length - 1; i ++) {          
      let position = Math.floor(Math.random() * array.length);      
      if(arrayMess.length === 0) {
        arrayMess.push(array[position]);  
      }
      if(arrayMess.indexOf(array[position]) === -1) {
        arrayMess.push(array[position]);   
      } else {
         i -= 1;
      }           
    }
    
    // brutal force
    if (arrayMess === array) {
      return messArray(array);
    }
    return arrayMess;
  },
  
  /**
   * Bubble Sort
   */
  bubbleSort: (array) => {
    let bubbleArray = [...array];
    return bubbleArray.sort((a, b) => {      
      return a - b;
    });    
  }
};

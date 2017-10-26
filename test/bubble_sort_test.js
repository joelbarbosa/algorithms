import assert from 'assert';
import utils from '../src/arrays_utils';

describe('Bubble Sort', () => {
  
  const sortArray = [0, 1, 2, 3, 4, 5, 100, 350];
  let messArray = [];

  beforeEach(() => {
    messArray = utils.messArray(sortArray);  
  });

  it('should order using bubble sort', () => {    
    let arrayBubbleSort = utils.bubbleSort(messArray);    
    assert.deepEqual(arrayBubbleSort, sortArray);
    
    //console.log(`messArray: ${messArray} & arrayBubbleSort: ${arrayBubbleSort}`);
  });
});
import assert from 'assert';
import should from 'should';
import utils from '../src/arrays_utils';

describe('arrays_utils', () => {
  
  const orderArray = [0, 1, 5, 3];
  
  it('#messArray() should return the same lenght', () => {
    utils.messArray(orderArray).should.have.length(orderArray.length);
  });
  
  describe('Mess Array', () => {
    it('#messArrays() should mess array', () => {
      let messArray = utils.messArray(orderArray);
      assert.notDeepEqual(messArray, orderArray);
      console.log(`array: ${orderArray} & messArray: ${messArray}`);
    });
  });
});

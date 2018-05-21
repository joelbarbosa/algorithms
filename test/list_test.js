import assert from 'assert';
import UnorderedList from '../src/list/UnorderedList'

describe('LinkedList', () => {
  const list = new UnorderedList();
  list.add(1);
  list.add(5);
  list.add(6);

  it('unordered', () => {
    console.log(list)
    assert.notEqual(list, null);
    assert.equal(list.size(), 3);

    assert.equal(list.search(1), true);
    assert.equal(list.search(0), false);

    list.remove(5);
    
    assert.equal(list.size(), 2);
    console.log(list)
  })
});
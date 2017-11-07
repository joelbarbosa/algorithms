import assert from 'assert';
import { 
  getLast,
  anaGramCheckOff,
  anagramSortAndCompare,
  anagramCountCompare 
} from '../src/big_o';

describe('bigO', () => {
  
  it('O(1) - Order 1', () => {
    
    const d = 'd';
    const three = 3;
    assert.equal(getLast(['a', 'b', 'c', 'd']), d);
    assert.equal(getLast([1,2,3]), three);
  });

  it('bigO - nˆ2 with anagrams', () => {
    const s1 = 'america';
    const s2 = 'iracema';
    const s3 = 'joel';
    
    assert.equal(anaGramCheckOff(s1, s2), true);
    assert.equal(anaGramCheckOff(s1, s3), false);
    
  })

  it('bigO nˆ2 sort and compare', () => {
    const s1 = 'roma';
    const s2 = 'amor';
    const s3 = 'sorte';

    assert.equal(anagramSortAndCompare(s1, s2), true);
    assert.equal(anagramSortAndCompare(s1, s3), false);
  })

  it('bigO O(n) anagramCountCompare', () => {
    const s1 = 'apple';
    const s2 = 'pleap';
    const s3 = 'applf';

    assert.equal(anagramCountCompare(s1, s2), true);
    assert.equal(anagramCountCompare(s1, s3), false);
  })
});
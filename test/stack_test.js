import assert from 'assert';
import Stack from '../src/stack/stack.js';
import { parChecker, parCheckTurbo } from '../src/stack/balancedParent';

describe('Stack class', () => {
  
  const stack = new Stack();
  assert(!Object.is(stack, null));
  assert(stack.isEmpty(), true)

  stack.push(4);
  stack.push('banana');
  assert(stack.peek(), 'banana');
  assert(stack.size(), 2);

  stack.push(1);
  stack.pop();
  assert(stack.size(), 2);

  it('shoul be balanced parents', () => {
  	assert(parChecker('((()))'), true);
  	assert.equal(parChecker('()'), true);
  	assert.equal(parChecker('(()))))'), false);
  })

  it('shoul be balanced turbo parents', () => {
  	assert.equal(parCheckTurbo('{{([][])}()}'), true);
  	assert.equal(parCheckTurbo('{{([][])}'), false);
  	assert.equal(parCheckTurbo('{{()}}'), true);
  })

});
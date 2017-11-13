import Stack from './stack.js';

function parChecker(symbolString) {
  const stack = new Stack();
  let balanced = true;
  let index = 0;

  while (index < symbolString.length && balanced) {
  	let symbol = symbolString[index];
  	if (symbol == '(') {
  	  stack.push(symbol);
  	} else {
  		if (stack.isEmpty()) {
  		  balanced = false;
  		} else {
  		  stack.pop();
  		}
  	}
  	index += 1;
  }

  return (balanced && stack.isEmpty());

}


function parCheckTurbo(symbolString) {
  const stack = new Stack();
  let balanced = true;
  let index = 0;
  const opensSymbols = ['(', '[', '{'];

  while(index < symbolString.length && balanced) {
  	let symbol = symbolString[index];
  	
  	if (opensSymbols.includes(symbol)) {
  	  stack.push(symbol);
  	} else {
  	  if (stack.isEmpty()) {
  	  	balanced = false;
  	  } else {
  	  	const top = stack.pop();
  	  	if (!matches(top, symbol)) {
  	  	  balanced = false;
  	  	}
  	  }
  	}
  	index += 1;
  }

  return (balanced && stack.isEmpty());
}

function matches(open, close) {
  const opens = ['(', '[', '{'];
  const closers = [')', ']', '}'];
  return opens.indexOf(open) === closers.indexOf(close);
}

export { parChecker, parCheckTurbo };
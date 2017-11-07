// Big O

/**
 * O(1) - "Order 1"
 * On this order, regardless of complexity, number of items,
 * the time is constant.
 * Regardless kind or length, return element in an already known position
 * 
 */
const getLast = (items) => {
  return items[items.length-1]
}

/**
 * O(nˆ2)
 * @param {*} s1 
 * @param {*} s2 
 */
const anaGramCheckOff = (s1, s2) => {
  if (s1.length !== s2.length) return false;
  
  //not cause side-effect
  const s2ToCheckOff = s2.split('');

  for (let i = 0; i < s1.length; i++) {
    let letterFound = false;
    for (let j = 0; j < s2ToCheckOff.length; j++) {
      //console.log(s1[i], s2ToCheckOff[j])
      if (s1[i] === s2ToCheckOff[j]) {
        s2ToCheckOff[j] = null
        letterFound = true
        break;
      }
    }
  }

  //console.log(s2, s2ToCheckOff)
  return true;
}


/**
 * at first glance is O(n).
 * However, the two calls of the .sort() have cost
 * sorting is typically either O(nˆ2) or O(nlog n)
 * @param {*} s1 
 * @param {*} s2 
 */
const anagramSortAndCompare = (s1, s2) => {
  if (s1.length !== s2.length) return false;

  const sortedS1 = s1.split('').sort();
  const sortedS2 = s2.split('').sort();

  console.log(sortedS1, sortedS2);

  for (let i = 0; i < sortedS1.length; i++) {
    if (sortedS1[i] !== sortedS2[i]) return false;
  }

  return true;
}

const getLetterPosition = (letter) => {
  return letter.charCodeAt() - 'a'.charCodeAt();
}

/**
 * Here we have T(n) = 2n + 26 steps. So we have
 * O(n) We have found a linear order.
 * But this algorithm sacrificed space in order to gain time.
 * @param {*} s1 
 * @param {*} s2 
 */
const anagramCountCompare = (s1, s2) => {
  const alphabetTotal = 26;
  const s1LetterCounts = new Array(alphabetTotal).fill(0);
  const s2LetterCounts = new Array(alphabetTotal).fill(0);

  for (let i = 0; i < s1.length; i++) {
    const letterPosition = getLetterPosition(s1[i]);
    s1LetterCounts[letterPosition]++;
  }

  for (let i = 0; i < s2.length; i++) {
    const letterPosition = getLetterPosition(s2[i]);
    s2LetterCounts[letterPosition]++;
  }

  for (let i = 0; i < s1LetterCounts.length; i++) {
    if (s1LetterCounts[i] !== s2LetterCounts[i]) {
      return false;
    }
  }

  return true;
}

export {
  getLast,
  anaGramCheckOff,
  anagramSortAndCompare,
  anagramCountCompare
}
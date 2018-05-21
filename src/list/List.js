// sum all numbers
// no recurion
function listSum(numList) {
    let theSum = 0;
    for(let i = 0; i < numList.length; i++) {
        theSum += numList[i];
    }
    return theSum;
}

console.log(listSum([1,3,4,5,8]));

function listSum2(numList, n) {
    if (n <= 0) {
        return 0;
    } else {
        return (numList.shift() + listSum2(numList, numList.length));        
    }
}

const myAr = [1,3,4,5,8];
console.log(listSum2(myAr, myAr.length));
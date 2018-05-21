// HashTable
const hash = (string, max) => {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  }
  
  
  const HashTable = function() {
    let storage = [];
    const storageLimit = 10;
    
    this.print = () => {
      console.log(storage);
    }
    
    this.add = (key, value) => {
      let index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [[key, value]];
      } else {
        let inserted = false;
        for (let i = 0; i < storage[index].length; i++) {                         
          if(storage[index][i][0] === key) {          
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }    
    }
    
    this.remove = (key) => {
      let index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    }
    
    this.lookup = (key) => {
      let index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (let i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    }
    
  }
  
  const hashTable = new HashTable();
  hashTable.add('joel', '98812');
  hashTable.add('day', '3636');
  hashTable.add('test', '3636');
  hashTable.add('lola', '3639');
  // hashTable.add('day', '10');
  hashTable.print()
  // hashTable.remove('joel');
  // // hashTable.remove('jloe');
  // hashTable.print()
  console.log(hashTable.lookup('day'));
  // hashTable.print()
  // //console.log(hashTable.print())
  // //console.log(hash('joel', 10));

  
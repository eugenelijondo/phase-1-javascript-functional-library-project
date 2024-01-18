// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (const key in collection) {
        if (collection.hasOwnProperty(key)) {
          result.push(callback(collection[key], key));
        }
      }
    }
    return result;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = collection[0];
      startIdx = 1;
    }
  
    for (let i = startIdx; i < collection.length; i++) {
      acc = callback(acc, collection[i], collection);
    }
  
    return acc;
  }
  
  // Example usage
  const numbersArray = [1, 2, 3];
  const numbersObject = { one: 1, two: 2, three: 3 };
  
  myEach(numbersArray, (num) => console.log(num));
  // Output: 1, 2, 3
  
  const mappedArray = myMap(numbersArray, (num) => num * 2);
  // Output: [2, 4, 6]
  
  const sum = myReduce(numbersArray, (acc, num) => acc + num, 0);
  // Output: 6
  
  const firstValue = myReduce(numbersObject, (acc, num) => acc + num);
  // Output: 6
  

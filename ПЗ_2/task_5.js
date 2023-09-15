function removeObj(arrayOfObj, keyName, value) {

    const filteredArray = arrayOfObj.filter((obj) => obj[keyName] !== value);
  
    console.log(filteredArray);
  }
  
  const arr = [{ age: 1 }, { age: 2 }, { age: 2 }, { year: 2 }];
  removeObj(arr, "age", 2); // Виведе [ { age: 1 }, { year: 2 } ]
  removeObj(arr, "year", 2); // Виведе [ { age: 1 }, { age: 2 }, { age: 2 } ]
  
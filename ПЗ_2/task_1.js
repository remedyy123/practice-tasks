function unicFn(initialArray) {

    const uniqueArray = [];

  for (let i = 0; i < initialArray.length; i++) {
    const currentValue = initialArray[i];

    if (!uniqueArray.includes(currentValue)) {
      uniqueArray.push(currentValue);
    }
  }


  console.log(uniqueArray);
}

unicFn([2, 3, 1, 3, 3, 7]); // Виведе [2, 3, 1, 7]

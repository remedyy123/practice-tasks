function filterArray(initialArray) {

    const filteredArray = initialArray.filter((element) => typeof element === "string");
  
    console.log(filteredArray);
  }
  
  filterArray([2, "string", 3, , , "test"]); // Виведе ["string", "test"]
  
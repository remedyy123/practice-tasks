function findUser(initialObject) {
    const resultArray = [];
  
    for (const [name, userInfo] of Object.entries(initialObject)) {

        if (userInfo.city === "London" && userInfo.age > 18) {
        resultArray.push(name);
      }
    }
  
    console.log(resultArray);
  }
  
  const users = {
    Max: { age: 23, city: "London" },
    Mike: { age: 20, city: "NY" },
  };
  findUser(users); // Виведе ["Max"]
  
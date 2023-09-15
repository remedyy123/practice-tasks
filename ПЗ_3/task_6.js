const Person = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
      const fullName = this.firstName + ' ' + this.lastName;
      return fullName;
    }
  };
  
  const testArgs = ['sushi', 'hiking'];
  
  let logPersonNameAndInterests = function (...interests) {
    const fullName = Person.getFullName();
    const interestsList = interests.join(', ');
    console.log(`${fullName} loves: ${interestsList}`);
  };
  
  logPersonNameAndInterests.apply(Person, testArgs); // Виведе 'John Doe loves: sushi, hiking'
  
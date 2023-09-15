function isEvenArray(initialArray) {

    const allEven = initialArray.every((number) => number % 2 === 0);
  
    if (allEven) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
  
  isEvenArray([1, 2, 3, 9]); // Виведе "NO"
  isEvenArray([2, 4, 6]); // Виведе "YES"
  
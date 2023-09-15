function calculateWordsInString(string) {

    const wordsArray = string.split(" ");
  
    const filteredArray = wordsArray.filter((word) => word.trim() !== "");
  
    console.log(filteredArray.length);
  }
  
  calculateWordsInString("Easy string for count"); // 4
  calculateWordsInString("Easy"); // 1
  calculateWordsInString("Some string with a triple   space"); // 6
  calculateWordsInString("Some?  string, with a triple   space"); // 6
  
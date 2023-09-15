// Змінна в глобальній області видимості
let globalVar = "I'm a global variable.";

// Функція, яка виводить змінну в консоль
function printGlobalVar() {
  console.log(globalVar);
}

printGlobalVar(); // Виведе "I'm a global variable."


// Функція зі змінною всередині функції
function functionScope() {
  let functionVar = "I'm a variable inside a function.";

  console.log(functionVar);
}

// Виклик функції
functionScope(); // Виведе "I'm a variable inside a function."

console.log(functionVar);

// Функція з блоком і змінною всередині блоку
function blockScope() {
  {
    let blockVar = "I'm a variable inside a block.";
    console.log(blockVar); // Виведе "I'm a variable inside a block."
  }


}

// Виклик функції
blockScope();

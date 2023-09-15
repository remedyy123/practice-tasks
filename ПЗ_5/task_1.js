// Функція конструктор для Calculator
function Calculator() {}

Calculator.prototype.sum = function(a, b) {
  return a + b;
};

Calculator.prototype.subtract = function(a, b) {
  return a - b;
};

// Функція конструктор для AdvancedCalculator, яка успадковує властивості та методи від Calculator
function AdvancedCalculator() {}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);

// Встановлення правильного конструктора для AdvancedCalculator
AdvancedCalculator.prototype.constructor = AdvancedCalculator;

AdvancedCalculator.prototype.multiply = function(a, b) {
  return a * b;
};

AdvancedCalculator.prototype.divide = function(a, b) {
  if (b === 0) {
    throw new Error("Ділення на нуль недопустиме.");
  }
  return a / b;
};

const calc = new Calculator();
console.log(calc.sum(5, 3)); // Виведе: 8
console.log(calc.subtract(5, 3)); // Виведе: 2

const advCalc = new AdvancedCalculator();
console.log(advCalc.sum(5, 3)); // Виведе: 8 
console.log(advCalc.subtract(5, 3)); // Виведе: 2 
console.log(advCalc.multiply(5, 3)); // Виведе: 15
console.log(advCalc.divide(6, 2)); // Виведе: 3

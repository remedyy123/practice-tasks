function isString(callback, value) {
  if (typeof value === 'string' && typeof callback === 'function') {
    callback(value);
  } else {
    console.error('Помилка: передане значення не є стрічкою або колбек не є функцією.');
  }
}

function printString(str) {
  console.log('Передана стрічка:', str);
}

isString(printString, 'Привіт, це стрічка!'); 
isString(printString, 123); 
isString('Це не функція', 'Просто стрічка'); 

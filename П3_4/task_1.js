const arr = ["CusTom", "Web", "aNd", "MoBile", "PlaTfoRms"];

const compose = (...funcs) => (data) =>
  funcs.reduceRight((acc, func) => func(acc), data);

const modifyArray = (modifyCondition) => (data) => {
  return {
    value: data.map((item) => modifyCondition(item)),
  };
};

const allToLower = (str) => str.toLowerCase();

const capitalizeAllFirst = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const allToLowerComposed = compose(
  (data) => `Result: ${data.value.join(" - ")} length: ${data.value.join(" - ").length}`,
  modifyArray(allToLower)
);

const capitalizeAllFirstComposed = compose(
  (data) => `Result: ${data.value.join("-")} length: ${data.value.join("-").length}`,
  modifyArray(capitalizeAllFirst)
);

console.log(capitalizeAllFirstComposed(arr)); // Виведе 'Result: Custom-Web-And-Mobile-Platforms length: 31'
console.log(allToLowerComposed(arr)); // Виведе 'Result: custom - web - and - mobile - platforms length: 39'

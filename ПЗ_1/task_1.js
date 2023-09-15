function printPowsOf2(number) {

    if (typeof number !== "number" || isNaN(number)) {
    console.log("incorrect type");
    return;
  }

  let power = 1;
  let result = [];
  while (Math.pow(2, power) <= number) {
    result.push(Math.pow(2, power));
    power++;
  }

  console.log(result.join(", "));
}

printPowsOf2("302"); 
printPowsOf2(null); 
printPowsOf2(128); 
printPowsOf2(60);

let convert = (bytes) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2) + " Mb";
  };
  
  console.log(convert.call(null, 10000)); // Виведе "0.01 Mb"
  console.log(convert.call(null, 5242880)); // Виведе "5.00 Mb"
  
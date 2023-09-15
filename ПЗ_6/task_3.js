function timer(seconds) {
    let remainingSeconds = seconds;
  
    const interval = setInterval(() => {
      console.log(`Timer: ${remainingSeconds}`);
      remainingSeconds--;
  
      if (remainingSeconds < 0) {
        clearInterval(interval);
      }
    }, 1000);
  }
  
  timer(10);
  
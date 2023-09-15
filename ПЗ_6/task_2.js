function clock() {
    setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString();
      console.log(currentTime);
    }, 1000); 
  }
  
  clock();
  
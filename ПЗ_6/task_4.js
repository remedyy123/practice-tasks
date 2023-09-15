class AutoNullify {
    constructor(name) {
      this.name = name;
      this.nullifyTimer = setTimeout(() => {
        this.name = null;
        console.log('Поле name занулено автоматично.');
      }, 5000);
    }
  
    cancelNullify() {
      clearTimeout(this.nullifyTimer);
      console.log('Занулення поля name скасовано.');
    }
  }
  
  const obj = new AutoNullify('Example');
  console.log(obj.name); // Виведе "Example"
  
  setTimeout(() => {
    console.log(obj.name); // Виведе "null"
  }, 6000);
  
  obj.cancelNullify();
  console.log(obj.name); // Виведе "Example" (не занулено)
  
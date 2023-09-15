function generateId() {
    return "_" + Math.random().toString(36).substr(2, 9);
  }
  
  class TodoItem {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this._checked = false;
    }
  
    get checked() {
      return this._checked;
    }
  
    set checked(value) {
      if (typeof value !== 'boolean') {
        throw new Error('Поле checked повинно мати значення true або false.');
      }
      this._checked = value;
    }
  }
  
  class TodoList {
    constructor(name) {
      this.id = generateId();
      this.name = name;
      this.items = [];
    }
  
    addItem(item) {
      if (!(item instanceof TodoItem)) {
        throw new Error('Параметр item повинен бути об\'єктом класу TodoItem.');
      }
      this.items.push(item);
    }
  
    removeItemById(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    getItemById(id) {
      return this.items.find(item => item.id === id);
    }
  }
  
  const todoList = new TodoList('Моя TodoList');
  
  const item1 = new TodoItem('Прибрати кімнату');
  const item2 = new TodoItem('Купити продукти');
  const item3 = new TodoItem('Подивитись фільм');
  const item4 = new TodoItem('Зробити дз');
  
  todoList.addItem(item1);
  todoList.addItem(item2);
  todoList.addItem(item3);
  todoList.addItem(item4);
  
  console.log(todoList);
  
  item2.checked = true;
  
  console.log(todoList);
  
  todoList.removeItemById(item1.id);
  todoList.removeItemById(item3.id);
  
  console.log(todoList);
  
class Menu {
  constructor(id, className, items){
    this.id = id;
    this.className = className;
    this.items = items;
  }
  render(){
    let result = `<ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      // Я здесь добавил условие ИЛИ
        if (this.items[i] instanceof MenuItem || this.items[i] instanceof SubMenu){
            result += this.items[i].render();
        }
    }
    result += `</ul>`;
    return result;
    }
  remove() {
    return document.getElementById(this.id).remove()
  }
}


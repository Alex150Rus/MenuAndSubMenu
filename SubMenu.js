class SubMenu extends Menu {
  constructor (id, className, items){
    super (id, className, items);
  }
  render(){
    let result = `<li><ul class="${this.className}" id="${this.id}">`;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] instanceof MenuItem){
        result += this.items[i].render();
      }

    }
    result += `</ul></li>`;
    return result;
  }
}
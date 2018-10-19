class Button {
  constructor(id, className, title){
    this.id = id;
    this.className = className;
    this.title = title;
  }
  render() {
    return `<button id="${this.id}" class="${this.className}">${this.title}</button>`
  }
}
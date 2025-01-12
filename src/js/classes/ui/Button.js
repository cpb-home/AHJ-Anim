export default class Button {
  static create(text, handle) {
    const btn = document.createElement('button');
    btn.className = 'widgetBtn';
    btn.textContent = text;
    btn.type = 'button';
    btn.addEventListener('click', (e) => handle(e));

    return btn;
  }
}
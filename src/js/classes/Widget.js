import Button from "./ui/Button";

export default class Widget {
  static init(title, text) {
    const widget = Widget.createCont(title, text);
    return widget;
  }

  static createCont(title, text) {
    const cont = document.createElement('div');
    cont.className = 'widgetCont';
    cont.dataset.active = 'false';

    const btnCont = this.createBtnCont(title);
    cont.append(btnCont);

    const bodyCont = this.createBodyCont(text);
    cont.append(bodyCont);

    return cont;
  }

  static createBtnCont(title) {
    const btnCont = document.createElement('div');
    btnCont.className = 'widgetBtnCont';

    const handle = (e) => {
      const parent = btnCont.closest('.widgetCont');
      const bodyCont = parent.querySelector('.widgetBodyCont');

      if (bodyCont) {
        if (parent.dataset.active === 'false') {
          const allWidgets = document.querySelectorAll('.widgetBodyCont');

          if (allWidgets.length > 0) {
            allWidgets.forEach(e => {
              const eParent = e.closest('.widgetCont');
              
              if (eParent.dataset.active === 'true') {
                e.classList.remove('widgetBodyContOn');
                e.classList.add('widgetBodyContOff');
                eParent.dataset.active = 'false';
              }
            });
          }

          if (bodyCont.classList.contains('widgetBodyContOff')) {
            bodyCont.classList.remove('widgetBodyContOff');
          }
          bodyCont.classList.add('widgetBodyContOn');
          parent.dataset.active = 'true';
        } else if (parent.dataset.active === 'true') {
          bodyCont.classList.remove('widgetBodyContOn');
          bodyCont.classList.add('widgetBodyContOff');
          parent.dataset.active = 'false';
        }
      }
    };

    const btn = Button.create(title, handle);
    btnCont.append(btn);

    return btnCont;
  }

  static createBodyCont(text) {
    const bodyCont = document.createElement('div');
    bodyCont.classList = 'widgetBodyCont';

    const body = document.createElement('p');
    body.className = 'widgetBody';
    body.textContent = text;

    bodyCont.append(body);
    return bodyCont;
  }
}
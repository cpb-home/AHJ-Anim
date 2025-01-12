import Widget from './Widget';

export default class Page {
  constructor(container) {
    this.container = container;
  }

  async init() {
    const widget1 = Widget.init('Виджет 1', 'Описание виджета 1 на несколько слов');
    const widget2 = Widget.init('Виджет 2', 'Описание виджета 2 на чуть больше, чем несколько слов в виджете 1');
    const widget3 = Widget.init('Виджет 3', 'И это уже самое большое описание виджета 3, которое больше обоих описаний: и виджета 1, и виджета 2. И вообще, кажется, это описание получается длиной в несолько строк, в зависимости от ширины экрана или окна. Но, чтобы точно быть в этом уверенным, добалю-ка я ещё немного бестолкового текста. И ещё немного бестолкового текста.');


    this.container.append(widget1);
    this.container.append(widget2);
    this.container.append(widget3);
  }
}
import {inject} from 'aurelia-framework';

@inject(Element)
export class TemperatureColorCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue, oldValue) {
    if (newValue > 80) {
      this.element.style.color = 'red';
    } else if (newValue < 60) {
      this.element.style.color = 'deepskyblue';
    } else {
      this.element.style.color = 'lightgray';
    }
  }
}


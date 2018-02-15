import {inject} from 'aurelia-framework';

@inject(Element)
export class TemperatureColorCustomAttribute {
  constructor(element) {
    this.element = element;
  }

  valueChanged(newValue, oldValue) {
    if (newValue > 80) {
      this.element.style.backgroundColor = 'red';
    } else if (newValue < 60) {
      this.element.style.backgroundColor = 'deepskyblue';
    } else {
      this.element.style.backgroundColor = 'lightgray';
    }
  }
}


import { bindable } from 'aurelia-framework';

export class Hero {
  constructor() {
    this.heroStyle = 'primary';
  }

  @bindable heroStyle;
  @bindable title;
  @bindable subtitle;

  get heroClass() {
    return `hero is-${this.heroStyle}`;
  }
}

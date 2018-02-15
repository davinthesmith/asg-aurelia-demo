import {bindable} from 'aurelia-framework';

export class NavBar {
  @bindable title;
  @bindable router;

  showMenu(e) {
    this.navMenu.classList.toggle('is-active');
    e.target.classList.toggle('is-active');
  }
}


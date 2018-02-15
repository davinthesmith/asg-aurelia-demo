import { inject } from 'aurelia-framework';
import { GlobalStore } from 'global-store';

@inject(GlobalStore)
export class InputExample {
  constructor(globalStore) {
    this.globalStore = globalStore;
    this.thing = 'World';
  }

  attached() {
    this.globalStore.title = 'Home';
    this.globalStore.subtitle = 'Hello World: An soft introduction to binding';
    this.globalStore.heroStyle = 'primary';
  }
}

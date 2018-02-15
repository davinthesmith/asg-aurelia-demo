import { inject } from 'aurelia-framework';
import { GlobalStore } from 'global-store';

@inject(GlobalStore)
export class ListExample {
  constructor(globalStore) {
    this.globalStore = globalStore;
    this.things = [];
  }

  addThing() {
    this.things.push(this.thingInput.value);
    this.thingInput.value = '';
  }

  clearList() {
    this.things = [];
  }

  attached() {
    this.globalStore.title = 'List';
    this.globalStore.subtitle = 'Example using repeaters';
    this.globalStore.heroStyle = 'info';
  }
}

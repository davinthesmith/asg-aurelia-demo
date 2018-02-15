import { inject } from 'aurelia-framework';
import { GlobalStore } from 'global-store';

@inject(GlobalStore)
export class LedExample {
  constructor(globalStore) {
    this.globalStore = globalStore;
    this.currentTemp = 70;
  }

  attached() {
    this.globalStore.title = 'Temperature Example';
    this.globalStore.subtitle = 'Uses a custom-attribute for color and a couple value-converters for converting temperature';
    this.globalStore.heroStyle = 'warning';
  }
}

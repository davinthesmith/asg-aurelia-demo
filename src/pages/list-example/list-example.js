export class ListExample {
  things = [];

  addThing() {
    this.things.push(this.thingInput.value);
    this.thingInput.value = '';
  }

  clearList() {
    this.things = [];
  }
}

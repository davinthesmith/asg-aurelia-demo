
export class GlobalStore {
  _title = '';

  get title() {
    return this._title;
  }

  set title(newValue) {
    this._title = newValue;
  }

  subtitle;
  heroStyle;
}

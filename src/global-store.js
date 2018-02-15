
export class GlobalStore {
  subtitle;
  heroStyle;

  _title = '';
  get title() {
    return this._title;
  }
  set title(newValue) {
    this._title = newValue;
  }

}

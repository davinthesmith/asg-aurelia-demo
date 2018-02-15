export class TemperatureValueConverter {
  toView(value, units) {
    switch (units) {
    case 'c':
    case 'C':
      return (value - 32) * (5 / 9);
    case 'f':
    case 'F':
      return value * (9 / 5) + 32;
    default:
      return value;
    }
  }
}

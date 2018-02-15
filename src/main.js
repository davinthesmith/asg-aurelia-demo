import { PLATFORM } from 'aurelia-pal';
import 'bulma/css/bulma.css';

export function configure(aurelia) {
  aurelia.use.standardConfiguration();

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

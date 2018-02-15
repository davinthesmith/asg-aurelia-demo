import {PLATFORM} from 'aurelia-pal';
import 'bulma/css/bulma.css';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}

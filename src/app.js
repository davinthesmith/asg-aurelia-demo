import { inject } from 'aurelia-framework';
import { PLATFORM } from 'aurelia-pal';
import { GlobalStore } from 'global-store';

@inject(GlobalStore)
export class App {
  constructor(globalStore) {
    this.globalStore = globalStore;
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'ASG Aurelia Demo';
    config.map([
      {
        route: ['', 'home'],
        name: 'home',
        moduleId: PLATFORM.moduleName('pages/input-example/input-example'),
        nav: true,
        title: 'Home'
      },
      {
        route: 'temperature-example',
        name: 'temperature-example',
        moduleId: PLATFORM.moduleName('pages/temperature-example/temperature-example'),
        nav: true,
        title: 'Temperature'
      },
      {
        route: 'list-example',
        name: 'list-example',
        moduleId: PLATFORM.moduleName('pages/list-example/list-example'),
        nav: true,
        title: 'List'
      },
      {
        route: 'wrapper-example',
        name: 'wrapper-example',
        moduleId: PLATFORM.moduleName('pages/wrapper-example/wrapper-example'),
        nav: true,
        title: 'Grid'
      }
    ]);
  }
}

import { PLATFORM } from 'aurelia-pal';

export class App {
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
      }
    ]);
  }
}

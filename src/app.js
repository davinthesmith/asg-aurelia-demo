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
      }
    ]);
  }
}

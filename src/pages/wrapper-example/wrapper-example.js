import { inject } from 'aurelia-framework';
import { GlobalStore } from 'global-store';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WrapperExampleService } from './wrapper-example-service';

@inject(EventAggregator, GlobalStore, WrapperExampleService)
export class WrapperExample {
  constructor(eventAggregator, globalStore, wrapperExampleService) {
    this.ea = eventAggregator;
    this.globalStore = globalStore;
    this.service = wrapperExampleService;
  }

  // Get data from Service
  getTableInfo() {
    this.gridColumns = this.service.getGridColumns();
    this.gridRows = this.service.getGridRows();
  }

  // Update variable with clicked cell value
  cellClicked(e) {
    this.clickedCell = e.value;
  }

// LIFECYCLE METHODS =-=-=-=-=-=-=-
  // update Hero Banner, subscribe to event, and get info from service
  attached() {
    this.globalStore.title = 'Wrapped Control Example';
    this.globalStore.subtitle = 'Wraps a third-party control and uses events to send data back to the parent';
    this.globalStore.heroStyle = 'danger';

    this.cellClickedSub = this.ea.subscribe('grid-cell-clicked', e => this.cellClicked(e));

    this.getTableInfo();
  }

  // dispose our event-listener
  detached() {
    this.cellClickedSub.dispose();
  }
}

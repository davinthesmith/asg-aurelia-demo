import { bindable, inject, TaskQueue } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import * as agGrid from 'ag-grid/dist/ag-grid.min';

@inject(EventAggregator, TaskQueue)
export class GridCustomElement {
  constructor(eventAggregator, taskQueue) {
    this.ea = eventAggregator;
    this.taskQueue = taskQueue;
  }

  @bindable columns;
  @bindable rows;

  rowsChanged(newValue, oldValue) {
    // if undefined, skip grid
    if (!newValue) return;
    // if grid is not on page, requeue task
    if (!this.gridDiv) {
      this.taskQueue.queueMicroTask(() => this.rowsChanged(newValue));
      return;
    }
    // if grid exists destroy it
    if (this.gridOptions) this.gridOptions.api.destroy();
    // generate grid
    this.updateGrid();
  }

  updateGrid() {
    this.gridOptions = {
      rowData: this.rows,
      columnDefs: this.columns,
      enableSorting: true,
      enableFilter: true,
      onCellClicked: event => this.onCellClicked(event),
      onGridReady: params => params.api.sizeColumnsToFit()
    };

    let grid = new agGrid.Grid(this.gridDiv, this.gridOptions);
    return grid;
  }

  onCellClicked(e) {
    this.ea.publish('grid-cell-clicked', e);
  }
}

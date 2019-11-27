import { Component, Input, OnInit, NgModule } from '@angular/core';
import { NbProgressBarModule } from '@nebular/theme';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <p>
        <nb-progress-bar [value]="renderValue" status="primary" [displayValue]="true"></nb-progress-bar>
    </p>
  `,
})

@NgModule({
    imports: [
      NbProgressBarModule,
    ],
  })

export class CustomRenderComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}

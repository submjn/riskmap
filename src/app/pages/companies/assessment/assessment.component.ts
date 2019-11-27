import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-assessment',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  public name: string = 'identify';
  constructor() { }

  ngOnInit() {
  }

  onChangeTab(event) {
    // tslint:disable-next-line: no-console
    // console.log(event.tabTitle);
    this.name = event.tabTitle;
  }
}

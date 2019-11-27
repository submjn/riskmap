import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nb-card size="small">
      <nb-list>
        <nb-list-item *ngFor="let assessment of assessments">
        {{assessment.code}}: {{assessment.title}}
        <button nbButton status="{{getBtnType(assessment.riskValue)}}">
            {{getRiskLabel(assessment.riskValue)}}
        </button>
        </nb-list-item>
      </nb-list>
    </nb-card>
  `,
  styles: [`
    nb-list-item {
        position: relative;
        padding-right: 120px;
    }
    nb-list-item button {
        position: absolute;
        top: 7px;
        right: 7px;
    }
  `],
})
export class ListComponent {
  assessments: { code: string, title: string, riskValue: number }[] = [
      { code: 'PR.AC-3', title: 'Remote access is managed', riskValue: 5 },
      { code: 'PR.AT-1', title: 'All users are informed and trained', riskValue: 5 },
      {
        code: 'PR.AC-4',
        // tslint:disable-next-line: max-line-length
        title: 'Access permissions are managed, incorporating the principles of least privilege and separation of duties',
        riskValue: 4,
      },
      { code: 'RS.RP-1', title: 'Response plan is executed during or after an event', riskValue: 4 },
      { code: 'ID.RA-3', title: 'Threats, both internal and external, are identified and documented', riskValue: 3 },
      { code: 'PR.AC-2', title: 'Physical access to assets is managed and protected', riskValue: 3 },
      { code: 'RC.RP-1', title: 'Recovery plan is executed during or after an event', riskValue: 2 },
      { code: 'DE.AE-2', title: 'Detected events are analyzed to understand attack targets and methods', riskValue: 2 },
      { code: 'DE.CM-1', title: 'The network is monitored to detect potential cybersecurity events', riskValue: 1 },
      { code: 'ID.RA-1', title: 'Asset vulnerabilites are identified and documented', riskValue: 0 },
      {
        code: 'DE.CM-3',
        title: 'Personal activity is monitored to detect potential cybersecurity events',
        riskValue: 0,
      },
  ];

  getBtnType(val: number) {
      let alertType: string = '';
      if (val === 5) alertType = 'danger';
      else if (val === 4) alertType = 'warning';
      else if (val === 3) alertType = 'success';
      else if (val === 5) alertType = 'primary';
      else alertType = 'info';
      return alertType;
  }

  getRiskLabel(val: number) {
    let riskLabel: string = '';
    if (val === 5) riskLabel = 'Critical';
    else if (val === 4) riskLabel = 'High';
    else if (val === 3) riskLabel = 'Medium';
    else if (val === 2) riskLabel = 'Low';
    else riskLabel = 'Info';
    return riskLabel;
  }
}

import { Component, TemplateRef, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Company } from '../../../models/Company';
import { CompaniesService } from '../../../services/companies/companies.service';

@Component({
  selector: 'ngx-confirm-dialog',
  template: `
    <ng-template #dialog let-data let-ref="dialogRef">
      <nb-card>
        <nb-card-header>Confirm Delete</nb-card-header>
        <nb-card-body>
          <h5>Do you want to delete this company?</h5>
          <h6>
            {{ data }}
          </h6>
        </nb-card-body>
        <nb-card-footer>
          <button class="btn btn-danger" (click)="delete(company)">
            Confirm
          </button>
          <button class="btn btn-info" (click)="ref.close()">Cancel</button>
        </nb-card-footer>
      </nb-card>
    </ng-template>
    <button class="btn btn-danger" (click)="open(dialog)">Delete</button>
  `,
  styles: [''],
})
export class ConfirmDialogComponent {
  @Input() company: Company;
  dialogref: any;
  constructor(
    private companies: CompaniesService,
    private dialogService: NbDialogService,
  ) {}

  open(dialog: TemplateRef<any>) {
    this.dialogref = this.dialogService.open(dialog, {
      context: this.company.name,
    });
  }

  delete(company: Company) {
    this.companies.delete(company.id);
    this.dialogref.close();
  }
}

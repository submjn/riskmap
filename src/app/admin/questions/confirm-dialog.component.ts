import { Component, TemplateRef, Input } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { Question } from '../../../models/Question';
import { QuestionsService } from '../../../services/questions/questions.service';

@Component({
  selector: 'ngx-confirm-dialog',
  template: `
    <ng-template #dialog let-data let-ref="dialogRef">
      <nb-card>
        <nb-card-header>Confirm Delete</nb-card-header>
        <nb-card-body>
          <h5>Do you want to delete this question?</h5>
          <h6>
            {{ data }}
          </h6>
        </nb-card-body>
        <nb-card-footer>
          <button class="btn btn-danger" (click)="delete(question)">
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
  @Input() question: Question;
  dialogref: any;
  constructor(
    private questions: QuestionsService,
    private dialogService: NbDialogService,
  ) {}

  open(dialog: TemplateRef<any>) {
    this.dialogref = this.dialogService.open(dialog, {
      context: this.question.questionText,
    });
  }

  delete(question: Question) {
    this.questions.delete(question.id);
    this.dialogref.close();
  }
}

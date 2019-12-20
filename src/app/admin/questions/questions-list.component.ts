import { Question } from '../../../models/Question';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionsService } from '../../../services/questions/questions.service';

@Component({
    selector: 'ngx-questions-list',
    templateUrl: './questions-list.component.html',
    styles: [`
        .question-list-item { padding: 1rem 0; }
        .category-badge { left: 16px!important; top: -16px!important; }
        .question-title { margin-top: 8px; }
        .btn-category {
            font-size: 0.8rem;
            margin-right: 6px;
            margin-bottom: 6px;
            padding: 0 4px; color:
            white; font-weight: bold;
        }
    `],
})
export class QuestionsListComponent implements OnInit {
    loading$: Observable<boolean>;
    questions$: Observable<Question[]>;
    noResults$: Observable<boolean>;
    showHelpText: boolean = false;

    constructor(
        private questions: QuestionsService,
    ) {}

    ngOnInit() {
        this.loading$ = this.questions.loading$;
        this.noResults$ = this.questions.noResults$;
        this.questions$ = this.questions.questions$;
    }

    diaplayHelpText() {
        this.showHelpText = true;
    }
}

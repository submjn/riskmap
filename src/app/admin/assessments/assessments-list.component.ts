import { Assessment } from '../../../models/Assessment';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AssessmentsService } from '../../../services/assessments/assessments.service';

@Component({
    selector: 'ngx-assessments-list',
    templateUrl: './assessments-list.component.html',
})
export class AssessmentsListComponent implements OnInit {
    loading$: Observable<boolean>;
    assessments$: Observable<Assessment[]>;
    noResults$: Observable<boolean>;

    constructor(
        private assessments: AssessmentsService
    ) {}

    ngOnInit() {
        this.loading$ = this.assessments.loading$;
        this.noResults$ = this.assessments.noResults$;
        this.assessments$ = this.assessments.assessments$;
    }

    delete(assessment: Assessment) {
        this.assessments.delete(assessment.id);
    }

}